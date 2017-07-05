$(document).ready(function(){

  $('.smooth-scroll').on('click', function() {
			var page = $(this).attr('href');
			$('html, body').animate( { scrollTop: $(page).offset().top }, 500 );
			return false;
  });

  //navbar change
  $(document).scroll(function(){
    if($(document).scrollTop() > 400){
      $(".navbar").addClass('navbar-scrolled')
    }else{
      $(".navbar").removeClass('navbar-scrolled')
    }
  })

  //navbar dropdown
  $('.menu-btn').click(function(){
    $('.nav-menu').toggleClass('nav-menu-display')
  })

  //collapse
  for (let i=1; i < 5 ; i++){
    $('#collapse-section-' + i).click(function(){
      $('#content-section-' + i).slideToggle(500)
    })
  }

  //hire me
  $('.no').mouseenter(function(){
    let currentMargin = $(this).css('margin-left'),
        newMargin = parseInt(currentMargin) + 100 ;
        console.log(newMargin);
    $(this).css('margin-left', newMargin);
  });


});
