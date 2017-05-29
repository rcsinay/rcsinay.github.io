$(document).ready(function(){
	$('.right.menu.open .item.menu').click(function(e){
        e.preventDefault();
		$('.ui.vertical.menu').transition('slide down');
	});
    
	$('.ui.dropdown').dropdown();
});