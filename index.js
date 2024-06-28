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