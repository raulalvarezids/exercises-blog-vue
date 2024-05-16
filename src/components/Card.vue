<template>
     <router-link :to="{name:'exercise',params:{name:props.name}}" >
        
            <img :src=props.img alt="">
            <h1>{{ props.name }}</h1>
        
    </router-link>

</template>

<script lang="ts" setup>

const props = defineProps({
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    }
})

</script>

<style lang="scss" scoped>

a {
    text-decoration: none;

    display: flex;
    align-items: center;
    width: 80%;
    margin-inline: auto;    
    height: 100px;
    border-radius: 10px;  
    gap: 10px;          
    border: 2px solid #FFFFFF;    
    padding: 5px;    
    cursor: pointer;   


    img{    
        width: 70px;
        height: auto;    
        border-radius: 10px;
    }

    h1{             
        font-size: 25px;
        color: #FFA826;
        
    }

    @media (min-width:768px) {
   
        h1{              
            font-size: 18px;
        }
    
    }


    @media (min-width:1440px) {
        h1{
            font-size: 27px;
            
        }    
    }


}

</style>