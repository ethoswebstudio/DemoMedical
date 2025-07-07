<template>
  <UCarousel
    :items="cards"
    :autoplay="true"
    :autoplay-interval="3000"
    class="max-w-6xl mx-auto"
    :ui="{
      item: 'x-3 basis-[70%] md:basis-[30%] item-center',
    }"
  >
    <template #default="{ item }">
        <div class="group relative h-96 md:h-[30rem] rounded-lg overflow-hidden shadow-lg">

        <!-- immagine -->
        <img
            :src="item.img"
            alt=""
            class="absolute inset-0 w-full h-full object-cover
                transition-transform duration-500
                md:group-hover:scale-110"
        />

        <!-- GRADIENTE parte alta (sempre visibile) -->
        <div
            class="absolute inset-x-0 top-0 h-1/5
                bg-gradient-to-b from-black/50 to-transparent
                pointer-events-none"
        />

        <!-- overlay leggero su hover -->
        <div
            class="absolute inset-0 bg-transparent
                group-hover:bg-black/20 transition pointer-events-none"
        />

        <!-- titolo -->
        <h3 class="absolute top-4 left-4 text-title font-semibold text-white drop-shadow">
            {{ item.title }}
        </h3>

        <!-- bottone -->
        <UButton
            :to="item.link"
            class="text-btn text-black bg-white border-2 border-blue-500 rounded-2xl py-1.5 px-4 absolute bottom-4 right-4"
        >
            Scopri di più
        </UButton>
        </div>
    </template>
  </UCarousel>
</template>

<script setup lang="ts">
interface Raw  { slug:string; title?:string; cardTitle?:string;
                heroImg?:string; cardImg?:string; cardBtn?:string }
interface Card { title:string; img:string; link:string; btn:string }

/* 1. importa tutti i JSON e uniscili */
import viso       from '@/assets/data/treatments/viso.json'
import corpo      from '@/assets/data/treatments/corpo.json'
import nutrizione from '@/assets/data/treatments/nutrizione.json'

const all: Raw[] = [...viso, ...corpo, ...nutrizione]

/* 2. se il genitore passa `items`, usiamo quelli; altrimenti usiamo `all` */
const props = defineProps<{ items?: Raw[] }>()
const source = props.items ?? all   // fallback

/* 3. normalizza verso il formato Card */
const cards: Card[] = source.map(t => ({
  title: t.cardTitle ?? t.title ?? 'Trattamento',
  img:   t.cardImg   ?? t.heroImg ?? '/img/placeholder.jpg',
  link:  `/treatments/${t.slug}`,
  btn:   t.cardBtn   ?? 'Scopri di più'
}))
</script>