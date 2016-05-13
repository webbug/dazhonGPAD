$(document).ready(function(){
	 /*禁止默认拖动事件*/
	  document.ontouchmove = function(event){
		event.preventDefault();
	  };
	  
	  
	   
	   var ii=0;
	   Zepto('.page3').swipeLeft(function(){
	   	 ii=ii-1;
	   	 Zepto('.d_prev').trigger('click');
	   	 jQuery('.d_img li').find('img').removeClass('regray');
	   	 jQuery('.d_img li').eq(ii).find('img').addClass('regray');
	   	 if(ii == -5){
	   	 	ii=0;
	   	 	jQuery('.d_img li').find('img').removeClass('regray');
	   	    jQuery('.d_img li').eq(ii).find('img').addClass('regray');
	   	 }
	   	 
	   });
	   Zepto('.page3').swipeRight(function(){
	   	 ii=ii+1
	   	 Zepto('.d_next').trigger('click');
	   	  jQuery('.d_img li').find('img').removeClass('regray');
	   	  jQuery('.d_img li').eq(ii).find('img').addClass('regray');
	   	  if(ii == 5){
	   	  	ii=0;
	   	  	jQuery('.d_img li').find('img').removeClass('regray');
	   	    jQuery('.d_img li').eq(ii).find('img').addClass('regray');
	   	  }
	   	  
	   });
       
       
       jQuery('.jg_tc,.qsj_tc').css({
       	'top':jQuery('.top_lan').height()+'px',
       	"height":jQuery(window).height()-jQuery('.top_lan').height()+'px'
       });
//    
        Zepto('.page1_b2').tap(function(){
        	Zepto('.jg_tc1').show();
        });
        Zepto('.close_jg').tap(function(){
        	Zepto('.jg_tc1').hide();
        });
        
        
        Zepto('.page2_b1').tap(function(){
        	Zepto('.qsj_tc').show();
        });
        Zepto('.qsj_tc .close_jg').tap(function(){
        	Zepto('.qsj_tc').hide();
        });
        
        
        
        Zepto('.xw1').tap(function(){
        	Zepto('.xw_con').show();
        	Zepto('.yy1_xw').show();
        	myScroll.refresh();
        	loadedIscrollo();
        });
         Zepto('.xw2').tap(function(){
        	Zepto('.xw_con').show();
        	Zepto('.yy2_xw').show();
        	myScroll.refresh();
        	loadedIscrollo();
        });
        
        Zepto('.xw3').tap(function(){
        	Zepto('.xw_con').show();
        	Zepto('.yy3_xw').show();
        	myScroll.refresh();
        	loadedIscrollo();
        });
        
        
        Zepto('.page3 .page1_b1').tap(function(){
        	Zepto('.xw_con').show();
        	Zepto('.cspz_con').show();
        	myScroll.refresh();
        	loadedIscrollo();
        });
       
        Zepto('#wrapbao .close_jg').tap(function(){
        	Zepto('.xw_con').hide();
        	Zepto('.yy1_xw').hide();
        	Zepto('.yy2_xw').hide();
        	Zepto('.yy3_xw').hide();
        	Zepto('.cspz_con').hide();
        });
        
        
   
        
        
        
        /*滚动start*/
       
       
       
		
		var myScroll;
		
		function loadedIscrollo () {
			myScroll = new IScroll('#wrapper', {
				scrollbars: false,
				mouseWheel: true,
				interactiveScrollbars: true,
				shrinkScrollbars: 'scale',
				fadeScrollbars: true
			});
		}
        /*滚动end*/



        function loaded(){
			$('.loading').hide();
			$('.wrapper').css('opacity','1');
			loadedIscrollo();
	 
		}
		function hengshuping(){
			if(window.orientation==180||window.orientation==0){loaded();};
			if(window.orientation==90||window.orientation==-90){loaded();}
		}
		window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", hengshuping, false);
		window.addEventListener('load', loaded, false);


});


	  






