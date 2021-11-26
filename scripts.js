


  function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  $(document).ready(function(){  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
  });

  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    console.log()
    
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    
  }
  
  

  function agregarBoton(htmlID, texto, funcion) { 
	var o=document.getElementById(htmlID); 
	o.html+='<input type="button" value="'+texto+'" onclick="'+funcion+'">'; 
}

// funcion que compruebaa el puzzle del nivel 1
  function comprobarPuzzle(){
    
    
    if((document.getElementById('butt3').parentNode.id=='div3_1')&&
    (document.getElementById('butt1').parentNode.id=='div3_2')&&
    (document.getElementById('butt5').parentNode.id=='div3_3')&&
    (document.getElementById('butt2').parentNode.id=='div5_3')&&
    (document.getElementById('butt6').parentNode.id=='div3_4')&&
    (document.getElementById('butt4').parentNode.id=='div5_4')
    ){
        
        
        alert('Felicitaciones puede pasar al siguiente nivel!');
      
        var objeto =document.getElementById('mostrar_ejercicio2');
        objeto.removeAttribute('disabled');
        var objeto2 =document.getElementById('lol'); // activar el boton de siguiente nivel
        objeto2.removeAttribute('disabled');
        $('#alarmaPasoNivel2').show();
        mostrarNivel2();
       
       
        
    }
    else{
        alert('Intentalo de nuevo');
    }
      
    
  }

  function mostrarNivel2() {
    $('#activoPasivoPatrimonio').show();
    $('#lol').show();
  
  }

/*
 function reset_m(){
  
  

  var but2_2=document.getElementById('but2_2');
  var posicion2=elemento.getBoundingClientRect();
   document.getElementById('but2_2').style.top=316;
   document.getElementById('but2_2').style.left=987.1875;
   alert("booo");
  
   /*console.log(document.getElementById('but2_2').style.top);
   console.log(document.getElementById('but2_2').style.left);
   console.log(document.getElementById('niv2').style.left);
   console.log(document.getElementById('niv2').style.left);
  
 }
*/

  function reset1(){
    var container = document.getElementById('Nivel 1');
    container.innerHTML= html;
}                
var html;
window.onload = function(){
	html = document.getElementById('Nivel 1').innerHTML;
};

// fucion que desabilita el segundo div del nivel 2


function toggleStatus() { 
    if ($('#toggleElement').is(':checked')) { $('#idOfTheDIV :input').attr('disabled', true);
     } else { 
         $('#idOfTheDIV :input').removeAttr('disabled');
         } 
        
}

function posicion(){
  var but2_2=document.getElementById('but2_2')
  var posicion=but2_2.getBoundingClientRect();
  console.log(posicion.left, posicion.top);
  alert("hola")
}

// funcion que valid los div de la columnas
/*
function drop2(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    comprobarECU_1()
  }
function comprobarECU_1(){
    if((document.getElementById('but2_2').parentNode.id=='div_2_4')
    ){    
        alert('Muy bien!');
        var elemento=document.getElementById('but2_2')
        var posicion=elemento.getBoundingClientRect();
        console.log(posicion.top, posicion.right, posicion.bottom, posicion.left)
        var objeto =document.getElementById('next');
        objeto.removeAttribute('disabled');
        var objeto2 =document.getElementById('lol');
        objeto2.removeAttribute('disabled');   
    }
    else{
        alert('Intentalo de nuevo');
        ev.dataTransfer.clearData(type);
    } 
  }

  function myFunction() {
    document.getElementById("myForm").reset();
  }

function reset_m(){
 
  alert("hola")
  console.log(document.getElementById('niv2').style.left)
  $('#but2_2').css('left', x-position).css('top', y-position);
}
/*
$("#but2_2").draggable
    ({  
        revert: 'invalid',
        snap: '#div_2_4',
        snapMode: 'corner',
        snapTolerance: '22'
    });

$("div_2_4").data({
  'originalLeft': $("#but2_2").css('left'),
  'origionalTop': $("##but2_2").css('top')
});

$("#div_2_4").droppable
({
    accept: '#but2_2', 
    drop: function(event, ui) 
    {
        $(this).find("#but2_2").html();
    }
});

$(".reset").click(function() {
  $("#but2_2").css({'left': $("#but2_2").data('originalLeft'),
                       'top': $("#but2_2").data('origionalTop')}
                       );
});



*/
/*
  function drop3(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    comprobarECU_2()
  }
function comprobarECU_2(){
    if((document.getElementById('but2_4').parentNode.id=='div_2_4_2')
    ){    
        alert('Sigue Así!');
      
        var objeto =document.getElementById('next');
        objeto.removeAttribute('disabled');
        var objeto2 =document.getElementById('lol');
        objeto2.removeAttribute('disabled');   
    }
    else{
        alert('Intentalo de nuevo');
    } 
  }
  */
  
  function drop4(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    comprobarECU_3()
    console.log()
  }
