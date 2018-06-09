<template>
    <div id="home">
        <img :src="Logo"/>
    </div>
</template>



<script>
    export default 
    {   name: 'Home',
        
        data()
        {   return {
                Logo:   'imagenes/Logo.png',
            };
        },
    }
</script>



<style>
</style>