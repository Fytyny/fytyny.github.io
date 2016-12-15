
function change(){
		var x = $(window);
		var s = $("#first");
		if (x.scrollTop()>130 && $(window).width()>334 ){
			s.fadeIn("fast");
		} else{
			s.fadeOut("fast");
		}
	}
$(document).ready(function(){ 
	$("#podpis").hide();
    var div = $("#txt");
    var i = 0; 
    var j = 0;
    $("#pierwsze").mouseenter(function(){ 
	    	if (i<1){
		hidesomeinfo($(".bla"));
			 i = 0; j = 0;
    	 	var div = $("#txt");
       	  	showsomeinfo(div);
			i=1;
		}
        }); 
    
    $("#drugie").mouseenter(function(){ 
	    if (j<1){
			hidesomeinfo($(".bla"));
		     i = 0; j = 0;
    	    var div = $("#txt2");
		    var p = $("#drugie").position();
			div.css("left", p.left);
       		showsomeinfo(div);
		    j=1;
	    }
    
   }); 
   $(".bla").click(function(){
	   hidesomeinfo($(".bla"));
	   i = 0; j = 0;
   });
   
   $("#git").hover(function(){
	   $("#podpis").slideDown();
	   
   },function(){
	   $("#podpis").slideUp();
   });
 
});
	 
function showsomeinfo (div){
			div.animate({height: '446px', opacity: '0.4'}, "fast"); 
        	div.animate({width: '100%', opacity: '0.9',left: '0px'} ,500); 
}
function hidesomeinfo(div){
			div.animate({height: '0px', opacity: '0',width: '200px'}, "fast"); 
			
}
