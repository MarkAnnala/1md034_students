
'use strict';
const socket = io();

var burgerOfDeath = { itemname: food[0].name, iteminfo: food[0].info, kcal: food[0].kcal + " kcal", lactose: food[0].lactose, gluten: food[0].gluten, img: food[0].img };
var allGoodThings = { itemname: food[1].name, iteminfo: food[1].info, kcal: food[1].kcal + " kcal", lactose: food[1].lactose, gluten: food[1].gluten, img: food[1].img }
var saladDeluxe = { itemname: food[2].name, iteminfo: food[2].info, kcal: food[2].kcal + " kcal", lactose: food[2].lactose, gluten: food[2].gluten, img: food[2].img }
var theAmerican = { itemname: food[3].name, iteminfo: food[3].info, kcal: food[3].kcal + " kcal", lactose: food[3].lactose, gluten: food[3].gluten, img: food[3].img }
var cheesyDeluxe = { itemname: food[4].name, iteminfo: food[4].info, kcal: food[4].kcal + " kcal", lactose: food[4].lactose, gluten: food[4].gluten, img: food[4].img }



const vm = new Vue({
  el: 'main',
  data: {
    burgers: [burgerOfDeath, allGoodThings, saladDeluxe, theAmerican, cheesyDeluxe],
    orderName: [],
    orderEmail: [],
    orderPayment: "Credit Card",
    chosen: [],
    orderPlaced: false,
    orders: {},
    deliveryInformation: {},
    details: {x: -100, y: -1000}, 
    orderNumber: 1,
  },
  methods: {
    getNext: function () {
      /* This function returns the next available key (order number) in
       * the orders object, it works under the assumptions that all keys
       * are integers. */
      return this.orderNumber +1 ; 
    },
    addOrder: function (event) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      this.chosen = [];
      let checkedBurgers = document.getElementsByName("burgerbox");
      let chosenBurgers = [];
      let i = 0;
      for (var checked of checkedBurgers) {
        if (checked.checked) {
          chosenBurgers[i] = " " + checked.value;
          i += 1;
        }
      }
      this.chosen += chosenBurgers;
      if (this.orderName != [] && this.orderEmail != []) {
        if (this.chosen != []) {
          this.orderPlaced = true;
          let offset = {
            x: event.currentTarget.getBoundingClientRect().left,
            y: event.currentTarget.getBoundingClientRect().top,
          };
          socket.emit('addOrder', {
            orderId: this.getNext(),
            details: {
              x: this.details.x,
              y: this.details.y,
            },
            orderItems: [this.chosen],
          });
          
        } else {
          alert("Please choose a burger!");
        }
      }
           

    },
    displayOrder: function (event) {

      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
      this.details = {
          x: event.clientX - 10 - offset.x, 
          y: event.clientY - 10 - offset.y,
        }
  //      console.log(this.deliveryInformation);
    },

}
})
