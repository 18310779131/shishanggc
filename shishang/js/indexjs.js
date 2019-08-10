//侧栏
var _dl = document.getElementsByClassName("dl1");
var _onav = document.getElementsByClassName("onav")[0].children;
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



//轮播图
var _img = document.querySelectorAll(".ban>div");
var _onum = document.querySelectorAll(".onum>div");
var timer=null;
var index=0;
timer = setInterval( fn, 2000 );
function fn(){
	index++;
	for( var j=0; j<_img.length; j++ ){
		_img[j].style.zIndex = 0;
		_onum[j].className = "";
	}
	if( index == _img.length ){
		index = 0;
	}
	_img[index].style.zIndex = 2;
	_onum[index].className = "oblue";
}

//移入移出
	for( let i=0; i<_onum.length; i++ ){
		_onum[i].onmouseenter=function(){
			clearInterval(timer);
			index=i-1;
			fn();
		}
		_onum[i].onmouseleave = function(){
			timer=setInterval(fn,2000);
		}
	}



/*
	 倒计时：
	 1、时间格式定义 自定义 
	 当前时间    结束时间
	 2、时间差   秒  t
	 3、计算剩余的小时   parseInt(t/3600)
	 	       剩余的分钟  取整 ((总时间差-小时占用的秒数)/60)
	 	       剩余的秒数  总时间差-小时占用的秒数-分钟占用的秒数 
	 */
	//定义当前系统时间
	var now = new Date();
	//定义商品结束时间
	var endTime = new Date("2019-12-31 18:00:00");
	//计算时间差   单位秒数
	var t = ( endTime.getTime()-now.getTime() )/1000;
	
	
	var time1 = document.getElementsByClassName("box211")[0];
	var time2 = document.getElementsByClassName("box211")[1];
	var time3 = document.getElementsByClassName("box211")[2];
	var time4 = document.getElementsByClassName("box211")[3];
	showTime();//页面加载 显示剩余的时间
	function showTime(){
		//页面加载后 如果时间过期了  后面的代码不执行
		if( t <= 0 ){
			time1.innerHTML = "活动结束了";
			time2.innerHTML = "活动结束了";
			time3.innerHTML = "活动结束了";
			time4.innerHTML = "活动结束了";
			return ;
		}
		//计算剩余的小时
		var h = parseInt(t/3600);
		//计算剩余的分钟
		var m = parseInt((t - h*3600)/60);
		//计算剩余的秒数
		var s = parseInt(t - h*3600 - m*60);
		
		//显示倒计时
		time1.innerHTML = "剩余" + h + "小时" + m + "分钟" + s + "秒";
		time1.style.color="red";
		time1.style.fontSize ="20px";
		time1.style.paddingTop="10px";
		time1.style.paddingLeft ="30px";
		
		time2.innerHTML = "剩余" + h + "小时" + m + "分钟" + s + "秒";
		time2.style.color="red";
		time2.style.fontSize ="20px";
		time2.style.paddingTop="10px";
		time2.style.paddingLeft ="30px";
		
		time3.innerHTML = "剩余" + h + "小时" + m + "分钟" + s + "秒";
		time3.style.color="red";
		time3.style.fontSize ="20px";
		time3.style.paddingTop="10px";
		time3.style.paddingLeft ="30px";
		
		time4.innerHTML = "剩余" + h + "小时" + m + "分钟" + s + "秒";
		time4.style.color="red";
		time4.style.fontSize ="20px";
		time4.style.paddingTop="10px";
		time4.style.paddingLeft ="30px";
	}
	
		//1秒后执行
		var timer1 = setInterval( function (){
			t--;
			if( t <= 0 ){
				clearInterval( timer1 );
				clearInterval( timer2 );
				clearInterval( timer3 );
				clearInterval( timer4 );
				//显示倒计时
				time1.innerHTML = "活动结束了";
				time2.innerHTML = "活动结束了";
				time3.innerHTML = "活动结束了";
				time4.innerHTML = "活动结束了";
			}else{
				showTime();
			}
		},1000 )
	


//选项卡
var _eul = document.getElementsByClassName("eul")[0].children;
var _eimg = document.getElementsByClassName("eimg")[0].children;

for( let i=0; i<_eul.length; i++ ){
	_eul[i].onmouseenter = function(){
		
		for( let j=0; j<_eul.length; j++ ){
			_eul[j].className = "";
			_eimg[j].style.display = "none";
		}
		
		this.className = "yans";
		_eimg[i].style.display = "block";
	}
}



//吸顶
//	var _nav = document.querySelector(".adaption3");
//	var _dl1 = document.querySelectorAll(".dl1");
//	onscroll = function(){ //滚动条事件onscroll
//		var _mainh = 565;  //顶部元素的高度
//		//获取页面滚走的距离
//		var _gh = document.documentElement.scrollTop || document.body.scrollTop;
//		if( _gh > _mainh ){
//			_nav.style.position="fixed"; //固定定位
//			_nav.style.top=0;  //置顶
//			_dl1.style.display = "none";
//		}else{
//			_nav.style.position="";
//		}
//	}



	//登录、注册
window.onload = function(){
		var _dl = document.getElementById("dl");
		var _zc = document.getElementById("zc");
		var _yir = document.getElementById("yir");
		var _tc = document.getElementsByClassName("tc")[0];
 		//页面加载后 判断是否有cookie 如果有 显示当前登录的用户名和密码
 		//否则就显示  登录/注册
 		var str = document.cookie;
		if( str ){
			var brt = JSON.parse(str.split("=")[1]);
			_dl.innerHTML = "用户名：";
			_zc.innerHTML = brt.username;
			_dl.href = "javascript:;";
			_zc.href = "javascript:;";	
			_yir.onmouseenter = function(){
				_tc.style.display = "block"
			}
			_yir.onmouseleave = function(){
				_tc.style.display = "none";
			}
		}else{
			_dl.innerHTML = "[登录]";
			_zc.innerHTML = "[免费注册]";
			
		}
	}
	
	//点击退出账户
	var _tuic = document.getElementById("tuic");
	var _tc = document.getElementsByClassName("tc");
	_tuic.onclick = function(){
		var _dl = document.getElementById("dl");
		var _zc = document.getElementById("zc");
		document.cookie = "fff=";
		location.reload();
		_tc.style.display = "none";
	}
	

//回到顶部
var _zding = document.getElementById("zding");
window.onscroll = function(){
	var _gh = document.documentElement.scrollTop || document.body.scrollTop;
	if(_gh>300){
		_zding.style.display = "block";
	}else{
		_zding.style.display = "none";
	}
}
