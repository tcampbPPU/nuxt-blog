<template>
  <div class="w-full bg-zinc-100 dark:bg-black">
    <div class="flex flex-col min-h-screen max-w-5xl mx-auto px-4 divide-y divide-gray-300 dark:divide-gray-400 bg-zinc-50 dark:bg-zinc-900 border rounded-xl border-zinc-200 dark:border-zinc-800">
      <PrimaryHeader />

      <main class="flex-grow py-10">
        <slot />
      </main>

      <Footer />
    </div>
  </div>
</template>
