// JavaScript Document

window.onload=function (){
	//JS效果页面部分
	;(function (){
		var oMove=document.getElementById('move');
		var oContent=document.getElementById('content');
		var aLi=oMove.children;
		
		for (var i=0; i<aLi.length; i++)
		{
			enter(aLi[i]);
			leave(aLi[i]);
		}
	
		function enter(obj){
			var oSpan=obj.getElementsByTagName('span')[0];
			obj.onmouseenter=function (ev){
				var oEvent=ev || Event;
				var n=getN(obj, oEvent);
				console.log(n);
				switch (n)
				{
					case 0:
						oSpan.style.left='200px';
						oSpan.style.top=0;
						break;
						
					case 1:
						oSpan.style.left=0;
						oSpan.style.top='200px';
						break;
					
					case 2:
						oSpan.style.left='-200px';
						oSpan.style.top='0';
						break;
						
					case 3:
						oSpan.style.left='0';
						oSpan.style.top='-200px';
						break;
				}
				
				move(oSpan, {top:0, left:0});
			};
		};
		
		function leave(obj){
			var oSpan=obj.getElementsByTagName('span')[0];
			obj.onmouseleave=function (ev){
				var oEvent=ev || event;
				var n=getN(obj, oEvent);
				switch (n)
				{
					case 0:
						var left=200;
						var top=0;
						break;
						
					case 1:
						var left=0;
						var top=200;
						break;
					
					case 2:
						var left=-200;
						var top=0;
						break;
						
					case 3:
						var left=0;
						var top=-200;
						break;
				}
				
				move(oSpan, {top:top, left:left});
			};
		};
		
		function getN(obj, ev)
		{
			var x=oContent.offsetLeft+obj.offsetLeft+obj.offsetWidth/2-ev.clientX;
			var y=oContent.offsetTop+obj.offsetTop+obj.offsetHeight/2-ev.clientY;
			
			return Math.round((d2a(Math.atan2(y, x))+180)/90)%4;
		}
		
		function d2a(d)
		{
			return d*180/Math.PI;
		}		
	})();
	
	//html5中内容展示部分
	;(function (){
		var oLeft=document.querySelector('.left');	
		var oRight=document.querySelector('.right');
		var aLi=document.querySelectorAll('#opus li');
		
		//存class
		var aClass=[];
		for(var i=0; i<aLi.length; i++){
			aClass[i]=aLi[i].className;
		}
		
		function tab(){
			for(var i=0; i<aLi.length; i++){
				aLi[i].className=aClass[i];
			}	
		}
		
		//左边
		oLeft.onclick=function(){
			aClass.unshift(aClass.pop());	
			tab();
		};
		
		//右面
		oRight.onclick=function(){
			aClass.push(aClass.shift());	
			tab();
		};
		
		document.onkeydown=function(ev){
			if(ev.keyCode==37){
				aClass.unshift(aClass.pop());	
				tab();
			}
			if(ev.keyCode==39){
				aClass.push(aClass.shift());	
				tab();
			}
		};	
	})();
	
	
	//点击显示对应的内容
	;(function (){
		var aBtn=document.querySelectorAll('.works-list .btn');
		var aContent=document.querySelectorAll('.content');	
		for(var i=0; i<aBtn.length; i++)
		{
			aBtn[i].index=i;
			aBtn[i].onclick=function (){
				for(var i=0; i<aBtn.length; i++)
				{
					aBtn[i].className='btn';
					aContent[i].className='content';
				}
				this.className='btn active';
				aContent[this.index].className='content active';
			};
		}
	})();
	
	//随机生成多个点
	;(function (){
		function rnd(n,m){
			return parseInt(Math.random()*(m-n)+n);
		}
		
		var oC=document.getElementById('c1');	
		var gd=oC.getContext('2d');
		
		var winW=document.documentElement.clientWidth;
		var winH=document.documentElement.clientHeight;
		
		oC.width=winW;
		oC.height=winH;
		
		var N=30;
		
		var aPoint=[]; //存放点
				
		for(var i=0; i<N; i++){
			aPoint[i]={
				x:rnd(0,winW),
				y:rnd(0,winH),
				speedX:rnd(-10,10),
				speedY:rnd(-10,10)
			};
		}
		
		//画点
		setInterval(function(){
			gd.clearRect(0,0,oC.width,oC.height);
			
			for(var i=0; i<aPoint.length; i++){
				drawPoint(aPoint[i]);
			}
			
			//点移动
			for(var i=0; i<aPoint.length; i++){
				if(aPoint[i].y<=0){
					aPoint[i].y=0;
					aPoint[i].speedY*=-1;
				}
				if(aPoint[i].y>=winH){
					aPoint[i].y=winH;
					aPoint[i].speedY*=-1;
				}
				if(aPoint[i].x<=0){
					aPoint[i].x=0;
					aPoint[i].speedX*=-1;
				}
				if(aPoint[i].x>=winW){
					aPoint[i].x=winW;
					aPoint[i].speedX*=-1;
				}
				aPoint[i].x+=aPoint[i].speedX;
				aPoint[i].y+=aPoint[i].speedY;
			}
		},16);
		function drawPoint(p){
				var pW=3;
				var pH=3;
				
				gd.fillStyle='rgba(255,255,255,.6)';
				gd.fillRect(p.x-pW/2,p.y-pH/2,pW,pH);
			}	
	})();// JavaScript Document
};
