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
	var aA1=oLeftList.getElementsByTagName('a');
	
	//改变h2的字
	var oLtit=document.querySelector('.positive .instruction h2');
	var oRtit=document.querySelector('.reverse .instruction h2');	
	var arr=[
		{'name':'ABOUT','href':'./html/about.html'},
		{'name':'WORKS','href':'./html/w-works.html'},
		{'name':'MOBILES','href':'./html/mobile.html'},
		{'name':'CONTACT US','href':'./html/conect.html'}
	];
	var arr2=[
		{'name':'MOBILES','href':'./html/mobile.html'},
		{'name':'CONTACT US','href':'./html/conect.html'},
		{'name':'WORKS','href':'./html/w-works.html'},
		{'name':'ABOUT','href':'./html/about.html'}
	];
	
	var iNow=0;
	var leftH=aLi[0].offsetHeight;
	setInterval(function (){
		//alert(aLi[iNow]);
		//alert(aLi[iNow].className);
		for(var i=0; i<aLi.length; i++)
		{
			aLi[i].className='';
		}
		aLi[iNow].className='active';
		oLtit.innerHTML=arr[iNow].name;
		aA1[iNow].href=arr[iNow].href;
		iNow++;
		if(iNow==aLi.length)
		{
			iNow=0;
		}
	},3000);
	
	//右边内容运动
	var oRighttList=document.getElementById('right-list');
	var aLi2=oRighttList.children;
	var aA2=oRighttList.getElementsByTagName('a');
	
	var iNow2=0;
	setInterval(function (){
		//alert(aLi[iNow]);
		//alert(aLi[iNow].className);
		for(var i=0; i<aLi2.length; i++)
		{
			aLi2[i].className='';
		}
		aLi2[iNow2].className='active';
		oRtit.innerHTML=arr2[iNow2].name;
		aA2[iNow2].href=arr2[iNow2].href;
		iNow2++;
		if(iNow2==aLi2.length)
		{
			iNow2=0;
		}
	},3000);
	
	
	//时钟内部选项卡切换
	/*;(function (){
		var oCarous=document.querySelector('.Carousel ul');
		//一个li的宽度
		var W=oCarous.children[0].offsetWidth;
		//复制一份ul
		oCarous.innerHTML+=oCarous.innerHTML;
		//alert(oCarous.innerHTML);
		//计算ul的宽度
		oCarous.style.width=oCarous.children.length*W+'px';
		//alert(oCarous.style.width);	
		var left=0;
		var width=oCarous.offsetWidth/2;
		
		setInterval(function (){
			left-=10;
			//alert(left);
			if(left<-width)
			{
				left=0;
			}
			oCarous.style.transform='translateX('+left+'px)';
		},16);
	})();*/
	
	
	//时钟里ul运动
/*	(function (){
		var oCarous=document.querySelector('.Carousel ul');
		//一个li的宽度
		var W=oCarous.children[0].offsetWidth;
		
		var count=0;
		//oCarous.style.WebkitTransform='translate3d('+(-count*W)+'px,0,0)';
		oCarous.style.WebkitTransition='1s all ease';
		setInterval(function (){
			
			oCarous.style.WebkitTransition='1s all ease';
			oCarous.style.WebkitTransform='translate3d('+(-W*count)+'px,0,0)';
			count++;
			if(count>=oCarous.children.length)
			{
				count=0;
				oCarous.style.transition='none';
				oCarous.style.WebkitTransform='translate3d('+(-count*W)+'px,0,0)';
			}
		},2000);	
	})();
		
*/
	//时钟里ul运动
	var oCarous=document.querySelector('.Carousel ul');
	//一个li的宽度
	var W=oCarous.children[0].offsetWidth;
	
	var count=0;
	setInterval(function (){
		oCarous.style.left=-W*count+'px';
		count++;
		if(count>=oCarous.children.length)
		{
			count=0;
		}
	},3000);
	
};















