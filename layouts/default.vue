<template>
  <div class="w-full dark:bg-zinc-900">
    <div class="flex flex-col min-h-screen max-w-3xl mx-auto px-4 divide-y divide-gray-300 dark:divide-gray-400">
      <div class="pt-6 pb-4 text-center">
        <PrimaryNavigation />
      </div>

      <main class="flex-grow py-10">
        <slot />
      </main>

      <Footer />
    </div>
  </div>
</template>
