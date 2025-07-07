<template>
  <main>
    <!-- Sezione 1 – Hero/Landing -->
    <section
      class="relative padding-px padding-py grid gap-10 lg:grid-cols-2 lg:items-center text-white"
      :style="{
        backgroundImage: `url(${t.heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }"
    >
      <!-- overlay per migliorare il contrasto -->
      <div class="absolute inset-0 bg-black/40 lg:bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
      <!-- contenuto -->
      <div class="relative z-10 space-y-6 order-2 lg:order-1">
        <h1 class="text-title">{{ t.title }}</h1>
        <p class="text-desc">{{ t.heroSubtitle }}</p>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <UButton to="/contatti" class="text-btn">Richiedi info</UButton>
          <UButton variant="ghost" to="/contatti?app={{ t.slug }}" class="text-btn border">
            Richiedi appuntamento
          </UButton>
        </div>
      </div>
      <div class="order-1 lg:order-2"></div>
    </section>

    <!-- Sezione 2 – descrizione -->
    <section class="padding-px padding-py bg-blue-200">
      <h2 class="text-title text-black mb-6">{{ t.introTitle ?? 'Approfondimento' }}</h2>
      <p class="text-desc text-black whitespace-pre-line">{{ t.intro }}</p>
    </section>

    <!-- Sezione 3 – FAQ -->
    <section class="padding-px padding-py bg-blue-50">
      <h2 class="text-title text-black mb-8">Domande frequenti</h2>

      <div class="divide-y divide-slate-200 text-black">
        <div v-for="(f,i) in t.faq" :key="i">
          <button
            class="w-full flex justify-between items-center py-4 text-left"
            @click="open = open === i ? -1 : i"
          >
            <span class="font-medium">{{ f.q }}</span>
            <Icon :name="open===i?'mdi:minus':'mdi:plus'" class="text-xl" />
          </button>
            <p v-if="open === i" class="pb-4 text-desc whitespace-pre-line">
              {{ f.a }}
            </p>
        </div>
      </div>
    </section>

    <!-- Sezione 4 – Call-to-Action -->
    <section id="cta" class="padding-px padding-py text-center">
      <h2 class="text-title mb-6">Prenota la tua consulenza</h2>
      <UButton to="/contatti" class="text-btn">Contattaci</UButton>
    </section>
  </main>
</template>

<style scoped>
.fade-enter-from,.fade-leave-to{opacity:0;max-height:0}
.fade-enter-active,.fade-leave-active{transition:all .25s ease}
</style>

<script setup lang="ts">
import data from '@/assets/data/treatments.json'   // o queryContent('treatments')
const { slug } = useRoute().params
const t = data.find((el:any) => el.slug === slug)
if (!t) { throw createError({ statusCode: 404 }) }

// stato per FAQ (una aperta alla volta)
const open = ref(0)
</script>