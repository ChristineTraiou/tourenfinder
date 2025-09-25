<script setup>
    import { onMounted, computed } from 'vue'
    import { Splide, SplideSlide } from '@splidejs/vue-splide'

    const props = defineProps({
        v2: {
            type: Boolean,
            default: false
        },
        slides: {
            type: Array,
            validator: (value) => {
                return value.every(
                    slide =>
                        typeof slide.image === 'string' &&
                        typeof slide.alt === 'string' &&
                        typeof slide.title === 'string' &&
                        (typeof slide.link === 'string' || slide.link === undefined) &&
                        typeof slide.ariaLabel === 'string'
                )
            }
        }
    });
 
    const options = computed(() => ({
        type: 'slide',
        perPage: props.v2 ? 4 : 2,
        perMove: 1,
        gap: '1.875rem',
        arrows: true,
        pagination: true,
        breakpoints: {
            1280: { 
                perPage: 2 
            },
            640: { 
                perPage: 1, 
                fixedWidth: '90%' 
            }
        }
    })) 

    onMounted(() => {
        document.querySelectorAll('.splide').forEach(splide => {
            const nextEl = splide.nextElementSibling
            if (nextEl && nextEl.classList.contains('splide-controls-wrapper')) return

            const arrows = splide.querySelector('.splide__arrows')
            const pagination = splide.querySelector('.splide__pagination')

            if (arrows && pagination) {
                const controlsWrapper = document.createElement('div')
                controlsWrapper.classList.add(
                    'splide-controls-wrapper',
                    'col-span-10',
                    'flex',
                    'justify-center',
                    'items-center',
                    'flex-wrap'
                )
                controlsWrapper.appendChild(pagination)
                controlsWrapper.appendChild(arrows)
                splide.parentElement.insertBefore(controlsWrapper, splide.nextSibling)
            }
        })
    });
</script>

<template>
    <Splide class="teaser" aria-label="Touren Teaser" :key="v2" :options="options">
        <SplideSlide v-for="(slide, index) in slides" :key="index">
            <article class="teaser-box">
                <img :src="slide.image" :alt="slide.alt" loading="lazy"/>
                <h4>{{ slide.title }}</h4>
                <a class="link-primary" :href="slide.link" :aria-label="slide.ariaLabel">mehr erfahren</a>
            </article>
        </SplideSlide>
    </Splide>
</template>