// function timeToMixJuice(name) {
//   switch (name) {
//     case 'Pure Strawberry Joy':
//       return 0.5;
//       break;
//     case 'Energizer':
//     case 'Green Garden':
//       return 1.5
//       break;
//     case 'Tropical Island':
//       return 3;
//       break;
//     case 'All or Nothing':
//       return 5;
//       break;
//     default:
//       return 2.5;
//   }
// }

// let orders = ['Energizer', 'Tropical Island', 'Tropical Island'];
// let timeLeft = 5;

// function remainingOrders(timeLeft, orders) {
//   do {
//     console.log(orders);
//     console.log(timeLeft);
//     timeLeft -= timeToMixJuice(orders[0]);
//     orders.shift();
//     } while (timeLeft > 0) {
//       return orders;
//     }
// }

// function limesToCut(wedgesNeeded, limes) {
//   let limesCut = 0;

//   while (wedgesNeeded > 0 && limes.length > 0) {
//     limesCut++;
//     wedgesNeeded -= LIME_SIZES_TO_WEDGES[limes.shift()]
//   }
//   return limesCut;
// }

// // function remainingOrders(timeLeft, orders) {
//   // while (timeLeft > 0) {
//   //   // console.log(timeToMixJuice(orders[0]));
//   //   timeLeft -= timeToMixJuice(orders[0]);
//   //   orders.shift();
//   // }
//   // return orders;
// // }
// console.log(remainingOrders(timeLeft, orders));
