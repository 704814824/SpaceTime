/**
 * Created by Administrator on 2016/12/4 0004.
*/
var cellRightEnums = {
    cengshu:[0, 1, 2, 3, 4],
    divImg : ["content_right0", "content_right1","content_right2","content_right3","content_right4", "content_right5", "content_right6","content_right7", "content_right8", "content_right9", "content_right10", "content_right11","content_right12","content_right13","content_right14", "content_right15","content_right_bottom0", "content_right_bottom1","content_right_bottom2", "content_right_bottom3"],
    divAHtml :["时间悖论","彭罗斯楼梯","平行时空", "十一维空间", "时空扭曲", "四维时空", "广义相对论", "狭义相对论","相对论","标准时空论" ,"量子力学","奇点", "时空曲率", "弦理论", " 量子理论","物质运动","果壳中的宇宙", "图说相对论", "相对论时空", "爱因斯坦的宇宙"],
    divHtml :["芝诺悖论","彭先生的不可能图形","物理学理论", "一种物理学超弦理论", "爱因斯坦相对论的内容","三维空间加上一维时间", "爱因斯坦的引力理论", "一个时空理论","","","","","","","","","史蒂芬霍金所著", "科普问答图书", "陈应天著物理图书", "加来道雄著当代图书"]
};
var lastCellEnums = {YES : "c-span-last", NO : ""};

var cellLeftEnums = {
    divH3Class :[
        "t5",
        "",
        "",
        "t5",
        "",
        "",
        "",
        "t5",
        "",
        ""
    ],
    H3Img : ["","","","","","","","","c-icon-doc",""] ,// <!--例：doc图片 9-->
    divH3 : [
        "时空论_百度百科",
        "关于爱因斯坦的平行时空论谁能具体给我解释一下爱因..._百度作业帮",
        "绝对时空论",
        "时空论坛_梅州论坛_最火热的梅州论坛_bbs.mzsky.cc",
        "时空论",
        "【图书】时空论_百度学术",
        "时空论_相关论文(共89432篇)_百度学术",
        "标准时空论_互动百科",
        "时空论_百度文库",
        "语言时空论_互动百科"
    ],///*标准时空论_互动百科*/
    H3afterStart5 :["","","","","","","","","评分:4.5/5 27页",""],
    H3AfterPaper :[
        ["","","","","","","","", ""],
        ["","","","","","","","", ""],
        ["","","","","","","","", ""],
        ["","","","","","","","", ""],
        ["","","","","","","","", ""],
        ["","","","","","","","", ""],
        [
            "被引:1",
            "时空论",
            "青文出版社",
            "被引:24",
            "...——应用生命多系统时空论对腹腔隙综合征的重新评价",
            "中华普通外科...",
            "被引:20",
            "戏剧时空论",
            "《戏剧:中央戏剧学院学报"
        ],
        ["","","","","","","","", ""],
        ["","","","","","","","", ""],
        ["","","","","","","","", ""]
    ],
    H3afterP : [
        "",
        "1个回答 - 提问时间: 2014年12月08日",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ],//<!--例：1个回答 - 提问时间: 2014年12月08日-->
    H3afterDoubleA : [["","",""], ["","",""], ["","",""], ["","",""], ["","",""], ["曾霄容"," - 青文出版社 - 1972 - ","被引量:1"], ["","",""], ["","",""] ,["","",""], ["","",""]],//<!--例：曾霄容 - 青文出版社6-->
    preAbstract : [
        "",
        "最佳答案:",
        "",
        "",
        "2014年9月4日 - ",
        "",
        "",
        "2016年4月29日 - ",
        "2011年8月18日 -",
        "2014年1月20日 - "
    ],//<!--例：最佳答案:258910 例：2016年4月29日 - -->
    AbstractImg :[
        "",
        "",
        "",
        "https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3508147322,2737109842&fm=58&s=81975F328FA04C014E43B44C020060F1",
        "",
        "",
        "",
        "https://ss0.baidu.com/73x1bjeh1BF3odCf/it/u=650388166,2504683174&fm=85&s=FAB863CBEC99CC5501A87C320300C012",
        "",
        ""
    ],//<!--例：Img 48-->
    abstract :[
        "爱因斯坦认为，世界并非我们原先所熟知的世界，也就是说，时间、速度、空间、位置和物质都是具体的客观现实。这种观点是一种最为理想的解释。我们以时钟记录时间...",
        "时间旅行者回到过去改变历史后,时间线便出现分杈,分杈的时间线展开的是另一段历史,这是爱因斯坦的平行时空论,给你举个例子,比如你超光速回到了一个已经...",
        "绝对时空论 彭瑞良我们生存的时空是绝对的恒定,存在的空间是绝对均匀分布的,流逝的时间是绝对均匀流过的,时空永远不会因物质的存在状态变化而变化。此理论以自然...",
        "时空论坛_最火热的梅州论坛,是众多梅州网友的线上话题广场,有趣的梅州生活话题,温馨的情感故事,热情友善的网友气氛,包括街头巷尾,灌水八卦,梅州美食, 汽车,房产,...",
        "我不相信轮回论,但是却非常信时空论,我总感觉生活中的某个场景是我曾经就已经出现过的画面,这感觉到后来也愈加明显,一次,我依旧走在去公司的那条梧桐...",
        "时空论青文出版社曾霄容曾霄容. 时空论[M].台北:青文出版社,1972.曾霄容. 时空论[M].台北:青文出版社 1972...",
        "",
        "标准时空论-标准时空论,是由国防科技大学教授谭暑生创立,与爱因斯坦的狭义相对论竞争的理论。谭暑生说这并非是他个人的自我标榜和无事生非,而是现代物理学的发展使然...",
        "时空论 周治平撰文 Email:zhouzhip@163.com 摘要 : 本论提出:物质分到最终是绝对静止的、平直无边界的零时空, 其因反抗与平衡而形成包络零时空的零子,...",
        "语言时空论-内容介绍语言时空观是研究语言的一种根本性的观点。它将时间和空间视为语言系统整体性存在的必要组成部分。在时空观的视界里,时间和空间必..."
    ],//正文
    f13A : [
        "baike.baidu.com/",
        "www.zybang.com/questio...",
        "ezheng.people.com.cn/p...",
        "bbs.mzsky.cc/",
        "www.douban.com/note/41...",
        "xueshu.baidu.com ",
        "xueshu.baidu.com ",
        "www.baike.com/wiki/...时空论",
        "wenku.baidu.com/link?u...",
        "www.baike.com/wiki/...时空论"
    ],//<!--bbs.mzsky.cc/-->
    f13Img : [
        "",
        "c-icon-v2",
        "",
        "",
        "",
        "",
        "",
        "c-icon-v3",
        "",
        ""
    ],//<!--例：V2 V3img-->
    f13lastA : [
        ["",""],
        ["百度快照","4054条评价"],
        ["百度快照","1455条评价"],
        ["百度快照","评价"],
        ["百度快照","2581条评价"],
        ["",""],
        ["",""],
        ["百度快照","632条评价"],
        ["百度快照","评价"],
        ["百度快照","632条评价"]],// <!--例：- 百度快照 - 4031条评价-->
    f13lastImg : [
        "op_LAMP",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ],///*例：v2位置的img带span -*/
    AbstractAfterP : [
        ["概述","详细论述","事件结论"],
        ["","",""],
        ["","",""],
        ["","",""],
        ["","",""],
        ["","",""],
        ["","",""],
        ["","",""],
        ["","",""],
        ["","",""]
    ]
};
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
var contentLeft = {
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
};
var content_left_ejs = document.getElementById("content_left_ejs").innerHTML;
contentLeft.init(10);
$(function(){
    (function initContentLeft(){
        for(var i = 0 ; i < contentLeft.length; i++){
            var names = contentLeft.cells[i];
            var htmlContentRight= ejs.render(content_left_ejs, { names: names});
             $("#content_left").append(htmlContentRight)
        }
    }());
});

