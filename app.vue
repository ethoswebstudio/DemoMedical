<template>
  <UApp>
    <Navbar /> 
        <Transition name="zoom-fade" mode="out-in">         
    <NuxtPage />   
        </Transition>
    <Footer />
  </UApp>
</template>

<style>
.page-enter-active,
.page-leave-active { transition: opacity 0.25s, filter 0.25s; }

.page-enter-from,
.page-leave-to     { opacity: 0; filter: blur(1rem); }
</style>