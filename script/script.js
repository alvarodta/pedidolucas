
var btnYes = document.getElementById("btn-sim");
var popupNo = document.getElementById("popup-no");
var containerPergunta = document.getElementById("container-Pergunta");
var containerFinalizacao = document.getElementById("container-finalizacao")

popupNo.style.display = "none";
containerFinalizacao.style.display = "none";

function yes(){
    var random = Math.floor(Math.random() * 4);
    if( get_anterior_random() == random ){
        console.log("repetiu");
        yes();
    }else{
        switch( random ){
            case 0:
                btnYes.style.transform = "translate(-100%,-100%)";
            break;
            case 1:
                btnYes.style.transform = "translate(-100%,100%)";
            break;
            case 2:
                btnYes.style.transform = "translate(100%,-100%)";
            break;
            case 3:
                btnYes.style.transform = "translate(100%,100%)";
            break;
        }
        set_anterior_random( random );
    }    
}
function no(){

    popupNo.style.display = "block";
    containerPergunta.style.display = "none";

}
function no_popup(){
    alert( "[ERROR] Não existe essa opção" )
}
function yes_popup(){
    popupNo.style.display = "none";
    containerFinalizacao.style.display = "block";
}
var globalRand = -1;
function set_anterior_random( random ){ globalRand = random }
function get_anterior_random(){ return globalRand }