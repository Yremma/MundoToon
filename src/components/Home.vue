<template>
    <div id="home">
        

        <!-- BOTONES -->
        <el-row>
            <el-col :span="4" class="hidden-sm-and-down">&nbsp;</el-col>
            <el-col :xs="24" :sm="6" :md="4" style="margin-bottom:5px">
                <el-button class="el-col el-col-24 el-button--primary" @click="TabActivo='principal'"   >Últimas Subidas    </el-button>
            </el-col>
            <el-col :xs="24" :sm="6" :md="4" style="margin-bottom:5px">
                <el-button class="el-col el-col-24 el-button--primary" @click="TabActivo='favoritos'"   >Favoritos          </el-button>
            </el-col>
            <el-col :xs="24" :sm="6" :md="4" style="margin-bottom:5px">
                <el-button class="el-col el-col-24 el-button--primary" @click="TabActivo='masleidos'"   >Más Leidos         </el-button>
            </el-col>
            <el-col :xs="24" :sm="6" :md="4" style=" margin-bottom:5px">
                <el-button class="el-col el-col-24 el-button--primary" @click="TabActivo='populares'"   >Recomendados       </el-button>
            </el-col>
        </el-row>


        <el-row type="flex" justify="center" style="margin-top:30px">


            <!-- PRINCIPAL -->
            <el-col :span="23" class="cuerpo" v-if="TabActivo=='principal'">
                1er Tab
            </el-col>


            <!-- FAVORITOS -->
            <el-col :span="23" class="cuerpo" v-if="TabActivo=='favoritos'">
                2do Tab
            </el-col>


            <!-- MAS LEIDOS -->
            <el-col :span="23" class="cuerpo" v-if="TabActivo=='masleidos'">
                3er Tab
            </el-col>


            <!-- RECOMENDADOS -->
            <el-col :span="23" class="cuerpo" v-if="TabActivo=='populares'">
                4to Tab
            </el-col>

            
        </el-row>
    </div>
</template>



<script>
    export default 
    {   name: 'Home',
        
        data()
        {   return { 
                TabActivo:  'principal'               
            };
        },
    }
</script>



<style>
</style>