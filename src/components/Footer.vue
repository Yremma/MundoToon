<template>
    <div id="footer">
        <el-row type="flex" justify="center">
            <el-col :span="23" class="divFooter" style="padding: 0px !important">
                <el-row>
                    <el-col :xs="24" :md="9">
                        <ul>
                            <li><router-link to="/mision"   >Sobre Nosotros             </router-link></li>
                            <li><router-link to="/reglas"   >Reglas de la Comunidad     </router-link></li>
                            <li><router-link to="/contacto" >Contacto                   </router-link></li>
                        </ul>
                    </el-col>
                    <el-col :xs="24" :md="15" style="padding:0px" align="justify">
                        <br>
                        <small>
                            Mundotoon no es propietario de los Derechos de las Obras que aquí se pueden encontrar. 
                        </small>
                        <br><br>
                        <a class="social" target="_blank" href="https://www.facebook.com/StudiosVRD.tuc">
                            <img :src="Logo_Facebook"/>
                        </a>
                        <a class="social" target="_blank" href="https://twitter.com/StudiosVrd">
                            <img :src="Logo_Twitter"/>
                        </a>
                        <a class="social" target="_blank" href="https://plus.google.com/u/0/112525390602754278483">
                            <img :src="Logo_Google"/>
                        </a>
                        <br>
                        <span style="float:right">
                            <i>
                                <small>
                                    &copy;Mundotoon y &copy;Studios VRD! by 
                                    <a href="http://laredmd.com" target="_blank">laredmd</a>
                                </small>
                            </i>
                        </span>
                        <br><br>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>
</template>



<script>
    export default 
    {   name: 'Footer',
        
        data()
        {   return {
                Logo_Facebook:  'imagenes/Facebook.png',
                Logo_Google:    'imagenes/Google.png',
                Logo_Twitter:   'imagenes/Twitter.png',
            };
        },
    }
</script>



<style>
    .divFooter
    {   background: rgba(255,255,255,0.7);
        margin-bottom: 20px;
        border-radius: 15px;
        -webkit-box-shadow: 0px 5px 20px 0px rgba(50, 50, 50, 0.5);
        -moz-box-shadow:    0px 5px 20px 0px rgba(50, 50, 50, 0.5);
        box-shadow:         0px 5px 20px 0px rgba(50, 50, 50, 0.5);
    }

    ul
    {   list-style: inside url("./../assets/ul_li.svg");
        padding-left: 0px !important;
    }
    li a
    {   color: #74047c;
        font-size: 16px;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }
    li:hover a
    {   color: #f00;
        font-size: 18px;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }

    .social
    {   padding: 5px;
    }
    .social img
    {   width: 50px;
        border-radius: 25px;
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }
    .social:hover img
    {   border-radius: 25px;
        -webkit-box-shadow: 0px 5px 5px 0px rgba(50, 50, 50, 0.75);
        -moz-box-shadow:    0px 5px 5px 0px rgba(50, 50, 50, 0.75);
        box-shadow:         0px 5px 5px 0px rgba(50, 50, 50, 0.75);
        -webkit-transition: all 300ms ease-in-out;
        -moz-transition: all 300ms ease-in-out;
        -o-transition: all 300ms ease-in-out;
        -ms-transition: all 300ms ease-in-out;
        transition: all 300ms ease-in-out;
    }
</style>