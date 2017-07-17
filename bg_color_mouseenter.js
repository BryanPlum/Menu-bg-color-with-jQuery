$(document).ready(function(){
	HoverMenu()
})

function HoverMenu(){
	$("#menu ul li a").mouseenter(function(){
		$(this).css("background-color", "yellow")
	})
	$("#menu ul li a").mouseleave(function(){
        	$(this).css("background-color", "#fff");
    	})
}
