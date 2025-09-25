<script setup>
  import { ref } from 'vue' 
  import Card from '@/components/Card.vue'
  import teaserPlatzhalter from '@/assets/img/Teaser-Platzhalter.jpg'
  
  // Design Variante V2
  const v2 = ref(false)

  const cards = [
    {
      id:1,
      v2: false,
      artikel: 
        {
          title: 'Touren in der Umgebung',
          description: 'Mit einem wunderschönen Blick auf die umliegenden Weinberge, das liebliche Donautal und die Altstadt von Krems heißt das Team des Steigenberger Hotel & Spa Krems seine Gäste vom ersten Moment an herzlich Willkommen. Lassen Sie sich in gediegener Atmosphäre rundum verwöhnen.',
          link: 'https://example.com/touren',
          ariaLabel: 'Zur vollständigen Übersicht aller Touren',
          linkTitle: 'zur vollständigen Tourenliste'
        },
      slides: [
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser 1',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            ariaLabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser 2',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            ariaLabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser 3',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            ariaLabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser 4',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            ariaLabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser 5',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            ariaLabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser 6',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            ariaLabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser 7',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            ariaLabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser 8',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            ariaLabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
      ]
    },
    {
      id:2,
      v2: true,
      artikel: 
        {
          title: 'Touren in der Umgebung 2',
          description: 'Mit einem wunderschönen Blick auf die umliegenden Weinberge, das liebliche Donautal und die Altstadt von Krems heißt das Team des Steigenberger Hotel & Spa Krems seine Gäste vom ersten Moment an herzlich Willkommen. Lassen Sie sich in gediegener Atmosphäre rundum verwöhnen.',
          link: 'https://example.com/touren',
          ariaLabel: 'Zur vollständigen Übersicht aller Touren',
          linkTitle: 'zur vollständigen Tourenliste'
        },
      slides: [
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser',
            title: 'Römerweg 651 durchs Melker Alpenvorland 2',
            link: 'https://example.com',
            ariaLabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            ariaLabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            ariaLabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            ariaLabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            ariaLabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            ariaLabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            ariaLabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
        {
            image: teaserPlatzhalter,
            alt: 'Platzhalter Bild für Teaser',
            title: 'Römerweg 651 durchs Melker Alpenvorland',
            link: 'https://example.com',
            ariaLabel: 'Mehr erfahren zu Römerweg 651 durchs Melker Alpenvorland',
        },
      ]
    }
  ]
</script>

<template>
  <main id="main">
    <div class="grid grid-cols-12 gap-y-[80px] py-[80px] lg:py-[100px]">
      <h1 class="col-start-2 col-end-12">Unsere Touren auf einen Blick</h1>
      <Card
        v-for="card in cards"
        :key="card.id"
        :v2="card.v2"
        :artikel="card.artikel"
        :slides="card.slides"
      />
    </div>
  </main>
</template>