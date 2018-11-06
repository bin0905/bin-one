/**
 * Created by Bin on 2018/10/31.
 */

//header
{
    $("nav>ul>li").hover(function () {
        //$(".layer").hide();
        //$(this).find(".layer").show();
        $(this).find(".layer").slideDown(600);
        console.log($(this).find(".layer"));
    }, function () {
        //$(".layer").hide();
        $(this).find(".layer").slideUp(0);

    });
    $(".layer ul  li").hover(function () {
        $(this).addClass("hover");
        $(this).find(".right").css("display", "block")
    }, function () {
        $(this).removeClass("hover");
        $(this).find(".right").css("display", "none")

    });
}

$(".tab ul li").click(function () {
    $(".tab ul li img").hide().eq($(this).index()).show();
    $(".tab ul li span").removeClass("active").eq($(this).index()).addClass("active");
    //$(".m_con").hide();
    //$(".m_con").eq($(this).index()).show().siblings(".m_con").hide();
    //$(".m_con").hide().siblings().eq($(this).index()).show();

});
$(".huan").click(function () {
    $(".huan").removeClass("active");
    $(this).addClass("active");
    $(".m_b_con ul li p").removeClass("prev next");
    $(this).prev().addClass("prev");
    $(this).next().addClass("next");
    $(".huan_t").removeClass("active");
    $(this).nextAll(".huan_t").addClass("active")
    $(".jt").removeClass("active");
    $(this).nextAll(".jt").addClass("active")
});
$(".con_a_r").click(function(){
    //$(".con_a_con").slideUp();
    $(".con_a_con").removeClass("active");
    $(this).nextAll(".con_a_con").addClass("active");
    //$(this).nextAll(".con_a_con").slideDown();
    $(".con_a_r").removeClass("active");
    $(this).addClass("active");
});


//返回顶部
var timer=null;
var target = 0; //目标位置
var leader = 0; //显示区域自身的位置
$(".shang").click(function(){
    clearInterval(timer);
    timer=setInterval(function(){
        var step = (target-leader)/10;
        step = step>0?Math.ceil(step):Math.floor(step);
        leader = leader +step;
        window.scrollTo(0,leader);
        if(leader === 0){
            clearInterval(timer);
        }
    },25)
})