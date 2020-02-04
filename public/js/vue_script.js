
var burgerOfDeath = {itemname: food[0].name, iteminfo: food[0].info, kcal: food[0].kcal + " kcal", lactose: food[0].lactose, gluten: food[0].gluten, img: food[0].img}; 
var allGoodThings = {itemname: food[1].name, iteminfo: food[1].info, kcal: food[1].kcal+" kcal", lactose: food[1].lactose, gluten: food[1].gluten, img: food[1].img}
var saladDeluxe = {itemname: food[2].name, iteminfo: food[2].info, kcal: food[2].kcal+" kcal", lactose: food[2].lactose, gluten: food[2].gluten, img: food[2].img}
var theAmerican = {itemname: food[3].name, iteminfo: food[3].info, kcal: food[3].kcal+" kcal", lactose: food[3].lactose, gluten: food[3].gluten, img: food[3].img}
var cheesyDeluxe = {itemname: food[4].name, iteminfo: food[4].info, kcal: food[4].kcal+" kcal", lactose: food[4].lactose, gluten: food[4].gluten, img: food[4].img}


const vm = new Vue({
  el: 'main',
  data: {		
     burgers: [burgerOfDeath, allGoodThings, saladDeluxe, theAmerican, cheesyDeluxe],
    
  },
  methods: {
    markDone: function() {
      let name = document.getElementById("firstname").value; 
      let email = document.getElementById("email").value;
      let adress = document.getElementById("streetname").value; 
      let house = document.getElementById("housenumber").value; 
      
      let paymentoptions = document.getElementById("payment"); 
      let payment = paymentoptions.options[paymentoptions.selectedIndex].text; 
  
      let genders = document.getElementsByName("gn"); 
      let actualgender; 
      for (var gender of genders){
          if (gender.checked){
              actualgender = gender.value;
              break;
          }
      }
  
      let arr = [name, email, adress, house, payment, actualgender]; 
      console.log(arr);
    }
}
  
    
})
