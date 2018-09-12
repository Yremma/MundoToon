<template>
    <div id="login">
        <el-row type="flex" justify="center">
            <el-col :xs="24" :sm="15" :md="10" class="cuerpo">
                <div class="subtitulo">
                    <embed :src="Pitty"/>
                    INICIAR SESIÓN
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
                    title="Contraseña Incorrecta"
                    type="error"
                    description="Por favor, verifica tu contraseña."
                    show-icon
                    style="margin-top:20px"
                    v-if="error=='pass'">
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
                    <el-col :span="24">
                        <el-form-item label="Contraseña" prop="Pass">
                            <el-input type="password" v-model="form.Pass" @keypress.native="control($event)"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" style="margin-top:20px">
                        <el-button class="el-col el-col-24" type="primary"  @click="Submit('form')">Iniciar Sesión</el-button>
                    </el-col>
                    <el-col :span="24">
                        <router-link to="/registro" class="el-button el-col el-col-24 el-button--info" style="margin-top:5px">Registrarme</router-link>
                    </el-col>
                    <el-col :span="24">
                        <router-link to="/recuperar" class="el-button el-col el-col-24 el-button--default" style="margin-top:5px">Recuperar Contraseña</router-link>
                    </el-col>
                    <el-col :span="24" style="margin-top:30px">
                        <el-button class="el-col el-col-24 btn-facebook" @click="FBLogin()" >Iniciar con Facebook</el-button>
                    </el-col>
                    <el-col :span="24" style="margin-top:5px">
                        <el-button class="el-col el-col-24 btn-twitter"  @click="TWTLogin()">Iniciar con Twitter</el-button>
                        <a href="https://api.twitter.com/oauth/request_token" target="_blank">asdasd</a>
                    </el-col>
                    <el-col :span="24" style="margin-top:5px">
                        <el-button class="el-col el-col-24 btn-google">Iniciar con Google</el-button>    
                    </el-col>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>



<script>
    import axios from 'axios';
    
    
    export default
    {   name: 'Login',
        
        
        data()
        {   return {             
                Pitty:          'imagenes/ul_li.svg',
                error:          '',
                form:       
                {   Username:   '',
                    Pass:       ''
                },

                rules: {
                    Username: [
                        { required: true, message: 'Por favor, ingresa tu Nombre de Usuario o Dirección de Correo Electrónico.', trigger: 'blur' }
                    ],
                    Pass: [
                        { required: true, message: 'Por favor, ingresa tu Contraseña.', trigger: 'blur' },
                    ],
                }
            };
        },


        methods:
        {   control(e)
            {   if(e.keyCode === 13) { this.Submit('form'); }                   // Envia apretando el Enter
            },
            FBLogin() 
            {   FB.login(function(response) 
                {   this.error                          = '';
                    if (response.status === 'connected') 
                    {   FB.api('/me', { fields: 'name, email, birthday' }, function(response2) 
                        {   FB.api('/' + response2['id'] + '/picture', { "redirect": false, "height": "800", "type": "large", "width": "800" }, function(response3) 
                            {   axios.get('http://studiosvrd.com/api/login_facebook.php', {
                                    params: {
                                        UserID:         response2['id'],
                                        Username:       response2['name'],
                                        Email:          response2['email'],
                                        Nacimiento:     response2['birthday'],
                                        Foto:           response3['data']['url'],
                                    } })
                                    .then(response => {
                                        const datos     = response.data;
                                        if(datos['error']=='')
                                        {   this.$cookies.set("MTTK",   response.data['token'], "1h");
                                            window.location.href        = '/';
                                        }
                                        else
                                        {   this.error  = datos['error'];
                                        }                          
                                    })
                                    .catch(e => {
                                        this.error      = 'error';
                                    });
                            });
                        });
                    }
                }, 
                {   scope: 'email',
                    auth_type: 'rerequest'
                });
                window.scroll({
                    top: 0, 
                    left: 0, 
                    behavior: 'smooth' 
                });
            },
            TWTLogin()
            {   axios.get('http://studiosvrd.com/api/login_twitter.php')
                    .then(response => {
                        const datos             = response.data;
                        console.log(datos);
                        /*
                        if(datos['error']=='')
                        {   this.$cookies.set("MTTK",   response.data['token'], "1h");
                            window.location.href        = '/';
                        }
                        else
                        {   this.error          = datos['error'];
                        }
                        */                            
                    })
                    .catch(e => {
                        this.error              = 'error';
                    })

            },
            Submit(formName)
            {   this.error                              = '';
                this.$refs[formName].validate((valid) => {
                    if (valid)
                    {   axios.get('http://studiosvrd.com/api/login.php', {
                            params: {
                                Username:               this.form.Username,
                                Pass:                   this.form.Pass, 
                            } })
                            .then(response => {
                                const datos             = response.data;
                                if(datos['error']=='')
                                {   this.$cookies.set("MTTK",   response.data['token'], "1h");
                                    window.location.href        = '/';
                                }
                                else
                                {   this.error          = datos['error'];
                                }                             
                            })
                            .catch(e => {
                                this.error              = 'error';
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
                var login = document.getElementById('login');
                login.classList.toggle('fadein');
            }, 1000);
        },


        beforeMount()
        {   this.$cookies.remove("MTTK");
            FB.logout();
            window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth' 
            });
        }
    }
</script>



<style>
    #login
    {   margin-left: -100%;
        opacity: 0;
        transition: opacity 3s;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out; 
    }
    #login.fadein
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