// Change navbar style on scroll
window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 30);
});

// Show/hide FAQs Answer
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //Change Icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

// Show/hide buttons
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

// Open Nav Menu
menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  menuBtn.style.display = "none";
  closeBtn.style.display = "inline-block";
});

//Close Nav Menu
closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
});

// Logic to Create a counter animation
function startCounters() {
  const coursesCounter = document.getElementById("courses-counter");
  const studentsCounter = document.getElementById("students-counter");
  const successCounter = document.getElementById("success-counter");

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

      coursesCounter.textContent =
        coursesCount > 30 ? "30+" : Math.floor(coursesCount);
      studentsCounter.textContent =
        studentsCount > 1500 ? "1,500+" : Math.floor(studentsCount);
      successCounter.textContent =
        successCount > 600 ? "600+" : Math.floor(successCount);
    }
  }, 50); // Adjust interval as needed for smoother animation

  setTimeout(() => {
    clearInterval(interval);
    coursesCounter.textContent = "30+";
    studentsCounter.textContent = "1,500+";
    successCounter.textContent = "600+";
  }, 2000); // Adjust the duration for the slow to fast transition
}

// Start counters when the page loads
window.onload = startCounters;

// Form Handling
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form fields
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    // Perform form submission using AJAX or other method
    let formData = new FormData();
    formData.append("First Name", firstName.value);
    formData.append("Last Name", lastName.value);
    formData.append("Email Address", email.value);
    formData.append("Message", message.value);

    fetch("https://formspree.io/f/mleqppnv", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Reset the form fields
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        message.value = "";

        // Optionally, you can show a success message or redirect the user
        // console.log("Form submitted successfully:", data);
        Toastify({
          text: "Form submitted successfully",
          duration: 3000,
          data: data,
          gravity: "bottom", // `top` or `bottom`
          position: "right", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
        }).showToast();
      })
      .catch((error) => {
        console.error("There was a problem submitting the form:", error);
        // Optionally, you can show an error message to the user
      });
  });

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
