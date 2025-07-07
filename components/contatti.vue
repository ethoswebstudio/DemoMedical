<template>
    <main class="padding-px padding-py">
        <h1 class="text-title mb-6">Contatti</h1>
        <p class="text-desc mb-8">Per qualsiasi informazione o richiesta, compila il modulo qui sotto.</p>
    
        <UForm
        action="/api/contatti"
        method="POST"
        class="max-w-3xl mx-auto space-y-6"
        >
        <UInput
            name="name"
            label="Nome e Cognome"
            type="text"
            required
            placeholder="Mario Rossi"
        />
        <UInput
            name="email"
            label="Email"
            type="email"
            required
            placeholder="mario.rossi@example.com"
        />
        <UInput
            name="message"
            label="Messaggio"
            type="textarea"
            required
            placeholder="Scrivi qui il tuo messaggio..."
        />
        <UButton type="submit" class="btn-main">Invia</UButton>
        </UForm>
    </main>
</template>