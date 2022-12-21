
// ================================================== INPUT MASK (https://github.com/RobinHerbots/Inputmask)
$(document).ready(function () {
    $(".mask-phone").inputmask({
        mask: "+7 999 999 99 99",
        clearIncomplete: true
    });
});

// ================================================== СЛАЙДЕРЫ 
const swiper = new Swiper('.home-slider .swiper', {
    effect: 'fade',
    speed: 800,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    parallax: true
});
// ==================================================
const swiper2 = new Swiper('.advantages-slider .swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    direction: 'horizontal',
    pagination: {
        el: ".advantages-slider__pagination",
        type: "custom",
        renderCustom: function (swiper2, current, total) {
            return `<span class="advantages-slider__pagination current">${current}</span> - <span class="advantages-slider__pagination total">${total}</span>`;
        }
    },
    navigation: {
        nextEl: ".advantages-slider__nav .next",
        prevEl: ".advantages-slider__nav .prev",
    },
    parallax: true,
    breakpoints: {
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            direction: 'vertical'
        },
        565: {
            slidesPerView: 2,
            slidesPerGroup: 1
        }
    }
});
// ==================================================
const swiper3 = new Swiper('.decors__slider--top .swiper', {
    slidesPerView: 4,
    spaceBetween: 21,
    navigation: {
        nextEl: ".decors__slider--top .next",
        prevEl: ".decors__slider--top .prev",
    },
    breakpoints: {
        1280: {
            slidesPerView: 7,
        },
        992: {
            slidesPerView: 5,
        }
    }
});
const swiper4 = new Swiper('.decors__slider--bottom .swiper', {
    slidesPerView: 4,
    spaceBetween: 21,
    navigation: {
        nextEl: ".decors__slider--bottom .next",
        prevEl: ".decors__slider--bottom .prev",
    },
    breakpoints: {
        1280: {
            slidesPerView: 7,
        },
        992: {
            slidesPerView: 5,
        }
    }
});
// ==================================================
const swiper8 = new Swiper('.technic__slider .swiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".technic__slider .next",
        prevEl: ".technic__slider .prev",
    },
    breakpoints: {
        1001: {
            slidesPerView: 5,
            spaceBetween: 25,
        }
    }
});

swiper3.on('slideChange', function () {
    zooming()
});
swiper4.on('slideChange', function () {
    zooming()
});
swiper8.on('slideChange', function () {
    zooming()
});

function zooming() {
    const slider = document.querySelectorAll('.zoom-slider')
    slider.forEach(elem => {
        const decors = elem.querySelectorAll('.zoom-elem')
        decors.forEach(item => {
            const zoom = elem.querySelector('.zoom')
            const itemImg = item.innerHTML
            item.addEventListener('mouseover', () => {
                let itemPos = item.getBoundingClientRect().left
                const sliderPos = elem.getBoundingClientRect().left
                zoom.classList.add('active')
                zoom.innerHTML = itemImg
                zoom.style.left = `${itemPos - sliderPos}px`
            })
            item.addEventListener('mouseout', () => {
                zoom.classList.remove('active')
            })
        })
    })
}
// ================================================== SLIDERS IN TABS
if (document.documentElement.clientWidth < 770) {
    for(i = 6; i <= 12; i+=3){
        const swiperMobile = new Swiper(`.tabs__content--${i} .swiper`, {
            slidesPerView: 1,
            spaceBetween: 30,
            breakpoints: {
                650: {
                    slidesPerView: 2,
                }
            }
        });
    }
}
// ================================================== TABS
const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
    const header = document.querySelector(headerSelector),
        tab = document.querySelectorAll(tabSelector),
        content = document.querySelectorAll(contentSelector);
    function hideContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });
        tab.forEach(item => {
            item.classList.remove(activeClass);
        });
    }
    function showContent(i) {
        content[i].style.display = 'block';
        tab[i].classList.add(activeClass);
    }
    header.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) ||
                target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideContent();
                    showContent(i);
                }
            });
        }
    });
    hideContent();
    showContent(0);
}
// ================================================= CUSTOM SELECT
function customSelect() {
    document.querySelectorAll('.select').forEach(select => {
        let selectHeader = select.querySelectorAll('.select__header'),
            selectItem = select.querySelectorAll('.select__item'),
            currentItem = select.querySelector('.select__current'),
            selectInput = select.querySelector('.select__value');
        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle);
        });
        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose);
        });
        function selectToggle() {
            this.parentElement.classList.toggle('is-active');
        }
        function selectChoose() {
            let selectOption = this.innerText,
                thisSelect = this.closest('.select');
            currentItem.innerHTML = selectOption;
            selectInput.value = selectOption;
            selectItem.forEach(item => {
                item.classList.remove('is-active')
            });
            this.classList.add('is-active')
            thisSelect.classList.remove('is-active');
        }
        document.addEventListener('click', (e) => {
            if (!select.contains(e.target)) {
                select.classList.remove('is-active');
            }
        });
    });
}
// ================================================= SCROLL TO SECTION
$(function () {
    $('.benefit__btn').on('click', function (e) {
        e.preventDefault();
        var plansOffset = $('#complete').offset().top - 100;
        $('html, body').animate({
            scrollTop: plansOffset
        }, 1000);
    });
});
// ================================================= FANCYBOX (https://fancyapps.com/docs/ui/quick-start/)
Fancybox.bind('[data-fancybox="popup-assembly"]', {
    animated: false,
    showClass: false,
    hideClass: false,
    Toolbar: false,
    closeButton: "top",
    click: false,
    dragToClose: false,
    Carousel: {
        // Disable content slide animation
        friction: 0,
        // Disable touch guestures
        Panzoom: {
            touch: false,
        },
        Navigation: false,
    },
});
// ================================================= GSAP
function GsapAnimation(animationElem, animationTrigger) {
    gsap.from(animationElem, {
        y: 100,
        scrollTrigger: {
            pin: false,
            trigger: animationTrigger,
            start: "top 800px",
            end: "300px 400px",
            // end: "+=1500",
            scrub: 2,
            markers: false,
            id: '1'
        }
    });
}
// ================================================= PRELOADER
function preloader(type){
    const preloader = document.querySelector('.preloader');
        preloader.classList.add('preloader__animation')
        document.documentElement.style.overflow = 'hidden'
        setTimeout(() => {
            preloader.classList.add('preloader__hidden')
        }, 1500)
        setTimeout(() => {
            document.documentElement.style.overflow = 'inherit'
        }, 5000)
}

zooming()
tabs('.tabs__header', '.tabs__btn', '.tabs__content', 'active')
customSelect()
preloader() 
GsapAnimation('.advantages', '.advantages')
GsapAnimation('.decors', '.decors')
GsapAnimation('.complete', '.complete')
GsapAnimation('.technic', '.technic')