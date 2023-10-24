<script setup>
import { useRouter } from 'vue-router';

  const router = useRouter() 
  const back = () => router.push("/")

</script>

<template>
    <h1>404 NOT FOUND</h1>
    <button class="btn btn-primary" @click="back"> volver</button>
</template>