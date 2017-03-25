$(document).ready(function() {
    $('.hamburger--collapse').click(function() {
      if ($('.hamburger--collapse').hasClass('is-active')){
        $('.hamburger--collapse').removeClass("is-active")
        $('.nav').hide()
      } else {
      $('.hamburger--collapse').addClass("is-active")
      $('.nav').show()
    }
  })
})
