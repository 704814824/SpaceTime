/**
 * Created by Administrator on 2016/12/7 0007.
 */
requirejs.config({
    //Ĭ�������ģ������Ŀ¼Ϊjs/lib
    //baseUrl: '',
    //��ģ��idǰ׺Ϊappʱ��������js/app����ģ���ļ�
    //�������õ�·���������baseUrl�ģ���Ҫ����.js
    map: {
        '*': {
            css: 'css.min',
            test:"test"
        }
    },
    paths: {
        jquery : 'jquery-3.1.0.min'
        // csscontent:'../css/content'
    },
    shim: {
        'main-re': {
            //The underscore script dependency should be loaded before loading backbone.js
            deps: ['jquery-3.1.0.min','css!../css/main.css',"txt"]
            // use the global 'Backbone' as the module name.
            //exports: 'Backbone'
        }
    }
});
