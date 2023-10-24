<script setup>
  import { useRoute,useRouter } from 'vue-router'
  import { useGetData } from '../composable/getData'
  import { useFavoritoStore } from '@/store/favorito'

  
  const route = useRoute()
  const router = useRouter()
  const useFavorito = useFavoritoStore()

  const {data,getData,loading,myError } = useGetData()
  const back =  () => router.push('/pokemon')
  const pokemonName = route.params.name
  const { addPokemmon, isExistPokemmon } = useFavorito
  


  /*
  onBeforeMount(async() =>{
    try 
    {
      const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
      pokemoData.value = data
      validate.value = true
    } 
    catch (error) 
    { console.error(error)
      validate.value = false
    }
  })
  */
  getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`)
</script>


<template>
   
   <p v-if="loading"> cargando... </p>
   <div v-if="myError" class="alert alert-danger"> no existe pokemon </div>
   <div v-if="data">
      <img :src="data.sprites?.front_default" alt="">
       <h1> Pokemon name: {{ pokemonName }}  </h1>
       <button :disabled="isExistPokemmon(pokemonName)" class="btn btn-success mb-2" @click="addPokemmon(data)">Agregar  {{ pokemonName }} a favoritos</button>
   </div> 
   <button class="btn btn-primary" @click="back"> volver atras </button>
  
</template>