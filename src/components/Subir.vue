<template>
    <div id="subir">
        <el-row type="flex" justify="center">
            <el-col :span="23" class="cuerpo">
                <div class="subtitulo">
                    <embed :src="Pitty"/>
                    CARGA DE HISTORIETAS
                </div>
                <hr>


                <!-- Alertass -->


                <el-button type="primary" @click="CargarObra=true">Cargar Obra</el-button>

                




                <!-- Formulario -->
                <el-form ref="form" :model="form" :rules="rules" style="margin-top:10px">
                    
                </el-form>            
           
            </el-col>
        </el-row>


        <el-row>
            <el-dialog
                title="CARGAR NUEVA OBRA"
                :visible.sync="CargarObra"
                :before-close="handleClose"
                :show-close="false"
                width="90%"
                center>
                <el-form ref="frmObra" :model="frmObra" :rules="rulesAutor" style="margin-top:10px">
                    <el-row>

                        <!-- Titulo -->
                        <el-col :xs="24" :sm="12">
                            <el-form-item label="Título de la Obra" prop="Titulo">
                                <el-input v-model="frmObra.Titulo"></el-input>
                            </el-form-item>
                        </el-col>

                        <!-- Descripcion -->
                        <el-col :xs="24" :sm="12">
                            <el-form-item label="Descripción" prop="Descripcion">
                                <el-input type="textarea" v-model="frmObra.Descripcion"></el-input>
                            </el-form-item>
                        </el-col>                        

                        <!-- Pais -->
                        <el-col :xs="24" :sm="12">
                            <el-form-item label="País de Origen">
                                <el-select v-model="frmObra.ldPais" placeholder="Selecciona" class="el-col el-col-24" style="padding:0px !important">
                                    <el-option
                                        v-for="item in Paises"
                                        :key="item.id"
                                        :label="item.Pais"
                                        :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>

                        <!-- Año Inicio -->
                        <el-col :xs="24" :sm="12">
                            <el-form-item label="Año de Publicación">
                                <el-input v-model="frmObra.Inicio" maxlength="4" @keypress.native="control($event,'n')"></el-input>
                            </el-form-item>
                        </el-col>

                        <!-- Portada -->
                        <el-col :xs="24" :sm="12">
                            <strong>Portada</strong><br><br>
                            <div tabindex="0" class="el-upload el-upload--picture">
                                <el-button size="small" type="primary" @click="ClickInputFile('FlFoto')">
                                    Clic para subir archivo
                                </el-button>
                                <input id="FlFoto" type="file" @change="UpdateFoto($event)" style="display:none"/>
                            </div>
                            <div class="el-upload__tip">Ingresa un archivo del tipo jpg, jpeg, bmp o png.</div>
                            <br><br>
                            <div v-if="GuardarFoto">
                                <img :src="PreviewFoto" style="width:100%"/>
                            </div>
                        </el-col>


                        <!-- Autores -->
                        <el-col :xs="24" :sm="12">
                            <el-form-item label="Autor/es">
                                <el-select v-model="frmObra.ldAutor" multiple placeholder="Selecciona" class="el-col el-col-24" style="padding:0px !important">
                                    <el-option
                                        v-for="item in Autores"
                                        :key="item.id"
                                        :label="item.Autor"
                                        :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-button type="primary" @click="CargarAutor=true">Agregar Autor</el-button>
                        </el-col>

                    </el-row> 
                </el-form>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="CargarObra=false">Cerrar</el-button>
                    <el-button type="primary" @click="CargarObra=false">Guardar Cambios</el-button>
                </span>
            </el-dialog>


            <el-dialog
                title="CARGAR NUEVO AUTOR"
                :visible.sync="CargarAutor"
                :before-close="handleClose"
                :show-close="false"
                width="50%"
                center>
                <el-form ref="frmAutor" :model="frmAutor" :rules="rulesAutor" style="margin-top:10px">
                    <el-row>
                        <el-col :span="24">
                            <el-form-item label="Nombre del Autor" prop="Nombre">
                                <el-input v-model="frmAutor.Nombre"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="12" style="padding:10px !important; float:right">
                            <el-button type="success"   @click="SubmitAutor('frmAutor')"  style="width:100%">Guardar</el-button>
                        </el-col>
                        <el-col :xs="24" :sm="12" style="padding:10px !important; float:left">
                            <el-button type="info"      @click="CargarAutor=false"        style="width:100%">Cerrar </el-button>
                        </el-col>
                    </el-row>
                </el-form>
            </el-dialog>
        </el-row>
    </div>
