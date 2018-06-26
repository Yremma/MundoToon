<template>
    <div id="condiciones">
        <el-row type="flex" justify="center">
            <el-col :span="23" class="cuerpo">
                <div class="subtitulo">
                    <embed :src="Pitty"/>
                    Términos y Condiciones de Uso
                </div>
                <hr>
                <strong>Información Relevante</strong>
                <br><br>
                Es requisito necesario para el uso de nuestros servicios, que lea y acepte los siguientes 
                Términos y Condiciones que a continuación se redactan. El uso de nuestros servicios 
                implicará que usted ha leído y aceptado los Términos y Condiciones de Uso en el presente 
                documento.
                <br><br>
                El usuario puede elegir y cambiar la clave para su acceso de administración de la cuenta en 
                cualquier momento, en caso de que se haya registrado. MundoToon no asume la 
                responsabilidad en caso de que entregue dicha clave a terceros.
                <br><br>
                <strong>Uso no Autorizado</strong>
                <br><br>
                Usted no puede colocarninguna de nuestras obras, modificado o sin modificar, en un CD, 
                sitio web o ningún otro medio y ofrecerlos para la redistribución o la reventa de ningún 
                tipo.
                <br><br>
                <strong>Propiedad</strong>
                <br><br>
                MundoToon no es propietario de los Derechos de las Obras que aquí se pueden encontrar. 
                Todo el contenido es propiedad de sus respectivos autores. En ningún esta compañía será 
                responsables de ningún daño incluyendo, pero no limitado a, daños directos, indirectos, 
                especiales, fortuitos o consecuentes u otras pérdidas resultantes del uso o de la 
                imposibilidad de utilizar nuestros servicios.
                <br><br>
                <strong>Privacidad</strong>
                <br><br>
                MundoToon garantiza que la información personal que usted envía cuenta con la seguridad 
                necesaria. Los datos ingresados por usuario o en el caso de requerir una validación de los 
                pedidos no serán entregados a terceros, salvo que deba ser revelada en cumplimiento a una 
                orden judicial o requerimientos legales.
                <br><br>
                MundoToon reserva los derechos de cambiar o de modificar estos términos sin previo aviso.
                <br><br><br>
                <center><strong>Gracias por confiar en nuestros servicios.</strong></center>
            </el-col>
        </el-row>
    </div>
</template>



<script>
    import axios from 'axios';
    
    
    export default
    {   name: 'Condiciones',
        
        
        data()
        {   return {             
                Pitty:  'imagenes/ul_li.svg',
            };
        },


        mounted()
        {   setTimeout(function() { 
                var condiciones = document.getElementById('condiciones');
                condiciones.classList.toggle('fadein');
            }, 1000);
        },


        beforeMount()
        {   window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth' 
            });
        }
    }
</script>



<style>
    #condiciones
    {   margin-left: -100%;
        opacity: 0;
        transition: opacity 3s;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out; 
    }
    #condiciones.fadein
    {   margin-left: 0%;
        margin-right: 0%;
        opacity: 1;
        transition: opacity 3s;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }
</style>