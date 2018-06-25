<template>
    <div id="subir">
        <el-row type="flex" justify="center">
            <el-col :span="23" class="cuerpo">
                <div class="subtitulo">
                    <embed :src="Pitty"/>
                    CARGA DE HISTORIETAS
                </div>
                <hr>

                <!-- Formulario -->
                <el-form ref="frmCapitulo" :model="frmCapitulo" :rules="rulesCapitulo" :status-icon="true" style="margin-top:10px">
                    <el-row>
                        <el-col :span="24" style="margin-top:30px">
                            <el-form-item label="Selecciona la Obra a la que pertenece el Capítulo que estás por subir" prop="ldObra">
                                <span style="float:right"><i>Si no la encuentras, cárgala haciendo click en éste botón.</i></span>
                                <div class="el-input el-input-group el-input-group--append">
                                    <el-select v-model="frmCapitulo.ldObra" placeholder="Selecciona" class="el-input__inner" style="border:none; box-shadow:none; padding:0px !important"
                                    filterable remote reserve-keyword :remote-method="remoteMethod" :loading="CargandoObras">
                                        <el-option
                                            v-for="item in Obras"
                                            :key="item.id"
                                            :label="item.Titulo + ' (' + item.Autores + ')'"
                                            :value="item.id">
                                        </el-option>
                                    </el-select>
                                    <div class="el-input-group__append">
                                        <button type="button" class="el-button el-button--default" @click="CargarObra=true">
                                            <i class="el-icon-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="12">
                            <el-form-item label="Número de Capítulo" prop="Capitulo">
                                <el-input type="text" v-model="frmCapitulo.Capitulo" @keypress.native="control($event,'n')"/>
                            </el-form-item>    
                        </el-col>
                        <el-col :xs="24" :sm="12">
                            <el-form-item label="Temporada">
                                <el-input type="text" v-model="frmCapitulo.Temporada" placeholder="S/T" @keypress.native="control($event,'n')"/>
                            </el-form-item>    
                        </el-col>
                        <el-col :span="24" align="center">
                            Sube las imagenes
                            <el-alert title="Sus nombres deben estar numerados desde el 1 en adelante" type="warning" :closable="false"></el-alert><br>
                            <div tabindex="0" class="el-upload el-upload--picture">
                                <el-button size="small" type="primary" @click="ClickInputFile('FlImagenes')">
                                    Clic para subir archivos
                                </el-button>
                                <input id="FlImagenes" type="file" multiple @change="MostrarVistraPrevia($event)" style="display:none"/>
                            </div>
                            <div class="el-upload__tip">Ingresa un archivo del tipo jpg, jpeg, bmp o png.</div>
                            <br><br>
                            <div v-if="MostrarImagenes">
                                <img :src="PreviewFoto" style="width:100%"/>
                            </div>
                        </el-col>
                    </el-row>
                   
                </el-form>            
           
            </el-col>
        </el-row>
        <el-row>


            <!-- MODAL NUEVA OBRA -->
            <el-dialog
                title="CARGAR NUEVA OBRA"
                :visible.sync="CargarObra"
                :before-close="handleClose"
                :show-close="false"
                width="90%"
                center>
                <el-form ref="frmObra" :model="frmObra" :rules="rulesObra" :status-icon="true" style="margin-top:10px">
                    <el-row>
                        <el-col :xs="24" :sm="12">

                            <!-- Titulo -->
                            <el-form-item label="Título de la Obra" prop="Titulo">
                                <el-input v-model="frmObra.Titulo"></el-input>
                            </el-form-item>

                            <!-- Autores -->
                            <el-form-item label="Autor/es">
                                <div class="el-input el-input-group el-input-group--append">
                                    <el-select v-model="frmObra.ldAutor" multiple placeholder="Selecciona" class="el-input__inner" style="border:none; box-shadow:none; padding:0px !important">
                                        <el-option
                                            v-for="item in Autores"
                                            :key="item.id"
                                            :label="item.Autor"
                                            :value="item.id">
                                        </el-option>
                                    </el-select>
                                    <div class="el-input-group__append">
                                        <button type="button" class="el-button el-button--default" @click="CargarAutor=true">
                                            <i class="el-icon-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </el-form-item>

                            <!-- Editoriales -->
                            <el-form-item label="Editorial/es">
                                <div class="el-input el-input-group el-input-group--append">
                                    <el-select v-model="frmObra.ldEditorial" multiple placeholder="Selecciona" class="el-input__inner" style="border:none; box-shadow:none; padding:0px !important">
                                        <el-option
                                            v-for="item in Editoriales"
                                            :key="item.id"
                                            :label="item.Editorial"
                                            :value="item.id">
                                        </el-option>
                                    </el-select>
                                    <div class="el-input-group__append">
                                        <button type="button" class="el-button el-button--default"  @click="CargarEditorial=true">
                                            <i class="el-icon-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </el-form-item>

                            <!-- Producciones -->
                            <el-form-item label="Producción">
                                <el-select v-model="frmObra.ldProduccion" multiple placeholder="Selecciona" class="el-col el-col-24" style="padding:0px !important">
                                    <el-option
                                        v-for="item in Producciones"
                                        :key="item.id"
                                        :label="item.Produccion"
                                        :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        
                            <!-- Pais -->
                            <el-form-item label="País de Origen">
                                <div class="el-input el-input-group el-input-group--append">
                                    <el-select v-model="frmObra.ldPais" placeholder="Selecciona" class="el-input__inner" style="border:none; box-shadow:none; padding:0px !important">
                                        <el-option
                                            v-for="item in Paises"
                                            :key="item.id"
                                            :label="item.Pais"
                                            :value="item.id">
                                        </el-option>
                                    </el-select>
                                    <div class="el-input-group__append">
                                        <button type="button" class="el-button el-button--default"  @click="CargarPais=true">
                                            <i class="el-icon-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </el-form-item>

                            <!-- Año Inicio -->
                            <el-form-item label="Año de Publicación" prop="Inicio">
                                <el-input v-model="frmObra.Inicio" maxlength="4" @keypress.native="control($event,'n')"></el-input>
                            </el-form-item>

                        </el-col>
                        <el-col :xs="24" :sm="12">

                            <!-- Descripcion -->
                            <el-form-item label="Descripción" prop="Descripcion">
                                <el-input type="textarea" v-model="frmObra.Descripcion"></el-input>
                            </el-form-item>

                            <!-- Portada -->
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
                        <el-col :span="24">

                            <!-- Demografia -->
                            <el-form-item label="Demografía">
                                <el-select v-model="frmObra.ldDemografia" multiple placeholder="Selecciona" class="el-col el-col-24" style="padding:0px !important">
                                    <el-option
                                        v-for="item in Demografias"
                                        :key="item.id"
                                        :label="item.Demografia"
                                        :value="item.id">
                                    </el-option>
                                </el-select>
                            </el-form-item>

                            <!-- Estilos -->
                            <el-form-item label="Estilos">
                                <br> 
                                <center>
                                    <el-checkbox-button v-for="(estilo,index) in Estilos" :key="index" v-model="estilo.Checked">
                                        {{ estilo.Estilo }}
                                    </el-checkbox-button>
                                </center>
                            </el-form-item>

                            <!-- Temas-->
                            <el-form-item label="Temas">
                                <br> 
                                <center>
                                    <el-checkbox-button v-for="(tema,index) in Temas" :key="index" v-model="tema.Checked">
                                        {{ tema.Tema }}
                                    </el-checkbox-button>
                                </center>
                            </el-form-item>

                            <!-- Etiquetas -->
                            <el-form-item label="Etiquetas">
                                <br> 
                                <center>
                                    <el-checkbox-button v-for="(etiqueta,index) in Etiquetas" :key="index" v-model="etiqueta.Checked">
                                        {{ etiqueta.Etiqueta }}
                                    </el-checkbox-button>
                                </center>
                            </el-form-item>

                        </el-col>
                        <el-col :span="24" style="margin-top:20px">
                            <el-row type="flex" justify="center">
                                <el-col :xs="24" :sm="12" :md="9" :lg="6">
                                    <el-button type="info"      @click="CargarObra=false"       style="width:100%">Cerrar         </el-button>    
                                </el-col>
                                <el-col :xs="24" :sm="12" :md="9" :lg="6">
                                    <el-button type="primary"   @click="SubmitObra('frmObra')"  style="width:100%">Guardar Cambios</el-button>
                                </el-col>                                
                            </el-row>
                        </el-col>
                    </el-row> 
                </el-form>
            </el-dialog>


            <!-- MODAL NUEVO AUTOR -->
            <el-dialog
                title="CARGAR NUEVO AUTOR"
                :visible.sync="CargarAutor"
                :show-close="false"
                width="50%"
                center>
                <el-form ref="frmAutor" :model="frmAutor" :rules="rulesAutor" :status-icon="true" style="margin-top:10px">
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


            <!-- MODAL NUEVA EDITORIAL -->
            <el-dialog
                title="CARGAR NUEVA EDITORIAL"
                :visible.sync="CargarEditorial"
                :show-close="false"
                width="50%"
                center>
                <el-form ref="frmEditorial" :model="frmEditorial" :rules="rulesEditorial" :status-icon="true" style="margin-top:10px">
                    <el-row>
                        <el-col :span="24">
                            <el-form-item label="Nombre de la Editorial" prop="Nombre">
                                <el-input v-model="frmEditorial.Nombre"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="12" style="padding:10px !important; float:right">
                            <el-button type="success"   @click="SubmitEditorial('frmEditorial')"    style="width:100%">Guardar</el-button>
                        </el-col>
                        <el-col :xs="24" :sm="12" style="padding:10px !important; float:left">
                            <el-button type="info"      @click="CargarEditorial=false"              style="width:100%">Cerrar </el-button>
                        </el-col>
                    </el-row>
                </el-form>
            </el-dialog>


            <!-- MODAL NUEVO PAIS-->
            <el-dialog
                title="CARGAR NUEVO PAIS"
                :visible.sync="CargarPais"
                :show-close="false"
                width="50%"
                center>
                <el-form ref="frmPais" :model="frmPais" :rules="rulesAutor" :status-icon="true" style="margin-top:10px">
                    <el-row>
                        <el-col :span="24">
                            <el-form-item label="Nombre del País" prop="Nombre">
                                <el-input v-model="frmPais.Nombre"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :xs="24" :sm="12" style="padding:10px !important; float:right">
                            <el-button type="success"   @click="SubmitPais('frmPais')"  style="width:100%">Guardar</el-button>
                        </el-col>
                        <el-col :xs="24" :sm="12" style="padding:10px !important; float:left">
                            <el-button type="info"      @click="CargarPais=false"       style="width:100%">Cerrar </el-button>
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
                Pitty:              'imagenes/ul_li.svg',
                CargarAutor:        false,
                CargarEditorial:    false,
                CargarObra:         false,
                CargarPais:         false,
                frmAutor:           {},
                frmCapitulo:        {},
                frmEditorial:       {},
                frmObra:            {},
                frmPais:            {},
                Autores:            [],
                Demografias:        [],
                Editoriales:        [],
                Estilos:            [],
                Etiquetas:          [],
                Obras:              [],        
                Paises:             [],
                PreviewImagenes:    [],
                Producciones:       [],
                Temas:              [],
                error:              '',

                //Foto
                NuevaFoto:          [],
                PreviewFoto:        '#',
                NuevaFotoString:    '',
                GuardarFoto:        false,

                //Autocompletar
                ListaAuxiliar:      [],
                CargandoObras:      false,


                rulesAutor: {
                    Nombre: [
                        { required: true, message: 'Por favor, ingresa el Nombre del Autor', trigger: 'blur' },
                    ],    
                },
                rulesCapitulo: {
                    ldObra: [
                        { required: true, message: 'Selecciona la Obra a la que corresponde el capítulo que deseas subir.', trigger: 'blur' },
                    ],
                    Capitulo: [
                        { required: true, message: 'Por favor, ingresa el Número del Capítulo.', trigger: 'blur' },
                    ],
                    Imagenes: [
                        { required: true, message: 'Ingresa por lo menos una Imagen.', trigger: 'blur' },
                    ]
                },
                rulesEditorial: {
                    Nombre: [
                        { required: true, message: 'Por favor, ingresa el Nombre de la Editorial.', trigger: 'blur' },
                    ],    
                },
                rulesObra: {
                    Titulo: [
                        { required: true, message: 'Por favor, ingresa el Nombre de la Obra.', trigger: 'blur' },
                    ], 
                    Descripcion: [
                        { required: true, message: 'Por favor, ingresa una descripción.', trigger: 'blur' },
                    ], 
                    Inicio: [
                        { min: 4, max: 4, message: 'Ingresa un número de 4 dígitos', trigger: 'blur' }
                    ],     
                },
                rulesPais: {
                    Nombre: [
                        { required: true, message: 'Por favor, ingresa el Nombre del País', trigger: 'blur' },
                    ],    
                },
                
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


            /** FUNCIONES PARA EL AUTOCOMPLETAR *************************************************************/
            remoteMethod(query) {
                if (query!=='')
                {   this.CargandoObras      = true;
                    setTimeout(() => {
                        this.CargandoObras  = false;
                        this.Obras          = this.ListaAuxiliar.filter(item => {
                        return item.Titulo.toLowerCase()
                            .indexOf(query.toLowerCase()) > -1;
                        });
                    }, 200);
                } 
                else 
                {   this.options4           = [];
                }
            },
            

            /** FUNCIONES PARA LA SUBIDA DE IMAGENES ********************************************************/
            ClickInputFile(id)
            {   document.getElementById(id).click();
            },
            UpdateFoto(event)
            {   this.NuevaFoto                              = event.target.files; 
                if(this.NuevaFoto[0].type=='image/jpeg' || this.NuevaFoto[0].type=='image/bmp' || this.NuevaFoto[0].type=='image/png')
                {   this.GuardarFoto                        = true;
                    this.PreviewFoto                        = URL.createObjectURL(event.target.files[0]);
                    var reader                              = new FileReader();
                    reader.onload                           = this._handleReaderLoadedFoto.bind(this);
                    reader.readAsBinaryString(this.NuevaFoto[0]);
                }
                else
                {   this.GuardarFoto                        = false;
                    this.PreviewFoto                        = '#';
                }                 
            },
            _handleReaderLoadedFoto(readerEvt)
            {   var binaryString                            = readerEvt.target.result;
                this.NuevaFotoString                        = btoa(binaryString);               // Converting binary string data.
            },
            MostrarVistraPrevia(event)
            {   console.log(event);
            },


            /** ENVIO DE FORMULARIOS ************************************************************************/
            SubmitAutor(formName)
            {   this.$refs[formName].validate((valid) => {
                    if (valid)
                    {   axios.get('http://studiosvrd.com/api/autor_insert.php', {
                            params: {
                                token:                      this.$cookies.get("MTTK"), 
                                Nombre:                     this.frmAutor.Nombre,
                            } })
                            .then(response => {
                                const datos                 = response.data;
                                this.Autores                = datos['Autores'];
                                this.CargarAutor            = false;
                                this.frmAutor.Nombre        = '';
                                this.$message({
                                    showClose:              true,
                                    message:                'Autor cargado correctamente.',
                                    type:                   'success'
                                });
                            })
                            .catch(e => {
                                this.$message({
                                    showClose:              true,
                                    message:                'Oops, por favor intenta nuevamente.',
                                    type:                   'error'
                                });
                            })                 
                    }
                });
            },

            SubmitEditorial(formName)
            {   this.$refs[formName].validate((valid) => {
                    if (valid)
                    {   axios.get('http://studiosvrd.com/api/editorial_insert.php', {
                            params: {
                                token:                      this.$cookies.get("MTTK"), 
                                Nombre:                     this.frmEditorial.Nombre,
                            } })
                            .then(response => {
                                const datos                 = response.data;
                                this.Editoriales            = datos['Editoriales'];
                                this.CargarEditorial        = false;
                                this.frmEditorial.Nombre    = '';
                                this.$message({
                                    showClose:              true,
                                    message:                'Editorial cargada correctamente.',
                                    type:                   'success'
                                });
                            })
                            .catch(e => {
                                this.$message({
                                    showClose:              true,
                                    message:                'Oops, por favor intenta nuevamente.',
                                    type:                   'error'
                                });
                            })                 
                    }
                });
            },

            SubmitPais(formName)
            {   this.$refs[formName].validate((valid) => {
                    if (valid)
                    {   axios.get('http://studiosvrd.com/api/pais_insert.php', {
                            params: {
                                token:                      this.$cookies.get("MTTK"), 
                                Nombre:                     this.frmPais.Nombre,
                            } })
                            .then(response => {
                                const datos                 = response.data;
                                this.Paises                 = datos['Paises'];
                                this.CargarPais             = false;
                                this.frmPais.Nombre         = '';
                                this.$message({
                                    showClose:              true,
                                    message:                'País cargado correctamente.',
                                    type:                   'success'
                                });
                            })
                            .catch(e => {
                                this.$message({
                                    showClose:              true,
                                    message:                'Oops, por favor intenta nuevamente.',
                                    type:                   'error'
                                });
                            })                 
                    }
                });
            },

            SubmitObra(formName)
            {   this.error                                  = '';
                this.$refs[formName].validate((valid) => {
                    if (valid)
                    {   if(this.NuevaFotoString=='')
                        {   var params = 'token=' + this.$cookies.get("MTTK") + '&Datos=' + JSON.stringify(this.frmObra) + '&Estilo=' + JSON.stringify(this.Estilos) + '&Tema=' + JSON.stringify(this.Temas) + '&Etiquetas=' + JSON.stringify(this.Etiquetas);
                        }
                        else
                        {   var params = 'token=' + this.$cookies.get("MTTK") + '&Datos=' + JSON.stringify(this.frmObra) + '&Estilo=' + JSON.stringify(this.Estilos) + '&Tema=' + JSON.stringify(this.Temas) + '&Etiquetas=' + JSON.stringify(this.Etiquetas) + '&FotoName=' + this.NuevaFoto[0].name + '&FotoType=' + this.NuevaFoto[0].type + '&Foto=' + this.NuevaFotoString;
                        }
                        var headers = new Headers(); 
                        headers.append('Content-Type', 'application/x-www-form-urlencoded');
                        axios.post('http://studiosvrd.com/api/obras_insert.php', params, {headers: headers})                 
                            .then(response => {
                                const datos                 = response.data;
                                this.Obras                  = datos['Obras'];
                                this.Estilos                = datos['Estilos'];
                                this.Temas                  = datos['Temas'];
                                this.Etiquetas              = datos['Etiquetas'];
                                this.CargarObra             = false;
                                this.frmObra                = {};
                                this.NuevaFoto              = [];
                                this.frmObra.ldAutor        = '';
                                this.frmObra.ldEditorial    = '';
                                this.frmObra.ldProduccion   = '';
                                this.frmObra.ldDemografia   = '';
                                this.NuevaFotoString        = '';
                                this.PreviewFoto            = '';
                                this.$refs[formName].resetFields();
                                window.scroll({
                                    top:                    0, 
                                    left:                   0, 
                                    behavior:               'smooth' 
                                });
                                this.$message({
                                    showClose:              true,
                                    message:                'Obra cargada correctamente.',
                                    type:                   'success'
                                });
                            })
                            .catch(e => {
                                this.$message({
                                    showClose:              true,
                                    message:                'Oops, por favor intenta nuevamente.',
                                    type:                   'error'
                                });
                            })                     
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
        {   if(!this.$cookies.get("MTTK"))
            {   this.$router.push('login');
            }
            else
            {   axios.get('http://studiosvrd.com/api/obras_datos.php')
                    .then(response => {
                        const datos                         = response.data;
                        this.Autores                        = datos['Autores'];
                        this.Demografias                    = datos['Demografias'];
                        this.Editoriales                    = datos['Editoriales'];
                        this.Estilos                        = datos['Estilos'];
                        this.Etiquetas                      = datos['Etiquetas'];
                        this.Obras                          = datos['Obras'];
                        this.Paises                         = datos['Paises'];
                        this.Producciones                   = datos['Producciones'];
                        this.Temas                          = datos['Temas'];
                        this.ListaAuxiliar = this.Obras.map(item => {
                            return { id: item.id, Titulo: item.Titulo };
                        });
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