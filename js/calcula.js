window.onload = function(){ //Acciones tras cargar la página
pantalla=document.getElementById("textoPantalla"); //elemento pantalla de salida
pantalla2=document.getElementById("textoPantallao");
pantalla3=document.getElementById("textoPantallah");
pantalla4=document.getElementById("textoPantallab");
}
x="0"; //número en pantalla
xi=1; //iniciar número en pantalla: 1=si; 0=no;
coma=0; //estado coma decimal 0=no, 1=si;
ni=0; //número oculto o en espera.
op="no";
xx=0;//operación en curso; "no" =  sin operación.

//mostrar número en pantalla según se va escribiendo:
function numero(xx) { //recoge el número pulsado en el argumento.
         if (x=="0" || xi==1  ) {	// inicializar un número,
            pantalla.innerHTML=xx; //mostrar en pantalla
            x=xx; //guardar número
            if (xx==".") { //si escribimos una coma al principio del número
               pantalla.innerHTML="0."; //escribimos 0.
               x=xx; //guardar número
               coma=1; //cambiar estado de la coma
               }
           }
           else { //continuar escribiendo un número
               if (xx=="." && coma==0) { //si escribimos una coma decimal pòr primera vez
                   pantalla.innerHTML+=xx;
                   x+=xx;
                   coma=1; //cambiar el estado de la coma
               }
               //si intentamos escribir una segunda coma decimal no realiza ninguna acción.
               else if (xx=="." && coma==1) {}
               //Resto de casos: escribir un número del 0 al 9:
               else {
                   pantalla.innerHTML+=xx;
                   x+=xx
               }
            }
            xi=0 //el número está iniciado y podemos ampliarlo.
         }
         function numer(xx){
      let octal=xx.toString(8);
          pantalla2.innerHTML=octal+"O";


         }
         function numer1(xx){
      let hexa=xx.toString(16);
          pantalla3.innerHTML=hexa+"H";


        }     function numer2(xx){
           let binario=xx.toString(2);
               pantalla4.innerHTML=binario+"B";


              }
function operar(s) {
         igualar() //si hay operaciones pendientes se realizan primero
         ni=x //ponemos el 1º número en "numero en espera" para poder escribir el segundo.
         op=s; //guardamos tipo de operación.
         xi=1; //inicializar pantalla.
         }
function igualar() {
         if (op=="no") { //no hay ninguna operación pendiente.
            pantalla.innerHTML=x;	//mostramos el mismo número
          
          }else if(op=="si"){
          resul =Math.pow(ni,x);
          pantalla.innerHTML=resul;
          numer(resul);
          numer1(resul);
          numer2(resul);
          }
         else { //con operación pendiente resolvemos
            sl=ni+op+x; // escribimos la operación en una cadena
            sol=eval(sl) //convertimos la cadena a código y resolvemos
            pantalla.innerHTML=sol //mostramos la solución
              numer(sol);
              numer1(sol);
              numer2(sol);
            x=sol; //guardamos la solución
            op="no"; //ya no hay operaciones pendientes
            xi=1; //se puede reiniciar la pantalla.
            }
        }

function raizc() {
         x=Math.sqrt(x); //resolver raíz cuadrada.
         pantalla.innerHTML=x; //mostrar en pantalla resultado
         op="no"; //quitar operaciones pendientes.
         xi=1; //se puede reiniciar la pantalla
         }
function porcent() {
         x=x/100 //dividir por 100 el número
         pantalla.innerHTML=x; //mostrar en pantalla
         igualar() //resolver y mostrar operaciones pendientes
         xi=1 //reiniciar la pantalla
         }
function opuest() {
         nx=Number(x); //convertir en número
         nx=-nx; //cambiar de signo
         x=String(nx); //volver a convertir a cadena
         pantalla.innerHTML=x; //mostrar en pantalla.
         }