function comprobarECU_3(){
    if((document.getElementById('but2_5').parentNode.id=='div_2_4_3')
    ){    
        alert('Excelente!');
        mostrarCuartaColumna()
        console.log(document.getElementById('but2_5').parentNode.id)
         
    }
    else{
        alert('Intentalo de nuevo');
    } 
  }

  function mostrarCuartaColumna(){
    $('#niv2_4').show();
    $('#niv2_3').hide();
     
    
  }

  function drop5(ev) {

    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    comprobarECU_4()
  }
function comprobarECU_4(){
    if((document.getElementById('but2_8').parentNode.id=='div_2_4_4')
    ){    
        alert('Felicitaciones');
    
        mostrarQuintaColumna();  
    }
    else{
        alert('boo');
        mostrarQuintaColumna();
    } 
  }

  function mostrarQuintaColumna(){
    $('#niv2_5').show(); 
    $('#niv2_4').hide();
  }


function drop6(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    comprobarECU_5()
}
function comprobarECU_5(){
    if((document.getElementById('but2_10').parentNode.id=='div_2_4_5')
    ){    
        alert('Felicitaciones, Puedes pasar al siguiente nivel');
        mostrarNivel3()
    }
    else{
        alert('Intentalo de nuevo');
    } 
  }

 
  
  var niv2_2= false;


  //scrip nivel 3

  function mostrarNivel3(){
    $('#niv2_5').show(); 
    $('#niv2_4').show();
    $('#niv2_3').show();
    $('#botonNivel3').show();
    $('#lol1').show();
  }

  //script nivel 6
  
  var cont=0
  function ShowSelected()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;*/
var bandera=false


if(document.getElementById('Acciones (de otras empresas)').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  reset()
  cont=0;
}

}

