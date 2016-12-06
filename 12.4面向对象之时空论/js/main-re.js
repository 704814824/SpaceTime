/**
 * Created by Administrator on 2016/12/6 0006.
 */
/*require.config({

    // RequireJS 通过一个相对的路径 baseUrl来加载所有代码。baseUrl通常被设置成data-main属性指定脚本的同级目录。
    baseUrl: "js",

    // 第三方脚本模块的别名,jquery比libs/jquery-1.11.1.min.js简洁明了；
    paths: {

        "jquery": "jQuery"

    }

});*/
require(['object-re-left','object-re-right','jQuery'], function (contentLeft, contentRight ){

   /* contentRight调用*/
    var content_right_ejs = document.getElementById("content_right_ejs").innerHTML;
    contentRight.init(21);
    (function initContentRight(){
        for(var i = 0 ; i < contentRight.length; i++){
            var names = contentRight.cells[i];
            var htmlContentRight= ejs.render(content_right_ejs, { names: names});
            contentRight.cells[i][i].cengshu < 4 ?  $("#dom").append(htmlContentRight) : $("#dom_2").append(htmlContentRight)
        }
    }());

    /*contentLeft调用*/
    var content_left_ejs = document.getElementById("content_left_ejs").innerHTML;
    contentLeft.init(10);
    (function initContentLeft(){
        for(var i = 0 ; i < contentLeft.length; i++){
            var names = contentLeft.cells[i];
            var htmlContentRight= ejs.render(content_left_ejs, { names: names});
            $("#content_left").append(htmlContentRight)
        }
    }());

    /*JQ调用*/
    /*搜索区行为*/
    $("#soutu-btn").click(function(){
        $("#soutu-layer").show();
    });//搜索区搜图行为
    $("#soutu-close").click(function(){
        $("#soutu-layer").hide();
        $("#soutu-url-error").hide();
    });//搜索区搜图行为
    $("#soutu_s_btn").click(function(){
        $("#soutu-url-error").show()
    });//搜索区搜图行为
    $("#re_content_focus").click(function(e){
        e.preventDefault();
        e.stopPropagation();//阻止冒泡
        $("#re_content").css({borderColor:"#4791ff transparent #4791ff #4791ff"});
        $("#re_ul").show();
    });//搜索区show
    $(document).click(function(){
        $("#re_content").css({borderColor:" #999 transparent #b3b3b3 #999"});
        $("#re_ul").hide();
    });//搜索区hide

    $(window).scroll(function(){
        $(window).scrollTop() > 150 ? $("#header").addClass("header_scroll") :$("#header").removeClass("header_scroll")
    });//页面滚动show阴影

    /*header_right tip的显示和隐藏*/
    var mouseOverEnums = {SHOW : 0};
    $("#nav_set").hover(function(){
        mouseOverEnums.SHOW = 0;
        $("#header_right_a_set").show();
    },function(){
        setTimeout(function(){
            if( mouseOverEnums.SHOW == 0){
                $("#header_right_a_set").hide();
            }
        },100);
    });
    $("#header_right_a_set").hover(function(){
        $("#header_right_a_set").show();
        mouseOverEnums.SHOW =1;
    },function(){
        setTimeout(function(){
            $("#header_right_a_set").hide();
        },100);
        mouseOverEnums.SHOW = 0;
    });

    /*content_right_title show and hide*/
    $("#cr_title").click(function(){
        carry("#cr_title_span","#cr_title_icon");
        $("#dom .c_gap_top_2 .c_span4").toggle();
        $("#dom .c_gap_top_3 .c_span4").toggle();
    });
    $("#cr_title_2").click(function(){
        carry("#cr_title_span_2","#cr_title_icon_2");
        $("#dom_2 .c_gap_top_5 .c_span4").toggle();
    });
    function carry(span,i){
        if($(span).html() == "展开" ){
            $(span).html("收起");
            $(i).addClass("cr_icon_carry");
        }else{
            $(span).html("展开");
            $(i).removeClass("cr_icon_carry");
        }
    }

    /*content_left 搜索工具的animate*/
    $("#search_tool").click(function(){
        $("#head_nums").animate({top:"0px"},250);
    });
    $("#searchTool-up").click(function(){
        $("#head_nums").animate({top:"-40px"},250);
    });

});
