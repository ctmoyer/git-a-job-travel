import { throttle } from "lodash";

class StickyHeader{
    constructor(el, threshold = 65){
        this.threshold = threshold
        this.siteHeader = document.querySelector('.site-header');

        this.events();
    }

    events(){
        window.addEventListener('scroll', throttle( () => this.runOnScroll(), 200 ));
    }

    runOnScroll(){
        if( window.scrollY > this.threshold ){
            this.siteHeader.classList.add('site-header--dark')
        }else{
            this.siteHeader.classList.remove('site-header--dark')

        }
    }
}

export default StickyHeader;