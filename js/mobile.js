// JavaScript Document

window.onload=function (){
	var oWhole=document.querySelector('.whole');
	var aBtn=document.querySelectorAll('input');
	time=0;
	function enter(){ 
		aBtn[0].style.animation='.8s go linear forwards';
		aBtn[1].style.animation='.8s go linear forwards 1s';
		aBtn[2].style.animation='.8s go linear forwards 1.5s';
		aBtn[3].style.animation='.8s go linear forwards 2s';
	}
	function leave(){
		for(var i=0; i<aBtn.length; i++)
		{
			aBtn[i].style.opacity=0;
		}
	}
	oWhole.onclick=function (){
		time++;
		if(time%2==1)
		{
			for(var i=0; i<aBtn.length; i++)
			{
				aBtn[i].style.opacity=1;
			}
			enter();
		}
		else if(time%2==0)
		{
			for(var i=0; i<aBtn.length; i++)
			{
				aBtn[i].style.animation='none';
			}
			leave();
		}
	};	
	
	var oLi=document.querySelector('.list li');
	var oSpan1=document.querySelector('.pad span');
	var oSpan2=document.querySelector('.phone span');
	var aA=document.querySelectorAll('.list li a');
/*	var arr=[
		{'image':'1','href':'web/jhs.html'},
		{'image':'2','href':'web/hzt.html'},
		{'image':'3','href':'web/hexagone.html'},
		{'image':'4','href':'web/git.html'}
	];
*/	
	var arr=['web/jhs.html','hzt/index.html','web/hexagone.html','web/git.html'];
	aA[0].href=arr[0];
	aA[1].href=arr[0];
	for(var i=0; i<aBtn.length; i++)
	{
		(function (index){
			aBtn[i].onclick=function (){
				oSpan1.style.backgroundImage='url(../images/mobile/mobile'+index+'.jpg)';
				aA[0].href=arr[index];
				aA[1].href=arr[index];
				oSpan2.style.backgroundImage='url(../images/mobile/mobile'+index+'.jpg)';
			};
		})(i);
	}
	var d=0;
	var timer=null;
	timer=setInterval(function (){
		d++;
		oLi.style.transform='perspective(800px) translateZ(-100px) rotateY('+d+'deg)';
	},30);
	oLi.onmouseover=function (){
		clearInterval(timer);
	};
	oLi.onmouseout=function (){
		timer=setInterval(function (){
			d++;
			oLi.style.transform='perspective(800px) translateZ(-100px) rotateY('+d+'deg)';
		},30);	
	};	
	
};


