function createContentRight (divImg, divAHtml, divHtml,censhu,lastone){
    var rightCell = new Object();
    rightCell.divImg = divImg;
    rightCell.divAHtml = divAHtml;
    rightCell. divHtml = divHtml;
    rightCell.cengshu = censhu;
    rightCell.lastone = lastone;
    return rightCell;
}
var contentRight = {
    length : 0,
    cells : null,
    init : function (length){
        this.length = length;
        this.cells = new Array();
        for (var i = 0 ; i < length ; i ++) {
            var temp = new Array();
            temp[i] = createContentRight(cellRightEnums.divImg[i], cellRightEnums.divAHtml[i], cellRightEnums.divHtml[i],cellRightEnums.cengshu[ Math.floor(i/4)],parseInt(i+1)%4 == 0 ? lastCellEnums.YES : lastCellEnums.NO);
            this.cells[i] = temp;
        }
    }
};
var content_right_ejs = document.getElementById("content_right_ejs").innerHTML;
contentRight.init(20);
$(function(){
    (function initContentRight(){
        for(var i = 0 ; i < contentRight.length; i++){
            var names = contentRight.cells[i];
            var htmlContentRight= ejs.render(content_right_ejs, { names: names});
            contentRight.cells[i][i].cengshu < 4 ?  $("#dom").append(htmlContentRight) : $("#dom_2").append(htmlContentRight)
        }
    }());
});




