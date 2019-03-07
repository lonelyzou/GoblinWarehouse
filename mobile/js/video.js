/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function css(node,type,val) {
       if(arguments.length===3){
           var text="";
           if(!node.transform){
               node.transform={};
           }
           node.transform[type]=val;
           for(var item in node.transform){
               switch (item) {
                   case "translateX":
                   case "translateY":
                   case "translateZ":
                   case "translate":
                       text+=item+"("+node.transform[item]+"px)";
                       break;
                   case "rotateX":
                   case "rotateY":
                   case "rotateZ":
                   case "rotate":
                       text+=item+"("+node.transform[item]+"deg)";
                       break;
                   case "scale":
                       text+=item+"("+node.transform[item]+")";
                       break;
               }
               node.style.transform=text;
           }
       }
       else if(arguments.length===2){
           val = node.transform?node.transform[type]:undefined;
           if(val === undefined){
               val = 0;
               if(type === "scale"){
                   val = 1;
               }
           }
           return val;
       }else{
           throw new Error("该函数至少需要2个参数")
       }
    }
/* harmony default export */ __webpack_exports__["a"] = ({
        css
    });


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_adaptation_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_adaptation_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__common_adaptation_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video_head_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video_head_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__video_head_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__video_navMove_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__video_verticalSlip_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_transform_js__ = __webpack_require__(0);





