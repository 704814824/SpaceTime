/**
 * Created by Administrator on 2016/12/6 0006.
 */
define(['cellRightData'],function (cellRightEnums) {
    function createContentRight (divImg, divAHtml, divHtml,censhu,lastone){
        var rightCell = new Object();
        rightCell.divImg = divImg;
        rightCell.divAHtml = divAHtml;
        rightCell. divHtml = divHtml;
        rightCell.cengshu = censhu;
        rightCell.lastone = lastone;
        return rightCell;
    }
    return {
        length : 0,
        cells : null,
        init : function (length){
            this.length = length;
            this.cells = new Array();
            for (var i = 0 ; i < length ; i ++) {
                var temp = new Array();
                temp[i] = createContentRight(cellRightEnums.divImg[i], cellRightEnums.divAHtml[i], cellRightEnums.divHtml[i],cellRightEnums.cengshu[ Math.floor(i/4)],parseInt(i+1)%4 == 0 ? cellRightEnums.lastCellEnums.YES : cellRightEnums.lastCellEnums.NO);
                this.cells[i] = temp;
            }
        }
    }
});