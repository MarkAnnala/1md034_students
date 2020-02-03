
function menuItem (name, kcal, gluten, lactose, imageUrl){
    this.name = name; 
    this.kcal = kcal; 
    this.allergies = function(){
        if (gluten == gluten && lactose == lactose){
            return "Contains both gluten and lactose!"
        }else if (gluten == gluten){
            return "Contains gluten!"
        }else{
            return "Contains lactose!"
        }
    } 
    this.image = imageUrl; 
}

function nameAndKcal (menuitem){
    return menuitem.name + ' ' + menuitem.kcal + 'kcal';
}

let burgerOfDeath = new menuItem("The Burger Of Death", 2500, "gluten", "lactose", "https://thumbor.thedailymeal.com/h2zzijil7--FvRjJqNCPJolcQVg=/870x565/filters:focal(595x522:596x523)/https://www.thedailymeal.com/sites/default/files/2017/11/28/copy/shakeshack.jpg" );
let allGoodThings = new menuItem("The All Good Things Come In Three", 800, "gluten", "lactose", "https://farm1.staticflickr.com/23/25199779_37a61d7b5b_b.jpg" ); 
let saladDeluxe = new menuItem("The Salad Deluxe", 300, "no gluten", "no lacotse", "https://www.max.se/contentassets/5c7a2201abd144fc94ca2bdf1788cb13/product_salad-wrap-burgare.jpg" ); 
let theAmerican = new menuItem("The American", 1200, "gluten", "lactose", "https://moneydotcomvip.files.wordpress.com/2019/10/gettyimages-151814948-1_re.jpg"); 
let cheesyDeluxe= new menuItem("The Chessy deluxe", 2000, "no gluten", "lactose", "https://cdn.junglecreations.com/wp/junglecms/2018/02/Cheese-Burger-Kebab_Word_Press_Photos.jpg"); 

var id = document.getElementById("myID");


for (var burger of menu){
	let heading = document.createElement("H1"); 
  heading.appendChild(document.createTextNode(burger.name));
  id.appendChild(heading);
  
  let listItem = document.createElement("li"); 
  listItem.appendChild(document.createTextNode(burger.kcal + ' kcal')); 
  id.appendChild(listItem);
  if (burger.gluten)
  {
  	let gluten = document.createElement("li");
    gluten.appendChild(document.createTextNode("Contains gluten"));
    id.appendChild(gluten);
  }
  if(burger.lactose){
  let lactose = document.createElement("li"); 
  lactose.appendChild(document.createTextNode("Contains lactose")); 
  id.appendChild(lactose); 
  }
}