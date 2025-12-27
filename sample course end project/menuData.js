let cartInfo=[];
const PRICE=100;
const max=200;
const min=100;
// let emailId = document.getElementById("email").value
// let currentUser= sessionStorage.getItem(emailId)
// if(!currentuser){
//     alert("Please login!");
//     window.location.href="login.html";
// }

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
    total = total+item.qty*item.price;

    let img = document.createElement("img");
    img.src = item.image;
    img.className ="w-50 m-4 p-2 text-center bg-white" ;

    list.innerHTML+=`
    
    <div class="">
        <span>
            <img class = "w-50 m-4 p-2 object-cover text-center bg-white" src="${item.image}">
            <div class ="items-center">
            <div class="font-bold">${item.name}</div>
            <div class="flex items-center gap-2">
                <button class="px-2 bg-gray-200" onclick="updateQty(${i},-1)">-</button>
                <span>${item.qty}</span>
                <button class="px-2 bg-gray-200" onclick="updateQty(${i},1)">+</button>
            </div>
            <div class ="inline-block" ></div>Rs.<div class="inline-block">${item.qty*item.price}</div>
            </div>
        </span>
    </div>
    `
    //let tot= document.createElement("p");
    let totContainer = document.getElementById("total")
    totContainer.innerHTML="";
    tot= document.createElement("p");
    console.log(total)
    tot.innerText= total
    totContainer.appendChild(tot);

    // let totTagValue = document.createTextNode(total);
    // console.log(total)
    // tot.appendChild(totTagValue);
    // document.getElementById("total").appendChild(tot)
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
    //total = total - cartInfo[index].price;
    console.log(cartInfo[index]);
    let cartItem= cartInfo[index];
   // renderCartDetails(cartItem)
   showCartData();
}

function loadfakedata(){
    let userContainer=document.getElementById("user")
    let user= sessionStorage.getItem("user1")
    userContainer.innerHTML = "";
    let h1= document.createElement("p");  
    //let h1TagValue = document.createTextNode(user);
    h1.innerText = user;
    userContainer.appendChild(h1);
    //h1.appendChild(h1TagValue);
    //document.getElementById("user").appendChild(h1)
    hideAll();
    document.getElementById("menu-item").style.display="flex";

    fetch('https://dummyjson.com/recipes')
    .then(response=> response.json())
    .then(result => {
    result.recipes.forEach(recipe => {
        let div = document.createElement("div");
        div.className = "flex p-2 m-4 flex-col"
        //let divContent = document.createTextNode(recipe.id +":" + recipe.name);
        //let divbutton = document.createElement("button");
        
        let img = document.createElement("img");
        img.src = recipe.image;
        img.className ="w-50 m-4 p-2 text-center bg-white  cursor-pointer" ;

        let div1 = document.createElement("div");
        div1.className = "flex flex-col"
        
        let p = document.createElement("p");
        p.innerText = recipe.name;
        p.className = "text-center";    

        const itemprice=Math.floor((Math.random() *(max-min)))+ min;
        let priceData = document.createElement("p");
        priceData.innerText = `Rs: ${itemprice}`;
        priceData.className = "text-center";

        div1.appendChild(p);
        div1.appendChild(priceData);

        div.appendChild(img);
        div.appendChild(div1);
       

        img.addEventListener("click", ()=>{
        console.log("event fired!" + recipe.name)
        let result = (cartInfo.find(cartItem => cartItem.name==recipe.name));
        if(result==undefined){

            //cartInfo.push(recipe.name);
            cartInfo.push({name:recipe.name,image:recipe.image, qty:1, price:itemprice});

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

function payment(){
  
  let totalPayable=document.getElementById("total");
  let list = document.getElementById("view-orders");
  list.innerHTML=`
   <div class="">
     <div class="p-4">
      <div class="inline w-10"> Card Number : </div>
      <input class ="inline border border-gray-300 p-2 rounded-[5px] text-[14px]" type="text" id = "cardNumber" name="cardNumber" required>
      </div>
      <div class="p-4">
      <div class="inline w-10"> PIN : </div>
      <input class = "inline border border-gray-300 p-2 rounded-[5px] text-[14px]" type="password" id="pin" name="pin" required>
      </div>
      <br>
      <br>
      <button type="button" class = "inline-block no-underline text-center bg-[#2b3742] text-white py-[10px] px-[20px] rounded-[5px] cursor-pointer text-[14px]" onclick="successPay()" >Proceed Payment</button>
      </div>
    `
}

function successPay(){
    window.location.href="paySucess.html";
}
