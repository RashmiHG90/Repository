let cartInfo=[];
const PRICE=100;
let currentUser= sessionStorage.getItem("user")
if(!currentuser){
    alert("Please login!");
    window.location.href="login.html";
}

function searchItemData(){
    let mid = document.getElementById("mid").value
    fetch('https://dummyjson.com/recipes/' + mid)
    .then(response => response.json())
    .then(result => {
        let divContent = document.createTextNode(result.name);
        document.getElementById("search-item").appendChild(divContent);
        console.log(result.name)})
    .catch(error=> console.log(error));

}

function showCartData(){
  console.log(cartInfo.length)
  document.getElementById("menu-item").style.display="none";
  document.getElementById("cart-item").style.display="flex";
  //document.getElementById("cart-item").style.display="inline-block";
  let list = document.getElementById("cart-item");
  list.innerHTML="";
  let total = 0;

  cartInfo.forEach((item,i)=>{
    total = total+item.qty*item.PRICE;

    list.innerHTML+=`
    
    <div class="">
        <span>
            ${item.name}
             <div class="">
             <button onclick="updateQty(${i},-1)">-</button>
             ${item.qty}
             <button onclick="updateQty(${i},1)">+</button>
             <span>${total}</span>
             </div>
        </span>
    </div>

    `


  })

//   cartInfo.forEach(item=>{
//     let cartdiv = document.createElement("div");
//     // let cartContent = document.createTextNode(item);
//     // cartdiv.appendChild(cartContent)
//     console.log(item)
//     document.getElementById("cart-item").appendChild(cartdiv)});
}

// function renderCartDetails(itemInCart){
//  console.log(itemInCart);
// }

function updateQty(index,change){
    console.log("event loged" + index + ":" + change)
    console.log(cartInfo[index].qty);
    cartInfo[index].qty+=change;
    console.log(cartInfo[index]);
    let cartItem= cartInfo[index];
   // renderCartDetails(cartItem)
   showCartData();
}

function loadfakedata(){
    let h1= document.createElement("p");
    let user=sessionStorage.getItem("user");
    let h1TagValue = document.createTextNode(user);
    h1.appendChild(h1TagValue);
    document.getElementById("user").appendChild(h1)
    hideAll();
    document.getElementById("menu-item").style.display="flex";

    fetch('https://dummyjson.com/recipes')
    .then(response=> response.json())
    .then(result => {
    result.recipes.forEach(recipe => {
        let div = document.createElement("div");
        div.className = "flex p-2 m-4 flex-wrap"
        //let divContent = document.createTextNode(recipe.id +":" + recipe.name);
        //let divbutton = document.createElement("button");
        
        let img = document.createElement("img");
        img.src = recipe.image;
        img.className ="w-50 m-4 p-2 text-center bg-white" ;
        
        let p = document.createElement("p");
        p.innerText = recipe.name;
        p.className = "text-center";

        div.appendChild(img);
        div.appendChild(p);

        img.addEventListener("click", ()=>{
        console.log("event fired!" + recipe.name)
        let result = (cartInfo.find(cartItem => cartItem.name==recipe.name));
        if(result==undefined){

            //cartInfo.push(recipe.name);
            cartInfo.push({name:recipe.name, qty:1, price:PRICE});

        }else{
            alert("Item already present!")
        }     
        })


        // div.appendChild(divContent);
        // div.appendChild(divbutton);
        //document.getElementsByTagName("body")[0].appendChild(div);
        document.getElementById("menu-item").appendChild(div);
    });
    console.log(result.recipes)});
}

function hideAll(){
        document.getElementById("cart-item").style.display="none";
}

function logout(){
    sessionStorage.removeItem("user");
    window.location.href="login.html";
}