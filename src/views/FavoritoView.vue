<script setup>
  import { useFavoritoStore } from '@/store/favorito'
  import { storeToRefs } from 'pinia';
  import { RouterLink } from 'vue-router';

  const useFavorito = useFavoritoStore()
  const {favoritos} = storeToRefs(useFavorito)
  const {removePokemmon} = useFavorito

</script>

<template>
    <h1>Favoritos</h1>
    <div v-if="favoritos.length === 0 " class="alert alert-info"> lista vacia </div>
    <ul class="list-group">
        
        <li v-for="favorito in favoritos" 
            :key="favorito.id" class="list-group-item"> 

         <img :src="favorito.sprites?.front_default" alt="">   
         <span class="me-4 text-capitalize">{{ favorito.name }}</span>
         <button class="btn btn-sm btn-outline-danger me-2" @click="removePokemmon(favorito.id)"> Eliminar  </button>
         <router-link class="btn btn-sm btn-outline-info"  :to="`/pokemon/${favorito.name}`"> ver info </router-link>

       </li>
    </ul>
</template>