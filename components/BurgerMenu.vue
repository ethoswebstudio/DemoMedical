<template>
  <transition name="slide">
    <aside v-if="visible" class="fixed inset-0 z-50 flex">
      <!-- sfondo oscurante -->
      <button class="absolute inset-0 bg-black/40" @click="$emit('close')" aria-label="Chiudi" />

      <!-- pannello -->
      <nav
        class="relative ml-auto flex h-full w-4/5 max-w-xs flex-col gap-10
               bg-white shadow-2xl px-6 py-3"
      >
        <!-- header -->
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="text-title text-gray-700" @click="$emit('close')">
            DemoMedical
          </NuxtLink>

          <button @click="$emit('close')" class="text-3xl text-blue-600" aria-label="Chiudi">
            <Icon name="mdi:close" />
          </button>
        </div>

        <!-- link -->
        <ul class="flex flex-col gap-6 font-medium">
          <li><NuxtLink to="/chi-siamo"   @click="$emit('close')" class="drawer-link">Chi siamo</NuxtLink></li>
          <li><NuxtLink to="/trattamenti" @click="$emit('close')" class="drawer-link">Trattamenti</NuxtLink></li>
          <li><NuxtLink to="/servizi"     @click="$emit('close')" class="drawer-link">Servizi</NuxtLink></li>
          <li><NuxtLink to="/contatti"    @click="$emit('close')" class="drawer-link">Contatti</NuxtLink></li>
        </ul>

        <!-- CTA -->
        <UButton
          to="/prenota"
          size="lg"
          rounded="full"
          class="mt-auto w-full bg-blue-500 hover:bg-blue-600 text-white"
          @click="$emit('close')"
        >
          Appuntamento
        </UButton>
      </nav>
    </aside>
  </transition>
</template>

<script setup lang="ts">
defineProps<{ visible: boolean }>()
defineEmits<{ (e: 'close'): void }>()
</script>

<style scoped>
/* slide in/out */
.slide-enter-from,
.slide-leave-to   { transform: translateX(100%); opacity: 0; }
.slide-enter-active,
.slide-leave-active { transition: all .35s cubic-bezier(.22,1,.36,1); }
</style>