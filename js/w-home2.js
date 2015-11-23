// JavaScript Document
function toDub(n)
{
	return n<10? '0'+n : ''+n;
}
window.onload=function (){
	//首页消失
	var oMask=document.getElementById('mask');
	var oAnimate=document.getElementById('animate');
	oAnimate.addEventListener('animationend',function (){
		oMask.style.display='none';	
	},false);
	
	
	//时钟
	var oDiv1=document.getElementById('t1');
	var oDiv2=document.getElementById('t2');
	var oTime=document.querySelector('.time');
	var oT=document.getElementById('time');
	
	function clock(){
		var oDate=new Date();
		var h=oDate.getHours();
		var m=oDate.getMinutes();
		var s=oDate.getSeconds();
		var str=toDub(h)+':'+toDub(m+1)+':'+toDub(s);
		oDiv1.style.transform='rotate('+(h*30+m/60*30)+'deg)';
		oDiv2.style.transform='rotate('+(m*6+s/60*6)+'deg)';
		oT.innerHTML=str;
	}
	
	clock();
	setInterval(clock,1000);
	
	//导航
	var oBtn=document.querySelector('footer .btn');
	var oNav=document.querySelector('footer .nav');
	oBtn.onclick=function (){
		if(oNav.style.left=='100px')
		{
			oNav.style.left='-1300px';
		}
		else
		{
			oNav.style.left='100px';
		}
	};
	
	//左边内容运动
	var oLeftList=document.getElementById('left-list');
	var aLi=oLeftList.children;
	//改变h2的字
	var oLtit=document.querySelector('.positive .instruction h2');
	var oRtit=document.querySelector('.reverse .instruction h2');
	var arr=['HOME','ABOUT','WORKS','MOBILES','CONTACT US'];
	var arr2=['MOBILES','HOME','CONTACT US','WORKS','ABOUT'];
	
	var iNow=0;
	setInterval(function (){
		//alert(aLi[iNow]);
		//alert(aLi[iNow].className);
		for(var i=0; i<aLi.length; i++)
		{
			aLi[i].className='';
		}
		aLi[iNow].className='active';
		oLtit.innerHTML=arr[iNow];
		iNow++;
		if(iNow==aLi.length)
		{
			iNow=0;
		}
	},3000);
	
	//右边内容运动
	var oRighttList=document.getElementById('right-list');
	var aLi2=oRighttList.children;
	
	var iNow2=0;
	setInterval(function (){
		//alert(aLi[iNow]);
		//alert(aLi[iNow].className);
		for(var i=0; i<aLi2.length; i++)
		{
			aLi2[i].className='';
		}
		aLi2[iNow2].className='active';
		oRtit.innerHTML=arr2[iNow2];
		iNow2++;
		if(iNow2==aLi2.length)
		{
			iNow2=0;
		}
	},3000);
	
	
	
	
};















