var inital;
let i=0;

function startTask(){
   
    inital=setInterval(start, 1000);
}


function start(){
    let dd = new Date();
document.getElementById("output").innerHTML = i;
document.getElementById("clock").innerHTML = dd.getHours()+":"+dd.getMinutes()+":"+dd.getSeconds();

if(i%2 ==0){
    document.getElementsByTagName("body")[0].style.backgroundColor = "lightblue";
    document.getElementById("clock").style.color = "red";

    document.getElementById("output").style.color = "red";
}else{
    document.getElementsByTagName("body")[0].style.backgroundColor = "lightgreen";
    document.getElementById("clock").style.color = "orange";

    document.getElementById("output").style.color = "orange";
}
i++;
}

function stop(){
    clearInterval(inital);
    i=0;
}
