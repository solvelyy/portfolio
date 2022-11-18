$(document).ready(function(){
    $('.all_menu').click(function(){
         $('#menu_wrap').animate({'left':'0'},'fast');
    });
    
    $('.close').click(function(){
         $('#menu_wrap').animate({'left':'-250px'},'fast');
    });
    
});
