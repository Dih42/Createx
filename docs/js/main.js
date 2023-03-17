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
        waitForAnimate:false
    })
    $('.team__slider-prev').on('click', function(e){
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })
    $('.team__slider-next').on('click', function(e){
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })
})