<template>    
    <div>   

        <div className="show__ejer__title">
            
            <router-link to="/"> <img :src=back alt=""  className="back__img" /> </router-link>                                         
                            
            <h1 className="back__tittle"> <span className="muclse__name">Muscle:</span> {{ namesito }}</h1>
        </div>

        <div className="all__ejer__container">

        <ShowEjer v-for="e in ejer" :body-part="e.bodyPart" :equipment="e.equipment" :gif-url="e.gifUrl" :name="e.name" :instructions="e.instructions"></ShowEjer>
        </div>
    </div>




</template>

<script lang="ts" setup >
import { Ref, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import Exer from '../interfaces/exe';
import axios from 'axios';
import back from '../assets/images/icons/back.svg'

import ShowEjer from '../components/ShowEjer.vue';

    let namesito : Ref<string> = ref('')
    let ejer : Ref<Exer[]>= ref([])    


const handleGet = async (name : string) => {
        
        const options = {
        method: 'GET',
        url:  `https://exercisedb.p.rapidapi.com/exercises/target/${name}`,
        params: {limit: '10'},
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_KEY,
            'X-RapidAPI-Host': import.meta.env.VITE_HOST
        }
        };

        try {
            const response = await axios.request<Exer[]>(options);            
            ejer.value = response.data      
            console.log(ejer.value)      
        } catch (error) {
            console.error(error);
        }
}


onMounted( async () => {
    const router = useRoute()
    const name =router.params.name.toString() 
    namesito.value = name
    await handleGet(name)

})


</script>


<style lang="scss" scoped>

a{
    width: 28px;
    height: 28px; 
    background-color: red;
    border-radius: 50%;
    padding-right: 3px;
}

.show__ejer__title{


    margin: 0 auto;
    display: flex;    
    justify-content: space-around;    
    align-items: center;

    margin-bottom: 30px;



    border-radius: 10px;
    height: 45px;    

}


.back__img{
    width: 28px;
    height: 28px; 
    background-color: #FFA826;
    border-radius: 50%;
    padding-right: 3px;
    cursor: pointer;
}

.back__tittle{
    font-size: 20px;
}

.muclse__name{
    color: #FFA826;
}


.all__ejer__container{
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-bottom: 20px;
}


@media (min-width:1200px) {

.show__ejer__title{
    height: 60px;    

}

.back__img{
    width: 35px;
    height: 35px;        
}

.back__tittle{
    font-size: 30px;
}
}


</style>