addEventListener('load',start);
/**Función que inicializa nuestro semáforo */
const button = document.getElementById("button");
const red = document.getElementById("red");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
function start(){
    red.style.backgroundColor = "grey";
    yellow.style.backgroundColor = "grey";
    green.style.backgroundColor = "grey";
    button.innerHTML = "Start";
    //window.alert('Inicio de programa');
}

var state = 0;
button.addEventListener('click',change);

function change(){
    button.innerHTML = "Change";
    if(state == 1){
        //alert("estado 1");
        red.style.backgroundColor = "red";
        yellow.style.backgroundColor = "grey";
        green.style.backgroundColor = "grey";
        state = 2;
    }else if(state == 2){
        //alert("estado 2");
        red.style.backgroundColor = "grey";
        yellow.style.backgroundColor = "yellow";
        green.style.backgroundColor = "grey";
        state = 3;
    }else if(state == 3){
        //alert("estado 3");
        red.style.backgroundColor = "grey";
        yellow.style.backgroundColor = "grey";
        green.style.backgroundColor = "green";
        state = 1;
    }else if(state==0){
        //alert("estado 0");
        red.style.backgroundColor = "red";
        yellow.style.backgroundColor = "grey";
        green.style.backgroundColor = "grey";
        state = 2;
    }
}