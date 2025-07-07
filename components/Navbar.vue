<template>
  <header class="fixed inset-x-0 top-0 z-50">
    <nav
      class="w-full bg-white px-3 py-3
             flex items-center justify-between            
             xl:grid xl:grid-cols-3 xl:items-center
             border-b-1 border-gray-700"      
    >
      <!-- BRAND -->
      <NuxtLink
        to="/"
        class="text-title text-gray-700 whitespace-nowrap"
      >
        DemoMedical
      </NuxtLink>

      <!-- MENU CENTRALE (desktop) -->
      <ul
        class="hidden xl:flex justify-center gap-12 text-desc text-gray-700"
      >
        <li><NuxtLink to="/chi-siamo"   class="hover:text-blue-500">Chi&nbsp;siamo</NuxtLink></li>
        <li><NuxtLink to="/trattamenti" class="hover:text-blue-500">Trattamenti</NuxtLink></li>
        <li><NuxtLink to="/servizi"     class="hover:text-blue-500">Servizi</NuxtLink></li>
        <li><NuxtLink to="/contatti"    class="hover:text-blue-500">Contatti</NuxtLink></li>
      </ul>

      <!-- CTA (desktop) -->
      <UButton
        to="/prenota"
        size="lg"
        rounded="full"
        class="hidden xl:inline-flex bg-blue-500 hover:bg-blue-600 text-white justify-self-end"
      >
        Appuntamento
      </UButton>

      <!-- BURGER (mobile) -->
      <button
        @click="menuOpen = true"
        class="xl:hidden text-3xl text-blue-600"
        aria-label="Apri menu"
      >
        <Icon name="mdi:menu" />
      </button>
    </nav>

    <!-- MENU MOBILE -->
    <ClientOnly>
      <BurgerMenu :visible="menuOpen" @close="menuOpen = false" />
    </ClientOnly>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BurgerMenu from '@/components/BurgerMenu.vue'
const menuOpen = ref(false)
</script>