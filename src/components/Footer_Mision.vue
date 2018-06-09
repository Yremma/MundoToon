<template>
    <div id="mision">
        <el-row type="flex" justify="center">
            <el-col :span="23" class="cuerpo">
                <div class="subtitulo">
                    <img :src="Pitty"/>
                    MUNDOTOON
                </div>
                <hr><br>
                <p>
                    Mundo Toon nació en 2018 con el propósito de <strong>impulsar a los Artistas Independientes</strong>, 
                    brindándoles un espacio libre para promover sus trabajos internacionalmente sin limitaciones de idiomas.
                </p>
                <p>
                    Nuestro Objetivo es crear un <strong>Portal Mundial de la Historieta y la Ilustración </strong> 
                    para poder dar rienda suelta a nuestra creatividad y que no existan barreras a la hora 
                    de compartir nuestro Arte. Queremos ayudar a distribuir felicidad a cada usuario/lector sin 
                    discriminar su nacionalidad.
                </p><br>
                <p>
                    <center><strong>MUNDOTOON, EL LENGUAJE UNIVERSAL</strong></center>
                </p>
            </el-col>
        </el-row>
    </div>
</template>



<script>
    export default
    {   name: 'Mision',
        

        data()
        {   return { 
                Pitty:  'imagenes/ul_li.svg',
            };
        },


        mounted()
        {   setTimeout(function() { 
                var mision = document.getElementById('mision');
                mision.classList.toggle('fadein');
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
    #mision
    {   margin-left: -100%;
        opacity: 0;
        transition: opacity 3s;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out; 
    }
    #mision.fadein
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