</template>



<script>
    import axios from 'axios';
    
    
    export default
    {   name: 'Subir',
        
        
        data()
        {   return {             
                Pitty:          'imagenes/ul_li.svg',
                CargarAutor:    false,
                CargarObra:     false,
                form:           {},
                frmAutor:       {},
                frmObra:        {},
                Autores:        [],        
                Paises:         [],
                error:          '',

                //Foto
                foto:           [],
                NuevaFoto:      [],
                PreviewFoto:    '#',
                GuardarFoto:    false,

                rules: {
                },
                rulesAutor: {
                    Nombre: [
                        { required: true, message: 'Por favor, ingresa el Nombre del Autor', trigger: 'blur' },
                    ],    
                },
                rulesObra: {
                    
                }
                
            };
        },



        methods:
        {   
            /** CONTROLES INPUTS ****************************************************************************/
            control(e, tipo)
            {   if(tipo=='t')
                {   if( (e.which>32  && e.which<65)  || 
                        (e.which>90  && e.which<97)  || 
                        (e.which>123 && e.which<209) || 
                        (e.which>209 && e.which<241) ||
                        (e.which>241)
                    ) 
                    { e.preventDefault(); }                                                 // Campo alfabetico
                }
                else
                {   if( (e.which>31 & e.which<48) || e.which>57) { e.preventDefault(); }    // Campo numerico
                }
            },


            /** FUNCIONES PARA LA SUBIDA DE IMAGENES ********************************************************/
            ClickInputFile(id)
            {   document.getElementById(id).click();
            },
            UpdateFoto(event)
            {   this.NuevaFoto                          = event.target.files; 
                if(this.NuevaFoto[0].type=='image/jpeg' || this.NuevaFoto[0].type=='image/bmp' || this.NuevaFoto[0].type=='image/png')
                {   this.GuardarFoto                    = true;
                    this.PreviewFoto                    = URL.createObjectURL(event.target.files[0]);
                    var reader                          = new FileReader();
                    reader.onload                       = this._handleReaderLoadedFoto.bind(this);
                    reader.readAsBinaryString(this.NuevaFoto[0]);
                }
                else
                {   this.GuardarFoto                    = false;
                    this.PreviewFoto                    = '#';
                }                 
            },
            _handleReaderLoadedFoto(readerEvt)
            {   var binaryString                        = readerEvt.target.result;
                this.frmObra.flPortada                  = btoa(binaryString);               // Converting binary string data.
            },


            /** ENVIO DE FORMULARIOS ************************************************************************/
            SubmitAutor(formName)
            {   this.$refs[formName].validate((valid) => {
                    if (valid)
                    {   axios.get('http://studiosvrd.com/api/autor_insert.php', {
                            params: {
                                idUsuario:              localStorage.getItem('VRDUSER'), 
                                Nombre:                 this.frmAutor.Nombre,
                            } })
                            .then(response => {
                                const datos             = response.data;
                                this.Autores            = datos['Autores'];
                                this.CargarAutor        = false;
                                this.frmAutor.Nombre    = '';
                                this.$message({
                                    showClose:          true,
                                    message:            'Autor cargado correctamente.',
                                    type:               'success'
                                });
                            })
                            .catch(e => {
                                this.$message({
                                    showClose:          true,
                                    message:            'Oops, por favor intenta nuevamente.',
                                    type:               'error'
                                });
                            })                 
                    }
                });
            },
            Submit(formName)
            {   this.error                              = '';
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
            },
        },



        mounted()
        {   setTimeout(function() { 
                var subir = document.getElementById('subir');
                subir.classList.toggle('fadein');
            }, 1000);
        },



        beforeMount()
        {   if(!localStorage.getItem('VRDUSER'))
            {   this.$router.push('login');
            }
            else
            {   axios.get('http://studiosvrd.com/api/obras_datos.php')
                    .then(response => {
                        const datos                     = response.data;
                        this.Autores                    = datos['Autores'];
                        this.Paises                     = datos['Paises'];
                        console.log(datos);
                    })
                    .catch(e => {
                        location.reload();
                    })
            }
            window.scroll({
                top: 0, 
                left: 0, 
                behavior: 'smooth' 
            });

        }
    }
</script>



<style>
    #subir
    {   margin-left: -100%;
        opacity: 0;
        transition: opacity 3s;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out; 
    }
    #subir.fadein
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