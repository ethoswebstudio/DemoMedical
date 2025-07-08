<template>
  <footer class="bg-neutral-900 text-gray-200 px-8 py-8">
    <!-- blocco info -->
    <div
      class="max-w-7xl mx-auto grid gap-5 md:grid-cols-3 mb-10
             text-center place-items-center md:place-items-center"
    >
      <div>
        <h1 class="text-title">DemoMedical</h1>
      </div>

      <div>
        <h3 class="font-bold text-subt mb-4 text-white">Contatti</h3>
        <p>Tel: 049&nbsp;1234567</p>
        <p>Email: info@demomedical.it</p>
      </div>

      <div>
        <h3 class="font-bold text-subt mb-4 text-white">Orari</h3>
        <p>Lun-Ven 09-19</p>
        <p>Sabato 09-13</p>
      </div>
    </div>

    <!-- copyright + social -->
    <div
      class="border-t border-white/10 py-4 grid gap-5 md:grid-cols-2
             text-xs text-gray-400 text-center place-items-center md:place-items-center"
    >
      <span>© {{ new Date().getFullYear() }} DemoMedical. Tutti i diritti riservati.</span>

      <div class="flex gap-4 text-2xl justify-center">
        <Icon name="mdi:instagram" class="hover:text-[var(--dm-primary)]" />
        <Icon name="mdi:facebook"  class="hover:text-[var(--dm-primary)]" />
      </div>
    </div>
  </footer>
</template>