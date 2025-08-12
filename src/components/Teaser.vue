<script setup>
    import { ref, onMounted, computed } from 'vue'
    import { Splide, SplideSlide } from '@splidejs/vue-splide'
    import teaserPlatzhalter from '@/assets/img/Teaser-Platzhalter.jpg'
    
    // Design Variante 2
    const props = defineProps({
        v2: Boolean,
    });

    const slides = ref([
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser 1',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            arialabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser 2',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            arialabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser 3',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            arialabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser 4',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            arialabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser 5',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            arialabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser 6',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            arialabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser 7',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            arialabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser 8',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            arialabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
    ])
    
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
                    'col-start-2',
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
            <div class="teaser-box">
                <img :src="slide.image" :alt="slide.alt" loading="lazy"/>
                <h3>{{ slide.title }}</h3>
                <a class="link-primary" :href="slide.link" :aria-label="slide.arialabel">mehr erfahren</a>
            </div>
        </SplideSlide>
    </Splide>
</template>