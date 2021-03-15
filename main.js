$(document).ready(main);

var contador=1;

function main(){
    $('.menu_bar').click(function(){
        if (contador==1){
            $('nav').animate({
                left:'0'
            })
            contador = 0;
        } else {
            contador=1;
            $('nav').animate({
                left:'-100%'
            })
        }
    });

    //Mostramos y ocultamos submenus
    $('.submenu').click(function(){
        $(this).children('.children').slideToggle();
    });
}

function abrir(){
    document.getElementById("ventanaFlotante").style.display="block";
    const filasPagina= document.querySelectorAll(".fila");
    for(i=0; i<filasPagina.length; i++){
        filasPagina[i].style.filter="blur(8px)";
    }
}

function cerrar(){
    document.getElementById("ventanaFlotante").style.display="none";
    const filasPagina= document.querySelectorAll(".fila");
    for(i=0; i<filasPagina.length; i++){
        filasPagina[i].style.filter="none";
    }
}

var ctrl = this;
    // ctrl.email=null;
    $ctrl.emailnovalido=false;
    
    
    /** Funcion encargada de validar el email
     *  Si el email es correcto enviara una peticion a la API para mandar el corro
     * Si la API falla esta devuelve dos enlaces para descargar la remesa y el informe desde la propia web
     */

    $ctrl.validarEmail=function () {
        
        if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test($ctrl.correo.email)){

            $ctrl.emailnovalido=false;
        }else{
            $ctrl.emailnovalido=true;
        }

        // return ctrl.mensaje;
    }