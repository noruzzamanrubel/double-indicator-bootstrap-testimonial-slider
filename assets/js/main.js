$(document).ready(function(){

    $('.carousel').on('slid.bs.carousel', function() {
        $(".carousel-indicators2 li").removeClass("active");
        indicators = $(".carousel-indicators li.active").data("slide-to");
        a = $(".carousel-indicators2").find("[data-slide-to='" + indicators + "']").addClass("active");
        console.log(indicators);
      
      })

});
