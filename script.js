
$(document).ready(function (){
 $('#flip1').click(function(){
        $('.jumbotron').slideUp('slow');
        
    });
    
    $('#flip').click(function(){
        $('.jumbotron').slideDown('slow');
        
    });
    $('.jumbotron').mouseenter(function(){
        $('#flip').slideUp('slow');
        
    });

    $('#flip1').click(function(){
        $('#flip').slideDown('slow');
        
    });
});
