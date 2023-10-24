<script setup>

  import { RouterLink } from 'vue-router'
  import { useGetData } from '@/composable/getData';


  const {data, getData, loading, myError} = useGetData()
  
  /*
  const getPokemones = async () => {
    try 
    {  const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')  
       pokemones.value = data.results
    } catch (error) { console.error(error)}
  }

  getPokemones()
  */
  getData('https://pokeapi.co/api/v2/pokemon')

</script>

<template>
    <section>
        <h1>Pokemon name</h1>
        <p v-if="loading"> cargando... </p>
        <div v-if="myError" class="alert alert-danger">{{ myError }}</div>
        <div v-if="data">
          
          <ul class="list-group">
            <li class="list-group-item" v-for="pokemon in data.results" :key="pokemon.name"> 
              <router-link :to="`/pokemon/${pokemon.name}`"> {{ pokemon.name }}  </router-link>
            </li>
          </ul>

          <button @click="getData(data.previous)" class="btn btn-outline-success me-2 my-2" :disabled="!data.previous">Prev</button>
          <button @click="getData(data.next)" class="btn btn-outline-info" :disabled="!data.next">Next</button>

        </div>
      
        
    </section>
</template>


