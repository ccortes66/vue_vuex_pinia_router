<script setup>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand" >
        <img src="@/assets/logo.svg" 
             alt="Logo" 
             width="30" 
             height="24" 
             class="d-inline-block align-text-top">
         PokeApi
      </router-link>
      <div>
       <router-link class="btn btn-outline-primary me-2" to="/">home</router-link>
       <router-link class="btn btn-outline-primary me-2" to="/pokemon">pokemon</router-link>
       <router-link class="btn btn-outline-primary me-2" to="/about">about</router-link>
       <router-link class="btn btn-outline-primary" to="/favoritos">favoritos</router-link>
     </div>
    </div> 
  
   </nav> 

  <section class="container text-center">
     <RouterView />
  </section>

</template>