window.onload=function () {
    var scrollBar = document.querySelector("#wrap .bar");
    var wrap = document.querySelector("#wrap .content");
    var content = wrap.children[0];
    console.log(wrap.clientHeight, content.clientHeight)
    var head = document.querySelector("#wrap .head");
    var headBottom = document.querySelector("#wrap .head .head-bottom");
    var btnA = document.querySelector(".head-btns .btnA");
    var scale = 0; //比例
    function barHeight() {
        //视口的高度 / 整个内容区的高度
        scale = document.documentElement.clientHeight / content.offsetHeight;
        scrollBar.style.height = scale * document.documentElement.clientHeight * 0.5 + "px";
        requestAnimationFrame(barHeight);
    }

    requestAnimationFrame(barHeight);
//滚动条的逻辑
    var flag = true;

    function btn() {
        if (flag) {
            headBottom.style.display = "";
            flag = !flag;
        } else {
            headBottom.style.display = "none";
            flag = !flag;
        }
    }

    var callBack = {
        start: function () {
            scrollBar.style.opacity = 1;
        },
        move: function () {
            var barMove = (__WEBPACK_IMPORTED_MODULE_4__common_transform_js__["a" /* default */].css(this, "translateY") / (this.offsetHeight - wrap.clientHeight)) * (document.documentElement.clientHeight - scrollBar.offsetHeight);
            scrollBar.style.opacity = 1;
            __WEBPACK_IMPORTED_MODULE_4__common_transform_js__["a" /* default */].css(scrollBar, "translateY", -barMove);
            if (__WEBPACK_IMPORTED_MODULE_4__common_transform_js__["a" /* default */].css(scrollBar, "translateY") > head.clientHeight) {
                headBottom.style.display = "none";
                btnA.addEventListener("touchend", btn)
            } else {
                btnA.removeEventListener("touchend", btn);
                headBottom.style.display = "";
            }
        },
        end: function () {
            scrollBar.style.opacity = 0;
        },
        over: function () {
            scrollBar.style.opacity = 0;
        }
    };
    __WEBPACK_IMPORTED_MODULE_3__video_verticalSlip_js__["a" /* default */].slipMove(wrap, content, callBack);
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var styleNode = document.createElement("style");
var w = document.documentElement.clientWidth/16;
styleNode.innerHTML = "html{font-size:"+w+"px!important}";
document.head.appendChild(styleNode);
var wrap = document.querySelector("#wrap");
wrap.addEventListener("touchstart",function(ev){
    ev=ev||event;
    ev.preventDefault();
});
var aNode = document.querySelectorAll('a')//获取所有a标签节点（静态列表）
for(var i = 0;i<aNode.length;i++){//循环遍历 为每一个a节点添加手指点击事件
    aNode[i].addEventListener('touchstart',function () {//touchstart手指按下事件
        this.isMove = false   //isMove 判断是否发生滑动
    });
    aNode[i].addEventListener('touchmove',function () {//touchmove手指滑动事件
        this.isMove = true
    });
    aNode[i].addEventListener('touchend',function () {//touchend手指抬起事件
        if (!this.isMove){
            location.href = this.href  //使用location.href 来进行跳转
        }
    })
}

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var menuBtn=document.querySelector("#wrap  .head  .head-top  .menuBtn");
var iNode=menuBtn.querySelector("i");
var msk=document.querySelector("#wrap .head .head-msk ");
var wrap=document.querySelector("#wrap");
var input=document.querySelector("#wrap .head .head-bottom form > input[type='text']");
var isShow=false;
// isShow代表是否要显示XX
menuBtn.addEventListener("touchstart",function (ev) {
    ev=ev||event;
    isShow=!isShow; //一进来将isShow打开
    if(isShow){
        // menuBtn.classList.add("active");
        iNode.className="fa fa-close (alias)";
        msk.style.display="block";
    }
    else if(!isShow){
        // menuBtn.classList.remove("active");
        iNode.className="fa fa-reorder (alias)";
        msk.style.display="none";
    }
     ev.stopPropagation();  //阻止冒泡
     ev.preventDefault();   //禁止默认行为，全局禁止默认行为在因为阻止冒泡后失效

});
wrap.addEventListener("touchstart",function (ev) {
    ev=ev||event;
    if(isShow){
        // menuBtn.classList.remove("active");
        iNode.className="fa fa-reorder (alias)";
        msk.style.display="none";
        isShow=!isShow;  //关闭isShow后，将isShow变成flase
    }
});
msk.addEventListener("touchstart",function (ev) {
    ev=ev||event;
    ev.stopPropagation();
    ev.preventDefault(); //遮罩层的菜单点击时不应该关闭menuBtn，
});
input.addEventListener("touchstart",function (ev) {
   ev=ev||event;
   this.focus();
   ev.stopPropagation();
   ev.preventDefault();
});
wrap.addEventListener("touchstart",function () {
    input.blur();
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_tool_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_transform_js__ = __webpack_require__(0);


    var nav=document.querySelector("#wrap .list-body");
    var ulNode=document.querySelector("#wrap .list-body .list")
    var liNodes=document.querySelectorAll("#wrap .list-body .list li")
    //拖拽必要参数
    var eleStartX=0;     //元素一开始的位置
    var eleStratY=0;    //元素ul的left的位置
    var fingerStartX=0;  //手指一开始的位置
    var fingerStartY=0;  //手指一开始的位置
    var minX=nav.clientWidth-ulNode.offsetWidth;
    //防抖动
    var isFirst = true;
    var isX = true;  // true:x   false:y

    //手动橡皮筋
    var lastFinger=0;  // 手指上次的位置
    var oneMove=0;   //上次滑动的距离
    var lastTime=0;  // 手指上次的时间
    var oneTime=1;   //滑动的时间


    nav.addEventListener("touchstart",function (ev) {
        ev=ev||event;
        ulNode.style.transition="none";
        var finger=ev.changedTouches[0];
        eleStartX = __WEBPACK_IMPORTED_MODULE_1__common_transform_js__["a" /* default */].css(ulNode,"translateX");
        eleStratY=__WEBPACK_IMPORTED_MODULE_1__common_transform_js__["a" /* default */].css(ulNode,"translateY");
        fingerStartX=finger.clientX;
        fingerStartY=finger.clientY; //手指距离窗口的长度
        lastFinger=finger.clientX;  //手指第一次的位置
        lastTime=new Date().getTime(); //手指第一次的时间

        isX=true; //手指一进入屏幕，isX与isFirst都打开
        isFirst=true;
        oneMove=0;  //手指下次进入屏幕时
        oneTime=1;
        ulNode.handMove=false;
    });
    nav.addEventListener("touchmove",function (ev) {
        ev=ev||event;
        if(!isX){
            return;
        }
        var finger=ev.changedTouches[0];
        var nowX=finger.clientX;
        var nowY=finger.clientY;
        var disX=nowX-fingerStartX;
        var disY=nowY-fingerStartY;
        var translateX=eleStartX+disX;

        var  nowFinger=finger.clientX;    //手指这次的位置
        var  nowTime=new Date().getTime() //手指这次的时间
        oneMove=nowFinger-lastFinger;     //这次滑动的距离
        oneTime=nowTime-lastTime;         //这次滑动的时间
        lastFinger=nowFinger;            //更新手指上次的位置，也就是这次的位置
        lastTime=nowTime;               //更新时间

        var scale=0;
        if(isFirst){
            isFirst=false; //在知道不要抖动时，isFirst=false 从而在手指不离开屏幕乱动时获取的第一次滑动，不进入touchstart;
            if(Math.abs(disX)<Math.abs(disY)){
                isX=false;
                return;
            }

        }
        //手动橡皮筋
         if(translateX>0){
             ulNode.handMove=true;
             //  scale 是一个越小的值  (0,1]   (0,.5]
             scale = document.documentElement.clientWidth / ((document.documentElement.clientWidth + translateX)*1.5);
             // 橡皮筋效果需要拉开的空间要越来越大  可是增幅越来越小
             translateX = __WEBPACK_IMPORTED_MODULE_1__common_transform_js__["a" /* default */].css(ulNode,"translateX")+oneMove*scale;
         }
         else if(translateX<minX){
            ulNode.handMove=true;
            var over = minX - translateX;
            scale = document.documentElement.clientWidth / ((document.documentElement.clientWidth + over)*1.5);
            translateX = __WEBPACK_IMPORTED_MODULE_1__common_transform_js__["a" /* default */].css(ulNode,"translateX")+oneMove*scale;
        }

        __WEBPACK_IMPORTED_MODULE_1__common_transform_js__["a" /* default */].css(ulNode,"translateX",translateX);
    });
    nav.addEventListener("touchend",function (ev) {
         ev=ev||event;
        if(!ulNode.handMove){
            move(oneMove,oneTime,ulNode)
        }else{
            var translateX = __WEBPACK_IMPORTED_MODULE_1__common_transform_js__["a" /* default */].css(ulNode,"translateX");
            //控制超出
            if(translateX > 0 ){
                translateX =0;
            }else if(translateX < minX){
                translateX = minX;
            }
            ulNode.style.transition="1s transform";
            __WEBPACK_IMPORTED_MODULE_1__common_transform_js__["a" /* default */].css(ulNode,"translateX",translateX);
        }

    });

    function move(oneMove,oneTime,ulNode) {
        var speed=oneMove/oneTime;
        speed=Math.abs(speed)<0.3?0:speed;
        var time=0;

        var bsr="";  //贝塞尔曲线
        var translateX = __WEBPACK_IMPORTED_MODULE_1__common_transform_js__["a" /* default */].css(ulNode,"translateX");
        var moveX=translateX+speed*200;
        //控制超出
        if(moveX > 0 ){
            moveX =0;
            bsr="cubic-bezier(.09,1.51,.65,1.73)";
        }else if(moveX < minX){
            moveX = minX;
            bsr="cubic-bezier(.09,1.51,.65,1.73)";
        }
        ulNode.style.transition="1s "+ bsr +" transform";
        __WEBPACK_IMPORTED_MODULE_1__common_transform_js__["a" /* default */].css(ulNode,"translateX",moveX);
    }

    //误触
    var flag=false;
    nav.addEventListener("touchstart",function () {
       flag=false;
    });
    nav.addEventListener("touchmove",function () {
        flag=true;
    });
    //点击变色
    if(liNodes){
        ulNode.addEventListener("touchend",function (ev) {
            ev=ev||event;
            if(!flag){
                for(var j=0;j<liNodes.length;j++){
                    __WEBPACK_IMPORTED_MODULE_0__common_tool_js__["a" /* default */].removeClass(liNodes[j],"active")
                }
                if(ev.target.nodeName.toUpperCase() === "LI"){
                    __WEBPACK_IMPORTED_MODULE_0__common_tool_js__["a" /* default */].addClass(ev.target,"active")
                }else if(ev.target.nodeName.toUpperCase() === "A"){
                    __WEBPACK_IMPORTED_MODULE_0__common_tool_js__["a" /* default */].addClass(ev.target.parentNode,"active")
                }else if(ev.target.nodeName.toUpperCase()=== "P"){
                    __WEBPACK_IMPORTED_MODULE_0__common_tool_js__["a" /* default */].addClass((ev.target.parentNode).parentNode,"active")
                }else if(ev.target.nodeName.toUpperCase()=== "SPAN"){
                    __WEBPACK_IMPORTED_MODULE_0__common_tool_js__["a" /* default */].addClass((ev.target.parentNode).parentNode,"active")
                }

            }
        });
    }


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function map(arr,callback, thisArg) {
    var T, A, k;
    if (arr == null) {
        throw new TypeError(" arr is null or not defined");
    }
    // 1. 将O赋值为调用map方法的数组.
    var O = Object(arr);
    // 2.将len赋值为数组O的长度.
    var len = O.length >>> 0;
    // 3.如果callback不是函数,则抛出TypeError异常.
    if (Object.prototype.toString.call(callback) != "[object Function]") {
        throw new TypeError(callback + " is not a function");
    }
    // 4. 如果参数thisArg有值,则将T赋值为thisArg;否则T为undefined.
    if (thisArg) {
        T = thisArg;
    }
    // 5. 创建新数组A,长度为原数组O长度len
    A = new Array(len);
    // 6. 将k赋值为0
    k = 0;
    // 7. 当 k < len 时,执行循环.
    while(k < len) {
        var kValue, mappedValue;
        //遍历O,k为原数组索引
        if (k in O) {
            //kValue为索引k对应的值.
            kValue = O[ k ];

            // 执行callback,this指向T,参数有三个.分别是kValue:值,k:索引,O:原数组.
            mappedValue = callback.call(T, kValue, k, O);

            // 返回值添加到新数组A中.
            A[ k ] = mappedValue;
        }
        // k自增1
        k++;
    }
    // 8. 返回新数组A
    return A;
};
function getElementsByClassName(className) {
    var arr =[];
    var allNodes = document.getElementsByTagName("*");
    //循环每个节点的class  看一看有没有我们想要的那个className
    for(var i=0;i<allNodes.length;i++){
        var reg = new RegExp("\\s+"+className+"\\s+");
        var classStr=" "+allNodes[i].className+" ";
        if(reg.test(classStr)){
            arr.push(allNodes[i])
        }
    }

    return arr;
}
function addClass(node,className){
    if(node){
        if(node.className){
            //代表className不为空
            var reg=new RegExp("\\s+"+className+"\\s+");
            var classStr=" "+node.className+" ";
            if(reg.test(classStr)){

            }else{
                node.className=" "+className;
            }
        }else{
            //代表className为空
            node.className=className;
        }
    }else{
        throw new Error("当前节点不存在")
    }
}
function trim(str) {
    // var reg = /^\s+|\s+$/g;
    var reg = /^\s*|\s*$/g;
    str = str.replace(reg,"");
    return str;
}
function removeClass(node,className){
    if(node){
        if(node.className){
            //代表className不为空
            var reg=new RegExp("\\s+"+(className)+"\\s+","ig");
            var classStr=" "+node.className+" ";
            node.className=trim(classStr.replace(reg," "));
            if(!node.className){
                node.removeAttribute("class");
            }
        }
    }else{
        throw new Error("当前节点不存在")
    }
}
/* harmony default export */ __webpack_exports__["a"] = ({
    map,
    trim,
    getElementsByClassName,
    addClass,
    removeClass
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_transform_js__ = __webpack_require__(0);

function slipMove(wrap,content,callBack){
        var minY=0;
        function reminY() {
            minY=wrap.clientHeight-content.offsetHeight;
            requestAnimationFrame(reminY)
        }
        requestAnimationFrame(reminY);

        var eleStart={x:0,y:0};
        var fingerStrat={x:0,y:0};
        var lastMove=0;
        var oneMove=0;
        var lastTime=0;
        var oneTime=1;
        var isY=true;
        var isFirst=true;

        var clearTime=0;
        wrap.addEventListener("touchstart",function (ev) {
            clearInterval(clearTime);
            ev=ev||event;
            content.style.transition="none";
            var finger=ev.changedTouches[0];
            eleStart.x=__WEBPACK_IMPORTED_MODULE_0__common_transform_js__["a" /* default */].css(content,"translateX");
            eleStart.y=__WEBPACK_IMPORTED_MODULE_0__common_transform_js__["a" /* default */].css(content,"translateY");
            fingerStrat.x=finger.clientX;
            fingerStrat.y=finger.clientY;

            lastTime=new Date().getTime();
            lastMove=finger.clientY; //手指第一次的位置
            //解决速度残留
            content.handMove=false;
            oneMove=0;
            oneTime=1;

            isY=true;
            isFirst=true;

            if(callBack && (typeof callBack["start"]).toLowerCase()==="function"){
                callBack["start"].call(content);
            }
        });
        wrap.addEventListener("touchmove",function (ev) {
            ev=ev||event;
            if(!isY){
                return;
            }
            var finger=ev.changedTouches[0];
            var fingerNow={x:0,y:0};
            var fingerMove={x:0,y:0};
            fingerNow.x=finger.clientX;
            fingerNow.y=finger.clientY;
            fingerMove.x=fingerNow.x-fingerStrat.x;
            fingerMove.y=fingerNow.y-fingerStrat.y;
            var translateY=fingerMove.y+eleStart.y;
            var  nowTime=new Date().getTime();
            var  nowMove=finger.clientY;
            oneMove=nowMove-lastMove;
            oneTime=nowTime-lastTime;
            lastMove=nowMove;
            lastTime=nowTime;
            if(isFirst){
                isFirst=false;
                if(Math.abs(fingerMove.y)<Math.abs(fingerMove.x)){
                    isY=false;
                    return;
                }
            }
            var scale=0;
            if(translateY>0){
                content.handMove=true;
                scale=document.documentElement.clientHeight/((document.documentElement.clientHeight+translateY)*2);
                // console.log("1-scale:"+scale)
                translateY=__WEBPACK_IMPORTED_MODULE_0__common_transform_js__["a" /* default */].css(content,"translateY")+oneMove*scale;
            }else if(translateY<minY){
                content.handMove=true;
                var over=minY-translateY;
                scale=document.documentElement.clientHeight/((document.documentElement.clientHeight+over)*2);
                translateY=__WEBPACK_IMPORTED_MODULE_0__common_transform_js__["a" /* default */].css(content,"translateY")+scale*oneMove;
            }
            __WEBPACK_IMPORTED_MODULE_0__common_transform_js__["a" /* default */].css(content,"translateY",translateY);
            if(callBack && (typeof callBack["move"]).toLowerCase()==="function"){
                callBack["move"].call(content);
            }
        });
        wrap.addEventListener("touchend",function (ev) {
            ev=ev||event;
            if(!content.handMove){
                fast(oneMove,oneTime,content);

            }else {
                var translateY=__WEBPACK_IMPORTED_MODULE_0__common_transform_js__["a" /* default */].css(content,"translateY");

                if(translateY>0){
                    translateY=0;

                }else if(translateY<minY){
                    translateY=minY;
                }
                content.style.transition = "1s transform";
                __WEBPACK_IMPORTED_MODULE_0__common_transform_js__["a" /* default */].css(content,"translateY",translateY);
            }
            if(callBack && (typeof callBack["end"]).toLowerCase()==="function"){
                callBack["end"].call(content);
            }
        });
        var Tween ={
            Linear: function(t,b,c,d){ return c*t/d + b; },
            Back:function(t,b,c,d,s){
                if (s == undefined) s = 1.70158;
                return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
            }
        };
        function fast(oneMove,oneTime,content) {
            var speed=oneMove/oneTime;
            var time=0;
            speed = Math.abs(speed) < 0.3 ? 0 : speed; //轻微滑动时spend为0；
            // speed = Math.abs(speed) > 15 ? 15:speed;
            speed = speed > 15 ? 15:speed;
            speed = speed <-15 ? -15:speed;
            time = Math.abs(speed)*0.2;
            time = time>2?2:time;
            time = time<0.4?0.5:time;

            var translateY = __WEBPACK_IMPORTED_MODULE_0__common_transform_js__["a" /* default */].css(content,"translateY");
            var targetY =  translateY + speed*100;
            var type ="Linear";
            if(targetY>0){
                targetY=0;
                type ="Back";
            }else if(targetY<minY){
                targetY=minY;
                type ="Back";
            }

            move(content,targetY,time,type);
        }
        function move(node,targetY,time,type) {
            cancelAnimationFrame(clearTime)

            var t=0;
            var b = __WEBPACK_IMPORTED_MODULE_0__common_transform_js__["a" /* default */].css(content,"translateY");
            var c = targetY -b;
            var d = (time*1000)/(1000/60);

            function inmove() {
                t++;
                if(t>d){
                    clearInterval(clearTime);
                    if(callBack && (typeof callBack["over"]).toLowerCase() === "function"){
                        callBack["over"].call(content);
                    }
                    return;
                }
                __WEBPACK_IMPORTED_MODULE_0__common_transform_js__["a" /* default */].css(node,"translateY",Tween[type](t,b,c,d));
                if(callBack && (typeof callBack["move"]).toLowerCase() === "function"){
                    callBack["move"].call(content);
                }
                clearTime = requestAnimationFrame(inmove);
            }
            clearTime = requestAnimationFrame(inmove);

        }
    }
/* harmony default export */ __webpack_exports__["a"] = ({
    slipMove
});


/***/ })
/******/ ]);
