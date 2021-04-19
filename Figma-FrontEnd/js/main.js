const navSlide = () => {
    const burger =document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //toogle now 
        nav.classList.toggle('nav-active');
        // Animate link
        navlinks.forEach((link,index) => {
            if(link.style.animation){
                link.style.animation='';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        burger.classList.toggle('close');
    });
}

navSlide();