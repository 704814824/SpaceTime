/**
 * Created by Administrator on 2016/12/6 0006.
 */
define(['object-re-left','object-re-right'], function (contentLeft, contentRight ){
        return {
            init: function (){
                /* contentRight����*/
                contentRight.initContentRight();

                /*contentLeft����*/
                contentLeft.initContentLeft();
            }()
        };

});
