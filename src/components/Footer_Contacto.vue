<template>
    <div id="contacto">
        <el-row type="flex" justify="center">
            <el-col :span="23" class="cuerpo">
                <div class="subtitulo">
                    <embed :src="Pitty"/>
                    CONTACTO
                </div>
                <hr><br>
                <center>
                    Para contactarte con nosotros puedes enviarnos un e-mail a 
                    <a href="mailto:studiosvrd@gmail.com">studiosvrd@gmail.com</a>  o 
                    puedes llenar este formulario:
                </center>


                <!-- Alertass -->
                <el-alert
                    title="Mensaje Enviado"
                    type="success"
                    description="El mensaje fue enviado correctamente a los administradores. En breve recibirás una respuesta. Muchas gracias por tu tiempo."
                    show-icon
                    style="margin-top:20px"
                    v-if="success">
                </el-alert>
                <el-alert
                    title="Mensaje no Enviado"
                    type="error"
                    description="Ha ocurrido en error. Por favor, intenta nuevamente."
                    show-icon
                    style="margin-top:20px"
                    v-if="error">
                </el-alert>


                <!-- Formulario -->
                <el-form ref="form" :model="form" :rules="rules" style="margin-top:40px">
                    <el-col :xs="24" :sm="12" :md="8" v-if="!UsrTk">
                        <el-form-item label="Nombre" prop="Nombre">
                            <el-input v-model="form.Nombre"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="12" :md="8" v-if="!UsrTk">
                        <el-form-item label="Correo Electrónico" prop="Mail">
                            <el-input type="email" v-model="form.Mail"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :xs="24" :sm="24" :md="8" v-if="!UsrTk">                        
                        <el-form-item label="Asunto" prop="Asunto">
                            <el-input v-model="form.Asunto"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" v-if="UsrTk">                        
                        <el-form-item label="Asunto" prop="Asunto">
                            <el-input v-model="form.Asunto"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24">
                        <el-form-item label="Mensaje" prop="Mensaje">
                            <el-input type="textarea" v-model="form.Mensaje" rows="5"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="24" style="padding:0px !important">
                        <el-row type="flex" justify="center" style="margin-top:50px">
                            <el-col :xs="24" :sm="12" :md="8">
                                <el-button class="el-col el-col-24" type="primary"  @click="Submit('form')">Enviar</el-button>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>



<script>
    import axios from 'axios';
    
    
    export default
    {   name: 'Contacto',
        
        
        data()
        {   return {             
                Pitty:          'imagenes/ul_li.svg',
                UsrTk:          this.$cookies.get("MTTK"),
                error:          false,
                success:        false,
                form:       
                {   Nombre:     '',
                    Mail:       '',
                    Asunto:     '',
                    Mensaje:    '',
                },

                rules: {
                    Nombre: [
                        { required: true, message: 'Por favor, ingresa tu Nombre, Nick o Alias', trigger: 'blur' }
                    ],
                    Mail: [
                        { required: true, message: 'Por favor, ingresa tu e-mail para poder responderte', trigger: 'blur' },
                    ],
                    Asunto: [
                        { required: true, message: 'Por favor, ingresa un Asunto del Mensaje', trigger: 'blur' },
                    ],
                    Mensaje: [
                        { required: true, message: 'Por favor, ingresa un Mensaje', trigger: 'blur' },
                    ]
                }
            };
        },


        methods:
        {   Submit(formName)
            {   this.error      = false;
                this.success    = false;
                this.$refs[formName].validate((valid) => {
                    if (valid)
                    {   axios.get('http://studiosvrd.com/api/contacto.php', {
                            params: {
                                token:      this.$cookies.get("MTTK"),
                                Nombre:     this.form.Nombre,
                                Mail:       this.form.Mail, 
                                Asunto:     this.form.Asunto,
                                Mensaje:    this.form.Mensaje,
                            } })
                            .then(response => {
                                this.form.Nombre    = '';
                                this.form.Mail      = '';
                                this.form.Asunto    = '';
                                this.form.Mensaje   = '';
                                this.success        = true;
                            })
                            .catch(e => {
                                this.error  = true;
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
                var contacto = document.getElementById('contacto');
                contacto.classList.toggle('fadein');
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
    #contacto
    {   margin-left: -100%;
        opacity: 0;
        transition: opacity 3s;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out; 
    }
    #contacto.fadein
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