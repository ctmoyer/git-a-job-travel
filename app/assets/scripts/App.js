import '../styles/styles.css';
import MobileMenu from './MobileMenu';
import RevealOnScroll from './RevealOnScroll';

// const revealOnScroll = new RevealOnScroll();
new RevealOnScroll(document.querySelectorAll('.feature-item'));
new RevealOnScroll(document.querySelectorAll('.testimonial'),85);

const mobileMenu = new MobileMenu();

if(module.hot){
    module.hot.accept()
}