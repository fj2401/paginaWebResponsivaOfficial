angular.module('correo').component('correo', {
    templateUrl: 'enviar-email/enviar-email.template.html',
    controller: [
        '$localStorage', 'apiService','configService', '$location',
        function EnviarEmail($localStorage,apiService,configService, $location) {
            var ctrl = this;
            ctrl.email=null;
            ctrl.mensaje=null;
            var config = null;
            
            // Obtenemos los parámetro de configuración.
            configService.getConfig().then(res => config = res.data);
           
            
            /** Funcion encargada de validar el email
             *  Si el email es correcto enviara una peticion a la API para mandar el corro
             * Si la API falla esta devuelve dos enlaces para descargar la remesa y el informe desde la propia web
             */

            ctrl.validarEmail=function (email) {
                
                if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
                    let datosEmail ={
                        data:{
                            email: '',
                            remesa: '',
                            informe: ''
                        }
                        
                    }
                    
                    ctrl.mensaje=null;

                    /*Guardamos en el objeto datosEmail los valores que se pasarán a la API*/
                    datosEmail.data.email= email;
                    datosEmail.data.remesa = $localStorage.infoFicheros.remesa;
                    datosEmail.data.informe = $localStorage.infoFicheros.informe;

                    /*Enviamos los datos a la API*/
                    ctrl.cargando=true;
                    apiService.postEnviarEmail(datosEmail, config.urlApi)
                    .then(function (res) {
                        ctrl.cargando=false;
                        $location.path('/buzon');
                    })
                    .catch(function (err) {
                        ctrl.cargando=false;
                        ctrl.mensaje="No se ha podido enviar el correo, inténtelo de nuevo más tarde";
                        console.log(err);
                    });
                } else if(ctrl.mensaje===null || ctrl.mensaje==="" ||ctrl.mensaje===" "){
                    ctrl.mensaje="Este campo es obligatorio";

                }else{
                    ctrl.mensaje="El correo no es válido";
                }

                return ctrl.mensaje;
            }

            ctrl.salir = function(){
                delete $localStorage.infoFicheros;
                delete $localStorage.contenidoExcelCorrecto;
                delete $localStorage.contenidoExcelErroneo;
                delete $localStorage.fichero;
                delete $localStorage.resultadoValidacion;
                delete $localStorage.ordenante;
                window.open('https://www.google.com/', '_self');

            }

        }
    ]
});