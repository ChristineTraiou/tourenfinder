<script setup>
  import { ref } from 'vue' 
  import Card from './components/Card.vue'

  // Design Variante V2
  const v2 = ref(false)
  const toggleV2 = () => {
    v2.value = !v2.value
  }
</script>

<template>
  <main id="main">
    <div class="grid grid-cols-12 gap-y-[30px] py-[80px] lg:py-[100px]">
      <h1 class="col-span-10 col-start-2">Unsere Touren auf einen Blick</h1>
      <Card :v2="v2" :key="v2" />
      <div class="col-span-10 col-start-2">
        <h2>Design Variante {{ v2 ? '2' : '1' }}</h2>
        <button class="link-secondary" @click="toggleV2">Design Variante ändern</button> 
      </div>
    </div>
  </main>
</template>
