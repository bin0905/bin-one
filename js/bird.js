
//获取可视宽高 并修改样式
var sW=$(window).width();
var sH=$(window).height();
$("article").css({
    "height":sH+"px"
});
$(".content").css({
    "height":sH+"px"
});
$(".content_all").css({
    "height":sH*5+"px"
});
$(".box_a").css({
    "height":sH+"px"
});

//header效果
$("nav ul li").eq(5).siblings().click(function () {
    $(".d").removeClass("active");
    $(this).find(".d").addClass("active");
    page=$(this).index()+1;
    if(page==4||page==5){
        page=4
    }
    $(".content_all").css({
        "top":-page*screenH+"px"
    })
});

//welcome遮罩层动画效果
$(".welcome").slideDown(1000, "linear", function () {
    $(this).find(".cen_img").css({
        "margin-top": "0",
        "transition": "5s"
    });
    $(this).find(".cen_text").delay(3000).slideDown()
}).delay(7000).slideUp(1000);

$("header").hide();
$(".content").hide();

setTimeout(function(){
    $("header").show();
    $(".content").show();
},7000)
//概述界面横向滚动切换
var num = 0;
$(".m_t_right").click(function () {
    num++;
    if (num > 2) {
        num = 2;
    }
    $(".m_t_box").css({
        "left": -num * sW
    })
});
$(".m_t_left").click(function () {
    num--;
    if (num < 0) {
        num = 0;
    }
    $(".m_t_box").css({
        "left": -num * sW
    })
});

//翡翠掌云界面横向滚动切换
$(".model_four ul li").click(function () {
        $(".model_four ul li").removeClass("active");
        $(this).addClass("active");
    });
$(".model_four ul li").eq(0).click(function () {
        $(".m_four_move").css({
            "left": 0
        })
    });
$(".model_four ul li").eq(1).click(function () {
        $(".m_four_move").css({
            "left": "-920px"
        })
    });

//全屏滚动
var oScreenBanner=document.getElementsByClassName("content")[0];
var oAllScreen = document.getElementsByClassName("content_all")[0];
var arrScreen = oAllScreen.getElementsByTagName("article");
var screenW=sW,screenH=sH;
var page = 0;
var isRunning = false; // 定义一个状态isRunning
// 儅isRunning 為true  鼠標滾軸不管事
// 儅isRunning 為false  鼠標滾軸管事

//定义向上滚动的事件函数
function scrollUp() {
    if (!isRunning) {
        isRunning = true;
        // 設置定時器  儅1秒之後  滾軸繼續可以使用
        setTimeout(function () {
            isRunning = false;
        }, 1000);
        if (page > 0) {
            //page>0的时候  page-- 意味着放置所有小盒子的可以向上移动
            //--操作  并把相应的值赋给放置所有小盒子的top值
            page--;
            oAllScreen.style.top = -page * screenH + "px";
        }
    }
}

function scrollDown() {
    if (!isRunning) {
        isRunning = true;
        setTimeout(function () {
            isRunning = false;
        }, 1000);
        if (page < arrScreen.length - 1) {
            //page<小盒子的最大索引值的时候  page++ 意味着放置所有小盒子的可以向下移动
            //++操作  并把相应的值赋给放置所有小盒子的top值
            page++;
            oAllScreen.style.top = -page * screenH + "px";
        }
    }
}

$(".next_i").click(function(){
    page=1;
    $(".content_all").css({
        "top":-page*screenH+"px"

    })
});
//执行  解决兼容问题
// chrome   ie
addEvent(window, "mousewheel", mouseWheel);
// ff
addEvent(window, "DOMMouseScroll", mouseWheel);


// 定义滚轴事件函数  解决兼容问题

//wheelDelta是event的一个属性
//向上滚动时 是一个正值
//向下滚动时 是一个负值

//detail
//向上滚动时 是一个负值
//向下滚动时 是一个正值

//火狐   detail>0  下      detail<0  上
//谷歌   wheelDelta>0  上      wheelDelta<0  下//
function mouseWheel(ev) {
    var oEvent = window.event || ev;
    if (oEvent.detail) {
        if (oEvent.detail > 0) {
            scrollDown()
        } else {
            scrollUp()
        }
    } else if (oEvent.wheelDelta) {
        if (oEvent.wheelDelta > 0) {
            scrollUp()
        } else {
            scrollDown()
        }
    }
}

//事件监听  解决兼容性问题
function addEvent(ele, type, listener) {
    if (ele.addEventListener) {
        ele.addEventListener(type, listener);
    } else if (ele.attachEvent) {
        ele.attachEvent("on" + type, listener);
    } else {
        ele["on" + type] = listener;
    }
}