function ShowSelected2()
{

if(document.getElementById('Acreedores varios').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}

function ShowSelected3()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;*/
var bandera=false


if(document.getElementById('Activo').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}

function ShowSelected4()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;*/
var bandera=false


if(document.getElementById('Anticipos entregados por la empresa').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}

function ShowSelected5()
{

if(document.getElementById('Aportes sociales').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}

function ShowSelected6()
{

if(document.getElementById('Beneficios a empleados').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}

function ShowSelected7()
{


if(document.getElementById('Bonos (emitidos por otras empresas)').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}

function ShowSelected8()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;*/
var bandera=false


if(document.getElementById('Capital social').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}


function ShowSelected9()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;*/
var bandera=false


if(document.getElementById('Capital suscrito y pagado').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}

function ShowSelected10()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;*/
var bandera=false


if(document.getElementById('Carta de crédito de un banco').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}

function ShowSelected11()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;*/
var bandera=false


if(document.getElementById('Certificado de depósito a término').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}

function ShowSelected12()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;*/
var bandera=false


if(document.getElementById('Cheques en caja general').value == "B" ) {
  validar_cont()
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  
}
else{
  cont=0;
  reset()
}
}

function ShowSelected13()
{


if(document.getElementById('Clientes').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}

function ShowSelected14()
{



if(document.getElementById('Computadores').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}

function ShowSelected15()
{

if(document.getElementById('Costos').value =="B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected16()
{



if(document.getElementById('Costos y gastos por pagar').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected17()
{


if(document.getElementById('Cuenta por cobrar a trabajadores').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected18()
{




if(document.getElementById('Cuentas por cobrar').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected19()
{


if(document.getElementById('Cuentas por pagar').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected20()
{

if(document.getElementById('Cuentas por pagar a socios').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected21()
{


if(document.getElementById('Cuotas o partes de interés social').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected22()
{


if(document.getElementById('Derechos de franquicia').value == "B" ) {
  
  cont+=1;
  
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected23()
{

if(document.getElementById('Deudores varios').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected24()
{


if(document.getElementById('Dividendos decretados en acciones').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected25()
{

if(document.getElementById('Efectivo').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected26()
{

if(document.getElementById('Efectivo en bancos').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected27()
{

if(document.getElementById('Efectivo en caja menor').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected28()
{


if(document.getElementById('Envases y empaques').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected29()
{


if(document.getElementById('Ganancias acumuladas').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected30()
{

if(document.getElementById('Gastos').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected31()
{


if(document.getElementById('Impuesto a las ventas').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected32()
{

if(document.getElementById('Impuesto de renta por pagar').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected33()
{


if(document.getElementById('Impuestos por pagar').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected34()
{


if(document.getElementById('Impuestos, gravámenes y tasas').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected35()
{


if(document.getElementById('Ingresos').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected36()
{


if(document.getElementById('Intangibles').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected37()
{


if(document.getElementById('Inventarios').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected38()
{

if(document.getElementById('Inversiones').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected39()
{


if(document.getElementById('Inversiones a valor razonable').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}

function ShowSelected40()
{

if(document.getElementById('Licencias de software').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected41()
{

if(document.getElementById('Local comercial').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected42()
{


if(document.getElementById('Marcas adquiridas').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected43()
{


if(document.getElementById('Materia prima').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected44()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;*/
var bandera=false


if(document.getElementById('Mercancía').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected45()
{



if(document.getElementById('Obligaciones de financiamiento').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected46()
{


if(document.getElementById('Obligaciones financieras').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected47()
{



if(document.getElementById('Obligaciones laborales').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected48()
{


if(document.getElementById('Otros resultados acumulados').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected48()
{


if(document.getElementById('Otros resultados acumulados').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected49()
{



if(document.getElementById('Otros resultados integrales').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected50()
{


if(document.getElementById('Pagaré (en un banco)').value == "B" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}

/*
function ShowSelected48()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;*/

/*

if(document.getElementById('Otros resultados acumulados').value == "B" ) {
  validar_cont()
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  
}
else{
  cont=0;
  reset()
}
}
function ShowSelected48()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;
var bandera=false


if(document.getElementById('Otros resultados acumulados').value == "B" ) {
  validar_cont()
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  
}
else{
  cont=0;
  reset()
}
}
function ShowSelected48()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;
var bandera=false


if(document.getElementById('Otros resultados acumulados').value == "B" ) {
  validar_cont()
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  
}
else{
  cont=0;
  reset()
}
}
function ShowSelected48()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;
var bandera=false


if(document.getElementById('Otros resultados acumulados').value == "B" ) {
  validar_cont()
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  
}
else{
  cont=0;
  reset()
}
}
function ShowSelected48()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;
var bandera=false


if(document.getElementById('Otros resultados acumulados').value == "B" ) {
  validar_cont()
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  
}
else{
  cont=0;
  reset()
}
}
function ShowSelected48()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;
var bandera=false


if(document.getElementById('Otros resultados acumulados').value == "B" ) {
  validar_cont()
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  
}
else{
  cont=0;
  reset()
}
}
function ShowSelected48()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;
var bandera=false


if(document.getElementById('Otros resultados acumulados').value == "B" ) {
  validar_cont()
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  
}
else{
  cont=0;
  reset()
}
}
function ShowSelected48()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;
var bandera=false


if(document.getElementById('Otros resultados acumulados').value == "B" ) {
  validar_cont()
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  
}
else{
  cont=0;
  reset()
}
}
function ShowSelected48()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;
var bandera=false


if(document.getElementById('Otros resultados acumulados').value == "B" ) {
  validar_cont()
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  
}
else{
  cont=0;
  reset()
}
}
function ShowSelected48()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;
var bandera=false


if(document.getElementById('Otros resultados acumulados').value == "B" ) {
  validar_cont()
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  
}
else{
  cont=0;
  reset()
}
}
function ShowSelected48()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;
var bandera=false


if(document.getElementById('Otros resultados acumulados').value == "B" ) {
  validar_cont()
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  
}
else{
  cont=0;
  reset()
}
}
function ShowSelected48()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;*/
/*
/*var cod = document.getElementById("Acciones (de otras empresas)").value;
var bandera=false


if(document.getElementById('Otros resultados acumulados').value == "B" ) {
  validar_cont()
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  
}
else{
  cont=0;
  reset()
}
}
function ShowSelected48()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;
var bandera=false


if(document.getElementById('Otros resultados acumulados').value == "B" ) {
  validar_cont()
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  
}
else{
  cont=0;
  reset()
}
}
function ShowSelected48()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;
var bandera=false


if(document.getElementById('Otros resultados acumulados').value == "B" ) {
  validar_cont()
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  
}
else{
  cont=0;
  reset()
}
}
function ShowSelected48()
{


/*var cod = document.getElementById("Acciones (de otras empresas)").value;
var bandera=false


if(document.getElementById('Otros resultados acumulados').value == "B" ) {
  validar_cont()
  cont+=1;
  bandera=true;
  alert("Usted llleva "+cont+" consecutivos")
  
}
else{
  cont=0;
  reset()
}
}

*/
const button = document.querySelector('.nivel_6')
nivel_6.disabled = true;


function validar_cont(){
  if (cont==2){
    alert(" Ya puedes pasar al siguiente nivel")
    const button = document.getElementById('nivel_6')
    button.disabled=false;
    const nav6= document.getElementById('nav-link disabled')
    nav6.disable=false
  }
}

function reset(){
  document.getElementById("Acciones (de otras empresas)").selectedIndex = 0;
  document.getElementById("Acreedores varios").selectedIndex = 0;
  document.getElementById("Activo").selectedIndex = 0;
  document.getElementById('Anticipos entregados por la empresa').selectedIndex=0; 
  document.getElementById('Aportes sociales').selectedIndex=0; 
  document.getElementById('Beneficios a empleados').selectedIndex=0; 
  document.getElementById('Bonos (emitidos por otras empresas)').selectedIndex=0; 
  document.getElementById('Capital social').selectedIndex=0; 
  document.getElementById('Capital suscrito y pagado').selectedIndex=0; 
  document.getElementById('Carta de crédito de un banco').selectedIndex=0; 
  document.getElementById('Certificado de depósito a término').selectedIndex=0; 
  document.getElementById('Cheques en caja general').selectedIndex=0; 
  document.getElementById('Clientes').selectedIndex=0; 
  document.getElementById('Computadores').selectedIndex=0;
  document.getElementById("Costos").selectedIndex = 0;
  document.getElementById("Costos y gastos por pagar").selectedIndex = 0;
  document.getElementById("Cuenta por cobrar a trabajadores").selectedIndex = 0;
  document.getElementById('Cuentas por cobrar').selectedIndex=0; 
  document.getElementById('Cuentas por pagar').selectedIndex=0; 
  document.getElementById('Cuentas por pagar a socios').selectedIndex=0; 
  document.getElementById('Cuotas o partes de interés social').selectedIndex=0;
  document.getElementById('Derechos de franquicia').selectedIndex=0; 
  document.getElementById('Deudores varios').selectedIndex=0; 
  document.getElementById('Dividendos decretados en acciones').selectedIndex=0; 
  document.getElementById('Efectivo').selectedIndex=0; 
  document.getElementById('Efectivo en bancos').selectedIndex=0; 
  document.getElementById('Efectivo en caja menor').selectedIndex=0; 
  document.getElementById('Envases y empaques').selectedIndex=0; 
  document.getElementById('Ganancias acumuladas').selectedIndex=0; 
  document.getElementById("Gastos").selectedIndex = 0;
  document.getElementById("Activo").selectedIndex = 0;
  document.getElementById('Impuesto a las ventas').selectedIndex=0; 
  document.getElementById('Impuesto de renta por pagar').selectedIndex=0; 
  document.getElementById('Impuestos, gravámenes y tasas').selectedIndex=0; 
  document.getElementById('Ingresos').selectedIndex=0; 
  document.getElementById('Intangibles').selectedIndex=0; 
  document.getElementById('Inventarios').selectedIndex=0; 
  document.getElementById('Inversiones').selectedIndex=0; 
  document.getElementById('Inversiones a valor razonable').selectedIndex=0; 
  document.getElementById('Licencias de software').selectedIndex=0; 
  document.getElementById('Local comercial').selectedIndex=0; 
  document.getElementById('Marcas adquiridas').selectedIndex=0;
  document.getElementById("Materia prima").selectedIndex = 0;
  document.getElementById("Mercancía").selectedIndex = 0;
  document.getElementById('Obligaciones de financiamiento').selectedIndex=0; 
  document.getElementById('Obligaciones financieras').selectedIndex=0; 
  document.getElementById('Obligaciones laborales').selectedIndex=0; 
  document.getElementById('Otros resultados acumulados').selectedIndex=0; 
  document.getElementById('Otros resultados integrales').selectedIndex=0; 
  document.getElementById('Pagaré (en un banco)').selectedIndex=0; 

  /*
  document.getElementById('Pasivo').selectedIndex=0; 
  document.getElementById('Patrimonio').selectedIndex=0; 
  document.getElementById('Prestaciones sociales por pagar').selectedIndex=0; 
  document.getElementById('Préstamo de una cooperativa').selectedIndex=0; 
  document.getElementById('Prima en colocación de acciones').selectedIndex=0;
  document.getElementById("Productos terminados").selectedIndex = 0;
  document.getElementById("Propiedad, planta y equipo").selectedIndex = 0;
  document.getElementById('Propiedades').selectedIndex=0; 
  document.getElementById('Proveedores').selectedIndex=0; 
  document.getElementById('Reserva estatutaria').selectedIndex=0; 
  document.getElementById('Reserva legal').selectedIndex=0; 
  document.getElementById('Capital social').selectedIndex=0; 
  document.getElementById('Reserva ocasional').selectedIndex=0; 
  document.getElementById('Reservas').selectedIndex=0; 
  document.getElementById('Resultados del ejercicio').selectedIndex=0; 
  document.getElementById('Resultados ejercicios anteriores').selectedIndex=0; 
  document.getElementById('Salarios por pagar').selectedIndex=0; 
  document.getElementById('Seguridad social por pagar').selectedIndex=0;
  //1 = option 2
  }
*/
}


/*var cod = document.getElementById("Acciones (de otras empresas)").value;

if(document.getElementById('Acreedores varios').value == "B") {
    cont+=1;
    bandera=true;
  
  
  }else{
    cont=0;
  }
if(document.getElementById('Activo').value == "R") {
    
    cont+=1;
    bandera=true;
   
*/ 

/* Para obtener el texto 
/*var combo = document.getElementById("Acciones (de otras empresas)");
var selected = combo.options[combo.selectedIndex].text;
alert(selected);
}
 */

/*script nivel 6*/


function reset_n6(){
  document.getElementById("CompraMercancia").selectedIndex = 0;
  document.getElementById("CompraMercancia_con").selectedIndex = 0;
  document.getElementById("CompraMercanciaCredito").selectedIndex = 0;
  document.getElementById("CompraMercanciaCredito_con").selectedIndex = 0;
  document.getElementById("CompraMercancia").selectedIndex = 0;
  document.getElementById("IngresaNuevoSocio").selectedIndex = 0;
  document.getElementById("IngresaNuevoSocio_con").selectedIndex = 0;
  document.getElementById("PagoValorAdedudado").selectedIndex = 0;
  document.getElementById("PagoValorAdedudado_con").selectedIndex = 0;
  document.getElementById("VentaMercancia").selectedIndex = 0;
  document.getElementById("VentaMercancia_con").selectedIndex = 0;
  document.getElementById("ReconocimientoCosto").selectedIndex = 0;
  document.getElementById("ReconocimientoCosto_con").selectedIndex = 0;
  document.getElementById("ReconocimientoGasto").selectedIndex = 0;
  document.getElementById("ReconocimientoGasto_con").selectedIndex = 0;
}

function validar_resultados(){
 var valor= document.getElementById("CompraMercancia").value;

  if(
        (document.getElementById("CompraMercancia").value == 1) //&& 
       // (document.getElementById("CompraMercancia_con").value== 7) &&
       // (document.getElementById("CompraMercanciaCredito").value= 1)//&&
       // (document.getElementById("CompraMercanciaCredito_con").value = 2)&&
       // (document.getElementById("IngresaNuevoSocio").value = 3)&&
       // (document.getElementById("IngresaNuevoSocio_con").value= 1)&&
       // (document.getElementById("PagoValorAdedudado").value = 7)&&
        //(document.getElementById("PagoValorAdedudado_con").value = 1)&&
       // (document.getElementById("VentaMercancia").value = 4)&&
       // (document.getElementById("VentaMercancia_con").value = 1)&&
       // (document.getElementById("ReconocimientoCosto").value = 6)&&
       // (document.getElementById("ReconocimientoCosto_con").value = 7)&&
       // (document.getElementById("ReconocimientoGasto").value = 5)&&
       // (document.getElementById("ReconocimientoGasto_con").value = 2)
        ){
         
       
          alert("bien"+valor)
          $('#passwordsNoMatchRegister').show();
  

  }
  else{
    alert("malo")
    $('#passwordsNoMatchRegister2').show();
    $('#passwordsNoMatchRegister').hide();
  }
}

function mostrar_nivel7(){
  $('#claseDiv').show();
}


/*nivel 8*/

function sumar (valor) {
  var total = 0;	
  valor = parseInt(valor); // Convertir el valor a un entero (número).

  total = document.getElementById('spTotal').innerHTML;

  // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
  total = (total == null || total == undefined || total == "") ? 0 : total;

  /* Esta es la suma. */
  total = (parseInt(total) + parseInt(valor));

  // Colocar el resultado de la suma en el control "span".
  document.getElementById('spTotal').innerHTML = total;

  if (total == 650){
    alert("Respuesta Correcta");
    $('#passwordsNoMatchRegister8').show();
    
  }
}

function mostrar2() {
  $('#ejer_2').show();

}

function sumar2 (valor) {
  var total = 0;	
  valor = parseInt(valor); // Convertir el valor a un entero (número).

  total = document.getElementById('spTotal2').innerHTML;

  // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
  total = (total == null || total == undefined || total == "") ? 0 : total;

  /* Esta es la suma. */
  total = (parseInt(total) + parseInt(valor));

  // Colocar el resultado de la suma en el control "span".
  document.getElementById('spTotal2').innerHTML = total;

  if (total == 210){
    alert("Respuesta Correcta");
    $('#passwordsNoMatchRegister10').show();
    
  }
}