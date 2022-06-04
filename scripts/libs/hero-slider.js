class HeroSlider {
    constructor(el) {
        this.el = el;
        this.swiper = this._initSwiper();
    }

    _initSwiper() {
        return new Swiper(this.el, {
            // Optional parameters
            // direction: 'vertical',
            loop: true,
            grabCursor: true,
            // centeredSlides: true,
            speed: 1000,
            breakpoints: {
                376: {
                    slidesPerView: 2.7
                },
                960: {
                    slidesPerView: 5
                },
                1920: {
                    slidesPerView: 7,
                },
            },
        });
    }

    start(options = {}) {
        options = Object.assign({
            delay: 1000,
            disableOnInteraction: false
        }, options);
        
        this.swiper.params.autoplay = options;
        this.swiper.autoplay.start();
    }
    stop() {
        this.swiper.autoplay.stop();
    }
}