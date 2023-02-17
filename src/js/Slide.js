let slides = document.querySelector('.slides');
let slide = slides.querySelectorAll('.slide');

class Slide {
    constructor(slide, index = 0, duration = 0) {
        this.slide = slide;
        this.index = index;
        this.duration = duration;
    }

    nextSlide() {
        let currentIndex = this.index + 1;
        if (currentIndex  > this.slide.length - 1) 
            currentIndex = 0;
        
        this.index = currentIndex;
        this.changeSlide();
    }

    prevSlide() {
        let currentIndex = this.index - 1;
        if(currentIndex < 0) 
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
        let prevIndex = currentIndex - 1 < 0 ? this.slide.length - 1 : currentIndex - 1;
        let nextIndex = currentIndex + 1 > this.slide.length - 1 ? 0 : currentIndex + 1;
        let slides = this.slide;
        
        this.slide.forEach(e => {
            e.classList.remove('slide-show', 'slide-prev', 'slide-next');
        });

        slides[currentIndex].classList.add('slide-show');
        slides[nextIndex].classList.add('slide-next');
        slides[prevIndex].classList.add('slide-prev');
        // console.log(prevIndex, currentIndex, nextIndex);
    }
}

let mySlide = new Slide(slide);
