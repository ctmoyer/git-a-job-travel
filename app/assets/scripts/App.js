import '../styles/styles.css';
import MobileMenu from './MobileMenu';
import RevealOnScroll from './RevealOnScroll';
import StickyHeader from './StickyHeader';

new StickyHeader();
// const revealOnScroll = new RevealOnScroll();
new RevealOnScroll(document.querySelectorAll('.feature-item'));
new RevealOnScroll(document.querySelectorAll('.testimonial'),85);
new MobileMenu();
let modal;

document.querySelectorAll('.open-modal').forEach( el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        if( typeof Modal == 'undefined' ){
            import(/* webpackChunkName: "modal" */ './Modal').then( x => {
                // dynamic importing requires using .default 
                // instead of the actual exported class name
                modal = new x.default();
                setTimeout( () => modal.openTheModal(), 20)
            }).catch( e => {
                console.log(`Error message: ${e}`)
            });
        }else{
            modal.openTheModal();
        }
    });
});

if(module.hot){
    module.hot.accept()
}