


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
        
        
        /*alert('Felicitaciones puede pasar al siguiente nivel!');*/
      
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


// funcion que desabilita el segundo div del nivel 2


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
        
         
    }
    else{
        
        $('#ErrorSignofila1').show();
        
    } 
  }

 
  function dropg(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    
  }

  function dropg2(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    
  }


  function dropg3(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    
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
        alert('Felicitaciones !');
    
        mostrarQuintaColumna();  
    }
    else{
        
        $('#ErrorSignofila2').show();
        
        
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
        
        $('#ErrorSignofila3').show();
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
    $("#nivel3_barra").removeClass( "disabled"); 
    $("#nivel3_barra").addClass( "active");
    $('#but2_6').hide();
    $('#but2_7').hide();
    $('#but2_9').hide();
  
  }


  function solucion1Nivel3(){

    if((document.getElementById('cuenta_1_1').parentNode.id=='div3_1_3')&&
    (document.getElementById('cuenta_1_2').parentNode.id=='div3_1_1')&&
    (document.getElementById('cuenta_1_4').parentNode.id=='div3_1_1')&&
    (document.getElementById('cuenta_1_8').parentNode.id=='div3_1_1')&&
    (document.getElementById('cuenta_1_10').parentNode.id=='div3_1_1')&&
    (document.getElementById('cuenta_1_11').parentNode.id=='div3_1_1')&&
    (document.getElementById('cuenta_1_15').parentNode.id=='div3_1_1')&&
    (document.getElementById('cuenta_1_3').parentNode.id=='div3_1_3')&&
    (document.getElementById('cuenta_1_6').parentNode.id=='div3_1_3')&&
    (document.getElementById('cuenta_1_12').parentNode.id=='div3_1_3')&&
    (document.getElementById('cuenta_1_5').parentNode.id=='div3_1_5')&&
    (document.getElementById('cuenta_1_7').parentNode.id=='div3_1_5')&&
    (document.getElementById('cuenta_1_9').parentNode.id=='div3_1_5')&&
    (document.getElementById('cuenta_1_13').parentNode.id=='div3_1_5')&&
    (document.getElementById('cuenta_1_14').parentNode.id=='div3_1_5')


    ){
        
      alert('Clasificación Correcta');
      
      $('#Clasificacion1Nivel2_1').hide();
      $('#clasificador_cuentas_2').show();

    }else{
        alert('Intentalo de nuevo');
        $('#ErrorSignofila1').show();
        
    }

  }

  function solucion2Nivel3(){
    if((document.getElementById('cuenta_2_1').parentNode.id=='div3_1_3')&&
    (document.getElementById('cuenta_2_2').parentNode.id=='div3_1_1')&&
    (document.getElementById('cuenta_2_3').parentNode.id=='div3_1_3')&&
    (document.getElementById('cuenta_2_4').parentNode.id=='div3_1_1')&&
    (document.getElementById('cuenta_2_5').parentNode.id=='div3_1_5')&&
    (document.getElementById('cuenta_2_6').parentNode.id=='div3_1_3')&&
    (document.getElementById('cuenta_2_7').parentNode.id=='div3_1_5')&&
    (document.getElementById('cuenta_2_8').parentNode.id=='div3_1_3')&&
    (document.getElementById('cuenta_2_9').parentNode.id=='div3_1_5')&&
    (document.getElementById('cuenta_2_10').parentNode.id=='div3_1_1')&&
    (document.getElementById('cuenta_2_11').parentNode.id=='div3_1_1')&&
    (document.getElementById('cuenta_2_12').parentNode.id=='div3_1_1')&&
    (document.getElementById('cuenta_2_13').parentNode.id=='div3_1_5')&&
    (document.getElementById('cuenta_2_14').parentNode.id=='div3_1_5')&&
    (document.getElementById('cuenta_2_15').parentNode.id=='div3_1_1')

    
    
    ){
      alert('Clasificación Correcta');
      $('#clasificador_cuentas_2').hide();
      $('#clasificador_cuentas_3').show();

  }
 
  else{
    alert("intentalo de nuevo");
  }
}


function solucion3Nivel3(){
  if((document.getElementById('cuenta_3_1').parentNode.id=='div3_1_5')&&
  (document.getElementById('cuenta_3_2').parentNode.id=='div3_1_1')&&
  (document.getElementById('cuenta_3_3').parentNode.id=='div3_1_3')&&
  (document.getElementById('cuenta_3_4').parentNode.id=='div3_1_1')&&
  (document.getElementById('cuenta_3_5').parentNode.id=='div3_1_3')&&
  (document.getElementById('cuenta_3_6').parentNode.id=='div3_1_1')&&
  (document.getElementById('cuenta_3_8').parentNode.id=='div3_1_3')&&
  (document.getElementById('cuenta_3_9').parentNode.id=='div3_1_5')&&
  (document.getElementById('cuenta_3_10').parentNode.id=='div3_1_3')&&
  (document.getElementById('cuenta_3_11').parentNode.id=='div3_1_1')&&
  (document.getElementById('cuenta_3_12').parentNode.id=='div3_1_5')&&
  (document.getElementById('cuenta_3_13').parentNode.id=='div3_1_5')&&
  (document.getElementById('cuenta_3_14').parentNode.id=='div3_1_1')&&
  (document.getElementById('cuenta_3_15').parentNode.id=='div3_1_1')
  
  ){
    alert('Clasificación Correcta');
    $('#clasificador_cuentas_3').hide();
    $('#clasificador_cuentas_4').show();

}

else{
  alert("intentalo de nuevo");
}
}
function solucion4Nivel3(){
  if((document.getElementById('cuenta_4_1').parentNode.id=='div3_1_1')&&
  (document.getElementById('cuenta_4_2').parentNode.id=='div3_1_1')&&
  (document.getElementById('cuenta_4_3').parentNode.id=='div3_1_5')&&
  (document.getElementById('cuenta_4_4').parentNode.id=='div3_1_5')&&
  (document.getElementById('cuenta_4_5').parentNode.id=='div3_1_1')&&
  (document.getElementById('cuenta_4_6').parentNode.id=='div3_1_3')&&
  (document.getElementById('cuenta_4_7').parentNode.id=='div3_1_1')&&
  (document.getElementById('cuenta_4_8').parentNode.id=='div3_1_3')&&
  (document.getElementById('cuenta_4_9').parentNode.id=='div3_1_1')&&
  (document.getElementById('cuenta_4_10').parentNode.id=='div3_1_3')&&
  (document.getElementById('cuenta_4_11').parentNode.id=='div3_1_3')&&
  (document.getElementById('cuenta_4_12').parentNode.id=='div3_1_5')&&
  (document.getElementById('cuenta_4_13').parentNode.id=='div3_1_3')&&
  (document.getElementById('cuenta_4_14').parentNode.id=='div3_1_1')&&
  (document.getElementById('cuenta_4_15').parentNode.id=='div3_1_5')

  ){
    alert('Clasificación Correcta');
    $('#clasificador_cuentas_4').hide();
    $('#clasificador_cuentas_5').show();

}

else{
  alert("intentalo de nuevo");
  $('#ErrorSignofila1').show();
}
}

