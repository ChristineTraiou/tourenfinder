<script setup>
    const props = defineProps({
        title: String,
        description: String,
        link: String,
        arialabel: String,
        linktitle: String,
    })
</script>

<template>
    <div class="artikel">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <a class="link-secondary" :href="link" :aria-label="arialabel">{{ linktitle }}</a>
    </div>
</template>