var apelidos = document.getElementById("info_apellidos_nombres");
var fenac = document.getElementById("info_fecha_nac");
var apaterno = document.getElementById("resp_apaterno");
var amaterno = document.getElementById("resp_amaterno");
var respnombres = document.getElementById("resp_nombres");
var resmes = document.getElementById("resp_mes");
var resplogape = document.getElementById("resp_logape");
var resedad = document.getElementById("resp_edad");



var extraer = document.querySelector(".btn_extraer");
var colorear=document.querySelector(".btn_colorear")
var fondoinput=document.querySelectorAll(".azul")





function extraerApellidos(apelidos) {

    var apeaterno = apelidos.value.split(" ");
    return apeaterno;
}


function extraerNombres(apelidos) {

    var apeaterno = apelidos.value.split(" ");

    var aux = "";
    if (apeaterno.length == 3) {
        aux = apeaterno[apeaterno.length - 1];
    } else if (apeaterno.length == 4) {
        aux = apeaterno[apeaterno.length - 2] + " " + apeaterno[apeaterno.length - 1];
    } else {
        aux = apeaterno[apeaterno.length - 3] + " " + apeaterno[apeaterno.length - 2] + " " + apeaterno[apeaterno.length - 1];
    }
    return aux;
}


function calcularEdad(){
    var date = new Date();
    var fechanac=fenac.value.split("-");
    let anoActual=parseInt(date.getFullYear());
    let mesActual=parseInt(date.getMonth())+1;
    let diaActual=parseInt(date.getDate());

    let anonac=parseInt(fechanac[0]);
    let mesnac=parseInt(fechanac[1]);
    let dianac=parseInt(fechanac[2]);

    let edad= anoActual-anonac;
    if(mesActual<mesnac){
        edad--;
    }else if(mesActual===mesnac){
        if(diaActual<dianac){
            edad--;
        }
    }

return edad;

}

function nombreMes(fecha){
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    var fechan=fenac.value.split("-");
    var inputMes ;
    if(fechan[1].charAt(0)==0){
     inputMes = fechan[1].charAt(1);
    }else{
     inputMes = fechan[1];
    }

    var numeroMes = parseInt(inputMes);

   if(! isNaN(numeroMes) && numeroMes >= 1  && numeroMes <= 12 ) {
   return meses[numeroMes - 1];
   }

   
}

function longitudApellido(){
let paterno=extraerApellidos(apelidos)[0].length;
let materno=extraerApellidos(apelidos)[1].length;
return parseInt(paterno)+parseInt(materno);

}

extraer.addEventListener('click', function () {
  
    apaterno.value = extraerApellidos(apelidos)[0];
    amaterno.value = extraerApellidos(apelidos)[1];
    respnombres.value=extraerNombres(apelidos);
    resplogape.value=longitudApellido();
    resmes.value=nombreMes(fenac);
    resedad.value=calcularEdad()+" años";


});

var cambio=1;


colorear.addEventListener('click',function(){

    if(cambio){
        colorear.style.backgroundColor='#B32428';
        for(let i=0;i<fondoinput.length;i++) {
            fondoinput[i].style.backgroundColor='#B32428';
             }
             cambio=0;
    }else{
        colorear.style.backgroundColor ='#04529b';
        for(let i=0 ;i<fondoinput.length;i++) {
            fondoinput[i].style.backgroundColor='#04529b';
             }

             cambio=1;  
    }

console.log(cambio);

});

