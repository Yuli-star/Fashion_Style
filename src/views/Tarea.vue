<template>
<div>
  <h1>Hola mundo</h1>
  <h3>Hola me llamo {{Nombre}}</h3>
  <input type="text" v-model="Nombre">
  <div v-for="(tarea,index) of tareas" :key="index"> 
      {{index + 1}} .- {{tarea}}
  </div>

</div>
</template>

<script>
export default {
name:"Tarea",
data (){
    return{
        Nombre:"",
        tareas:[
            "español","matematicas","ingles","geografia"
        ]
    }
}
}
</script>

<style>

</style>