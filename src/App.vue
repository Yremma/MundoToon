<template>
    <el-container id="app">
        <el-header>
            <Header></Header>
        </el-header>
        <el-main v-bind:style="{ minHeight: Height + 'px' }">
            <!--
            <div class="hidden-sm-and-up" style="margin-top:15%"></div>
            <Menu></Menu>
            -->
            <router-view></router-view>
        </el-main>
        <el-footer>
            <Footer></Footer>
        </el-footer>
    </el-container>
</template>



<script>
    import Header   from './components/Header.vue';
    import Menu     from './components/Menu.vue';
    import Footer   from './components/Footer.vue';

    export default
    {   components:
        {   Header,
            Menu,
            Footer
        },
        data()
        {   return {
                Height:  window.innerHeight * 55 / 100,
            }
        }
    }
</script>



<style>
    /*@import 'element-theme-default';*/
    /*@import 'https://cdn.jsdelivr.net/npm/element-ui/lib/theme-default/index.css';*/
</style>

<style>    
    #app
    {   -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: "Comic Sans MS", "Comic Sans", cursive;
    }
    body
    {   background: url("./assets/Fondo.png");
        background-attachment: fixed;
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
    }


    .cuerpo
    {   padding: 30px;
        margin-bottom: 50px;
        border-radius: 15px;
        background-color: rgba(255,255,255,0.95);
        text-align: justify;
        color: #58035e;
    } 
    .subtitulo
    {   text-align: center;
        font-size: 26px;
        font-weight: bold;
        font-family: "Courier";
        color: #f00;
    }
    

    .el-col
    {   padding-left: 15px;
        padding-right: 15px;
    }


    a
    {   text-decoration: none;
    }
    th, tr
    {   text-align: center !important;
    }


    .el-form-item__label
    {   font-weight: bold;
        color: #58035e;
    }
    .el-input__inner, .el-textarea__inner
    {   -webkit-box-shadow: 0px 5px 5px 0px rgba(50, 50, 50, 0.5);
        -moz-box-shadow:    0px 5px 5px 0px rgba(50, 50, 50, 0.5);
        box-shadow:         0px 5px 5px 0px rgba(50, 50, 50, 0.5);
    }

    .el-dialog
    {   margin-left: 0px !important;
        padding-left: 0px !important;
    }
</style>