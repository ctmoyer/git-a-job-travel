import { throttle, debounce } from "lodash";

class StickyHeader{
    constructor(el, threshold = 65){
        this.threshold = threshold
        this.siteHeader = document.querySelector('.site-header');
        this.pageSections = document.querySelectorAll('.page-section');
        this.browserHeight = window.innerHeight;
        this.previousScrollY = window.scrollY;
        this.events();
    }

    events(){
        window.addEventListener('scroll', throttle( () => this.runOnScroll(), 200 ));
        window.addEventListener('resize', debounce(()=>{
            this.browserHeight = window.innerHeight;
        }, 333));

    }

    runOnScroll(){
        this.determineScrollDirection();
        if( window.scrollY > this.threshold ){
            this.siteHeader.classList.add('site-header--dark')
        }else{
            this.siteHeader.classList.remove('site-header--dark')

        }
        this.pageSections.forEach( el => {
            // console.log(el)
            this.calcSection(el) 
            });
    }

    determineScrollDirection(){
        if( window.scrollY > this.previousScrollY ){
            // Scrolling Down
            this.scrollDirection = 'down'
        }else{
            this.scrollDirection = 'up'
        }
        this.previousScrollY = window.scrollY;
    }

    calcSection( el ){
        if( window.scrollY + this.browserHeight > el.offsetTop &&
            window.scrollY < el.offsetTop + el.offsetHeight ){
            let scrollPercent = el.getBoundingClientRect().y / this.browserHeight * 100;
            if( scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection == 'down' ||
                scrollPercent < 33 && this.scrollDirection == 'up'){
                // This section is considered active
                let matchingLink = el.getAttribute('data-matching-link');
                // remove class from all other page sections
                document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach( el => {
                    el.classList.remove('is-current-link');
                });
                console.log(`${matchingLink}`);
                document.querySelector(matchingLink).classList.add('is-current-link');
            }
        }
    }
}

export default StickyHeader;