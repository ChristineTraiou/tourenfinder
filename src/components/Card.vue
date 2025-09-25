<script setup>
    import Artikel from './Artikel.vue'
    import Teaser from './Teaser.vue'

    const props = defineProps({
        v2: {
            type: Boolean,
            default: false
        },
        artikel: { 
            type: Object,
            required: true,
            default: () => ({
                title: '',
                description: '',
                link: '#',
                ariaLabel: '',
                linkTitle: ''
            })
        },
        slides: {
            type: Array,
            default: () => [
                {
                    image: '',
                    alt: '',
                    text: '',
                    link: '#',
                    ariaLabel: ''
                }
            ]
        }
    })
</script>

<template>
    <section class="grid grid-cols-10 col-start-2 col-end-12 gap-y-[30px]">
        <div class="col-span-10">
            <h2 class="blue">Design Variante {{ v2 ? '2' : '1' }}</h2>
        </div>
        <Artikel 
            :class="
                v2 
                ? 'col-span-10 xl:col-span-6' 
                : 'col-span-10 xl:col-span-4'"
            :artikel="artikel"
        />
        <Teaser 
            :class="
                v2 
                ? 'col-span-10 xl:col-span-10 v2' 
                : 'col-span-10 xl:col-start-6 xl:col-span-5'"
            :slides="slides"
            :v2="v2" 
        /> 
    </section>
</template>