//倒计时
 setInterval(function () {
    var future_time = new Date("2019-10-18 19:00:00");
    var future_time_ms =future_time.getTime();

    var cur_time = new Date();
    var cur_time_ms = cur_time.getTime();
    var dif = future_time_ms - cur_time_ms;

    var seconds = parseInt(dif/1000%60)<10?"0"+parseInt(dif/1000%60):parseInt(dif/1000%60);
    var minutes = parseInt(dif/1000/60%60)<10?"0"+parseInt(dif/1000/60%60):parseInt(dif/1000/60%60);
    var houses = parseInt(dif/1000/60/60/24)<10?"0"+parseInt(dif/1000/60/60%24):parseInt(dif/1000/60/60/24);

    $("#left>span:eq(0)").html(houses);
    $("#left>span:eq(1)").html(minutes);
    $("#left>span:eq(2)").html(seconds);

},1000);

//轮播  右边按钮
var index = 0;
$("#lll-lunbo>div>span:eq(1)").click(function () {
    index++;
    if (index >= 3){
        index = 0;
        $("#lll-lunbo>ul>li").eq(index).animate({left:"0px"},500);
        $("#lll-lunbo>ul>li").eq(2).animate({left:"-800px"},500,function () {
            $(this).css("left","800px");
        });
        return false;
    }
    $("#lll-lunbo>ul>li").eq(index).animate({left:"0px"},500);
    $("#lll-lunbo>ul>li").eq(index-1).animate({left:"-800px"},500,function () {
        $(this).css("left","800px");
    });
})

//左边按钮
$("#lll-lunbo>div>span:eq(0)").click(function(){
    index--;
    //如果当前li为第一组图片，上一组图片就是第三组图片
    if(index <= -1){
        index = 2;
        //第三组图片先移动到最左边left=-800px位置，然后在让改组图片显示
        $("#lll-lunbo>ul>li").eq(index).css("left","-800px").animate({left:"0px"},500);
        //让第一组图片移走，移动到left:800px;位置即可
        $("#lll-lunbo>ul>li").eq(0).animate({left:"800px"},500);
        return false;
    }
    //让需要显示的图片先移动到最左边left=-800px位置，然后在让改组图片显示
    $("#lll-lunbo>ul>li").eq(index).css("left","-800px").animate({left:"0px"},500);//移入
    //让上一组图片移走，移动到left:800px;位置即可
    $("#lll-lunbo>ul>li").eq(index+1).animate({left:"800px"},500);//移走

})



//右边轮播   封装成插件
$.fn.right = function () {
    var index = 0;
    this.mouseover(function () {
        index = $(this).index();
        $(this).css('background','red').siblings().css("background",'#0000FF');
        if (index == 0){
            $("#right>ul>li").eq(0).css("left","0").animate({left:"0px"},1000);
            $("#right>ul>li").eq(1).animate({left:"200px"},1000);
        }else if (index == 1){
            $("#right>ul>li").eq(0).animate({left:"-200px"},1000,function () {
                $(this).css("left","200px");
            });
            $("#right>ul>li").eq(1).animate({left:"0px"},500);
        }
    })
}
$("#right>ol>li").right();
