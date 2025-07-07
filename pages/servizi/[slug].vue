<script setup lang="ts">
import services from '@/assets/data/services.json'
import treatments from '@/assets/data/treatments.json'

const { slug } = useRoute().params as { slug: string }
const s:any = services.find(e => e.slug === slug)
if (!s) { throw createError({ statusCode: 404 }) }

const related = treatments
  .filter((t: any) => t.category === slug)
  .map((t: any) => ({
    ...t,
    img: t.cardImg,
    link: `/treatments/${t.slug}`
  }))
useSeoMeta({ title: s.title })
</script>

<template>
  <main>
    <!-- HERO -->
    <section
      class="padding-px padding-landing flex flex-col lg:flex-row items-center
             bg-cover bg-center relative text-white"
      :style="{ backgroundImage: `url(${s.heroImg})` }"
    >
      <div class="absolute inset-0 bg-black/40 lg:hidden" />
      <div class="relative z-10 space-y-6 max-w-xl">
        <h1 class="text-megat">{{ s.title }}</h1>
        <p class="text-desc">{{ s.heroSubtitle }}</p>
        <UButton to="/prenota" size="lg" rounded="full" class="bg-blue-500">Prenota ora</UButton>
      </div>
    </section>

    <!-- Intro -->
    <section class="section-px section-py max-w-3xl mx-auto">
      <h2 class="text-title mb-6">{{ s.introTitle }}</h2>
      <p class="text-desc whitespace-pre-line">{{ s.intro }}</p>
    </section>

    <!-- Carousel trattamenti legati -->
    <section class="section-px section-py bg-blue-50">
      <h2 class="text-title text-center mb-6">Trattamenti per il {{ s.slug }}</h2>
      <TreatmentCarousel :items="related" />
    </section>
  </main>
</template>