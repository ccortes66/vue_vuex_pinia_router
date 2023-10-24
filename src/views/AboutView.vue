<script setup>

 import { userCounterStore } from '../store/counter';

 const useCounter = userCounterStore()

</script>

<template>
  <div class="about">
     <h1> about Counter: {{ useCounter.count }}</h1>
     <p> duoble {{ useCounter.double }}</p>
     <button @click="useCounter.increment" class="btn btn-outline-success">increment</button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
