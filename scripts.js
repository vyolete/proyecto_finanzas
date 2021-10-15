

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
        
        
        alert('hpta lo logre');
      
        var objeto =document.getElementById('next');
        objeto.removeAttribute('disabled');
        var objeto2 =document.getElementById('lol');
        objeto2.removeAttribute('disabled');
       
        
    }
    else{
        alert('Intentalo de nuevo');
    }
      
    
  }


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


// funcion que valid los div de la columnas

function drop2(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    comprobarECU_1()
  }
function comprobarECU_1(){
    if((document.getElementById('but2_2').parentNode.id=='div_2_4')
    ){    
        alert('hpta lo logre');
      
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

  function drop3(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    comprobarECU_1()
  }
function comprobarECU_2(){
    if((document.getElementById('but2_4').parentNode.id=='div_2_4_2')
    ){    
        alert('hpta lo logre');
      
        var objeto =document.getElementById('next');
        objeto.removeAttribute('disabled');
        var objeto2 =document.getElementById('lol');
        objeto2.removeAttribute('disabled');   
    }
    else{
        alert('Intentalo de nuevo');
    } 
  }
  
  function drop4(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    comprobarECU_1()
  }
function comprobarECU_3(){
    if((document.getElementById('but2_5').parentNode.id=='div_2_4_3')
    ){    
        alert('hpta lo logre');
      
        var objeto =document.getElementById('next');
        objeto.removeAttribute('disabled');
        var objeto2 =document.getElementById('lol');
        objeto2.removeAttribute('disabled');   
    }
    else{
        alert('Intentalo de nuevo');
    } 
  }

  function drop5(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    comprobarECU_1()
  }
function comprobarECU_4(){
    if((document.getElementById('but2_8').parentNode.id=='div_2_4_4')
    ){    
        alert('hpta lo logre');
      
        var objeto =document.getElementById('next');
        objeto.removeAttribute('disabled');
        var objeto2 =document.getElementById('lol');
        objeto2.removeAttribute('disabled');   
    }
    else{
        alert('Intentalo de nuevo');
    } 
  }
  function drop6(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    comprobarECU_1()
  }
function comprobarECU_4(){
    if((document.getElementById('but2_10').parentNode.id=='div_2_4_4')
    ){    
        alert('hpta lo logre');
      
        var objeto =document.getElementById('next');
        objeto.removeAttribute('disabled');
        var objeto2 =document.getElementById('lol');
        objeto2.removeAttribute('disabled');   
    }
    else{
        alert('Intentalo de nuevo');
    } 
  }


  var li
  $(document).ready(function(){
    li=$("#source li").draggable({
      helper: "clone",
      revert: "invalid"
    });
    $("#div3_1_1").droppable({
      accept: 'li[data-value="Activo"]',
      drop: function(event, ui) {
        $("#Activos").append(ui.draggable);
      }
    });
    $("#div3_1_3").droppable({
      accept: 'li[data-value="Pasivo"]',
      drop: function(event, ui) {
        $("#Pasivos").append(ui.draggable);
      }
    });
  });
  
  function reset() {
    li.appendTo("#source")
  }
  