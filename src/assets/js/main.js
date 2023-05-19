// import 'bootstrap';

// navbar change color when scrolled down
const navbar = document.querySelector('.navbar');

// listen to the scroll event on the window
window.addEventListener('scroll', () => {
  // get the current scroll position
  const scrollPosition = window.scrollY;

  // add the 'scrolled' class to the navbar if the user has scrolled down
  if (scrollPosition > 0) {
    navbar.classList.add('scrolled');
    navbar.classList.remove('border-bottom');
  } else {
    // remove the 'scrolled' class if the user has scrolled back to the top
    navbar.classList.remove('scrolled');
    navbar.classList.add('border-bottom');
  }
});

// navbar toggler menu disappear when link clicked
const togglerMenu = document.querySelector('.navbar-collapse')
const togglerMenuLinks = document.querySelectorAll('.nav-link')

togglerMenuLinks.forEach(link => {
  link.addEventListener('click', () => {
    togglerMenu.classList.remove('show');
  });
});


for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}
// OUTPUT: 1 2 4 5

while (condition) {
  // code block
}


do {
  // code block
} while (condition);

switch (x) {
  case option1:
    // code that is executed when "x === option1" is true
    break;
  case option2:
    // code that is executed when "x === option2" is true
    break;
  default:
    // code that is executed when x does not equal any of the options
}

function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let limesCut = 0;

  // iterates limes array
  for (let i = 0; i < limes.length; i++) {
    // cuts current lime to specific wedges amount per size
    switch (limes[i]) {
      case 'small':
        wedges += 6;
        limesCut++;
        break;
      case "medium":
        wedges += 8;
        limesCut++;
        break;
      case "large":
        wedges += 10;
        limesCut++;
        break;
    }

    // checks the current wedges count
    if (wedgesNeeded === 0) {
      return 0;
    } else if (wedges >= wedgesNeeded) {
      break;
    }
  }

  return limesCut;
}

// do {
//   orders.shift();
// } while (timeLeft > 0) {
//   if (orders.length === 0) {
//     orders = [];
//   } else {
//     orders.shift();
//   }
//   return orders;
  // }

function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
      break;
    case 'Energizer':
    case 'Green Garden':
      return 1.5
      break;
    case 'Tropical Island':
      return 3;
      break;
    case 'All or Nothing':
      return 5;
      break;
    default:
      return 2.5;
  }
}

function remainingOrders(timeLeft, orders) {
  do {
    orders.shift();
  } while (timeLeft > 0) {
    if (orders.length === 0) {
      return orders = [];
    } else {
      for (let i = 0; i < orders.length; i++) {
        timeLeft - timeToMixJuice(orders[i]);
        orders.shift();
      }
    }
  }
  return orders;
}

console.log(remainingOrders(5, ['Energizer', 'Tropical Island']));
