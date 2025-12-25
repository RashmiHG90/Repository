let cartInfo=[];
function showCartData(){
  console.log(cartInfo.length)
  document.getElementById("menu-item").style.display="none";
  document.getElementById("cart-item").style.display="inline-block";

  cartInfo.forEach(item=>{
    let cartdiv = document.createElement("div");
    let cartContent = document.createTextNode(item);
    cartdiv.appendChild(cartContent)
    console.log(item)
    document.getElementById("cart-item").appendChild(cartdiv)});
}

function loadfakedata(){
    document.getElementById("cart-item").style.display="none";
    document.getElementById("menu-item").style.display="inline-block";
 fetch('https://dummyjson.com/recipes')
 .then(response=> response.json())
 .then(result => {
    result.recipes.forEach(recipe => {
        let div = document.createElement("div");
        let divContent = document.createTextNode(recipe.id +":" + recipe.name);
        let divbutton = document.createElement("button");
        div.addEventListener("click", ()=>{
        console.log("event fired!" + recipe.name)
        let result = (cartInfo.find(cartItem => cartItem==recipe.name));
        if(result==undefined){
            cartInfo.push(recipe.name);
        }else{
            alert("Item already present!")
        }     
        })
        div.appendChild(divContent);
        div.appendChild(divbutton);
        //document.getElementsByTagName("body")[0].appendChild(div);
        document.getElementById("menu-item").appendChild(div);
    });
    console.log(result.recipes)});
}