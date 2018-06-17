<template>
    <div id="reglas">
        <el-row type="flex" justify="center">
            <el-col :span="23" class="cuerpo">
                <div class="subtitulo">
                    <embed :src="Pitty"/>
                    REGLAS DE LA COMUNIDAD
                </div>
                <hr><br>
                Para que todos podamos disfrutar de éste portal de la mejor forma posible son 
                necesarias una serie de normas y buenas prácticas para que la experiencia de todos sea 
                igual de agradable:<br>
                <el-row style="margin-top:40px">
                    <el-col :xs="24" :md="12" align="left">
                        <div class="subtitulo">
                            <embed :src="Pitty"/>&nbsp;Foro
                        </div>
                        <hr>
                        <ol>
                            <li>
                                <strong>RESPETO:</strong> Quien ofenda será baneado. No se tolerarán insultos ni
                                acoso.
                            </li><br>
                            <li>
                                <strong>PROHIBIDO SPOILERS.</strong>
                            </li><br>
                            <li>
                                <strong>PROHIBIDO SPAMMING Y TROLLING.</strong>
                            </li><br>
                            <li>
                                <strong>PROHIBIDO CONTENIDO ADULTO.</strong> Esto incluye:<br>
                                - Contenido pornográfico de cualquier tipo.<br>
                                - Representaciones en la vida real de sangre, muerte, etc.<br>
                                - Contenido que represente actos sexuales explícitos.
                            </li><br>
                            <li>
                                <strong>PROHIBIDO CONTENIDO QUE INCITE AL ODIO.</strong> Esto incluye ataques 
                                contra usuarios basados en:<br>
                                - Etnia / raza.<br>
                                - Orientación sexual.<br>
                                - Género.<br>
                                - Religión.<br>
                                - Política.
                            </li>
                        </ol>
                    </el-col>
                    <el-col :xs="24" :md="12" align="left">
                        <div class="subtitulo">
                            <embed :src="Pitty"/>&nbsp;Contenido
                        </div>
                        <hr>
                        <ol>
                            <li>
                                <strong>ETIQUETAS: </strong>Al momento de subir contenido, cada Historieta debe 
                                tener asignadas las etiquetas correspondientes para mantener a los usuarios 
                                informados sobre lo que están a punto de leer.
                            </li><br>
                            <li>
                                <strong>PROPIEDAD INTELECTUAL: </strong>Queda prohibido subir como propio el 
                                contenido de otros autores sin citar su nombre/alias y el link a la obra original.
                            </li>
                        </ol>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>



<script>
    export default
    {   name: 'Reglas',
        
        
        data()
        {   return { 
                Pitty:  'imagenes/ul_li.svg',
            };
        },


        mounted()
        {   setTimeout(function() { 
                var reglas = document.getElementById('reglas');
                reglas.classList.toggle('fadein');
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
    #reglas
    {   margin-left: -100%;
        opacity: 0;
        transition: opacity 3s;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out; 
    }
    #reglas.fadein
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