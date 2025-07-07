<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <nav
      class="w-full bg-white px-3 py-3
             flex items-center justify-between
             xl:grid xl:grid-cols-3 xl:items-center
             border-b border-gray-200"
    >
      <!-- BRAND ------------------------------------------------------ -->
      <NuxtLink to="/" class="text-title text-gray-700 whitespace-nowrap">
        DemoMedical
      </NuxtLink>

      <!-- MENU CENTRALE (desktop) ------------------------------------ -->
      <ul
        class="hidden xl:flex justify-center gap-12 text-desc text-gray-700"
      >
        <li><NuxtLink to="/chi-siamo"   class="hover:text-blue-500">Chi&nbsp;Siamo</NuxtLink></li>

        <!-- ▼▼▼  DROPDOWN  ▼▼▼ -->
        <li class="relative group">
          <span class="cursor-pointer flex items-center gap-1 hover:text-blue-700">
            Trattamenti <Icon name="mdi:chevron-down" />
          </span>

          <!-- menu a discesa -->
          <div
            class="absolute left-1/2 top-full z-50 hidden group-hover:block
                   w-[680px] -translate-x-1/2 pt-4"
          >
            <div class="bg-white shadow-xl rounded-xl p-6 grid grid-cols-3 gap-6">
              <div v-for="cat in categories" :key="cat.slug">
                <p class="font-semibold mb-2 text-gray-700">{{ cat.title }}</p>
                <ul class="space-y-1">
                  <li
                    v-for="t in byCat[cat.slug]"
                    :key="t.slug"
                  >
                    <NuxtLink
                      :to="`/treatments/${t.slug}`"
                      class="block text-sm text-gray-600 hover:text-blue-500"
                    >
                      {{ t.cardTitle ?? t.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        <!-- ▲▲▲  /DROPDOWN  ▲▲▲ -->

        <li><NuxtLink to="/servizi"     class="hover:text-blue-700">Servizi</NuxtLink></li>
        <li><NuxtLink to="/contatti"    class="hover:text-blue-700">Contatti</NuxtLink></li>
      </ul>

      <!-- CTA desktop ------------------------------------------------ -->
      <UButton
        to="/prenota"
        size="lg"
        rounded="full"
        class="hidden xl:inline-flex bg-blue-500 hover:bg-blue-700 text-white justify-self-end"
      >
        Appuntamento
      </UButton>

      <!-- BURGER mobile --------------------------------------------- -->
      <button
        @click="menuOpen = true"
        class="xl:hidden text-3xl text-blue-700"
        aria-label="Apri menu"
      >
        <Icon name="mdi:menu" />
      </button>
    </nav>

    <!-- DRAWER mobile -->
    <ClientOnly>
      <BurgerMenu
        :visible="menuOpen"
        :categories="categories"
        :byCat="byCat"
        @close="menuOpen = false"
      />
    </ClientOnly>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

/* ---------------- dati ------------------ */
import categories from '@/assets/data/services.json'

import viso        from '@/assets/data/treatments/viso.json'
import corpo       from '@/assets/data/treatments/corpo.json'
import nutrizione  from '@/assets/data/treatments/nutrizione.json'

const byCat: Record<string, any[]> = {
  viso, corpo, nutrizione
}

const menuOpen = ref(false)
</script>