<template>

    <div>
        <h1>Muscle Trainer</h1>
        <input type="text" @input="handleChange" v-model="text">
    </div>    

</template>

<script lang="ts" setup>
import { Ref, ref } from 'vue';

let text : Ref<string> = ref('')



const emits = defineEmits(['changeList'])

const handleChange = () => {
    emits('changeList',text.value)
}

</script>

<style lang="scss" scoped>

div{
    width: 95%;

    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;            
    padding: 10px;
        
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;    
    margin: 0 auto;
    margin-bottom: 30px;

    h1{
        font-size: 20px;    
        color: #FFA826;  
    }

    input{
        height: 22px;
        width: 42%;  
        border: none;
        border-radius: 5px;
        outline: none;
        padding: 5px;
        background-color: #FFFFFF;    
    }


        
    @media (min-width:910px) {


    input{        
        height: 30px;
        width: 40%;                        
    }

    }


    @media (min-width:1440px) {
        h1{
        font-size: 40px;            
    }

    input{
        font-size: 18px;
        height: 30px;
        width: 30%;            
        padding: 5px;        
    }

}

    
}






</style>