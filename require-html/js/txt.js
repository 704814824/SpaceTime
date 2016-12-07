/**
 * Created by Administrator on 2016/12/7 0007.
 */
define(["test!../indext-a.html","test!../index-b.html","test!../index-c.html"],function(html){

    $("#1").click(function(){
        $('#target').html(require("test!../indext-a.html"));
    });
    $("#2").click(function(){
        $('#target').html(require("test!../index-b.html"));
    });
    $("#3").click(function(){
        $('#target').html(require("test!../index-c.html"));
    })

});
