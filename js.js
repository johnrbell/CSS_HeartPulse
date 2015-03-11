$(function(){

	$('.heartsolid').on('click',function(){
		$('.heartbloom,.heartbloom .a,.heartbloom .b').toggleClass('unpicked')		
		$('.heartsolid,.heartsolid .a,.heartsolid .b').toggleClass('unpicked')		
		$('.heartbloom,.heartbloom .a,.heartbloom .b').toggleClass('picked')		
		$('.heartsolid,.heartsolid .a,.heartsolid .b').toggleClass('picked')		

		$('.heartbloom').toggleClass('bloom')		
		setTimeout(function(){
			$('.heartbloom').toggleClass('bloom')		
		},1000)//close settimeout
	})//close onclick

	$('#slider').on('mouseup',function() {
	  $('.heartcontainer').css('width',$(this).val())
	  $('.heartcontainer').css('height',$(this).val())
	});//close on mouseup

})//close $(function)