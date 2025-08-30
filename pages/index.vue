<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <UCard>
        <div class="text-center">
          <div class="mx-auto flex justify-center mb-4">
            <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
              <UIcon name="i-heroicons-check" class="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 class="text-2xl font-bold text-gray-900 mb-2">
            Welcome to Ordering System
          </h1>
          <p class="text-gray-600 mb-6">
            You have successfully logged in!
          </p>
          <UButton
            color="blue"
            variant="solid"
            size="lg"
            @click="navigateTo('/auth/login')"
          >
            Go to Login Page
          </UButton>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup>
// Set page title and meta
useHead({
  title: 'Home - Ordering System',
  meta: [
    { name: 'description', content: 'Welcome to the ordering system' }
  ]
})
</script>