function solucion5Nivel3(){
  if((document.getElementById('cuenta_5_1').parentNode.id=='div3_1_5')&&
  (document.getElementById('cuenta_5_2').parentNode.id=='div3_1_1')&&
  (document.getElementById('cuenta_5_3').parentNode.id=='div3_1_3')&&
  (document.getElementById('cuenta_5_4').parentNode.id=='div3_1_1')&&
  (document.getElementById('cuenta_5_5').parentNode.id=='div3_1_3')&&
  (document.getElementById('cuenta_5_6').parentNode.id=='div3_1_5')&&
  (document.getElementById('cuenta_5_7').parentNode.id=='div3_1_1')&&
  (document.getElementById('cuenta_5_8').parentNode.id=='div3_1_5')&&
  (document.getElementById('cuenta_5_9').parentNode.id=='div3_1_3')&&
  (document.getElementById('cuenta_5_10').parentNode.id=='div3_1_1')&&
  (document.getElementById('cuenta_5_11').parentNode.id=='div3_1_1')&&
  (document.getElementById('cuenta_5_12').parentNode.id=='div3_1_5')&&
  (document.getElementById('cuenta_5_13').parentNode.id=='div3_1_5')&&
  (document.getElementById('cuenta_5_14').parentNode.id=='div3_1_3')&&
  (document.getElementById('cuenta_5_15').parentNode.id=='div3_1_3')

  ){
    alert("Felicitaciones, ya puedes pasar al nivel 4");
    mostrarNivel4()
    $('#botonNivel4').show();
    

}

else{
  alert("intentalo de nuevo");
  $('#ErrorSignofila1').show();
}
}

//scrip nivel   4




function mostrarNivel4(){
  $('#lol2').show();
  $("#nivel4_barra").removeClass( "disabled"); 
  $("#nivel4_barra").addClass( "active");

}

var contN4 =0;
function ValidaNIvel4_1()
{


  if(document.getElementById('AcionesDeOtrasEmpresasNivel4').value == "Db" ) {
    
      contN4++;
      alert("Usted lleva "+contN4+" consecutivos")
      validaContNivel4();
  }
  else{
      resetNivel4()
      contN4=0;
  }
    
}


function ValidaNIvel4_2()
{

      if(document.getElementById('AcrededoresVariosNivel4').value == "Cr" ) {

      contN4+=1;
      
      alert("Usted lleva "+contN4+" consecutivos")
      validaContNivel4()
      }
      else{
      resetNivel4()
      contN4=0;
      }
 
}

function ValidaNIvel4_3()
{
  if(document.getElementById('ActivoNivel4').value == "Db" ) {

    contN4+=1;
    bandera=true;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
      resetNivel4()
      contN4=0;
  }
}

function ValidaNIvel4_4()
{

  if(document.getElementById('AnticiposEntregadosPorLaEmpresaN4').value == "Db" ) {
    
    contN4+=1;
  
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
  resetNivel4()
  contN4=0;
  }  
}

