/**
 * Created by Administrator on 2016/12/6 0006.
 */
define(['object-re-left','object-re-right'], function (contentLeft, contentRight ){
        return {
            init: function (){
                /* contentRight调用*/
                contentRight.initContentRight();

                /*contentLeft调用*/
                contentLeft.initContentLeft();
            }()
        };

});
