<template>
    <div>
        <Nav @changeList="handleSearch"></Nav>

        <div className="allconatiner">
                            
            <Card v-for="(x,index) in filteredData" :img=images[index] :name="x"></Card>
                
        </div>
    </div>
    
</template>

<script lang="ts" setup>
import { Ref, ref ,onMounted, computed} from 'vue';
import Nav from '../components/Nav.vue'
import axios from 'axios';
import Card from '../components/Card.vue';
import { images } from '../interfaces/images';


let data : Ref<string[]> = ref([])
let sdata : Ref<string[]> = ref([])
let text : Ref<string> = ref('')
    
const getData = async ()  => {                
        const options = {
            method: 'GET',
            url: 'https://exercisedb.p.rapidapi.com/exercises/targetList',
            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_KEY,
                'X-RapidAPI-Host': import.meta.env.VITE_HOST
            }
        };

        try {
            const response = await axios.request<string[]>(options);
            data.value = response.data
            sdata.value = response.data
            console.log(response)            
        } catch (error) {
            console.error(error);
            alert('Sorry, try later');
        }                
    }



    const handleSearch = (texto : string ) => {        
            text.value = texto            
    }


    const filteredData = computed(() => {
        if (text.value !== '') {
            return data.value.filter(s => s.toLowerCase().startsWith(text.value.toLowerCase()));
        }
        return data.value;
        });


onMounted( async ()  => {
    await getData()
})

</script>


<style lang="scss" scoped>

.allconatiner{
    display: flex;
    flex-direction: column;
    gap: 20px;
}


@media (min-width:1000px) {

.allconatiner{       
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(110px, auto);        
    padding: 15px;
}   

}


@media (min-width:1440px) {



.allconatiner{       
    width: 90%;        
    margin: 0 auto;
}  
}



</style>