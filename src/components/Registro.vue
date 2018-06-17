<template>
    <div id="registro">
        <el-row type="flex" justify="center">
            <el-col :span="23" class="cuerpo">
                <div class="subtitulo">
                    <embed :src="Pitty"/>
                    REGISTRO
                </div>
                <hr>


                <!-- Alertass -->


                <!-- Formulario -->
                <el-form ref="form" :model="form" :rules="rules" style="margin-top:10px">
                    
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>



<script>
    import axios from 'axios';
    
    
    export default
    {   name: 'Registro',
        
        
        data()
        {   return {             
                Pitty:          'imagenes/ul_li.svg',
                error:          '',
                form:       
                {   
                },

                rules: {
                }
            };
        },


        methods:
        {   Submit(formName)
            {   this.error      = '';
                this.$refs[formName].validate((valid) => {
                    if (valid)
                    {                          
                    }
                });
                window.scroll({
                    top: 0, 
                    left: 0, 
                    behavior: 'smooth' 
                });
            }
        },


        mounted()
        {   setTimeout(function() { 
                var registro = document.getElementById('registro');
                registro.classList.toggle('fadein');
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
    #registro
    {   margin-left: -100%;
        opacity: 0;
        transition: opacity 3s;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out; 
    }
    #registro.fadein
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