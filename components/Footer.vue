<template>
 <footer class="bg-neutral-900 text-gray-200">
    <div class="max-w-7xl mx-auto section-px py-12 grid gap-10 md:grid-cols-3">
      <div>
        <h3 class="font-bold text-xl mb-4 text-white">Contatti</h3>
        <p>Tel: 049&nbsp;1234567</p>
        <p>Email: info@demomedical.it</p>
      </div>
      <div>
        <h3 class="font-bold text-xl mb-4 text-white">Orari</h3>
        <p>Lun-Ven 09-19</p>
        <p>Sabato 09-13</p>
      </div>
      <div>
        <h3 class="font-bold text-xl mb-4 text-white">Social</h3>
        <div class="flex gap-4 text-2xl">
          <Icon name="mdi:instagram" class="hover:text-[var(--dm-primary)]" />
          <Icon name="mdi:facebook"  class="hover:text-[var(--dm-primary)]" />
        </div>
      </div>
    </div>
    <div class="border-t border-white/10 text-center py-4 text-xs text-gray-400">
      © {{ new Date().getFullYear() }} DemoMedical. Tutti i diritti riservati.
    </div>
  </footer>
</template>