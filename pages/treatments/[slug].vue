<template>
  <main>
    <!-- Sezione 1 – Hero/Landing -->
    <section
      class="padding-px padding-landing flex flex-col lg:flex-row items-center
             bg-cover bg-center relative text-white"
      :style="{ backgroundImage: `url(${t.heroImg})` }"
    >
         <!-- overlay per migliorare il contrasto -->
      <div class="absolute inset-0 bg-black/10 lg:bg-gradient-to-r from-black/40 via-black/10 to-transparent"></div>
      <div class="relative z-10 space-y-6 max-w-xl">
        <h1 class="text-megat">{{ t.title }}</h1>
        <p class="text-desc">{{ t.heroSubtitle }}</p>
        <UButton to="/prenota" class="w-auto xl:w-full text-btn self-start bg-blue-500 text-white hover:bg-blue-600 border-2 border-white rounded-3xl">
          Prenota un appuntamento</UButton>
      </div>
    </section>

    <!-- Sezione 2 – descrizione -->
    <section class="padding-px padding-py bg-blue-200">
      <h2 class="text-title text-black mb-6">{{ t.heroSubtitle ?? 'Approfondimento' }}</h2>
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
            <span class="text-subt">{{ f.q }}</span>
            <Icon :name="open===i?'mdi:minus':'mdi:plus'" class="text-title" />
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
import viso       from '@/assets/data/treatments/viso.json'
import corpo      from '@/assets/data/treatments/corpo.json'
import nutrizione from '@/assets/data/treatments/nutrizione.json'

const all = [...viso, ...corpo, ...nutrizione]   // merge
const { slug } = useRoute().params
const t = all.find((el:any) => el.slug === slug)
if (!t) { throw createError({ statusCode: 404 }) }

const open = ref(0)      // faq accordion
</script>