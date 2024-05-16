<template>
  <div className="card__ejer__main">     

    <div className="name__container" @click="handlShow">
        <h2 className="name" > {{ props.name }}</h2>        
        <img :src=ardw alt=""  class="arrowdown" :class="{changer : show}">
    </div>

    <div v-if="show" class="showcard">

        <img :src=gifUrl alt=""  className="img__exersi"/>                

        <span className="body"><b className="bds">BodyPart:</b> {{ props.bodyPart }}</span>
        <span className="equipamiento"><b className="bds">Equipment:</b> {{ props.equipment }}</span>


        
        <div className="container__instruc">
            <b className="ins__tittle">Instructions:</b>
            <ul className="instruc">                

                <li v-for="(x,index) in props.instructions" :key="index" >{{ x }}</li>
            </ul>            
        </div> 
    </div>
                                                                

    </div>


</template>


<script lang="ts" setup>
import { Ref, ref } from 'vue';
import ardw from '../assets/images/icons/arrowwhite.svg'


let show : Ref<boolean> = ref(false)

const props = defineProps({
    bodyPart:{
        type:String,
        required:true
    },
    equipment:{
        type:String,
        required:true
    },
    gifUrl:{
        type:String,
        required:true
    },
    instructions:{
        type:Array<String>,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})


const handlShow = () => {
    show.value = !show.value

}   

    
</script>


<style  scoped >

.card__ejer__main{
    width: 80%;
    margin: 0 auto;
}


.name__container{        

    border-radius: 3px;    
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-around;      

    border: 1px solid #FFFF;
    cursor: pointer;
}

.arrowdown{
    width: 20px;
    height: auto;
    transition: transform 0.5s ease;
}


.changer {
    transform: rotate(180deg); 
}
.name{                   
    font-size: 16px;
    width: 80%;    
}


/*  */

.showcard{         
    max-height: 1000px;
    transition: max-height 0.7s;    
    display: flex;
    flex-direction: column;         
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    gap: 10px;
    padding-top: 10px; 
    border: 1px solid #FFFF;
    border-top: none;
    margin-top: -2px;
    padding-top: 30px
}


.img__exersi{
    width: 200px;
    border-radius: 10px;    
    margin: 0 auto;
}


.body{  
    text-align: center;        
}


.equipamiento{
    text-align: center;     
}

.bds{
    color: #FFA826;
}


.container__instruc{    
    margin: 0 auto;
    padding: 20px;
    font-size: 14px;       
    text-align: justify;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 90%;
}

.instruc{
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.item__ul::marker{
    color:#FFA826;
}


@media (min-width:1200px) {
    
    .name{                   
        font-size: 24px;        
    }
    .arrowdown{
        width: 30px;
      
    }
    
    .name__container{                
        min-height: 50px;      
    }
    
    .img__exersi{
        width: 310px;
    }

    .body{          
        font-size: 20px;
    }
    
    
    .equipamiento{
        font-size: 20px;
    }
    

    .showcard{                          
        gap: 15px;    
    }

    .ins__tittle{
        font-size: 20px;        
    }

    .item__ul{
        font-size: 17px;
    }
}




</style>