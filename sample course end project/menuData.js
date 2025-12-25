function loadfakedata(){
 fetch('https://dummyjson.com/users')
 .then(response=> response.json())
 .then(console.log);
}