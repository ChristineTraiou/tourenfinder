<script setup>
    import Artikel from './Artikel.vue'
    import Teaser from './Teaser.vue'
  
    // Design Variante 2
    const props = defineProps({
        v2: Boolean,
    })
  
    const artikelData = {
        title: 'Weitere Touren in der Umgebung',
        description: 'Mit einem wunderschönen Blick auf die umliegenden Weinberge, das liebliche Donautal und die Altstadt von Krems heißt das Team des Steigenberger Hotel & Spa Krems seine Gäste vom ersten Moment an herzlich Willkommen. Lassen Sie sich in gediegener Atmosphäre rundum verwöhnen.',
        link: 'https://example.com/touren',
        arialabel:'Zur vollständigen Übersicht aller Touren',
        linktitle:'zur vollständigen Tourenliste',
    }
</script>

<template>
    <Artikel 
        :class="props.v2 ? 'col-span-10 col-start-2 xl:col-end-8' : 'col-span-10 col-start-2 xl:col-span-4 xl:col-start-2'"
        v-bind="artikelData"
    />
    <Teaser 
        :class="props.v2 ? 'col-span-10 col-start-2 v2' : 'col-span-10 col-start-2 xl:col-span-5 xl:col-start-7'"
        :v2="props.v2" 
    /> 
</template>