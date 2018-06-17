<template>
    <div id="recuperar">
        <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="15" :md="10" class="cuerpo">
                <div class="subtitulo">
                    <embed :src="Pitty"/>
                    RECUPERAR CONTRASEÑA
                </div>
                <hr>


                <!-- Alertass -->
                <el-alert
                    title="Usuario Inexistente"
                    type="error"
                    description="Por favor, regístrate."
                    show-icon
                    style="margin-top:20px"
                    v-if="error=='noexiste'">
                </el-alert>
                <el-alert
                    type="success"
                    show-icon
                    style="margin-top:20px"
                    v-if="success">
                    Se ha enviado un mail con una nueva contraseña a <strong>{{ Mail }}</strong>. 
                </el-alert>
                <el-alert
                    title="Ha Ocurrido un Error"
                    type="error"
                    description="Por favor, intenta nuevamente."
                    show-icon
                    style="margin-top:20px"
                    v-if="error=='error'">
                </el-alert>


                <!-- Formulario -->
                <el-form ref="form" :model="form" :rules="rules" style="margin-top:10px">
                    <el-col :span="24">
                        <el-form-item label="Usuario o Correo Electrónico" prop="Username">
                            <el-input v-model="form.Username"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" style="margin-top:20px">
                        <el-button class="el-col el-col-24" type="primary"  @click="Submit('form')">Recuperar Contraseña</el-button>
                    </el-col>
                    <el-col :span="24">
                        <router-link to="/login" class="el-button el-col el-col-24 el-button--info" style="margin-top:5px">Volver</router-link>
                    </el-col>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>



<script>
    import axios from 'axios';
    
    
    export default
    {   name: 'recuperar',
        
        
        data()
        {   return {             
                Pitty:          'imagenes/ul_li.svg',
                success:        false,
                Mail:           '',
                error:          '',                
                form:       
                {   Username:   '',
                },

                rules: {
                    Username: [
                        { required: true, message: 'Por favor, ingresa tu Nombre de Usuario o Dirección de Correo Electrónico.', trigger: 'blur' }
                    ],
                }
            };
        },


        methods:
        {   Submit(formName)
            {   this.error      = '';
                this.success    = false;
                this.$refs[formName].validate((valid) => {
                    if (valid)
                    {   axios.get('http://studiosvrd.com/api/pass_recuperar.php', {
                            params: {
                                Username:           this.form.Username,
                            } })
                            .then(response => {
                                const datos         = response.data
                                if(datos['Mail'])
                                {   this.success    = true;
                                    this.Mail       = datos['Mail'];
                                }
                                else
                                {   this.error      = datos['error'];
                                }                                
                            })
                            .catch(e => {
                                this.error          = 'error';
                            })                        
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
                var recuperar = document.getElementById('recuperar');
                recuperar.classList.toggle('fadein');
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
    #recuperar
    {   margin-left: -100%;
        opacity: 0;
        transition: opacity 3s;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out; 
    }
    #recuperar.fadein
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

    .btn-facebook
    {   background: #25527B;
        color: #fff;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }
    .btn-facebook:hover, .btn-facebook:focus, .btn-facebook:active
    {   background: #1E4262;
        color: #fff;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }
    .btn-twitter
    {   background: #65A2D9;
        color: #fff;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }
    .btn-twitter:hover, .btn-twitter:focus, .btn-twitter:active
    {   background: #5182AE;
        color: #fff;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }
    .btn-google
    {   background: #C02127;
        color: #fff;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }
    .btn-google:hover, .btn-google:focus, .btn-google:active
    {   background: #9A1A1F;
        color: #fff;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }
</style>