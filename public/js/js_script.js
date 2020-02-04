/*

let myButton = document.getElementById('knapp');

myButton.onclick = function details(){
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

myButton.onClick = function (){
    console.log("1");
    let arr = new Array(form.length); 
    console.log(arr.length);
    console.log("kuk");
    for (let i = 0; i < form.length; i++)
    {
        arr[i] = form[i].value; 
    }
    console.log(arr); 
    return arr; 
    }


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