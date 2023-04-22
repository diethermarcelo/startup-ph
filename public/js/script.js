const burger = document.querySelector('.burger');
const nav_items = document.querySelector('#mobile-navigation-items');
const close_nav = document.querySelector('.close-navigation');


burger.addEventListener('click', () => {
    console.log('open navigation');
    nav_items.classList.add('opacity-100');
    nav_items.classList.add('z-30');
    nav_items.classList.add('w-full');
    nav_items.classList.remove('-z-10');
    nav_items.classList.remove('w-0');
    nav_items.classList.remove('opacity-0');
})

close_nav.addEventListener('click', () => {
    console.log('close')
    nav_items.classList.add('opacity-0')
    nav_items.classList.add('-z-10');
    nav_items.classList.remove('z-30');
    // nav_items.classList.remove('w-full');
    nav_items.classList.remove('opacity-100');
    nav_items.classList.add('w-0');
})

