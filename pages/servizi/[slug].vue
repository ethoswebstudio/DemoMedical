<script setup lang="ts">
import services from '@/assets/data/services.json'
const { slug } = useRoute().params as { slug: string }   // es. "viso"

const s:any = services.find(e => e.slug === slug)
if (!s) { throw createError({ statusCode: 404 }) }

/* ① import dinamico del file JSON corrispondente */
let related = []
try {
  related = (await import(`~/assets/data/treatments/${slug}.json`)).default
} catch (e) {
  console.warn('Nessun JSON per', slug)
}

useSeoMeta({ title: s.title })
</script>

<template>
  <main>
    <!-- Sezione 1 – Hero/Landing -->
    <section
      class="padding-px padding-landing flex flex-col lg:flex-row items-center
             bg-cover bg-center relative text-white"
      :style="{ backgroundImage: `url(${s.heroImg})` }"
    >
      <div class="absolute inset-0 bg-black/10 lg:bg-gradient-to-r from-black/40 via-black/10 to-transparent"></div>
      <div class="relative z-10 space-y-6 max-w-xl">
        <h1 class="text-megat">{{ s.title }}</h1>
        <p class="text-desc">{{ s.heroSubtitle }}</p>
        <UButton to="/prenota" class="w-auto xl:w-full text-btn self-start bg-blue-500 text-white hover:bg-blue-600 border-2 border-white rounded-3xl">
          Prenota un appuntamento</UButton>
      </div>
    </section>

    <!-- Sezione 2 – descrizione -->
    <section class="padding-px padding-py bg-blue-200 text-gray-700">
      <h2 class="text-title mb-6">{{ s.introTitle }}</h2>
      <p class="text-desc whitespace-pre-line">{{ s.intro }}</p>
    </section>

    <!-- Carousel trattamenti legati -->
    <section class="padding-px padding-py bg-blue-50 text-gray-700">
      <h2 class="text-title mb-6">Trattamenti per il {{ s.slug }}</h2>
      <TreatmentCarousel :items="related" />
    </section>
  </main>
</template>