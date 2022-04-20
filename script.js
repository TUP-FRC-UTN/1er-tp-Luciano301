
$(window).on('resize', function(){
var win = $(this); //this = window
if (win.width() <= 992) { 
    $('.img-fluid').hide();
    $('.navbar').removeClass('navbar-fixed-left');
    $('.navbar').addClass('fixed-top');
    ('.col')
 }else{
    $('.img-fluid').show();
    $('.navbar').removeClass('fixed-top');
    $('.navbar').addClass('navbar-fixed-left');
 }
});


$(document)
.on('click', 'form button[type=submit]', function(e) {
    
    e.preventDefault(); //prevent the default action

    let isValid = true;

    if( ($('#userName').val()).length < 3 ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid User Name!'
          })
          return
    }

    if( ! isEmail($('#email').val())) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Invalid Email!'
          })
          return
    }

    if( ($('#subject').val()) == -1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please Select a Subject!'
          })
          return
    }

    if( ($('#message').val()).length < 10 ) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please write at least 10 letters'
          })
          return
    }

    Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Thank you for your message, I will be in contact soon.'
      })

    $('#modalContactForm').modal('hide')
});

function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }