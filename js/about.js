'use strict';
window.onload=function (){
	
 introduce();
// 项目经验
function introduce()
{
	var data=[
		{
			'titName':'项目名称',
			'title':'中关村互联网金融服务中心',
			'cycName':'项目周期',
			'cycle':'1周',
			'toolName':'项目工具',
			'tool':'Adobe Dreamweaver、SVN',
			'desName':'项目描述',
			'describe':[
						'根据客户需求与psd设计图按照命名规范、模块化等思想编写静态布局。',
						'使用jQuery与插件等实现网页效果。其中时间轴巧妙的运用浮动与DOM操作。使用命名空间避免重名问题，同时将公共部分封装重用。',
						'使用SVN管理项目，做到分工协作、及时沟通问题。'
						]

		},
		{
			'titName':'项目名称',
			'title':'华之腾手机网站',
			'cycName':'项目周期',
			'cycle':'3天',
			'toolName':'项目工具',
			'tool':'Sublime',
			'desName':'项目描述',
			'describe':[
						'根据客户需求与运用相对单位布局编写静态页面。',
						'使用原生的事件绑定及swiper插件实现各种特效。',
						'主要功能在手机端提供产品展示，详情介绍。'
						]
		},
		{
			'titName':'项目名称',
			'title':'仿360页面',
			'cycName':'项目周期',
			'cycle':'3天',
			'toolName':'项目工具',
			'tool':'Sublime、WampServer',
			'desName':'项目描述',
			'describe':[
						'按照W3C规范编写静态布局,CSS样式,HTML结构的重用。',
						'根据原生JavaScript实现页面的动态效果。',
						'JavaScript代码的封装重用。',
						'练习精准布局，最大可能的还原设计图效果。'	
						]
		},
	];
/*	var iNow=window.location.hash.substring(1);
	if(iNow!=1)
	{
		return;	
	}
*/	
	_introduce();
	function _introduce()
	{
		// var oBox=document.querySelector('#i-box');
		var oBox=document.getElementById('i-box');
		//alert(oBox);
		oBox.innerHTML='';
		for(var i=0; i<data.length; i++)
		{
			var oTable=document.createElement('table');
			oTable.classList.add('i-show');
			oTable.cellspacing=0;
			oTable.cellpadding=0;
			oTable.dataset.index=i;
			oBox.appendChild(oTable);
		}
		
		var aTable=oBox.children;
		var iNow=0;
		aTable[iNow].classList.add('active');
		aTable[iNow].classList.add('animated');
		aTable[iNow].classList.add('bounce');
		_table(aTable[iNow],iNow);
		var oNext=document.querySelector('#i-next');
		
		// 下一个
			oNext.onclick=function (){
				for(var i=0; i<aTable.length; i++)
				{
					aTable[i].classList.remove('active');
					aTable[i].classList.remove('animated');
					aTable[i].classList.remove('bounce');
				}	
				iNow++;
				if(iNow>=aTable.length) iNow=0;
				_table(aTable[iNow],iNow);
				aTable[iNow].classList.add('animated');
				aTable[iNow].classList.add('bounce');
				aTable[iNow].classList.add('active');
			};

		
		function _des(arr)
		{
			var oUl=document.createElement('ul');
			for(var i=0; i<arr.length; i++)
			{
				var oLi=document.createElement('li');
				oLi.innerHTML='<em>'+(i+1)+'、</em>'+arr[i];
				oUl.appendChild(oLi);
			}
			return oUl.innerHTML;	
		}
		
		function _table(oTable,i)
		{
			
			oTable.innerHTML='<tr>'+
								'<th class="t-tit-name animated bounceInLeft">'+data[i].titName+'</th>'+
								'<td class="t-tit animated bounceInRight" >'+data[i].title+'</td>'+
							'</tr>'+
							'<tr>'+
								'<th class="t-cycle-name animated bounceInLeft">'+data[i].cycName+'</th>'+
								'<td class="t-cycle animated bounceInRight">'+data[i].cycle+'</td>'+
							'</tr>'+
							'<tr>'+
								'<th class="t-tool-name animated bounceInLeft">'+data[i].toolName+'</th>'+
								'<td class="t-tool animated bounceInRight">'+data[i].tool+'</td>'+
							'</tr>'+
							'<tr>'+
								'<th class="t-des-name t-bottom animated bounceInLeft ">'+data[i].desName+'</th>'+
								'<td class="t-des animated bounceInRight" ><ul>'+_des(data[i].describe)+'</ul></td>'+
							'</tr>';
		
		}
	}
}

};
























