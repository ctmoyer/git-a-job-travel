import '../styles/styles.css'
import MobileMenu from './MobileMenu'

const mobileMenu = new MobileMenu();

if(module.hot){
    module.hot.accept()
}