function inve() {
         nx=Number(x);
         nx=(1/nx);
         x=String(nx);
         pantalla.innerHTML=x;
         xi=1; //reiniciar pantalla al pulsar otro número.
         }

function retro(){ //Borrar sólo el último número escrito.
         cifras=x.length; //hayar número de caracteres en pantalla
         br=x.substr(cifras-1,cifras) //describir último caracter
         x=x.substr(0,cifras-1) //quitar el ultimo caracter
         if (x=="") {x="0";} //si ya no quedan caracteres, pondremos el 0
         if (br==".") {coma=0;} //Si el caracter quitado es la coma, se permite escribirla de nuevo.
         pantalla.innerHTML=x; //mostrar resultado en pantalla
         }
function borradoParcial() {
        pantalla.innerHTML=0; 
        pantalla2.innerHTML=0+"O"; 
        pantalla3.innerHTML=0+"H";
        pantalla4.innerHTML=0+"B";
        x=0; //Borrado indicador número pantalla.
        coma=0;	//reiniciamos también la coma
        }
function borradoTotal() {
         pantalla.innerHTML=0;
        pantalla2.innerHTML=0+"O"; 
        pantalla3.innerHTML=0+"H";
        pantalla4.innerHTML=0+"B";
         x="0"; //reiniciar número en pantalla
         coma=0; //reiniciar estado coma decimal
         ni=0 //indicador de número oculto a 0;
         op="no" //borrar operación en curso.
         }

function sin(value){
          if(value=="sin"){
          x=Math.sin(x);
          pantalla.innerHTML=x;
          op="no";
          xi=1;
          numer(x);
          numer1(x);
          numer2(x);
           }else if(value=="cos"){
          x=Math.cos(x);
          pantalla.innerHTML=x;
          op="no";
          xi=1;
        } else if (value=="tan"){
          x=Math.tan(x);
          pantalla.innerHTML=x;
          op="no";
          xi=1;
          numer(x);
          numer1(x);
          numer2(x);
        }else if(value=="sin-1"){
          x=Math.asin(x);
          pantalla.innerHTML=x;
          op="no";
          xi=1;
          numer(x);
          numer1(x);
          numer2(x);
        }else if (value=="cos-1"){
          x=Math.acos(x);
          pantalla.innerHTML=x;
          op="no";
          xi=1;
          numer(x);
          numer1(x);
          numer2(x);
        }else if (value=="tan-1"){
          x=Math.atan(x);
          pantalla.innerHTML=x;
          op="no";
          xi=1;
          numer(x);
          numer1(x);
          numer2(x);
        }


}
function elevado(value){
    if(value == "x2"){
      x=Math.pow(x,2);
      pantalla.innerHTML=x;
      op="no";
      xi=1;
    }else if(value == "x3"){
      x=Math.pow(x,3);
      pantalla.innerHTML=x;
      op="no";
      xi=1;
    }else if(value == "x^y"){
      ni=x;
      op="si";
      xi=1;

    }else if(value == "10x"){
      x=Math.pow(10,x);
      pantalla.innerHTML=x;
      op="no";
      xi=1;
    }

}
function exp(){
  x=Math.exp(x);
  pantalla.innerHTML=x;
}

function factorial(){
    var num = x;
    var total =1;

    for( var i = 1; i <=num ; i++){
        total = total *i;
    }
    pantalla.innerHTML = total;
    op="no"; //quitar operaciones pendientes.
    xi=1; //se puede reiniciar la pantalla
}
function logaritmo(value){
if(value=="log"){
resul=Math.log10(x);
  pantalla.innerHTML=resul;
  op="no";
  xi=1;
  numer(resul);
  numer1(resul);
  numer2(resul);
}else if (value== "ln"){
  resu=Math.log(x);
  pantalla.innerHTML=resu;
  op="no";
  xi=1;
  numer(resu);
  numer1(resu);
  numer2(resu);
}


}
