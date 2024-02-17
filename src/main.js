

window.addEventListener('scroll', () =>{
  const header = document.getElementById('header');
  // if scroll y is greader than 50 view port than add scroll header class
  this.scrollY >= 2 ? header.classList.add('scroll-header')
                     : header.classList.remove('scroll-header');
})

// Slots


const selectElement = document.querySelector('.loc');

selectElement.addEventListener("change", (event) => {
  let text =selectElement.options[selectElement.selectedIndex].text;
  if(text == "Sukhna Lake"){
     const L1 = document.querySelectorAll(".l1");
     L1.forEach(n => n.style.display = "flex");

     const L2 =  document.querySelectorAll(".l2");;
     L2.forEach(n=>n.style.display = "none");

     document.getElementById("loc-name").innerText =  "Sukhna Lake";      
  }else if(text == "VR Punjab"){
      const L1 = document.querySelectorAll(".l1");
      L1.forEach(n => n.style.display = "flex");

      const L3 =  document.querySelectorAll(".l3");;
      L3.forEach(n=>n.style.display = "none");
      document.getElementById("loc-name").innerText =   "VR Punjab"; 
  }
  else if(text == "Airport"){
      const L1 = document.querySelectorAll(".l1");
      L1.forEach(n => n.style.display = "flex");

      const L4 =  document.querySelectorAll(".l4");;
      L4.forEach(n=>n.style.display = "none");
      document.getElementById("loc-name").innerText = "Airport";
  }
  else if(text == "Bestech Square Mall"){
      const L1 = document.querySelectorAll(".l1");
      L1.forEach(n => n.style.display = "flex");

      const L5 =  document.querySelectorAll(".l5");;
      L5.forEach(n=>n.style.display = "none");
      document.getElementById("loc-name").innerText = "Bestech Square Mall";
  }
  else if(text == "Nexus Elante Mall"){
      const L1 = document.querySelectorAll(".l1");
      L1.forEach(n => n.style.display = "flex");

      document.getElementById("loc-name").innerText =   "Nexus Elante Mall";  
  }
});

// button

const Body = document.getElementById('overlay');
const model = document.getElementById('price__con');

function showPrice(){
  Body.classList.add('overlayactive');
  model.classList.add('show-scale');
}

function hidePrice(){
  Body.classList.remove('overlayactive');
  model.classList.remove('show-scale');
}

function showAlert(){
  alert("Slot Booked 🤩 Payment initiated")
  model.classList.remove('show-scale');
  Body.classList.remove('overlayactive');
}
