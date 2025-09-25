<script setup>
    const props = defineProps({
        artikel: {
            type: Object,
            required: true,
            validator: (value) => {
                return (
                    typeof value.title === 'string' &&
                    typeof value.description === 'string' &&
                    (typeof value.link === 'string' || value.link === undefined) &&
                    typeof value.ariaLabel === 'string' &&
                    typeof value.linkTitle === 'string'
                )
            }
        }
    })
</script>

<template>
    <article class="artikel">
        <h3>{{ artikel.title }}</h3>
        <p>{{ artikel.description }}</p>
        <a 
            class="link-secondary" 
            :href="artikel.link" 
            :aria-label="artikel.ariaLabel"
        >
            {{ artikel.linkTitle }}
        </a>
    </article>
</template>