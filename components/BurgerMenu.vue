<template>
  <transition name="slide">
    <aside v-if="visible" class="fixed inset-0 z-50 flex">
      <!-- overlay -->
      <button class="absolute inset-0 bg-black/40" @click="$emit('close')" aria-label="Chiudi" />

      <!-- drawer -->
      <nav
        class="relative ml-auto h-full w-4/5 max-w-xs flex flex-col gap-8
               bg-white shadow-2xl px-6 py-6 overflow-y-auto"
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

        <!-- link principali -->
        <ul class="flex flex-col gap-10 text-desc text-gray-700">
          <li><NuxtLink to="/chi-siamo"   @click="$emit('close')">Chi&nbsp;Siamo</NuxtLink></li>

          <!-- NODO TRATTAMENTI con accordion ------------------------ -->
          <li>
            <details class="group">
              <summary class="flex justify-between items-center cursor-pointer select-none">
                Trattamenti
                <Icon name="mdi:chevron-down" class="transition group-open:rotate-180" />
              </summary>

              <!-- macro-categorie -->
              <div class="pl-4 mt-5 space-y-5 ">
                <details
                  v-for="cat in categories"
                  :key="cat.slug"
                  class="group"
                >
                  <summary class="flex justify-between items-center cursor-pointer select-none">
                    {{ cat.title }}
                    <Icon name="mdi:chevron-right" class="transition group-open:rotate-90" />
                  </summary>

                  <!-- trattamenti della categoria -->
                  <ul class="pl-4 mt-2 space-y-3 text-md">
                    <li
                      v-for="t in byCat[cat.slug]"
                      :key="t.slug"
                    >
                      <NuxtLink
                        :to="`/treatments/${t.slug}`"
                        @click="$emit('close')"
                        class="block hover:text-blue-500"
                      >
                        {{ t.cardTitle ?? t.title }}
                      </NuxtLink>
                    </li>
                  </ul>
                </details>
              </div>
            </details>
          </li>
          <!-- ------------------------------------------------------- -->

          <li><NuxtLink to="/servizi"  @click="$emit('close')">Servizi</NuxtLink></li>
          <li><NuxtLink to="/contatti" @click="$emit('close')">Contatti</NuxtLink></li>
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
interface Cat { slug:string; title:string }
defineProps<{
  visible: boolean
  categories: Cat[]
  byCat: Record<string, any[]>
}>()
defineEmits<{ (e:'close'): void }>()
</script>

<style scoped>
.slide-enter-from,
.slide-leave-to   { transform: translateX(100%); opacity: 0; }
.slide-enter-active,
.slide-leave-active { transition: all .35s cubic-bezier(.22,1,.36,1); }
</style>