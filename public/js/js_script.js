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
    return this.name + ' ' + this.kcal; 
}

let burgerOfDeath = new menuItem("The Burger Of Death", 2500, "gluten", "lactose", "https://thumbor.thedailymeal.com/h2zzijil7--FvRjJqNCPJolcQVg=/870x565/filters:focal(595x522:596x523)/https://www.thedailymeal.com/sites/default/files/2017/11/28/copy/shakeshack.jpg" );
let allGoodThings = new menuItem("The All Good Things Come In Three", 800, "gluten", "lactose", "https://farm1.staticflickr.com/23/25199779_37a61d7b5b_b.jpg" ); 
let saladDeluxe = new menuItem("The Salad Deluxe", 300, "no gluten", "no lacotse", "https://www.max.se/contentassets/5c7a2201abd144fc94ca2bdf1788cb13/product_salad-wrap-burgare.jpg" ); 
let theAmerican = new menuItem("The American", 1200, "gluten", "lactose", "https://moneydotcomvip.files.wordpress.com/2019/10/gettyimages-151814948-1_re.jpg"); 
let cheesyDeluxe= new menuItem("The Chessy deluxe", 2000, "no gluten", "lactose", "https://cdn.junglecreations.com/wp/junglecms/2018/02/Cheese-Burger-Kebab_Word_Press_Photos.jpg"); 


nameAndKcal(burgerOfDeath); 
nameAndKcal(allGoodThings); 
nameAndKcal(saladDeluxe); 
nameAndKcal(theAmerican); 
nameAndKcal(cheesyDeluxe); 

