<script setup lang="ts">
import { container } from '#build/ui';

</script>

<template>
  <main id="homepage" class="relative bg-white">

    <!-- =============================================================== -->
    <!-- Landing                                                         -->
    <!-- =============================================================== -->
    <section id="landing" class="relative flex flex-col lg:flex-row gap-8 padding-px pt-20 pb-64 xl:pt-40 xl:pb-40
     bg-[url('public/img/landingMob.png')] bg-cover bg-center bg-no-repeat
     xl:bg-[url('public/img/landing.png')]">

      <div class="relative flex-1 flex flex-col">
        <p class="text-subt text-gray-500">Benvenuti in</p>
        <h1 class="text-megat text-gray-700">Demo</h1>
        <h1 class="text-megat text-gray-700 mb-4 ">Medical</h1>
        <UButton
          to="/AreeTrattamento"
          size="xl"
          class="w-auto xl:w-full text-center self-start bg-blue-500 text-white hover:bg-blue-600 border-2 border-white rounded-3xl"
        >
          Scopri i trattamenti
        </UButton>

        <UButton
          url="/prenota"
          size="xl"
          class="mt-4 w-auto xl:w-full text-center self-start bg-white hover:bg-blue-600 border-2 border-blue-500 rounded-3xl"
        >
          Prenota un appuntamento
        </UButton>
      </div>
      <div class="flex-1 relative">

      </div>
    </section>

    <!-- =============================================================== -->
    <!-- Aree di trattamento                                             -->
    <!-- =============================================================== -->
    <section id="AreeTrattamento" class="padding-px padding-py bg-white">
      <h2 class="text-title mb-5 text-gray-700">Aree di trattamento</h2>
      <ServiceCarousel />
    </section>

    <!-- =============================================================== -->
    <!-- Chi siamo                                                       -->
    <!-- =============================================================== -->
    <section id="chi-siamo" class="text-gray-700 bg-blue-100">
      <div class="padding-px padding-py">
        <h2 class="text-title mb-6">DemoMedical – Bellezza in Equilibrio</h2>
        <p class="text-desc mb-8">
          Nel cuore di Padova, DemoMedical è il tuo spazio dedicato alla medicina estetica.
          Trattamenti personalizzati, tecnologie avanzate e un approccio naturale per aiutarti a ritrovare equilibrio e
          benessere.
        </p>
        <img src="public/img/TreatCarousel/botox.png" alt="Chi siamo" class="xl:h-92 xl:w-full rounded-xl shadow-xl">
      </div>

      <div class="xl:flex">
        <div class="flex-1">
          <div class="bg-white px-4 py-10 xl:px-10 xl:py-10">
            <p class="text-title mb-3">La Nostra Filosofia</p>
            <p class="text-desc">
              Crediamo in una bellezza autentica, che rispetti e valorizzi ciò che sei. Ogni
              trattamento è pensato per armonizzare il viso e il corpo, senza eccessi, con delicatezza e precisione.
            </p>
          </div>

          <div class="bg-blue-200 px-4 py-10 xl:px-10 xl:py-10">
            <p class="text-title mb-3">Il Nostro Team</p>
            <p class="text-desc mb-6">
              Il nostro team di esperti è composto da medici specializzati in medicina estetica,
              pronti a guidarti nella scelta dei trattamenti più adatti alle tue esigenze.
            </p>

            <UButton url="/chi-siamo" size="xl" rounded="md" class="w-full bg-blue-500 text-white hover:bg-blue-600 text-btn">
              Il nostro team
            </UButton>
          </div>
        </div>

        <div class="flex-1 relative">
          <NuxtImg src="/img/TreatCarousel/botox.png" alt="Chi siamo" class="
            w-full object-cover
            h-64 sm:h-80
            xl:absolute xl:inset-0 xl:h-full"/>
        </div>
      </div>
    </section>

  </main>
</template>