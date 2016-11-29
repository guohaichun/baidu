$(function () {
        var num=0;
        var falg=true;
        var h=$(window).height();

        touch.on("body","swipeup",".box",function () {

            if (!falg){
                document.title=num;
                return ;
            }
            num++;
            if (num==$("section").length){
                num=$("section").length-1;
                return ;
            }
            falg=false;
            $(".box").css({
                marginTop:-num*h
            })

        })
        touch.on("body","swipedown",".box",function () {

            if (!falg){
                document.title=num;
                return ;
            }
            num--;
            if (num==-1){
                num=0;
                return ;
            }
            falg=false;
            $(".box").css({
                marginTop:-num*h
            });
        });
        $(".box")[0].addEventListener("webkitTransitionEnd",function () {
            falg=true;
        })
});