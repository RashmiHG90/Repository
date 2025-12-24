//display data on console.
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(response =>response.json())
// .then(result=>{
// console.log("Data fetched successfully", result);
// })
// .catch(error=>{
// console.log("Error occurred while fetching data", error);
// })

// //display data on browser/web page.

// fetch("https://jsonplaceholder.typicode.com/todos")
// .then(response =>response.json())
// .then(result=>{
//     console.log(result);
//     result.forEach(data =>{
//      console.log(data);
//      let div = document.createElement('div');
//      let divtagcontent = document.createTextNode(data.id + ")" + data.title);
//      div.appendChild(divtagcontent);
//      document.getElementsByTagName('body')[0].appendChild(div);
//     })

// //console.log("Data fetched successfully", result);
// })
// .catch(error=>{
// //console.log("Error occurred while fetching data", error);
// })

//display data on browser/web page.

fetch("https://dummyjson.com/recipes")
.then(response =>response.json())
.then(result=>{
     console.log(result.recipes);
     recipe = result.recipes;
    recipe.forEach(recipedata =>{
    //console.log(recipe);
     let div = document.createElement('div');
     let divtagcontent = document.createTextNode(recipedata.id + ")" + recipedata.name);
     div.appendChild(divtagcontent);
     document.getElementsByTagName('body')[0].appendChild(div);
    })

//console.log("Data fetched successfully", result);
})
.catch(error=>{
//console.log("Error occurred while fetching data", error);
})