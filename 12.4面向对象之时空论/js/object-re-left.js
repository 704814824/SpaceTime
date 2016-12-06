/**
 * Created by Administrator on 2016/12/6 0006.
 */
define(['cellLeftData'],function (cellLeftEnums) {
    function createLeft ( divH3Class, H3Img, divH3, H3AfterPaper,  H3afterStart5,H3afterP, H3afterDoubleA, preAbstract, AbstractImg, abstract, f13A, f13Img, f13lastA, f13lastImg, AbstractAfterP){
        var leftCell = new Object();
        leftCell.divH3Class = divH3Class;
        leftCell.H3Img =  H3Img;
        leftCell.divH3 = divH3;
        leftCell.H3AfterPaper =  H3AfterPaper;
        leftCell.H3afterStart5 =  H3afterStart5;
        leftCell.H3afterP = H3afterP;
        leftCell.H3afterDoubleA = H3afterDoubleA;
        leftCell.preAbstract = preAbstract;
        leftCell.AbstractImg = AbstractImg;
        leftCell.abstract = abstract;
        leftCell.f13A = f13A;
        leftCell.f13Img = f13Img;
        leftCell.f13lastA = f13lastA;
        leftCell.f13lastImg =f13lastImg;
        leftCell.AbstractAfterP = AbstractAfterP;
        return leftCell;
    }
    return {
        length : 0,
        cells : null,
        init : function (length){
            this.length = length;
            this.cells = new Array();
            for (var i = 0 ; i < length ; i ++) {
                var temp = new Array();
                temp[i] = createLeft(cellLeftEnums.divH3Class[i], cellLeftEnums.H3Img[i], cellLeftEnums.divH3[i], cellLeftEnums.H3AfterPaper[i],cellLeftEnums.H3afterStart5[i],cellLeftEnums.H3afterP[i], cellLeftEnums.H3afterDoubleA[i], cellLeftEnums.preAbstract[i], cellLeftEnums.AbstractImg[i], cellLeftEnums.abstract[i], cellLeftEnums.f13A[i], cellLeftEnums.f13Img[i],cellLeftEnums.f13lastA[i], cellLeftEnums.f13lastImg[i], cellLeftEnums.AbstractAfterP[i]);
                this.cells[i] = temp;
            }
        }
    }
});
