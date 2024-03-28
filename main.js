// Change navbar style on scroll 
window.addEventListener("scroll", ()=>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 30)
});

// Show/hide FAQs Answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //Change Icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className === 'fa-solid fa-plus') {
            icon.className = 'fa-solid fa-minus'
        }
        else{
            icon.className = 'fa-solid fa-plus'
        }
    });
});

// Show/hide buttons
const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

// Open Nav Menu
menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    menuBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
});

//Close Nav Menu
closeBtn.addEventListener('click', () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
});

// logic to create a testimonial crousel
 // var swiper = new Swiper(".mySwiper", {
        //     slidesPerView: 1,
        //     spaceBetween: 30,
        //     pagination: {
        //         el: ".swiper-pagination",
        //         clickable: true,
        //     },
        //     //When window width is >= 600px
        //     breakpoints: {
        //         600: {
        //             slidesPerView: 3,
        //             spaceBetween: 40,
        //         },
        //     }
        // });