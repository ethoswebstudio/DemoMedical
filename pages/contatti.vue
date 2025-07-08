<template>
  <main class="padding-px padding-py bg-white text-gray-800">
    <!-- Heading -->
    <header class="text-center mb-16">
      <h1 class="text-title">Contatti</h1>
      <p class="text-desc max-w-2xl mx-auto">
        Il piacere di saperne di più senza obblighi né impegni
      </p>
    </header>

    <!-- Wrapper -->
    <div
      class="grid gap-12 lg:grid-cols-2 lg:gap-20
             border border-gray-300 rounded-xl p-8 lg:p-12"
    >
      <!-- ▸ FORM ---------------------------------------------------- -->
      <form class="flex flex-col gap-6" @submit.prevent>
        <h2 class="text-lg font-semibold text-gray-700">
          Compila il form per richiedere informazioni o prenotare un appuntamento!
        </h2>

        <!-- Nome -->
        <input
          type="text"
          placeholder="Nome & Cognome"
          class="w-full border border-gray-400 rounded-md px-4 py-2
                 placeholder:text-gray-400 focus:outline-none focus:ring-2
                 focus:ring-blue-500 focus:border-blue-500"
        />

        <!-- Email + Telefono -->
        <div class="flex flex-col sm:flex-row gap-6">
          <input
            type="email"
            placeholder="Email"
            class="w-full border border-gray-400 rounded-md px-4 py-2
                   placeholder:text-gray-400 focus:outline-none focus:ring-2
                   focus:ring-blue-500 focus:border-blue-500"
          />
          <input
            type="tel"
            placeholder="Telefono"
            class="w-full border border-gray-400 rounded-md px-4 py-2
                   placeholder:text-gray-400 focus:outline-none focus:ring-2
                   focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <!-- Trattamento -->
        <select
          class="w-full border border-gray-400 rounded-md px-4 py-2
                 placeholder:text-gray-400 focus:outline-none focus:ring-2
                 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Seleziona un trattamento</option>
          <option v-for="t in treatments" :key="t.slug">
            {{ t.title ?? t.title }}
          </option>
        </select>

        <!-- Messaggio -->
        <textarea
          rows="4"
          placeholder="Messaggio"
          class="w-full border border-gray-400 rounded-md px-4 py-2
                 placeholder:text-gray-400 focus:outline-none focus:ring-2
                 focus:ring-blue-500 focus:border-blue-500 h-32 resize-none"
        ></textarea>

        <!-- Privacy -->
        <label class="flex items-start gap-2 text-sm">
          <input type="checkbox" class="mt-1 rounded border-gray-300" />
          <span>
            <span class="underline">Leggi l’informativa privacy</span>. Inviando i
            tuoi dati acconsenti al relativo trattamento.
          </span>
        </label>

        <!-- CTA -->
        <UButton
          type="submit"
          rounded="full"
          class="w-36 bg-blue-600 hover:bg-blue-700 text-white"
        >
          Invia
        </UButton>

        <p class="text-xs text-gray-500">
          Questo è un form <strong>demo</strong>: i dati inviati non saranno recapitati.
        </p>
      </form>

<!-- ▸ CONTATTI ------------------------------------------------ -->
<address
  class="bg-black text-white rounded-lg p-8 space-y-8 not-italic"
>
  <div>
    <h3 class="uppercase text-sm tracking-wide text-blue-200 mb-1 font-semibold">
      Telefono
    </h3>
    <p>+39&nbsp;327&nbsp;362&nbsp;6638</p>
  </div>

  <div>
    <h3 class="uppercase text-sm tracking-wide text-blue-200 mb-1 font-semibold">
      Mail
    </h3>
    <p>info@demomedical.it</p>
  </div>

  <div>
    <h3 class="uppercase text-sm tracking-wide text-blue-200 mb-1 font-semibold">
      Indirizzo
    </h3>
    <p>Via Cesare Battisti&nbsp;3, 35121&nbsp;Padova</p>
  </div>
  <!-- ▼ MAPPA --------------------------------------------------- -->
<div class="mt-8 rounded-lg overflow-hidden shadow-lg">
  <iframe
    title="DemoMedical – Dove siamo"
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.082891332618!2d11.878370276846068!3d45.31702054599192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f5a5fd405f4ed%3A0x68b4f4b32aa4b6d3!2sPrato%20della%20Valle%2C%20Padova!5e0!3m2!1sit!2sit!4v1719920000000!5m2!1sit!2sit"
    class="w-full h-64 sm:h-80 lg:h-96 border-0"
  ></iframe>
</div>
</address>


    </div>
  </main>
</template>

<script setup lang="ts">
import viso        from '@/assets/data/treatments/viso.json'
import corpo       from '@/assets/data/treatments/corpo.json'
import nutrizione  from '@/assets/data/treatments/nutrizione.json'

const treatments = [...viso, ...corpo, ...nutrizione]
</script>