// debounce: call function n milliseconds after end of user input/event
import { throttle, debounce } from 'lodash';

class RevealOnScroll{
    constructor(els, threshold = 75){
        this.itemsToReveal = els;
        this.threshold = threshold;

        this.hideInitially();
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this);
        this.events();

        this.browserHeight = window.innerHeight;
    }

    events(){
        // The named function 'this.scrollThrottle' is used as a reference
        // to this particular event listener
        window.addEventListener('scroll', this.scrollThrottle);
        window.addEventListener('resize', debounce(()=>{
            console.log('debounce fired');
            this.browserHeight = window.innerHeight;
        }, 333));
    }
    
    
    calcCaller(){
        this.itemsToReveal.forEach( el => {
            if( !(el.isRevealed) ){
                this.calculateIfScrolledTo(el);
            }
        });
        
    }
    calculateIfScrolledTo(el){
        if( window.scrollY + this.browserHeight > el.offsetTop ){
            // el.getBoundingClientRect().y isn't supported in the Edge browser
            // Using .top is supported across all major browsers.
            let scrollPercent = ( el.getBoundingClientRect().top / this.browserHeight ) * 100;

            // console.log(`Scroll Percent: ${scrollPercent}\tThreshold: ${this.threshold}`);
            
            if( scrollPercent < this.threshold ){
                el.classList.add('reveal-item--is-visible');
                el.isRevealed = true;
                if(el.isLastItem){
                    // We reference the named function to remove this listener 
                    window.removeEventListener('scroll', this.scrollThrottle)
                }
            }    
        }
    }

    hideInitially(){
        this.itemsToReveal.forEach( el => {
            el.classList.add('reveal-item');
            el.isRevealed = false;
        });
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true;
    }
}

export default RevealOnScroll;