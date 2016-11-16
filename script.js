	function change(){
			
			var s = document.getElementById("first");
			var x = document.documentElement.clientWidth;
			if (document.documentElement.scrollTop>130 && x>334){
				s.style.display = "inline";
				
				
			} else{
				
				s.style.display = "none";
				
			}
			
		}