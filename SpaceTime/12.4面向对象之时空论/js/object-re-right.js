/**
 * Created by Administrator on 2016/12/6 0006.
 */
define(['cellRightData'/*,'css!../css/content.css'*/],function (cellRightEnums) {
    function createContentRight (divImg, divAHtml, divHtml,censhu,lastone){
        var rightCell = new Object();
        rightCell.divImg = divImg;
        rightCell.divAHtml = divAHtml;
        rightCell. divHtml = divHtml;
        rightCell.cengshu = censhu;
        rightCell.lastone = lastone;
        return rightCell;
    }
    var content_right_ejs = document.getElementById("content_right_ejs").innerHTML;
    var contentRight = {
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
    };
    return {
        initContentRight : function (){
            contentRight.init(21);
            for(var i = 0 ; i < contentRight.length; i++){
                var names = contentRight.cells[i];
                var htmlContentRight= ejs.render(content_right_ejs, { names: names});
                contentRight.cells[i][i].cengshu < 4 ?  $("#dom").append(htmlContentRight) : $("#dom_2").append(htmlContentRight)
            }
        }
    }
});