class MobileMenu{
    constructor(){
        this.menuIcon = document.querySelector('.site-header__menu-icon');
        this.menuContent = document.querySelector('.site-header__menu-content');
        this.siteHeader = document.querySelector('.site-header')
        this.events();
    }

    events(){
        // The arrow function provides context where this refers to the instance 
        // of this object. Because of that, we can safely call this.toggleTheMenu()
        // Without the arrow function, the context would be in the event handler,
        // instead of inside our object.
        this.menuIcon.addEventListener('click', () => this.toggleTheMenu() )
    }

    toggleTheMenu(){
        // Toggle whether css class is applied to the menu element
        this.menuContent.classList.toggle('site-header__menu-content--is-visible');
        this.siteHeader.classList.toggle('site-header--is-expanded');
        this.menuIcon.classList.toggle('site-header__menu-icon--close-x');
    }

}

export default MobileMenu;