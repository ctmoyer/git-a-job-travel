import { throttle } from 'lodash';

class RevealOnScroll{
    constructor(){
        this.itemsToReveal = document.querySelectorAll('.feature-item');

        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();
    }

    events(){
        window.addEventListener('scroll', this.scrollThrottle);
    }
    
    
    calcCaller(){
        console.log('Scroll function called')
        this.itemsToReveal.forEach( el => {
            this.calculateIfScrolledTo(el);
        });

    }
    calculateIfScrolledTo(el){
        // el.getBoundingClientRect().y isn't supported in the Edge browser
        // Using .top is supported across all major browsers.
        let scrollPercent = ( el.getBoundingClientRect().top / window.innerHeight ) * 100;
        if( scrollPercent < 75 ){
            el.classList.add('reveal-item--is-visible');
        }
    }

    hideInitially(){
        this.itemsToReveal.forEach( el => el.classList.add('reveal-item') );
    }
}

export default RevealOnScroll;