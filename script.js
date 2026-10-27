/* ================================
   MOBILE NAVIGATION
================================ */

const menuToggle =
  document.getElementById("menuToggle");

const navMenu =
  document.getElementById("navMenu");


menuToggle.addEventListener("click", () => {

  navMenu.classList.toggle("active");

});


/* Close mobile menu after clicking link */

document
  .querySelectorAll(".nav-menu a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navMenu.classList.remove("active");

    });

  });


/* ================================
   DATE
================================ */

const dateInput =
  document.getElementById("date");

if (dateInput) {

  const today =
    new Date().toISOString().split("T")[0];

  dateInput.min = today;

}


/* ================================
   CONTACT FORM
================================ */

const form =
  document.getElementById("contactForm");

const submitBtn =
  document.getElementById("submitBtn");

const successOverlay =
  document.getElementById("successOverlay");

const closePopup =
  document.getElementById("closePopup");


form.addEventListener(
  "submit",
  async function (event) {

    event.preventDefault();

    submitBtn.disabled = true;

    submitBtn.textContent =
      "Sending Request...";


    const formData =
      new FormData(form);


    try {

      const response =
        await fetch(
          form.action,
          {
            method: "POST",

            body: formData,

            headers: {
              "Accept": "application/json"
            }
          }
        );


      const result =
        await response.json();


      if (result.success) {

        successOverlay.classList.add(
          "active"
        );

        form.reset();

        submitBtn.disabled = false;

        submitBtn.textContent =
          "Send Booking Request →";

      } else {

        throw new Error(
          "Form submission failed"
        );

      }

    } catch (error) {

      alert(
        "Something went wrong. Please try again or contact us on WhatsApp."
      );

      submitBtn.disabled = false;

      submitBtn.textContent =
        "Send Booking Request →";

    }

  }
);


/* ================================
   CLOSE SUCCESS POPUP
================================ */

closePopup.addEventListener(
  "click",
  () => {

    successOverlay.classList.remove(
      "active"
    );

  }
);


/* Close popup by clicking outside */

successOverlay.addEventListener(
  "click",
  event => {

    if (
      event.target === successOverlay
    ) {

      successOverlay.classList.remove(
        "active"
      );

    }

  }
);


/* ================================
   WHATSAPP BOOKING
================================ */

const whatsappBooking =
  document.getElementById(
    "whatsappBooking"
  );


whatsappBooking.addEventListener(
  "click",
  () => {

    const name =
      document.getElementById(
        "name"
      ).value;

    const phone =
      document.getElementById(
        "phone"
      ).value;

    const email =
      document.getElementById(
        "email"
      ).value;

    const tour =
      document.getElementById(
        "tour"
      ).value;

    const date =
      document.getElementById(
        "date"
      ).value;

    const people =
      document.getElementById(
        "people"
      ).value;

    const message =
      document.getElementById(
        "message"
      ).value;


    const whatsappNumber =
      "919876543210";


    const whatsappMessage = `
Hello DelhiVista,

I want to book a Delhi tour.

Name: ${name}
Phone: ${phone}
Email: ${email}
Tour: ${tour}
Preferred Date: ${date}
Number of People: ${people}

Message:
${message}
`;


    const encodedMessage =
      encodeURIComponent(
        whatsappMessage
      );


    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      "_blank"
    );

  }
);