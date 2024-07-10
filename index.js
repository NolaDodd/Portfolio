const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show')
    }
  })
})
  
const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))
  
document.addEventListener("DOMContentLoaded", () => {
  const sunButton = document.querySelector(".sun");
  
  sunButton.addEventListener("click", () => {
    // Change body background
    const body = document.querySelector("body");
    body.classList.add("bodylight")
    body.classList.remove("bodydark")
    
    // Change module background to light mode
    const moduleWraps = document.querySelectorAll(".module");
    moduleWraps.forEach(module => {
      module.classList.add("modulewrap")
      module.classList.remove("modulewrapdark") 
  })
  
  const pSelect = document.querySelectorAll("p")
  pSelect.forEach(p => {
      p.style.color = "#040c44"
  })

  const cardSelect = document.querySelectorAll(".card")
  cardSelect.forEach(card => {
      card.classList.remove("bodydark")
      card.classList.remove("border")
      card.classList.remove("border-light")
  })

    console.log("Light Mode");
  });

  const moonButton = document.querySelector(".moon");

  moonButton.addEventListener("click", () => {
    // Change body background
      const body = document.querySelector("body")

      body.classList.add("bodydark")
      body.classList.remove("bodylight")

    // Change module background to dark mode
      const moduleWraps = document.querySelectorAll(".module");
      moduleWraps.forEach(module => {
          module.classList.add("modulewrapdark")
          module.classList.remove("modulewrap") 
      })

      // Change text
      const pSelect = document.querySelectorAll("p")
      pSelect.forEach(p => {
          p.style.color = "#ffff"
      })

      const cardSelect = document.querySelectorAll(".card")
      cardSelect.forEach(card => {
          card.classList.add("bodydark")
          card.classList.add("border")
          card.classList.add("border-light")
      })

    console.log("Dark Mode");
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const sunButton = document.querySelector('.sun');
  const moonButton = document.querySelector('.moon');
  
  sunButton.addEventListener('click', function() {
      sunButton.parentNode.style.display = 'none'; // Hide the current button
      moonButton.parentNode.style.display = 'block'; // Show the other button
      // Add logic to toggle light mode here
  });

  moonButton.addEventListener('click', function() {
      moonButton.parentNode.style.display = 'none'; // Hide the current button
      sunButton.parentNode.style.display = 'block'; // Show the other button
      // Add logic to toggle dark mode here
  });

  moonButton.parentNode.style.display = 'none'; // Hide moon button initially
});
