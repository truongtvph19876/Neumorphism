let slide = document.querySelector('.slides');
let slides = slide.querySelectorAll('.slide');
let dot = slide.querySelector('.dots');

class Slide {
    constructor(slide, dot = null, index = 0, duration = 0) {
        this.slide = slide;
        this.index = index;
        this.duration = duration;
        this.dot = dot;

        // khởi tạo vị trí slides
        let currentIndex = this.index;
        let prevIndex = currentIndex - 1 < 0 ? this.slide.length - 1 : currentIndex - 1;
        let nextIndex = currentIndex + 1 > this.slide.length - 1 ? 0 : currentIndex + 1;
        let slides = this.slide;

        slides[prevIndex].classList.add('slide-prev');
        slides[currentIndex].classList.add('slide-show');
        slides[nextIndex].classList.add('slide-next');

        // khởi tạo dots cho slide
        let dothtml = '';
        for (let index = 0; index < this.slide.length; index++) {
            dothtml += '<div slide-index="' + index + '" class="dot w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 border md:border-2 border-[#c0c0c0] rounded-full cursor-pointer"></div>';
        }
        this.dot.innerHTML = dothtml;
        let dots = this.dot.querySelectorAll('.dot');
        dots[currentIndex].classList.add('dot-current');

    }

    nextSlide() {
        let currentIndex = this.index + 1;
        if (currentIndex > this.slide.length - 1)
            currentIndex = 0;

        this.index = currentIndex;
        this.changeSlide();
    }

    prevSlide() {
        let currentIndex = this.index - 1;
        if (currentIndex < 0)
            currentIndex = this.slide.length - 1;

        this.index = currentIndex;
        this.changeSlide();
    }

    moveToSlide(index) {
        this.index = index;
        this.changeSlide();
    }

    changeSlide() {

        let currentIndex = this.index;
        let nextIndex = currentIndex + 1 > this.slide.length - 1 ? 0 : currentIndex + 1;
        let prevIndex = currentIndex - 1 < 0 ? this.slide.length - 1 : currentIndex - 1;
        let slides = this.slide;
        let dots = this.dot.querySelectorAll('.dot');

        this.slide.forEach((e, i) => {
            dots[i].classList.remove('dot-current');
            e.classList.remove('slide-show', 'slide-prev', 'slide-next');
        });

        slides[currentIndex].classList.add('slide-show');
        slides[nextIndex].classList.add('slide-next');
        slides[prevIndex].classList.add('slide-prev');
        // console.log(prevIndex, currentIndex, nextIndex);
        dots[currentIndex].classList.add('dot-current');
    }
}

let mySlide = new Slide(slides, dot);

let slideInterval;
function slideAuto() {
    slideInterval = setInterval(() => {
        mySlide.nextSlide();
    }, 2000);
}

slideAuto();
