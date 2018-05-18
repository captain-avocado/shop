export default function slider() {

    let i = 0;

    const sliderList = document.querySelector('.slider__list');
    const sliderDots = document.querySelectorAll('.dots__item');

    const moveSlide = num => {
        sliderList.style.left = `-${num}00%`;
    }; 

    sliderDots.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            const lastActiveItem = Array.from(sliderDots).filter(item => item.classList.contains('active'));
            lastActiveItem[0].classList.remove('active');
            i = index;
            item.classList.add('active');
            moveSlide(index);
        });
    });

    const changeActiveItem = (newActiveItem) => {
        const lastActiveItem = Array.from(sliderDots).filter(item => item.classList.contains('active'));
        lastActiveItem[0].classList.remove('active');
        newActiveItem.classList.add('active');
    };
    
    const sliderImages = document.querySelector('.slider__images');
    // sliderImages.addEventListener('mousedown', e => {
    //     console.log(e.clientX);
    // });

    let directionOffsetX = 0;
    let currentOffsetX = 0;
    
    const dragMouseDown = e => {
      
        const closeDragElement = () => {
            document.onmouseup = null;
            document.onmousemove = null;
        };

        const elementDrag = (e) => {
            directionOffsetX = currentOffsetX - e.clientX;
            currentOffsetX = e.clientX;
            let sliderOffset = sliderList.offsetLeft;

            // console.log('---');
            if ((sliderOffset >= 0 && directionOffsetX < 0) || (sliderOffset <= -3600 && directionOffsetX > 0)) {
                // console.log(sliderOffset);
                // console.log(directionOffsetX);
                closeDragElement();
            } else {
                let sliderCurrentOffset = (sliderList.offsetLeft - directionOffsetX*40);
                
                if ((sliderCurrentOffset <= 0) && (sliderCurrentOffset >= -3600)) {
                    // console.log(sliderCurrentOffset);
                    // console.log(-(i * 900 + 450));
                    if (sliderCurrentOffset < -(i * 900 + 450)) {
                        i++;
                        sliderCurrentOffset = -(i * 900);
                        changeActiveItem(sliderDots[i]);
                        closeDragElement();
                    } else if (sliderCurrentOffset > -(i * 900 - 450)) {
                        i--;
                        sliderCurrentOffset = -(i * 900);
                        changeActiveItem(sliderDots[i]);
                        closeDragElement();
                    }

                    sliderList.style.left = sliderCurrentOffset + 'px';
                } else console.log((sliderList.offsetLeft - directionOffsetX*40));
            }
        };

        currentOffsetX = e.clientX;
        document.onmouseup = () => {
            sliderList.style.left = -(i * 900) + 'px';
            closeDragElement();
        };
        document.onmousemove = elementDrag;

    };
    sliderImages.onmousedown = dragMouseDown;

}
