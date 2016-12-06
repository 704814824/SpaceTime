/**
 * Created by Administrator on 2016/11/28 0028.
 */

$(function(){
    /*header�е�input��focus�¼�*/

    $("#re_content_focus").click(function(e){
        e.preventDefault();
        e.stopPropagation();//��ֹð��
        $("#re_content").css({borderColor:"#4791ff transparent #4791ff #4791ff"});
        $("#re_ul").css("display","block");
        console.log("1")
    });
    $(document).click(function(){
        $("#re_content").css({borderColor:" #999 transparent #b3b3b3 #999"});
        $("#re_ul").css("display","none");
        console.log("2")
    });

    /*�������¼�*/
    $(window).scroll(function(){
        $(window).scrollTop() > 150 ? $("#header").addClass("header_scroll") :$("#header").removeClass("header_scroll")
    })

    /*header_right ������õ������˵��¼�*/
    var mouseOverEnums = {SHOW : 0};
    $("#nav_set").hover(function(){
        mouseOverEnums.SHOW = 0;
        $("#header_right_a_set").show(1);
    },function(){
        setTimeout(function(){
            if( mouseOverEnums.SHOW == 0){
                $("#header_right_a_set").hide();
            }
        },100);
    });
    $("#header_right_a_set").hover(function(){
        $("#header_right_a_set").show(1);
        mouseOverEnums.SHOW =1;
        console.log(mouseOverEnums.SHOW)
    },function(){
        setTimeout(function(){
            console.log(1+"ss")
            $("#header_right_a_set").delay(1000).hide();
        },100);
        mouseOverEnums.SHOW = 0;
    });

    /*��ͼҳ�����ʾ�������¼�*/
    $("#soutu-btn").click(function(){
        $("#soutu-layer").show();
    });
    $("#soutu-close").click(function(){
        $("#soutu-layer").hide();
        $("#soutu-url-error").hide();
    });
    $("#soutu_s_btn").click(function(){
        $("#soutu-url-error").show()
    });
    /*����������ķŴ���С*/
    window.onresize = function(){
        onResizeUpdata();
    }
    /*content_right_titleչ��������*/
    $("#cr_title").click(function(){
        carry("#cr_title_span","#cr_title_icon","#c_gap_hidden")
        //.c_gap_top_2和3hide
        $("#dom .c_gap_top_2 .c_span4").toggle();
        $("#dom .c_gap_top_3 .c_span4").toggle();
    });
    $("#cr_title_2").click(function(){
        carry("#cr_title_span_2","#cr_title_icon_2","#header_2");
    });
    /*head_nums����������ʾ*/
    $("#search_tool").click(function(){
        $("#head_nums").animate({top:"0px"},250);
    });
    $("#searchTool-up").click(function(){
        $("#head_nums").animate({top:"-40px"},250);
    });
    /*��ʼ��ҳ�����*/
    var gold = {
        init: function (){

        }
    };
    gold.init();

    function carry(span,i,dom){
        if($(span).html() == "展开" ){
            $(span).html("收起");
            $(i).addClass("cr_icon_carry");
            $(dom).show();
        }else{
            $(span).html("展开");
            $(i).removeClass("cr_icon_carry");
            $(dom).hide();
        }
    } /*content_right_title展开收起函数*/

});
