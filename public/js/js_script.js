
/*
function menuItem(name, info,  kcal, gluten, lactose, imageUrl) {
    this.name = name;
    this.info = info; 
    this.kcal = kcal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.image = imageUrl;
}

function nameAndKcal(menuitem) {
    return menuitem.name + ' ' + menuitem.kcal + 'kcal';
}

let burgerOfDeath = new menuItem("The Burger Of Death", "The biggest, baddest burger there is with double cheese slices per patty",2500, true, true, "https://thumbor.thedailymeal.com/h2zzijil7--FvRjJqNCPJolcQVg=/870x565/filters:focal(595x522:596x523)/https://www.thedailymeal.com/sites/default/files/2017/11/28/copy/shakeshack.jpg");
let allGoodThings = new menuItem("The All Good Things Come In Three", "For those who takes large bites", 800, true, true, "https://farm1.staticflickr.com/23/25199779_37a61d7b5b_b.jpg");
let saladDeluxe = new menuItem("The Salad Deluxe", "The burger for everyone with newly developed bean meat and vegan cheese",300, false, false, "https://www.max.se/contentassets/5c7a2201abd144fc94ca2bdf1788cb13/product_salad-wrap-burgare.jpg");
let theAmerican = new menuItem("The American", "For all you patrotic burgerlovers",1200, true, true, "https://moneydotcomvip.files.wordpress.com/2019/10/gettyimages-151814948-1_re.jpg");
let cheesyDeluxe = new menuItem("The Chessy deluxe", "If the Burger Of Death isn't enough",2000, false, true, "https://cdn.junglecreations.com/wp/junglecms/2018/02/Cheese-Burger-Kebab_Word_Press_Photos.jpg");

let menu = [burgerOfDeath, allGoodThings, saladDeluxe, theAmerican, cheesyDeluxe];
var id = document.getElementById("gridwrapper");


for (var burger of menu) {
    let div = document.createElement("div");
    div.className = "cellItem";

    let heading = document.createElement("H2");
    heading.appendChild(document.createTextNode(burger.name));
    div.appendChild(heading);

    let pic = document.createElement("img");
    pic.src = burger.image;
    pic.setAttribute("width", 300);
    pic.setAttribute("height", 200);
    pic.setAttribute("title", burger.name);
    div.appendChild(pic);

    let ul = document.createElement("ul");

    let listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(burger.kcal + ' kcal'));
    ul.appendChild(listItem);

    let info = document.createElement("li"); 
    info.appendChild(document.createTextNode(burger.info));
    ul.appendChild(info);

    if (burger.gluten) {
        let gluten = document.createElement("li");
        gluten.appendChild(document.createTextNode("Contains gluten"));
        ul.appendChild(gluten);
    }
    if (burger.lactose) {
        let lactose = document.createElement("li");
        lactose.appendChild(document.createTextNode("Contains lactose"));
        ul.appendChild(lactose);
    }
    div.appendChild(ul);
    id.appendChild(div);
}
*/