import '../styles/styles.css';
import MobileMenu from './MobileMenu';
import RevealOnScroll from './RevealOnScroll';

const mobileMenu = new MobileMenu();
const revealOnScroll = new RevealOnScroll();

if(module.hot){
    module.hot.accept()
}