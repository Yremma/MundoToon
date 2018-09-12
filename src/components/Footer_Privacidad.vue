<template>
    <div id="privacidad">
        <el-row type="flex" justify="center">
            <el-col :span="23" class="cuerpo">
                <div class="subtitulo">
                    <embed :src="Pitty"/>
                    POLÍTICA DE PRIVACIDAD
                </div>
                <hr>
                La presente Política de Privacidad establece los términos en que MundoToon usa y protege la 
                formación que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta 
                compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos 
                llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos 
                asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo 
                esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le 
                recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de 
                acuerdo con dichos cambios.
                <br><br> 
                <strong>Información que es recogida</strong>
                <br><br>
                Nuestro sitio web podrá recoger la siguiente información personal: su dirección de Correo 
                Electrónico, Fecha de Nacimiento (para regular la visibilidad de contenido a menores de edad)
                y Foto de Perfil.
                <br><br>
                <strong>Uso de la información recogida</strong>
                <br><br>
                Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, 
                particularmente para mantener un registro de usuarios. Es posible que sean enviados correos 
                electrónicos periódicamente a través de nuestro sitio con información que consideremos 
                relevante para usted o que pueda brindarle algún beneficio. Estos correos electrónicos serán 
                enviados a la dirección que usted proporcione.
                <br><br>
                MundoToon está altamente comprometido para cumplir con el compromiso de mantener su 
                información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para 
                asegurarnos que no exista ningún acceso no autorizado.
                <br><br>
                <strong>Cookies</strong>
                <br><br>
                Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para 
                almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para 
                tener información respecto al tráfico web, y también facilita las futuras visitas a una web 
                recurrente. Otra función que tienen las cookies es que con ellas las web pueden reconocerte 
                individualmente y por tanto brindarte el mejor servicio personalizado de su web.
                <br><br>
                Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y 
                su frecuencia. Esta información es empleada únicamente para análisis estadístico y después 
                la información se elimina de forma permanente. Usted puede eliminar las cookies en cualquier 
                momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio 
                de los sitios web, estás no dan acceso a información de su ordenador ni de usted. Usted 
                puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan 
                cookies automáticamente pues sirve para tener un mejor servicio web. También usted puede 
                cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es 
                posible que no pueda utilizar algunos de nuestros servicios.
                <br><br>
                <strong>Enlaces a Terceros</strong>
                <br><br>
                Este sitio web podría contener enlaces a otros sitios que pudieran ser de su interés. Una 
                vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control 
                sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o 
                privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios 
                están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los 
                consulte para confirmar que usted está de acuerdo con estas.
                <br><br>
                <strong>Control de su información personal</strong>
                <br><br>
                En cualquier momento usted puede restringir la recopilación o el uso de la información 
                personal que es proporcionada a nuestro sitio web.
                <br><br>
                Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada, 
                salvo que sea requerido por un juez con un orden judicial.
                <br><br>
                MundoToon Se reserva el derecho de cambiar los términos de la presente Política de 
                Privacidad en cualquier momento.
                <br><br><br>
                <center><strong>Gracias por confiar en nuestros servicios.</strong></center>
            </el-col>
        </el-row>
    </div>
</template>



<script>
    export default
    {   name: 'Privacidad',
        
        
        data()
        {   return {             
                Pitty:  'imagenes/ul_li.svg',
            };
        },


        mounted()
        {   setTimeout(function() { 
                var privacidad = document.getElementById('privacidad');
                privacidad.classList.toggle('fadein');
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
    #privacidad
    {   margin-left: -100%;
        opacity: 0;
        transition: opacity 3s;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out; 
    }
    #privacidad.fadein
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