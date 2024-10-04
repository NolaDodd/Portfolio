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
  
//Light and Dark Mode
document.addEventListener("DOMContentLoaded", () => {
  const sunButton = document.querySelectorAll(".sun");
  const moonButton = document.querySelectorAll(".moon");
  const textAnimationSpan = document.querySelector(".text-animation span");
  
  //to Light Mode
  sunButton.forEach((sun) => {
    sun.addEventListener("click", () => {

      const h4 = document.querySelectorAll("h4")
      h4.forEach(h => {
        h.style.color= "#040c44"
      })

      const h5 = document.querySelectorAll("h5")
      h5.forEach(h => {
        h.style.color= "#4bb7ff"
      })

      const body = document.querySelector("body");
      body.classList.add("bodylight")
      body.classList.remove("bodydark")

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
        card.classList.remove("border")
        card.classList.remove("border-light")
        card.classList.remove("bodydark")
        card.classList.add("bodylight")
    })

      textAnimationSpan.classList.add("light-mode");
      textAnimationSpan.classList.remove("dark-mode");
      console.log("Light Mode");
    });

})
  
  //to Dark Mode
  moonButton.forEach((moon) => {
    moon.addEventListener("click", () => {

        const h4 = document.querySelectorAll("h4")

        h4.forEach(h => {
          h.style.color= "#ffff"
        })

        
        const h5 = document.querySelectorAll("h5")
        h5.forEach(h => {
          h.style.color= "#ffff"
        })

        const body = document.querySelector("body")

        body.classList.add("bodydark")
        body.classList.remove("bodylight")

        const moduleWraps = document.querySelectorAll(".module");
        moduleWraps.forEach(module => {
            module.classList.add("modulewrapdark")
            module.classList.remove("modulewrap") 
        })

        const pSelect = document.querySelectorAll("p")
        pSelect.forEach(p => {
            p.style.color = "#ffff"
        })

        const cardSelect = document.querySelectorAll(".card")
        cardSelect.forEach(card => {
            card.classList.add("border")
            card.classList.add("border-light")
            card.classList.remove("bodylight")
            card.classList.add("bodydark")
        })

        textAnimationSpan.classList.add("dark-mode");
        textAnimationSpan.classList.remove("light-mode");

      console.log("Dark Mode");
    });

})


});


//Swap Desktop Nav Sun and Moon on click 

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


// Swap X and Menu icon on Click, Display mobilenav bar on click
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menuicon');
  const xButton = document.getElementById('xicon');
  const navbar = document.querySelector('.mobilenav');

 
  menuButton.addEventListener('click', function() {
    menuButton.parentNode.style.display = 'none'; 
    xButton.parentNode.style.display = 'block'; 
  });


  xButton.addEventListener('click', function() {
    xButton.parentNode.style.display = 'none'; 
    menuButton.parentNode.style.display = 'block'; 
  });

  menuButton.addEventListener('click', function() {
      navbar.classList.add('active');
  });

  xButton.addEventListener('click', function() {
      navbar.classList.remove('active')
  })  

  xButton.parentNode.style.display = 'none'; 

});


document.addEventListener('DOMContentLoaded', function() {
  const logo = document.getElementById('logo');

  logo.addEventListener('click', function(event) {
    event.preventDefault(); 

    window.location.href = '#';
  });

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


