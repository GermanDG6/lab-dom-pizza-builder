// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(oneMushroom => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPep => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = 'visible';
    } else {
      oneGreenPep.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
    if (state.whiteSauce) {
     document.getElementsByClassName('sauce')[0].classList.add('sauce-white')
   } else {
      document.getElementsByClassName('sauce')[0].classList.remove('sauce-white')
    }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  if (state.glutenFreeCrust) {
    document.getElementsByClassName('crust')[0].classList.add('crust-gluten-free')
  } else {
     document.getElementsByClassName('crust')[0].classList.remove('crust-gluten-free')
   }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  if(state.pepperoni){
    document.getElementsByClassName('btn-pepperoni')[0].classList.add('active')
  }else{
    document.getElementsByClassName('btn-pepperoni')[0].classList.remove('active')
  }

  if(state.mushrooms){
    document.getElementsByClassName('btn-mushrooms')[0].classList.add('active')
  }else{
    document.getElementsByClassName('btn-mushrooms')[0].classList.remove('active')
  }

  if(state.greenPeppers){
    document.getElementsByClassName('btn-green-peppers ')[0].classList.add('active')
  }else{
    document.getElementsByClassName('btn-green-peppers ')[0].classList.remove('active')
  }

  if(state.whiteSauce){
    document.getElementsByClassName('btn-sauce')[0].classList.add('active')
  }else{
    document.getElementsByClassName('btn-sauce')[0].classList.remove('active')
  }

  if(state.glutenFreeCrust){
    document.getElementsByClassName('btn-crust')[0].classList.add('active')
  }else{
    document.getElementsByClassName('btn-crust')[0].classList.remove('active')
  }

}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let total = 10;
  document.querySelector('.list').innerHTML=""
  if(state.pepperoni){
    let a = document.createElement('li');
    a.innerText ='$1 pepperoni'
    document.querySelector('.list').appendChild(a)
    total+=1
  }
  if(state.mushrooms){
    let a = document.createElement('li');
    a.innerText ='$1 mushrooms'
    document.querySelector('.list').appendChild(a)
    total+=1
  }
  if(state.greenPeppers){
    let a = document.createElement('li');
    a.innerText ='$1 green peppers'
    document.querySelector('.list').appendChild(a)
    total+=1
  }
  if(state.whiteSauce){
    let a = document.createElement('li');
    a.innerText ='$3 white sauce'
    document.querySelector('.list').appendChild(a)
    total+=3
  }
  if(state.glutenFreeCrust){
    let a = document.createElement('li');
    a.innerText ='$5 gluten-free crust'
    document.querySelector('.list').appendChild(a)
    total+=5
  }
  document.querySelector('.total').innerHTML= `$${total}` 
}
renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
