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


// Logic to Create a counter animation
function startCounters() {
    const coursesCounter = document.getElementById('courses-counter');
    const studentsCounter = document.getElementById('students-counter');
    const successCounter = document.getElementById('success-counter');
    
    let coursesCount = 0;
    let studentsCount = 0;
    let successCount = 0;
    
    let incrementCourses = 0.5; // Adjust the increment values as needed
    let incrementStudents = 50;
    let incrementSuccess = 20;
    
    const interval = setInterval(() => {
      if (coursesCount >= 30 && studentsCount >= 1500 && successCount >= 600) {
        clearInterval(interval);
      } else {
        coursesCount += incrementCourses;
        studentsCount += incrementStudents;
        successCount += incrementSuccess;
        
        coursesCounter.textContent = coursesCount > 30 ? '30+' : Math.floor(coursesCount);
        studentsCounter.textContent = studentsCount > 1500 ? '1,500+' : Math.floor(studentsCount);
        successCounter.textContent = successCount > 600 ? '600+' : Math.floor(successCount);
      }
    }, 50); // Adjust interval as needed for smoother animation
    
    setTimeout(() => {
      clearInterval(interval);
      coursesCounter.textContent = '30+';
      studentsCounter.textContent = '1,500+';
      successCounter.textContent = '600+';
    }, 2000); // Adjust the duration for the slow to fast transition
  }
  
  // Start counters when the page loads
  window.onload = startCounters;
  
  

// logic to create a testimonial crousel
//  var swiper = new Swiper(".mySwiper", {
//             slidesPerView: 1,
//             spaceBetween: 30,
//             pagination: {
//                 el: ".swiper-pagination",
//                 clickable: true,
//             },
//             //When window width is >= 600px
//             breakpoints: {
//                 600: {
//                     slidesPerView: 3,
//                     spaceBetween: 40,
//                 },
//             }
//         });