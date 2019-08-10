//侧栏
var _dl = document.getElementsByClassName("dl1");
var _onav = document.getElementsByClassName("onav")[0].children;
var _nav1 = document.querySelector(".nav1");

	_nav1.onmouseenter = function(){
		for( var i=0; i<_dl.length; i++ ){
			_dl[i].style.display = "block";
		}
	}
	_nav1.onmouseleave = function(){
			for( var i=0; i<_dl.length; i++ ){
			_dl[i].style.display = "none";
		}
	}

for( let i=0; i<_dl.length; i++ ){
	_dl[i].onmouseenter = function(){
		for( let j=0; j<_dl.length; j++  ){
			_dl[j].style.backgroundColor = "#f8f8f8";
			_onav[j].style.display = "none";
		}
		this.style.backgroundColor = "#ffffff";
		_onav[i].style.display = "block";
	}
}
for( let i=0; i<_dl.length; i++ ){
	_dl[i].onmouseleave = function(){
		this.style.backgroundColor = "#f8f8f8";
		_onav[i].style.display = "none";
	}
}



for( let i=0; i<_onav.length; i++ ){
	_onav[i].onmouseenter = function(){
			_onav[i].style.display = "block";
			_dl[i].style.backgroundColor = "#ffffff";
		}
	_onav[i].onmouseleave = function(){
			_onav[i].style.display = "none";
			
		}
	}


for( let i=0; i<_dl.length; i++ ){
	_onav[i].onmouseleave = function(){
		_onav[i].style.display = "none";
		_dl[i].style.backgroundColor = "#f8f8f8";
	}
}






//放大镜

//1.选项卡功能
var _boxaImg = document.querySelectorAll(".boxa img");//中图
var _boxbImg = document.querySelectorAll(".boxb img");//小图
var _boxcImg = document.querySelectorAll(".boxc img");//大图

for( let i=0; i<_boxbImg.length; i++ ){
	_boxbImg[i].onmouseenter = function(){
		
		for( let j=0; j<_boxaImg.length; j++ ){
			_boxaImg[j].style.display = "none";
			_boxcImg[j].style.display = "none";
		}
		
		_boxaImg[i].style.display = "block";
		_boxcImg[i].style.display = "block";
	}
}

//2.显示/隐藏   放大镜效果
var _boxa = document.querySelector(".boxa");//中框
var _small = document.querySelector(".box21");//中框
var _big = document.querySelector(".boxc");//大框
var _bigImg = document.querySelectorAll(".boxc img");//大图
var _mask = document.querySelector(".boxa1");//遮罩

	_boxa.onmouseover = function(){
			_big.style.display = "block";
			_mask.style.display = "block";
		}
	_boxa.onmouseout = function(){
		_big.style.display = "none";
		_mask.style.display = "none";
	}
	
	//鼠标在小盒子上移动   实现放大镜效果
	_small.onmousemove = function(evt){
		var e = evt || event;
		
		var x = e.pageX - _small.offsetLeft - _mask.offsetWidth/2;
		var y = e.pageY - _small.offsetTop - _mask.offsetHeight/2;
		//获取最大边界
		var maxL = _small.offsetWidth - _mask.offsetWidth;
		var maxT = _small.offsetHeight - 70 - _mask.offsetHeight;
		
		//边界处理
		x = x<=0 ? 0 :(x>=maxL ? maxL : x);
		y = y<=0 ? 0 :(y>=maxT ? maxT : y);
		
		//修改mask的left 和 top值，目的让他跟随鼠标移动
		_mask.style.left = x + "px";
		_mask.style.top = y + "px";
		for( var i=0; i<_bigImg.length; i++ ){
			var bigImageX = x * 2;
			var bigImageY = y * 2;
			//改变大图的left  和  top值
			_bigImg[i].style.left = -bigImageX + "px"; // 放大镜移动的方向和 大图移动的方向相反 ，要有负号
			_bigImg[i].style.top = -bigImageY + "px"; // 放大镜移动的方向和 大图移动的方向相反 ，要有负号
		}
		
	}
	


//购物车加减功能
var _s1 = document.getElementById("s1");
var _s2 = document.getElementById("s2");
var _ipu = document.getElementById("ipu");
_s1.onclick = function(){
	_ipu.value -= 1;
	if(_ipu.value < 1){
		_ipu.value = 1;
	}
}
_s2.onclick = function(){
	var num = _ipu.value;
		num = Number(num)+1;
		ipu.value = num;
}
_ipu.onblur = function(){
	if(_ipu.value < 1){
		_ipu.value = 1;
	}
}




//点击创建图片， 运动，消失
var _but1 = document.getElementsByClassName("but1")[0];
_but1.onclick = function(e){
	var e=e || e.event;
	var oImg = document.createElement("img");
		oImg.src = "img/axin.png";
		document.body.appendChild(oImg);
		oImg.style.position = "absolute";
		oImg.style.width = "30px";
		oImg.style.height = "30px";
		
	oImg.style.left = event.pageX + "px";
	oImg.style.top = event.pageY + "px";
	//开始运动
	var _head32 = document.getElementsByClassName("head32")[0];
	move( oImg , { left: _head32.offsetLeft, top:_head32.offsetTop },function(){
				oImg.remove();
				//添加时  数量统计
				var _sp1 = document.getElementById("sp1");
				var _ipu = document.getElementById("ipu");
				var _shu = _ipu.value;
				_sp1.innerHTML =Number(_sp1.innerHTML)+Number(_shu);
		} );
}

//支持缓冲和多物体运动  链式运动 完美运动
//obj代表运动的元素  json对象中存储多个属性和目标值   callback 代表一个函数
function move(obj,json,callback){
	//为每一个定时器添加一个定时器属性，确保定时器是独立的，多个物体运动时不干扰
	clearInterval( obj.timer );
	obj.timer = setInterval( ()=>{
		var flag = true;//假设值为true时  可以停止定时器并且进入下一个动作
		for( var attr in json ){
			//定义一个变量。获取当前操作元素的实际样式值
			var current = 0;
			//判断当前操作的样式是否是透明度，由于透明度是小数 需要单独操作
			if( attr == "opacity" ){
				current = getStyle(obj,attr)*100;
			}else{
				current = parseInt(getStyle(obj,attr));
			}
			//速度的设置
			var speed = (json[attr]-current)/10;
			speed = speed>0 ?　Math.ceil(speed) : Math.floor(speed);
			if( current != json[attr] ){
				//如果某个样式没有达到目标值 
				flag = false; //假设不成立
			}
			
			//根据speed的变化改变样式
			if( attr == "opacity" ){
				//改变透明度
				obj.style["opacity"] = (current + speed)/100;
			}else{
				//改变带有px单位的样式值
				obj.style[attr] = current + speed + "px";
			}
		}
	
		//json对象遍历结束后,如果flag的值是true ,可以停止定时器了--假设成立
		if( flag ){
			//达到目标值后停止运动
			clearInterval( obj.timer );
			//上一个动作完成后,再进入到下一个动作
			//调用下一个功能 先判断是否传递callback值
			if( callback ){
				callback();
			}
		}
	},30 )
}
function getStyle(obj,attr){
	if( window.getComputedStyle ){
		return window.getComputedStyle(obj)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}