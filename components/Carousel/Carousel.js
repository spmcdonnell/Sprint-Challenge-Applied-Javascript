class Carousel {
    constructor(carousel) {
        this.carousel = carousel;

        this.leftBtn = this.carousel.querySelector('.left-button');
        this.rightBtn = this.carousel.querySelector('.right-button');

        this.images = Array.from(this.carousel.querySelectorAll('img'));

        this.images.forEach(image => (image.style.transform = 'translateX(150%)'));

        this.leftBtn.addEventListener('click', () => this.moveSlides(this.leftBtn));
        this.rightBtn.addEventListener('click', () => this.moveSlides(this.rightBtn));
    }

    moveSlides(button) {
        let imagesPosition = this.images[0].style.transform;
        let regex = /-/g;
        let negativeNum = imagesPosition.match(regex) ? '-' : '';
        let imagesPositionNoLetters = imagesPosition.replace(/\D|[-]/g, '');
        let fullNum = Number(`${negativeNum}${imagesPositionNoLetters}`);

        if (button === this.leftBtn) {
            this.images.forEach(image => (image.style.transform = `translateX(${fullNum + 100}%)`));
        } else if (button === this.rightBtn) {
            this.images.forEach(image => (image.style.transform = `translateX(${fullNum - 100}%)`));
        }
    }
}

let carousel = document.querySelector('.carousel');

let carouselInstance = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
