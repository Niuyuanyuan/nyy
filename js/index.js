document.addEventListener('readystatechange',function(){
	if(document.readyState==='complete')
	{
		var slides=document.querySelectorAll('.slide-1');
		var xiaodian=document.querySelectorAll('.xiaodian li');
		var W=document.documentElement.offsetWidth;
		var curdian=xiaodian[0];
		window.onresize=function()
		{
			W=document.documentElement.offsetWidth;
			for(var i=0;i<slides.length;i++)
			{
				slides[i].style.left=i*W+'px';
			}
		}
		window.onresize();
		var move=(function(){
			var index=1;
			return function(){
				curdian.classList.remove('current-dian');
				curdian=xiaodian[index];
				curdian.classList.add('current-dian');

				var off=-index*W;
				index+=1;
				if(index==3)
				{
					index=0;
				}
				for(var i=0;i<slides.length;i++)
				{
					slides[i].style.transform='translateX('+off+'px)';
				}
			}
		})();


		for(var i=0;i<xiaodian.length;i++)
		{
			xiaodian[i].index=i;
			xiaodian[i].onclick=function()
			{
				curdian.classList.remove('current-dian');
				this.classList.add('current-dian');
				curdian=this;
				var off=-this.index*W;
				for(var i=0;i<slides.length;i++)
				{
					slides[i].style.transform='translateX('+off+'px)'
				}
				clearInterval(timerId);
			}
		}
	  var timerId=setInterval(move,2000);

        

	  }

})