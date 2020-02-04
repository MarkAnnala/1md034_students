
/*

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