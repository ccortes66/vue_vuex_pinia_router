<script setup>
 import { userCounterStore } from '../store/counter';
 import { storeToRefs } from 'pinia';
 
 const useCounter = userCounterStore()
 const {count,double} = storeToRefs(useCounter)
 const {increment} = useCounter
 
</script>

<template>
  <h1> Home Counter: {{ count }}</h1>
   <p> duoble {{ double }}</p>
  <button @click="increment" class="btn btn-outline-success">increment</button>
</template>
