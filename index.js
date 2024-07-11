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
  const moonButton = document.querySelector(".moon");

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

  sunButton.addEventListener('click', function() {
    sunButton.parentNode.style.display = 'none'; 
    moonButton.parentNode.style.display = 'block'; 
});


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

// Swap Sun and Moon on Click
document.addEventListener('DOMContentLoaded', function() {
  const sunButton = document.querySelector('.sun');
  const moonButton = document.querySelector('.moon');
  
  sunButton.addEventListener('click', function() {
      sunButton.parentNode.style.display = 'none'; 
      moonButton.parentNode.style.display = 'block'; 
  });

  moonButton.addEventListener('click', function() {
      moonButton.parentNode.style.display = 'none'; 
      sunButton.parentNode.style.display = 'block'; 
  });

  moonButton.parentNode.style.display = 'none'; 
});


document.addEventListener('DOMContentLoaded', function() {
  const stableText = document.querySelector('.text-stable');
  const animationText = document.querySelector('.text-animation');
  const pauseButton = document.querySelector('.pause')
  const playButton = document.querySelector('.play')
  
  pauseButton.addEventListener('click', function() {
      animationText.parentNode.style.display = 'none'; 
      stableText.parentNode.style.display = 'block';
      playButton.parentNode.style.display = 'block'
      pauseButton.parentNode.style.display = 'none' 
  });

  playButton.addEventListener('click', function() {
      stableText.parentNode.style.display = 'none'; 
      animationText.parentNode.style.display = 'block'; 
      pauseButton.parentNode.style.display = 'block' 
      playButton.parentNode.style.display = 'none'
  });

  pauseButton.parentNode.style.display = 'none'

});

document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menuicon');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', function() {
      navbar.classList.toggle('active');
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const logo = document.getElementById('logo');

  logo.addEventListener('click', function(event) {
    event.preventDefault(); 

    window.location.href = '#';
  });

});