function ValidaNIvel4_5()
{
  if(document.getElementById('AportesSocialesN4').value == "Cr" ) {
    contN4+=1;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
}

function ValidaNIvel4_6()
{
  if(document.getElementById('BeneficiosAempleadosN4').value == "Cr" ) {
    contN4+=1;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
    }
    else{
    resetNivel4()
    contN4=0;
    }
}

function ValidaNIvel4_7()
{
  if(document.getElementById('Bonos(emitidos por otras empresas)N4').value == "Db" ) {
    contN4+=1;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
    else{
    resetNivel4()
    contN4=0;
    }
}

function ValidaNIvel4_8()
{
  if(document.getElementById('CapitalSocialN4').value == "Cr" ) {
      contN4+=1;
      alert("Usted lleva "+contN4+" consecutivos")
      validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }

}

function ValidaNIvel4_9()
{
  if(document.getElementById('CapitalSuscritoYpagadoN4').value == "Cr" ) {
  contN4+=1;
  alert("Usted lleva "+contN4+" consecutivos")
  validaContNivel4()
  }
  else{
  resetNivel4()
  contN4=0;
  }
}


function ValidaNIvel4_10()
{
  if(document.getElementById('CartaDeCreditoDeUnBancoN4').value == "Cr" ) {
    contN4+=1; 
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
}

function ValidaNIvel4_11()
{
  if(document.getElementById('CertificadoDedepositoAterminoN4').value == "Db" ) {
    contN4+=1;
    bandera=true;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
}

function ValidaNIvel4_12()
{
  if(document.getElementById('ChequesEnAajaGeneralN4').value == "Db" ) {
    contN4+=1; 
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
}

function ValidaNIvel4_13()
{
  if(document.getElementById('ClientesN4').value == "Db" ) {
    contN4+=1;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
}

function ValidaNIvel4_14()
{
  if(document.getElementById('ComputadoresN4').value == "Db" ) {
    contN4+=1;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
}

function ValidaNIvel4_15()
{
  if(document.getElementById('CostosN4').value == "Db" ) {
    contN4+=1; 
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
}

function ValidaNIvel4_16()
{
  if(document.getElementById('CostosYgastosPorPagarN4').value == "Cr" ) {
    contN4+=1; 
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
}

function ValidaNIvel4_17()
{
  if(document.getElementById('CuentaPorCobrarAtrabajadoresN4').value == "Db" ) {
    contN4+=1;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
}

function ValidaNIvel4_18()
{
  if(document.getElementById('CuentasPorCobrarN4').value == "Db" ) {
    contN4+=1;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
    }
}

function ValidaNIvel4_19()
{
  if(document.getElementById('CuentasPorPagarN4').value == "Cr" ) {
    contN4+=1;
    bandera=true;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
}

function ValidaNIvel4_20()
{
  if(document.getElementById('CuentasPorPagarAsociosN4').value == "Cr" ) {
    contN4+=1;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
}


function ValidaNIvel4_21()
{
  if(document.getElementById('CuotasOpartesDeInteresSocialN4').value == "Cr" ) {
  contN4+=1;
  alert("Usted lleva "+contN4+" consecutivos")
  validaContNivel4()
}
  else{
  resetNivel4()
  contN4=0;
  }
}
function ValidaNIvel4_22()
{
  if(document.getElementById('DerechosDeFranquiciaN4').value == "Db" ) {
  contN4+=1;
  alert("Usted lleva "+contN4+" consecutivos")
  validaContNivel4()
  }
  else{
  resetNivel4()
  contN4=0;
  }
}
function ValidaNIvel4_23()
{
  if(document.getElementById('DeudoresVariosN4').value == "Cr" ) {
    contN4+=1;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
    }
  else{
    resetNivel4()
    contN4=0;
    }
}

function ValidaNIvel4_24()
{
  if(document.getElementById('DividendosDecretadosEnAccionesN4').value == "Cr" ) {
  contN4+=1;
  alert("Usted lleva "+contN4+" consecutivos")
  validaContNivel4()
}
else{
  resetNivel4()
  contN4=0;
  }
}

function ValidaNIvel4_25()
{
  if(document.getElementById('EfectivoN4').value == "Db" ) {
    contN4+=1;
    bandera=true;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
  resetNivel4()
  contN4=0;
  }
}

function ValidaNIvel4_26()
{
  if(document.getElementById('EfectivoEnBancosN4').value == "Db" ) {
    contN4+=1; 
    alert("Usted lleva "+contN4+" consecutivos")
    console.log(contN4)
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
}

function ValidaNIvel4_27()
{
  if(document.getElementById('EfectivoEnCajaMenorN4').value == "Db" ) {
    contN4+=1;
    bandera=true;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
}


function ValidaNIvel4_28()
{
  if(document.getElementById('EnvasesYempaquesN4').value == "Db" ) {  
    contN4+=1;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
}

function ValidaNIvel4_29()
{
  if(document.getElementById('GananciasAcumuladasN4').value == "Cr" ) {
    contN4+=1;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
}

function ValidaNIvel4_30()
{
  if(document.getElementById('GastosN4').value == "Db" ) {
    contN4+=1;
    bandera=true;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
}

function ValidaNIvel4_31()
{
  if(document.getElementById('ImpuestoAlasVentasN4').value == "Cr" ) {
    contN4+=1;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
}

function ValidaNIvel4_32()
{
  if(document.getElementById('ImpuestoDerentaPorPagarN4').value == "Cr" ) {
    contN4+=1;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
}

function ValidaNIvel4_33()
{
  if(document.getElementById('ImpuestosPorPagarN4').value == "Cr" ) {

    contN4+=1;
    bandera=true;
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
}

function ValidaNIvel4_34()
{
    var bandera=false
    console.log(contN4)

    if(document.getElementById('ImpuestosGravamenesYtasasN4').value == "Cr" ) {

      contN4+=1;
      bandera=true;
      alert("Usted lleva "+contN4+" consecutivos")
      validaContNivel4()
    }
    else{
      resetNivel4()
      contN4=0;
    }
      
}

function ValidaNIvel4_35()
{
var bandera=false
console.log(contN4)

if(document.getElementById('IngresosN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}

}


function ValidaNIvel4_36()
{

  if(document.getElementById('IntangiblesN4').value == "Db" ) {

    contN4+=1; 
    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }

}


function ValidaNIvel4_37()
{
  var bandera=false
  console.log(contN4)

  if(document.getElementById('InventariosN4').value == "Db" ) {

  contN4+=1;
  bandera=true;
  alert("Usted lleva "+contN4+" consecutivos")
  validaContNivel4()
  }
  else{
  resetNivel4()
  contN4=0;
  }

}


function ValidaNIvel4_38()
{
  var bandera=false
  console.log(contN4)

  if(document.getElementById('InversionesN4').value == "Db" ) {

    contN4+=1;

    alert("Usted lleva "+contN4+" consecutivos")
    validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
 
}


function ValidaNIvel4_39()
{
var bandera=false
console.log(contN4)

if(document.getElementById('InversionesAvalorRazonableN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}

}

function ValidaNIvel4_40()
{
var bandera=false
console.log(contN4)

if(document.getElementById('LicenciasDeSoftwareN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}

}


function ValidaNIvel4_41()
{
var bandera=false
console.log(contN4)

if(document.getElementById('LocalComercialN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}

}

function ValidaNIvel4_42()
{
var bandera=false
console.log(contN4)

if(document.getElementById('MarcasAdquiridasN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}

}

function ValidaNIvel4_43()
{
  var bandera=false
  console.log(contN4)

  if(document.getElementById('MateriaPrimaN4').value == "Db" ) {

      contN4+=1;
      bandera=true;
      alert("Usted lleva "+contN4+" consecutivos")
      validaContNivel4()
  }
  else{
    resetNivel4()
    contN4=0;
  }
 
}

function ValidaNIvel4_44()
{
var bandera=false
console.log(contN4)

if(document.getElementById('MercancíaN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}

}


function ValidaNIvel4_45()
{
var bandera=false
console.log(contN4)

if(document.getElementById('ObligacionesDeFinanciamientoN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_46()
{
var bandera=false
console.log(contN4)

if(document.getElementById('ObligacionesFinancierasN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_47()
{
var bandera=false
console.log(contN4)

if(document.getElementById('ObligacionesLaboralesN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_48()
{
var bandera=false
console.log(contN4)

if(document.getElementById('OtrosResultadosAcumuladosN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_49()
{
var bandera=false
console.log(contN4)

if(document.getElementById('OtrosResultadosIntegralesN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_50()
{
var bandera=false
console.log(contN4)

if(document.getElementById('Pagare(en un banco)N4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_51()
{
var bandera=false
console.log(contN4)

if(document.getElementById('PasivoN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_52()
{
var bandera=false
console.log(contN4)

if(document.getElementById('PatrimonioN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_53()
{
var bandera=false
console.log(contN4)

if(document.getElementById('PrestacionesSocialesPorPagarN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_54()
{
var bandera=false
console.log(contN4)

if(document.getElementById('PrestamoDeUnaCooperativaN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}
function ValidaNIvel4_55()
{
var bandera=false
console.log(contN4)

if(document.getElementById('PrimaEnColocaciónDeAccionesN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_56()
{
var bandera=false
console.log(contN4)

if(document.getElementById('ProductosTerminadosN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_57()
{
var bandera=false
console.log(contN4)

if(document.getElementById('PropiedadPlantaYequipoN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_58()
{
var bandera=false
console.log(contN4)

if(document.getElementById('PropiedadesN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}


function ValidaNIvel4_59()
{
var bandera=false
console.log(contN4)

if(document.getElementById('ProveedoresN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_60()
{
  var bandera=false
  console.log(contN4)

  if(document.getElementById('ReservaEstatutariaN4').value == "Cr" ) {

    contN4+=1;
    bandera=true;
    alert("Usted lleva "+contN4+" consecutivos")
    
  }
  else{
    resetNivel4()
    contN4=0;
  }
}

function ValidaNIvel4_61()
{
var bandera=false
console.log(contN4)

if(document.getElementById('ReservaLegalN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_62()
{
var bandera=false
console.log(contN4)

if(document.getElementById('ReservaOcasionalN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_63()
{
var bandera=false
console.log(contN4)

if(document.getElementById('ReservasN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_64()
{
var bandera=false
console.log(contN4)

if(document.getElementById('ResultadosDelEjercicioN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_65()
{
var bandera=false
console.log(contN4)

if(document.getElementById('ResultadosEjerciciosAnterioresN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_66()
{
var bandera=false
console.log(contN4)

if(document.getElementById('SalariosPorPagarN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}
function ValidaNIvel4_67()
{
var bandera=false
console.log(contN4)

if(document.getElementById('SeguridadSocialPorPagarN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_68()
{
var bandera=false
console.log(contN4)

if(document.getElementById('Sobregiro(en un banco)N4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_69()
{
var bandera=false
console.log(contN4)

if(document.getElementById('SuperavitDeCapitalrN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}


function ValidaNIvel4_70()
{
var bandera=false
console.log(contN4)

if(document.getElementById('UtilidadDelPeriodoN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_71()
{
var bandera=false
console.log(contN4)

if(document.getElementById('VehiculoN5').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_72()
{
var bandera=false
console.log(contN4)

if(document.getElementById('VentasN5').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_73()
{
var bandera=false
console.log(contN4)

if(document.getElementById('GastosDeAdministraciónN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_74()
{
var bandera=false
console.log(contN4)

if(document.getElementById('GastosDePersonalN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_75()
{
var bandera=false
console.log(contN4)

if(document.getElementById('OtrosIngresosN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_76()
{
  var bandera=false
  console.log(contN4)

  if(document.getElementById('OtrosGastosN4').value == "Db" ) {

  contN4+=1;
  bandera=true;
  alert("Usted lleva "+contN4+" consecutivos")
  validaContNivel4()
  }
  else{
  resetNivel4()
  contN4=0;
  }
}

function ValidaNIvel4_77()
{
var bandera=false
console.log(contN4)

if(document.getElementById('GastosFinancierosN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_78()
{
var bandera=false
console.log(contN4)

if(document.getElementById('CostosDeVentasN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_79()
{
var bandera=false
console.log(contN4)

if(document.getElementById('IngresosPorServiciosN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}


function ValidaNIvel4_80()
{
var bandera=false
console.log(contN4)

if(document.getElementById('GastosDeArrendamientoN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_81()
{
var bandera=false
console.log(contN4)

if(document.getElementById('IngresosOrdinariosN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_82()
{
var bandera=false
console.log(contN4)

if(document.getElementById('GastosDeVentasN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_83()
{
var bandera=false
console.log(contN4)

if(document.getElementById('GastosOperacionalesN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_84()
{
var bandera=false
console.log(contN4)

if(document.getElementById('IngresosNoOperacionalesN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_85()
{
var bandera=false
console.log(contN4)

if(document.getElementById('IngresosPorComercioAlPorMayorYalPorMenorN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_86()
{
var bandera=false
console.log(contN4)

if(document.getElementById('IngresosFinancierosN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}


function ValidaNIvel4_87()
{
var bandera=false
console.log(contN4)

if(document.getElementById('GastosPorServiciosN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}


function ValidaNIvel4_88()
{
var bandera=false
console.log(contN4)

if(document.getElementById('CostosDeLaPrestaciónDelServicioN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}

function ValidaNIvel4_89()
{
var bandera=false
console.log(contN4)

if(document.getElementById('IngresoPorConstrucciónN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}



function ValidaNIvel4_90()
{
  var bandera=false
  console.log(contN4)

  if(document.getElementById('IngresoPorConstrucciónN4').value == "Cr" ) {

  contN4+=1;
  bandera=true;
  alert("Usted lleva "+contN4+" consecutivos")
  validaContNivel4()
  }
  else{
  resetNivel4()
  contN4=0;
}
}

function ValidaNIvel4_91()
{
var bandera=false
console.log(contN4)

if(document.getElementById('IngresosPrestacionDeServiciosN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;

}
}

function ValidaNIvel4_92()
{
var bandera=false
console.log(contN4)

if(document.getElementById('VentasActividadDeGanaderiaN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;

}
}

function ValidaNIvel4_93()
{
var bandera=false
console.log(contN4)

if(document.getElementById('VentasPorExplotacionDeMinasN4').value == "Cr" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;

}
}

function ValidaNIvel4_94()
{
var bandera=false
console.log(contN4)

if(document.getElementById('GastosDeSegurosN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;

}
}

function ValidaNIvel4_95()
{
var bandera=false
console.log(contN4)

if(document.getElementById('GastosPorDepreciacionesN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;

}
}


function ValidaNIvel4_96()
{
var bandera=false
console.log(contN4)

if(document.getElementById('GastosDiversosN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;

}
}

function ValidaNIvel4_97()
{
var bandera=false
console.log(contN4)

if(document.getElementById('GastosDeMantenimientoN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;

}
}


function ValidaNIvel4_98()
{
var bandera=false
console.log(contN4)

if(document.getElementById('CostosActividadFinancieraN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}


function ValidaNIvel4_99()
{
var bandera=false
console.log(contN4)

if(document.getElementById('CostosPorServicioDeHotelesN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}


function ValidaNIvel4_100()
{
var bandera=false
console.log(contN4)

if(document.getElementById('CostosPorComercioAlPorMayorYAlPorMenorN4').value == "Db" ) {

contN4+=1;
bandera=true;
alert("Usted lleva "+contN4+" consecutivos")
validaContNivel4()
}
else{
resetNivel4()
contN4=0;
}
}


function validaContNivel4(){
  if (contN4==25){
    alert(" Ya puedes pasar al siguiente nivel")
    const button = document.getElementById('nivel_5')
    button.disabled=false;
    const nav6= document.getElementById('nav-link disabled')
    nav5.disable=false
  }

  
}




  function resetNivel4(){ // reset nivel 4
    contN4=0;
    document.getElementById("AcionesDeOtrasEmpresasNivel4").selectedIndex = 0;
    document.getElementById("AcrededoresVariosNivel4").selectedIndex = 0;
    document.getElementById("ActivoNivel4").selectedIndex = 0;
    document.getElementById("AnticiposEntregadosPorLaEmpresaN4").selectedIndex = 0;
    document.getElementById("AportesSocialesN4").selectedIndex = 0;
    document.getElementById("BeneficiosAempleadosN4").selectedIndex = 0;
    document.getElementById("Bonos(emitidos por otras empresas)N4").selectedIndex = 0;
    document.getElementById("CapitalSocialN4").selectedIndex = 0;
    document.getElementById("CapitalSuscritoYpagadoN4").selectedIndex = 0;
    document.getElementById("CartaDeCreditoDeUnBancoN4").selectedIndex = 0;
    document.getElementById("CertificadoDedepositoAterminoN4").selectedIndex = 0;
    document.getElementById("ChequesEnAajaGeneralN4").selectedIndex = 0;
    document.getElementById("ClientesN4").selectedIndex = 0;
    document.getElementById("ComputadoresN4").selectedIndex = 0;
    document.getElementById("CostosN4").selectedIndex = 0;
    document.getElementById("CostosYgastosPorPagarN4").selectedIndex = 0;
    document.getElementById("CuentaPorCobrarAtrabajadoresN4").selectedIndex = 0;
    document.getElementById("CuentasPorCobrarN4").selectedIndex = 0;
    document.getElementById("CuentasPorPagarN4").selectedIndex = 0;
    document.getElementById("CuentasPorPagarAsociosN4").selectedIndex = 0;
    document.getElementById("CuotasOpartesDeInteresSocialN4").selectedIndex = 0;
    document.getElementById("DerechosDeFranquiciaN4").selectedIndex = 0;
    document.getElementById("DeudoresVariosN4").selectedIndex = 0;
    document.getElementById("DividendosDecretadosEnAccionesN4").selectedIndex = 0;
    document.getElementById("EfectivoN4").selectedIndex = 0;
    document.getElementById("EfectivoEnBancosN4").selectedIndex = 0;
    document.getElementById("EfectivoEnCajaMenorN4").selectedIndex = 0;
    document.getElementById("EnvasesYempaquesN4").selectedIndex = 0;
    document.getElementById("GananciasAcumuladasN4").selectedIndex = 0;
    document.getElementById("GastosN4").selectedIndex = 0;
    document.getElementById("ImpuestoAlasVentasN4").selectedIndex = 0;
    document.getElementById("ImpuestoDerentaPorPagarN4").selectedIndex = 0;
    document.getElementById("ImpuestosPorPagarN4").selectedIndex = 0;
    document.getElementById("ImpuestosGravamenesYtasasN4").selectedIndex = 0;
    document.getElementById("IngresosN4").selectedIndex = 0;
    document.getElementById("IntangiblesN4").selectedIndex = 0;
    document.getElementById("InventariosN4").selectedIndex = 0;
    document.getElementById("InversionesN4").selectedIndex = 0;
    document.getElementById("InversionesAvalorRazonableN4").selectedIndex = 0;
    document.getElementById("LicenciasDeSoftwareN4").selectedIndex = 0;
    document.getElementById("LocalComercialN4").selectedIndex = 0;
    document.getElementById("MarcasAdquiridasN4").selectedIndex = 0;
    document.getElementById("MateriaPrimaN4").selectedIndex = 0;
    document.getElementById("MercancíaN4").selectedIndex = 0;
    document.getElementById("ObligacionesDeFinanciamientoN4").selectedIndex = 0;
    document.getElementById("ObligacionesFinancierasN4").selectedIndex = 0;
    document.getElementById("ObligacionesLaboralesN4").selectedIndex = 0;
    document.getElementById("OtrosResultadosAcumuladosN4").selectedIndex = 0;
    document.getElementById("OtrosResultadosIntegralesN4").selectedIndex = 0;
    document.getElementById("Pagare(en un banco)N4").selectedIndex = 0;
    document.getElementById("PasivoN4").selectedIndex = 0;
    document.getElementById("PatrimonioN4").selectedIndex = 0;
    document.getElementById("PrestacionesSocialesPorPagarN4").selectedIndex = 0;
    document.getElementById("PrestamoDeUnaCooperativaN4").selectedIndex = 0;
    document.getElementById("PrimaEnColocaciónDeAccionesN4").selectedIndex = 0;
    document.getElementById("ProductosTerminadosN4").selectedIndex = 0;
    document.getElementById("PropiedadPlantaYequipoN4").selectedIndex = 0;
    document.getElementById("PropiedadesN4").selectedIndex = 0;
    document.getElementById("ProveedoresN4").selectedIndex = 0;
    document.getElementById("ReservaEstatutariaN4").selectedIndex = 0;
    document.getElementById("ReservaLegalN4").selectedIndex = 0;
    document.getElementById("ReservaOcasionalN4").selectedIndex = 0;
    document.getElementById("ReservasN4").selectedIndex = 0;
    document.getElementById("ResultadosDelEjercicioN4").selectedIndex = 0;
    document.getElementById("ResultadosEjerciciosAnterioresN4").selectedIndex = 0;
    document.getElementById("SalariosPorPagarN4").selectedIndex = 0;
    document.getElementById("SeguridadSocialPorPagarN4").selectedIndex = 0;
    document.getElementById("Sobregiro(en un banco)N4").selectedIndex = 0;
    document.getElementById("SuperavitDeCapitalrN4").selectedIndex = 0;
    document.getElementById("UtilidadDelPeriodoN4").selectedIndex = 0;
    document.getElementById("VehiculoN5").selectedIndex = 0;
    document.getElementById("VentasN5").selectedIndex = 0;
    document.getElementById("GastosDeAdministraciónN4").selectedIndex = 0;
    document.getElementById("GastosDePersonalN4").selectedIndex = 0;
    document.getElementById("OtrosIngresosN4").selectedIndex = 0;
    document.getElementById("OtrosGastosN4").selectedIndex = 0;
    document.getElementById("GastosFinancierosN4").selectedIndex = 0;
    document.getElementById("CostosDeVentasN4").selectedIndex = 0;
    document.getElementById("IngresosPorServiciosN4").selectedIndex = 0;
    document.getElementById("GastosDeArrendamientoN4").selectedIndex = 0;
    document.getElementById("IngresosOrdinariosN4").selectedIndex = 0;
    document.getElementById("GastosDeVentasN4").selectedIndex = 0;
    document.getElementById("GastosOperacionalesN4").selectedIndex = 0;
    document.getElementById("IngresosNoOperacionalesN4").selectedIndex = 0;
    document.getElementById("IngresosPorComercioAlPorMayorYalPorMenorN4").selectedIndex = 0;
    document.getElementById("IngresosFinancierosN4").selectedIndex = 0;
    document.getElementById("GastosPorServiciosN4").selectedIndex = 0;
    document.getElementById("CostosDeLaPrestaciónDelServicioN4").selectedIndex = 0;
    document.getElementById("IngresoPorConstrucciónN4").selectedIndex = 0;
    document.getElementById("IngresosPorExplotaciónDeMinasN4").selectedIndex = 0;
    document.getElementById("IngresosPrestacionDeServiciosN4").selectedIndex = 0;
    document.getElementById("VentasActividadDeGanaderiaN4").selectedIndex = 0;
    document.getElementById("VentasPorExplotacionDeMinasN4").selectedIndex = 0;
    document.getElementById("GastosDeSegurosN4").selectedIndex = 0;
    document.getElementById("GastosPorDepreciacionesN4").selectedIndex = 0;
    document.getElementById("GastosDiversosN4").selectedIndex = 0;
    document.getElementById("GastosDeMantenimientoN4").selectedIndex = 0;
    document.getElementById("CostosActividadFinancieraN4").selectedIndex = 0;
    document.getElementById("CostosPorServicioDeHotelesN4").selectedIndex = 0;
    document.getElementById("CostosPorComercioAlPorMayorYAlPorMenorN4").selectedIndex = 0;
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
  
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}

function ShowSelected15()
{

if(document.getElementById('Costos').value =="R" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected30()
{

if(document.getElementById('Gastos').value == "R" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
  validar_cont()
}
else{
  cont=0;
  reset()
}
}
function ShowSelected35()
{


if(document.getElementById('Ingresos').value == "R" ) {
  
  cont+=1;
  bandera=true;
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
  alert("Usted lleva "+cont+" consecutivos")
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
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}


function ShowSelected51()
{
  if(document.getElementById('PasivoN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}


function ShowSelected52()
{
  if(document.getElementById('PatrimonioN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected53()
{
  if(document.getElementById('PrestacionesSocialesPorPagarN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected54()
{
  if(document.getElementById('PrestamoDeUnaCooperativaN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected55()
{
  if(document.getElementById('PrimaEnColocacionDeAccionesN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected56()
{
  if(document.getElementById('ProductosTerminadosN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected57()
{
  if(document.getElementById('PropiedadPlantaYequipoN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected58()
{
  if(document.getElementById('PropiedadesN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected59()
{
  if(document.getElementById('ProveedoresN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected60()
{
  if(document.getElementById('ReservaEstatutariaN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected61()
{
  if(document.getElementById('ReservaLegalN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected62()
{
  if(document.getElementById('ReservaOcasionalN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected63()
{
  if(document.getElementById('ReservasN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected64()
{
  if(document.getElementById('ResultadosDelEjercicioN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected65()
{
  if(document.getElementById('ResultadosEjerciciosAnterioresN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected66()
{
  if(document.getElementById('SalariosPorPagarN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected67()
{
  if(document.getElementById('SeguridadSocialPorPagarN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected68()
{
  if(document.getElementById('sobregiro(en un banco)N5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected69()
{
  if(document.getElementById('SuperavitDeCapitalN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected70()
{
  if(document.getElementById('UtilidadDelPeriodoN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected71()
{
  if(document.getElementById('VehiculosN5').value == "B" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected72()
{
  if(document.getElementById('VentaN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected73()
{
  if(document.getElementById('GastosDeAdministracionN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected74()
{
  if(document.getElementById('GastosDePersonalN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected75()
{
  if(document.getElementById('OtrosIngresosN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected76()
{
  if(document.getElementById('OtrosGastosN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected77()
{
  if(document.getElementById('GastosFinancierosN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected78()
{
  if(document.getElementById('CostosDeVentasN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected79()
{
  if(document.getElementById('IngresosPorServiciosN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected80()
{
  if(document.getElementById('GastosDeArrendamientoN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected81()
{
  if(document.getElementById('IngresosOrdinariosN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected82()
{
  if(document.getElementById('GastosDeVentasN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected83()
{
  if(document.getElementById('GastosOperacionalesN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected84()
{
  if(document.getElementById('GastosOperacionalesN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected85()
{
  if(document.getElementById('IngresosPorComercioAlPorMayorYalPorMenorN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected86()
{
  if(document.getElementById('IngresosfinancierosN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected87()
{
  if(document.getElementById('GastosPorServiciosN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected88()
{
  if(document.getElementById('CostosDeLaPrestacionDelServicioN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected89()
{
  if(document.getElementById('IngresosPorConstruccionN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected90()
{
  if(document.getElementById('IngresosPorexplotacionDeminasN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected91()
{
  if(document.getElementById('IngresosPrestacionDeServiciosN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected92()
{
  if(document.getElementById('VentasAactividadDeGanaderiaN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected93()
{
  if(document.getElementById('VentasPorExplotacionDeMinasN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected94()
{
  if(document.getElementById('GastosDeSegurosN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected95()
{
  if(document.getElementById('GastosPorDepreciacionesN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected96()
{
  if(document.getElementById('GastosDiversosN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected97()
{
  if(document.getElementById('GastosDeMantenimientoN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected98()
{
  if(document.getElementById('CostosActividadFinancieraN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected99()
{
  if(document.getElementById('CostosPorServicioDeHotelesN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}

function ShowSelected100()
{
  if(document.getElementById('CostosPorServicioDeHotelesN5').value == "R" ) {
    cont+=1;
    alert("Usted lleva "+cont+" consecutivos")
    validar_cont()
  }
  else{
    cont=0;
    reset()
  }
}
/*
const button = document.querySelector('.nivel_6')
nivel_6.disabled = true;

*/



function validar_cont(){
  if (cont==25){
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
  document.getElementById('Impuestos por pagar').selectedIndex=0; 
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
  document.getElementById('PasivoN5').selectedIndex=0;
  document.getElementById('PatrimonioN5').selectedIndex=0;
  document.getElementById('PrestacionesSocialesPorPagarN5').selectedIndex=0;
  document.getElementById('PrestamoDeUnaCooperativaN5').selectedIndex=0;
  document.getElementById('PrimaEnColocacionDeAccionesN5').selectedIndex=0;
  document.getElementById('ProductosTerminadosN5').selectedIndex=0;
  document.getElementById('PropiedadPlantaYequipoN5').selectedIndex=0;
  document.getElementById('PropiedadesN5').selectedIndex=0;
  document.getElementById('ProveedoresN5').selectedIndex=0;
  document.getElementById('ReservaEstatutariaN5').selectedIndex=0;
  document.getElementById('ReservaLegalN5').selectedIndex=0;
  document.getElementById('ReservaOcasionalN5').selectedIndex=0;
  document.getElementById('ReservasN5').selectedIndex=0;
  document.getElementById('ResultadosDelEjercicioN5').selectedIndex=0;
  document.getElementById('ResultadosEjerciciosAnterioresN5').selectedIndex=0;
  document.getElementById('SalariosPorPagarN5').selectedIndex=0;
  document.getElementById('SeguridadSocialPorPagarN5').selectedIndex=0;
  document.getElementById('sobregiro(en un banco)N5').selectedIndex=0;
  document.getElementById('SuperavitDeCapitalN5').selectedIndex=0;
  document.getElementById('UtilidadDelPeriodoN5').selectedIndex=0;
  document.getElementById('VehiculosN5').selectedIndex=0;
  document.getElementById('VentaN5').selectedIndex=0;
  document.getElementById('GastosDeAdministracionN5').selectedIndex=0;
  document.getElementById('GastosDePersonalN5').selectedIndex=0;
  document.getElementById('OtrosIngresosN5').selectedIndex=0;
  document.getElementById('OtrosGastosN5').selectedIndex=0;
  document.getElementById('GastosFinancierosN5').selectedIndex=0;
  document.getElementById('CostosDeVentasN5').selectedIndex=0;
  document.getElementById('IngresosPorServiciosN5').selectedIndex=0;
  document.getElementById('GastosDeArrendamientoN5').selectedIndex=0;
  document.getElementById('IngresosOrdinariosN5').selectedIndex=0;
  document.getElementById('GastosDeVentasN5').selectedIndex=0;
  document.getElementById('GastosOperacionalesN5').selectedIndex=0;
  document.getElementById('IngresosNoOperacionalesN5').selectedIndex=0;
  document.getElementById('IngresosPorComercioAlPorMayorYalPorMenorN5').selectedIndex=0;
  document.getElementById('IngresosfinancierosN5').selectedIndex=0;
  document.getElementById('GastosPorServiciosN5').selectedIndex=0;
  document.getElementById('CostosDeLaPrestacionDelServicioN5').selectedIndex=0;
  document.getElementById('IngresosPorConstruccionN5').selectedIndex=0;
  document.getElementById('IngresosPorexplotacionDeminasN5').selectedIndex=0;
  document.getElementById('IngresosPrestacionDeServiciosN5').selectedIndex=0;
  document.getElementById('VentasAactividadDeGanaderiaN5').selectedIndex=0;
  document.getElementById('VentasPorExplotacionDeMinasN5').selectedIndex=0;
  document.getElementById('GastosDeSegurosN5').selectedIndex=0;
  document.getElementById('GastosPorDepreciacionesN5').selectedIndex=0;
  document.getElementById('GastosDiversosN5').selectedIndex=0;
  document.getElementById('GastosDeMantenimientoN5').selectedIndex=0;
  document.getElementById('CostosActividadFinancieraN5').selectedIndex=0;
  document.getElementById('CostosPorServicioDeHotelesN5').selectedIndex=0;
  document.getElementById('CostosPorComercioAlPorMayorYalPorMenorN5').selectedIndex=0;
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
        (document.getElementById("CompraMercancia").value == 1) && 
        (document.getElementById("CompraMercancia_con").value== 7) &&
        (document.getElementById("CompraMercanciaCredito").value= 1)&&
        (document.getElementById("CompraMercanciaCredito_con").value = 2)&&
        (document.getElementById("IngresaNuevoSocio").value = 3)&&
        (document.getElementById("IngresaNuevoSocio_con").value= 1)&&
        (document.getElementById("PagoValorAdedudado").value = 7)&&
        (document.getElementById("PagoValorAdedudado_con").value = 1)&&
        (document.getElementById("VentaMercancia").value = 4)&&
        (document.getElementById("VentaMercancia_con").value = 1)&&
        (document.getElementById("ReconocimientoCosto").value = 6)&&
        (document.getElementById("ReconocimientoCosto_con").value = 7)&&
        (document.getElementById("ReconocimientoGasto").value = 5)&&
        (document.getElementById("ReconocimientoGasto_con").value = 2)
        ){
         
       
          
          $('#passwordsNoMatchRegister').show();
  

  }
  else{
    alert("Inténtelo de nuevo")
    $('#passwordsNoMatchRegister2').show();
    $('#passwordsNoMatchRegister').hide();
  }
}

function mostrar_nivel7(){
  $('#claseDiv').show();
}


/*script nivel 7*/

/*
function sumarNivel7 (inputValue){
  var totalN7= 0;
  
  inputValue = parseInt(inputValue);
  totalN7 = document.getElementById('TotalCreditoN7').innerHTML;
  totalN7 = (totalN7 == null || totalN7 == undefined || totalN7 == "") ? 0 : totalN7;
  totalN7 = (parseInt(totalN7) + parseInt(inputValue));
  document.getElementById('TotalCreditoN7').innerHTML = totalN7;
  console.log(inputValue);
}
*/


var debito1
var debito2
var debito3
var debito4
var debito5
var debito6
var debito7


function val_7_1(debito1){
  debito1 = parseInt(debito1);
  console.log(debito1)
  
}
function val_7_3_1(debito2){
  debito2 = parseInt(debito2);
  
}
function val_7_5_1(debito3){
  debito3 = parseInt(debito3);
  
}
function val_7_7_1(debito4){
  debito4 = parseInt(debito4);
  
}
function val_9_1_1(debito5){
  debito5 = parseInt(debito5);
  
}
function val_7_11_1(debito6){
  debito6 = parseInt(debito6);
  
}
function val_7_13_1(debito7){
  debito7 = parseInt(debito7);
  
}

var credito1
var credito2
var credito3
var credito4
var credito5
var credito6
var credito7

function validar_resultados_7(){




  /* Declaracion de totalizadores nivel7*/

  var TotaldebitoN7=0;
  var TotalCreditoN7=0;

  /* obtener los valores de debito*/
  debito1=parseInt(document.getElementById('val_7_1').value);
  debito2= parseInt(document.getElementById('val_7_3_1').value);
  debito3= parseInt(document.getElementById('val_7_5_1').value);
  debito4= parseInt(document.getElementById('val_7_7_1').value);
  debito5= parseInt(document.getElementById('val_9_1_1').value);
  debito6= parseInt(document.getElementById('val_7_11_1').value);
  debito7= parseInt(document.getElementById('val_7_13_1').value);

  /*Obtener los valores de credito*/

  credito1=parseInt(document.getElementById('val_7_2_2').value);
  credito2=parseInt(document.getElementById('val_7_4_2').value);
  credito3=parseInt(document.getElementById('val_7_6_2').value);
  credito4=parseInt(document.getElementById('val_7_9_2').value);
  credito5=parseInt(document.getElementById('val_7_10_2').value);
  credito6=parseInt(document.getElementById('val_7_12_2').value);
  credito7=parseInt(document.getElementById('val_7_14_2').value);


 

  /*suma de totales debito*/
  
  TotaldebitoN7 = debito1+debito2+debito3+debito4+debito5+debito6+debito7;
  
  document.getElementById('TotaldebitoN7').innerHTML = TotaldebitoN7;

  /*suma de totales credito*/

  TotalCreditoN7 = credito1+credito2+credito3+credito4+credito5+credito6+credito7;
  
  console.log(TotaldebitoN7)
  document.getElementById('TotalCreditoN7').innerHTML = TotalCreditoN7;

  if (
    (document.getElementById('DebitoFila1').value == 1)&&
    (document.getElementById('CreditoFila1').value == 2)&&
    (document.getElementById('DebitoFila2').value == 1)&&
    (document.getElementById('CreditoFila2').value == 3)&&
    (document.getElementById('DebitoFila3').value == 2)&&
    (document.getElementById('CreditoFila3').value == 4)&&
    (document.getElementById('DebitoFila4').value == 2)&&
    (document.getElementById('CreditoFila4').value == 5)&&
    (document.getElementById('DebitoFila5').value == 5)&&
    (document.getElementById('CreditoFila5').value == 6)&&
    (document.getElementById('DebitoFila6').value == 7)&&
    (document.getElementById('CreditoFila6').value == 1)&&
    (document.getElementById('DebitoFila7').value == 8)&&
    (document.getElementById('CreditoFila7').value == 3)&&
    (TotaldebitoN7==1400)&&
    (TotalCreditoN7==1400)
  )
  {
    $('#passwordsNoMatchRegisterNivel8').show();
    $('#ResultadosNivel7').show();
    $('#divisor_Nivel8').show();
    $('#ResultadosNivel7_1').show();
    $('#ResultadosNivel7_2').show();
    $('#ResultadosNivel7_3').show();
    $('#ResultadosNivel7_4').show();
    $('#ResultadosNivel7_5').show();


  }  else{
    alert('malo')
    $('#passwordsNoMatchRegisterNivel8_2').show();
  } 
}

function reset_n7(){
  document.getElementById('DebitoFila1').selectedIndex = 0;
  document.getElementById('CreditoFila1').selectedIndex = 0;
  document.getElementById('DebitoFila2').selectedIndex =0;
  document.getElementById('CreditoFila2').selectedIndex =0;
  document.getElementById('DebitoFila3').selectedIndex = 0;
  document.getElementById('CreditoFila3').selectedIndex =0;
  document.getElementById('DebitoFila4').selectedIndex =0;
  document.getElementById('CreditoFila4').selectedIndex =0;
  document.getElementById('DebitoFila5').selectedIndex =0;
  document.getElementById('CreditoFila5').selectedIndex = 0;
  document.getElementById('DebitoFila6').selectedIndex = 0;
  document.getElementById('CreditoFila6').selectedIndex = 0;
  document.getElementById('DebitoFila7').selectedIndex = 0;
  document.getElementById('CreditoFila7').selectedIndex = 0;
  document.getElementById('val_7_1').value  = '';
  document.getElementById('val_7_3_1').value = '';
  document.getElementById('val_7_5_1').value ='';
  document.getElementById('val_7_7_1').value ='';
  document.getElementById('val_9_1_1').value ='';
  document.getElementById('val_7_11_1').value='';
  document.getElementById('val_7_13_1').value='';
  document.getElementById('val_7_2_2').value ='';
  document.getElementById('val_7_4_2').value ='';
  document.getElementById('val_7_6_2').value ='';
  document.getElementById('val_7_9_2').value ='';
  document.getElementById('val_7_10_2').value ='';
  document.getElementById('val_7_12_2').value = '';
  document.getElementById('val_7_14_2').value ='';
  
}

/*nivel 8*/

function mostrar_nivel8(){
  $('#claseDiv2').show();
  $('#lol6').show()
  $("#nivel8_barra").removeClass( "disabled"); 
  $("#nivel8_barra").addClass( "active");

}

/*
function sumar (valor) {
  var total = 0;	
  valor = parseInt(valor); // Convertir el valor a un entero (número).

  total = document.getElementById('spTotal').innerHTML;

  // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
  total = (total == null || total == undefined || total == "") ? 0 : total;

  /* Esta es la suma. */
 /* total = (parseInt(total) + parseInt(valor));

  // Colocar el resultado de la suma en el control "span".
 /* document.getElementById('spTotal').innerHTML = total;

  if (total == 650){
    alert("Respuesta Correcta");
    $('#passwordsNoMatchRegister8').show();
  }
    /*alert("respuesta Incorrecta")
    $('#passwordsNoMatchRegister9').show();


}*/

var TotalSumaNivel8_1=0;
var campo8_1_1=0;
var campo8_1_2=0;
var campo8_1_3=0;
var campo8_1_4=0;

function SumaNivel8_1(){
  
  campo8_1_1=parseInt(document.getElementById('txt_campo_1').value);
  campo8_1_2=parseInt(document.getElementById('txt_campo_2').value);
  campo8_1_3=parseInt(document.getElementById('txt_campo_3').value);
  campo8_1_4=parseInt(document.getElementById('txt_campo_4').value);

  TotalSumaNivel8_1 = campo8_1_1+campo8_1_2+campo8_1_3+campo8_1_4;
  
  document.getElementById('spTotal').innerHTML = TotalSumaNivel8_1;

  if (TotalSumaNivel8_1 == 650){
    alert("Respuesta Correcta");
    $('#passwordsNoMatchRegister8').show();
  }
  else{
    $('#ErrorNivel8_1').show();
  }
}



function reset_n8_1(){
  document.getElementById('txt_campo_1').value ='';
  document.getElementById('txt_campo_2').value ='';
  document.getElementById('txt_campo_3').value ='';
  document.getElementById('txt_campo_4').value ='';

}

/*Ejercicio dos Nivel 8*/
function mostrar2() {
  $('#ejer_2').show();
  $('#ejer_2_2').show();
  $('#rowNivel8_2').show();
  $('#SegundoEjerNivel8').show();
  $('#PreguntasNivel8_2').show();

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
}


var TotalSumaNivel8_2=0;
var campo8_1_5=0;
var campo8_1_6=0;
var campo8_1_7=0;
var campo8_1_8=0;

function SumaNivel8_2(){
  
  campo8_1_5=parseInt(document.getElementById('txt_campo_6').value);
  campo8_1_6=parseInt(document.getElementById('txt_campo_7').value);
  campo8_1_7=parseInt(document.getElementById('txt_campo_8').value);
  campo8_1_8=parseInt(document.getElementById('txt_campo_9').value);

  TotalSumaNivel8_2 = campo8_1_5+campo8_1_6+campo8_1_7+campo8_1_8;
  
  document.getElementById('spTotal2').innerHTML = TotalSumaNivel8_2;

  if (TotalSumaNivel8_2 == 210){
    alert("Respuesta Correcta");
    $('#passwordsNoMatchRegister10').show();
  }
  else{
    $('#ErrorNivel8_2').show();
  }
}

function reset_n8_2(){
  document.getElementById('txt_campo_6').value ='';
  document.getElementById('txt_campo_7').value ='';
  document.getElementById('txt_campo_8').value ='';
  document.getElementById('txt_campo_9').value ='';

}