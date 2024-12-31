document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper('.home', {
        // Specify Swiper options here
        loop: true, // Example option
        pagination: {
            el: '.swiper-pagination',
            clickable:true,
        },
        autoplay:{
            dealy:2000,
            disableOnInteraction:false,
        }
    });
});
