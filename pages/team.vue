<template>
  <main id="team-page" class="bg-white text-gray-800">

    <!-- ▸ HERO ---------------------------------------------------------------- -->
    <section
      class="relative flex flex-col items-center justify-center text-center padding-px pt-30 pb-14 md:pt-50 md:pb-30
             bg-[url('/img/team/teamLanding.png')] bg-cover bg-center bg-no-repeat
             after:absolute after:inset-0 after:bg-black/40"
    >
      <div class="relative z-10 max-w-3xl space-y-6">
        <h1 class="text-xltitle text-white">Il Nostro Team</h1>
        <p class="text-desc text-blue-100">
          Medici estetici, dermatologi e professionisti dedicati al tuo benessere.
        </p>
        <UButton to="/contatti" size="xl" rounded="full"
          class="bg-blue-500 hover:bg-blue-600 text-white">
          Prenota una consulenza
        </UButton>
      </div>
    </section>

    <!-- ▸ “MISSION” ------------------------------------------------------------ -->
    <section class="padding-px padding-py grid gap-12 lg:grid-cols-2 lg:items-center">
      <div class="space-y-6">
        <h2 class="text-title">La nostra filosofia</h2>
        <p class="text-desc">
          Crediamo in una <strong>bellezza naturale e consapevole</strong>, che rispetti
          l’individualità di ogni persona. Per questo i nostri trattamenti sono
          <em>su misura</em>, frutto di un&rsquo;attenta valutazione medica e di un dialogo
          aperto con il paziente.
        </p>
        <p class="text-desc">
          <strong>Innovazione & sicurezza</strong> guidano il nostro lavoro quotidiano:
          tecnologie di ultima generazione, protocolli validati e prodotti certificati
          per risultati visibili e&nbsp;armoniosi.
        </p>
      </div>

      <NuxtImg
        src="/img/team/teamFilosofia.png"
        alt="Il nostro approccio"
        class="w-full rounded-lg shadow-lg object-cover h-72 lg:h-96"
      />
    </section>

    <!-- ▸ GRID MEDICI ----------------------------------------------------------- -->
    <section class="padding-px padding-py bg-blue-50">
      <h2 class="text-title text-center mb-8">I Professionisti di DemoMedical</h2>

      <div class="grid gap-10 sm:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto">
        <div
          v-for="doc in doctors"
          :key="doc.slug"
          class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
        >
          <!-- foto -->
          <NuxtImg
            :src="doc.photo"
            :alt="doc.name"
            class="h-64 w-full object-cover object-top"
          />
          <!-- testo -->
          <div class="flex-1 p-6 space-y-2">
            <h3 class="text-xl font-semibold flex flex-col">
              {{ doc.name }}
              <span class="text-sm font-normal text-blue-600 uppercase tracking-wide">
                {{ doc.role }}
              </span>
            </h3>
            <p class="text-desc text-sm leading-relaxed">
              {{ doc.bio }}
            </p>
                      <!-- CTA dottore (facoltativa) -->
          <UButton
            to="/prenota"
            size="md"
            rounded="none"
            class="bg-blue-500 hover:bg-blue-600 text-white w-full"
          >
            Prenota con {{ doc.short }}
          </UButton>
          </div>

        </div>
      </div>
    </section>

    <!-- ▸ CTA FINALE ------------------------------------------------------------ -->
    <section id="cta" class="padding-px padding-py text-center">
      <h2 class="text-title mb-6">
        Vuoi scoprire il trattamento più adatto a&nbsp;te?
      </h2>
      <UButton to="/contatti" size="xl" rounded="full"
        class="bg-blue-500 hover:bg-blue-600 text-white">
        Prenota una visita conoscitiva
      </UButton>
    </section>

  </main>
</template>

<script setup lang="ts">
interface Doctor {
  slug:  string
  name:  string
  short: string   // solo il cognome o “Dott.ssa Maria”
  role:  string
  photo: string
  bio:   string
}

const doctors: Doctor[] = [
  {
    slug:  'rossi',
    name:  'Dott. Luca Rossi',
    short: 'Rossi',
    role:  'Medico estetico',
    photo: '/img/team/dottore2.png',
    bio:   'Specializzato in filler e biorivitalizzazione, ama un risultato discreto e naturale.',
  },
  {
    slug:  'bianchi',
    name:  'Dott.ssa Sara Bianchi',
    short: 'Bianchi',
    role:  'Dermatologa',
    photo: '/img/team/dottore1.png',
    bio:   'Dermatologa certificata con focus su laser CO₂ e trattamenti acne-scar.',
  },
  {
    slug:  'verdi',
    name:  'Dott. Marco Verdi',
    short: 'Verdi',
    role:  'Chirurgo plastico',
    photo: '/img/team/dottore3.png',
    bio:   'Esperto in chir. mininvasiva; predilige tecniche soft-lifting e armonizzazione del profilo.',
  },
  // aggiungi altri profili se vuoi…
]
</script>

<!--  Niente <style scoped> perché usiamo Tailwind  -->