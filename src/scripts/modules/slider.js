export default function slider() {

    const sliderList = document.querySelector('.slider__list');
    const sliderDots = document.querySelectorAll('.dots__item');

    const moveSlide = num => {
        sliderList.style.left = `-${num}00%`;
    }; 

    sliderDots.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            const lastActiveItem = Array.from(sliderDots).filter(item => item.classList.contains('active'));
            lastActiveItem[0].classList.remove('active');

            item.classList.add('active');
            moveSlide(i);
        });
    });

}
