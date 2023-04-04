$(function(){
    var mixer = mixitup('.directions__list')

    $('.directions__filter-item').on('click', function(){
        $('.directions__filter-item').removeClass('directions__filter-item--active')
        $(this).addClass('directions__filter-item--active')
    })
    
    $('.team__slider').slick({
        slidesToShow:4,
        infinity:true,
        draggable: false,
        arrows:false,
        dots:false,
        appendDots: $('.team__dots'),
        waitForAnimate:false,
        responsive:
        [
        {
            breakpoint:1100,
            settings:{
                slidesToShow: 3,
            },
        },
        {
            breakpoint:750,
            settings:{
                slidesToShow: 2,
            },
        },
        {
            breakpoint:501,
            settings:{
            slidesToShow: 1,
            dots:true,
            draggable:true,
            },
        }
        ]
    })
    $('.team__slider-prev').on('click', function(e){
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })
    $('.team__slider-next').on('click', function(e){
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })
    $('.testimonials__slider').slick({
        arrows:false,
        dots: true,
        appendDots: $('.testimonials__dots'),
        waitForAnimate:false
    })
    $('.testimonials__arrow-prev').on('click', function(e){
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })
    $('.testimonials__arrow-next').on('click', function(e){
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })
    $('.program__acc-link').on('click', function (e) {
        e.preventDefault()
        if ($(this).hasClass('program__acc-link--active')) {
        $(this).removeClass('program__acc-link--active')
        $(this).children('.program__acc-text').slideUp()
        } else {
        $('.program__acc-link').removeClass('program__acc-link--active')
        $('.program__acc-text').slideUp()
        $(this).addClass('program__acc-link--active')
        $(this).children('.program__acc-text').slideDown()
        }
    })
    
    $(".header__nav-list a, .header__top-btn, .footer__madewith-gotop").on("click", function (e) {
                //отменяем стандартную обработку нажатия по ссылке
                e.preventDefault();
                //забираем идентификатор бока с атрибута href
                var id  = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                    top = $(id).offset().top;
                //анимируем переход на расстояние - top за 1500 мс
                $('body,html').animate({scrollTop: top}, 1500);
            });
    $('.burger , .overlay').on('click', function(e){
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
        $('.burger').toggleClass('open');
    })
    setInterval(() =>{
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false)
        {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
        }

    }, 0);
    $('.footer__col-title').on('click', function () {
        $(this).next().slideToggle()
    });
})