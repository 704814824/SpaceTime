/**
 * Created by Administrator on 2016/12/6 0006.
 */
requirejs.config({
    //默认情况下模块所在目录为js/lib
    //baseUrl: '',
    //当模块id前缀为app时，他便由js/app加载模块文件
    //这里设置的路径是相对与baseUrl的，不要包含.js
    map: {
        '*': {
            css: 'css.min'
        }
    },
    paths: {
        initGold: 'initGold',
        jquery : 'jquery-3.1.0.min',
        initJQ : "initJQ",
        test: "test"
       // csscontent:'../css/content'
    },
    shim: {
        'main-re': {
            //The underscore script dependency should be loaded before loading backbone.js
            deps: ['jquery-3.1.0.min','initGold',"initJQ"/*,'css!../css/main.css'*/,"test!../right.html"]
            // use the global 'Backbone' as the module name.
            //exports: 'Backbone'
        },
        "txt" :{
            deps: ['jquery-3.1.0.min',"test","test!../right.html"]
        }
    }
});

