/* first exercise regarding Jquery */

/*$(document).ready(
    function() {
    console.log($('#p-text').text());
    //console.log(jQuery('.text').html());
    ($('.text').html('Hola! aqui estoy'));
    console.log($('.input-class').val());
    }
)*/

/* Example with first-child : turn into red */

$(document).ready(function() {
$('.students > li:first-child').on('click', function() {
$(this).css( 'background-color', 'red' );
});
});

/*background Verde*/
/*$(document).ready(function() {
    $('.students:first-child , ul').on('click', function() {
    $(this).css( 'background-color', 'green' );
    });
    });*/