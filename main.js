/*menu show*/

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
//valida que las variables existan
    if(toggle && nav){
        //anadimos la clase show-menu al div de nav menu
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }

}
showMenu('nav-toggle','nav-menu')

//remove menu mobile

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
     const navMenu = document.getElementById('nav-menu')
     //cuando hagamos click en algun nav_link esconder el menu
     navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//scroll section active link

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            }
            else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
        })
}
window.addEventListener('scroll', scrollActive)






/**/


//change brackground header

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*DARK THEME*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark_theme'
const iconTheme = 'bx-sun'


//Previosly selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//Obtenemos el tema actual 
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

//we validate if the user previously chose a topic
if(selectedTheme){
    //if the validation is fullfilled, we ask what the issue was to know if we activate o deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

//activate / deactivate the theme manually with the button
themeButton.addEventListener('click', ()=>{
    //add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we saved  the theme and the current icon that user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/* scroll reveal animation */

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home_data, .home_img, .about_data, .about_image, .services_content,.menu_content, .app_data, .app_img, .contact_data, .contact_button, .footer_content`,{
    interval:200
})