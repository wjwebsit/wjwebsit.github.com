// JavaScript Document
window.onload=function(){
//登录
	var oLogin=document.getElementById('login');
	var oLoginPos=document.getElementById('login_pos');
	oLogin.onclick=function()
	{
		if(oLoginPos.style.display=='block')
		{
			oLoginPos.style.display='none';
			oLogin.style.position='relative';
			oLogin.style.zIndex='2';
		}
		else
		{
			oLoginPos.style.display='block';
			oLogin.style.position='relative';
			oLogin.style.zIndex='2';
			
		}
	};
	
//展开
	var oSearchMore=document.getElementById('search_more');
	var oSearchPos=document.getElementById('search_pos');
	oSearchMore.onclick=function()
	{
		if(oSearchMore.innerHTML=='展开（24）')
		{
			oSearchPos.style.display='block';
			oSearchMore.innerHTML='收起（24）';
		}
		else
		{
			oSearchPos.style.display='none';
			oSearchMore.innerHTML='展开（24）';
		}
	};
//上一个，下一个
	var oBannerList=document.getElementById('bannerlist');
	var oBtns=document.getElementById('btns');
	var oBtnPrev=document.getElementById('btnprev');
	var oBtnNext=document.getElementById('btnnext');
	var aBlistBox=oBannerList.getElementsByClassName('cont_left_blistbox');
	oBannerList.onmouseover=function()
	{
		oBtns.className='btns active';
	};
	oBannerList.onmouseout=function()
	{
		oBtns.className='btns';
	};
	var n=0;
	oBtnNext.onclick=function()
	{
		
		if((n+1)==aBlistBox.length)
		{
			for(var i=0; i<aBlistBox.length; i++)
			{
				aBlistBox[i].className='cont_left_blistbox';
			}
			aBlistBox[aBlistBox.length-1].className='cont_left_blistbox active';
		}
		else
		{
			for(var i=0; i<aBlistBox.length; i++)
			{
				aBlistBox[i].index=i;
				if(aBlistBox[i].className=='cont_left_blistbox active')
				{
					this.index=n;
					for(var i=0; i<aBlistBox.length; i++)
					{
						aBlistBox[i].className='cont_left_blistbox';
					}
					aBlistBox[n+1].className='cont_left_blistbox active';
					n++;
				}
			}
		}
	};
	var n=0;
	oBtnPrev.onclick=function()
	{
		
		if(n==0)
		{
			for(var i=0; i<aBlistBox.length; i++)
			{
				aBlistBox[i].className='cont_left_blistbox';
			}
			aBlistBox[0].className='cont_left_blistbox active';
		}
		else
		{
			for(var i=0; i<aBlistBox.length; i++)
			{
				aBlistBox[i].index=i;
				if(aBlistBox[i].className=='cont_left_blistbox active')
				{
					this.index=n;
					for(var i=0; i<aBlistBox.length; i++)
					{
						aBlistBox[i].className='cont_left_blistbox';
					}
					aBlistBox[n-1].className='cont_left_blistbox active';
					n--;
				}
			}
		}
	};
//选项卡1	
	(function (sName)
		{
			var aParent=document.getElementsByClassName(sName);
			for(var i=0; i<aParent.length; i++)
			{
				(function (oParent)
					{
						var aTabBtn=oParent.getElementsByClassName('tabbtn');
						var aTabCont=oParent.getElementsByClassName('tabcont');
						for(var i=0; i<aTabBtn.length; i++)
						{	
							aTabBtn[i].index=i;
							aTabBtn[i].onclick=function ()
							{
								for(var i=0; i<aTabBtn.length; i++)
								{	
									aTabBtn[i].className='tabbtn';
									aTabCont[i].className='tabcont';
									
								}
								this.className='tabbtn active';
								aTabCont[this.index].className='tabcont active';
							};
						}
					})(aParent[i]); //封闭空间
			}
			
		})('tab'); //封闭空间
//选项卡2
	(function (sName)
		{
			var aParent=document.getElementsByClassName(sName);
			for(var i=0; i<aParent.length; i++)
			{
				(function tab2(oParent)
			{
				var aTabBtn=oParent.getElementsByClassName('footerbtn');
				var aTabCont=oParent.getElementsByClassName('footertab_cont');
				for(var i=0; i<aTabBtn.length; i++)
				{	
					aTabBtn[i].index=i;
					aTabBtn[i].onclick=function ()
					{
						for(var i=0; i<aTabBtn.length; i++)
						{	
							aTabBtn[i].className='fl footerbtn';
							aTabCont[i].className='footertab_cont clearFix';
							
						}
						this.className='fl active footerbtn';
						aTabCont[this.index].className='footertab_cont active clearFix';
					};
				}
			})(aParent[i]);//封闭空间
			}
			
		})('footertab');//封闭空间
//选项卡3
	(function (sName)
	{
		var aParent=document.getElementsByClassName(sName);
		for(var i=0; i<aParent.length; i++)
		{
			(function (oParent)
		{
			var aTabBtn=oParent.getElementsByClassName('crbtn');
			var aTabCont=oParent.getElementsByClassName('cont_right_clink_box');
			for(var i=0; i<aTabBtn.length; i++)
			{	
				aTabBtn[i].index=i;
				aTabBtn[i].onclick=function ()
				{
					for(var i=0; i<aTabBtn.length; i++)
					{	
						aTabBtn[i].className='crbtn fl';
						aTabCont[i].className='cont_right_clink_box';
						
					}
					this.className='crbtn fl active';
					aTabCont[this.index].className='cont_right_clink_box active';
				};
			}
		})(aParent[i]);//封闭空间
		}
	})('cont_right_cont'); //封闭空间
};



































