<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900">
    <NuxtRouteAnnouncer />
    
    <!-- Header -->
    <header class="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center space-x-3">
            <UIcon name="i-heroicons-shopping-bag" class="h-8 w-8 text-teal-600" />
            <h1 class="text-xl font-bold text-gray-900 dark:text-white">
              OrderSystem UI
            </h1>
          </div>
          <div class="flex items-center space-x-4">
            <UButton color="teal" variant="outline" size="sm">
              Sign In
            </UButton>
            <UButton color="teal" size="sm">
              Order Now
            </UButton>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Modern Ordering System
        </h2>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Built with Nuxt 3 and Nuxt UI for an exceptional, eye-friendly user experience. 
          Featuring modern design patterns and accessibility-first approach.
        </p>
      </div>

      <!-- Feature Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <UCard class="hover:shadow-md transition-shadow">
          <template #header>
            <div class="flex items-center space-x-3">
              <UIcon name="i-heroicons-eye" class="h-6 w-6 text-teal-500" />
              <h3 class="font-semibold text-gray-900 dark:text-white">Eye-Friendly Design</h3>
            </div>
          </template>
          <p class="text-gray-600 dark:text-gray-300">
            Carefully chosen color palette with optimal contrast ratios to reduce eye strain during extended use.
          </p>
        </UCard>

        <UCard class="hover:shadow-md transition-shadow">
          <template #header>
            <div class="flex items-center space-x-3">
              <UIcon name="i-heroicons-device-phone-mobile" class="h-6 w-6 text-amber-500" />
              <h3 class="font-semibold text-gray-900 dark:text-white">Mobile-First</h3>
            </div>
          </template>
          <p class="text-gray-600 dark:text-gray-300">
            Responsive design optimized for tablets and mobile devices, perfect for restaurant environments.
          </p>
        </UCard>

        <UCard class="hover:shadow-md transition-shadow">
          <template #header>
            <div class="flex items-center space-x-3">
              <UIcon name="i-heroicons-bolt" class="h-6 w-6 text-green-500" />
              <h3 class="font-semibold text-gray-900 dark:text-white">High Performance</h3>
            </div>
          </template>
          <p class="text-gray-600 dark:text-gray-300">
            Built with Nuxt 3 for optimal performance, SEO, and developer experience.
          </p>
        </UCard>
      </div>

      <!-- Demo Components Section -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          UI Components Demo
        </h3>
        
        <!-- Button Examples -->
        <div class="mb-8">
          <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Buttons</h4>
          <div class="flex flex-wrap gap-3">
            <UButton color="teal">Primary Action</UButton>
            <UButton color="teal" variant="outline">Secondary Action</UButton>
            <UButton color="amber">Order Now</UButton>
            <UButton color="green" variant="soft">Success</UButton>
            <UButton color="red" variant="ghost">Remove</UButton>
          </div>
        </div>

        <!-- Form Examples -->
        <div class="mb-8">
          <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Form Elements</h4>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
            <UInput placeholder="Customer name" />
            <UInput placeholder="Phone number" type="tel" />
            <USelect 
              :options="[
                { label: 'Dine In', value: 'dine-in' },
                { label: 'Takeaway', value: 'takeaway' },
                { label: 'Delivery', value: 'delivery' }
              ]" 
              placeholder="Order type"
            />
            <UTextarea placeholder="Special instructions" />
          </div>
        </div>

        <!-- Notification Example -->
        <div class="mb-8">
          <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">Notifications</h4>
          <div class="space-y-3 max-w-md">
            <UAlert 
              color="green" 
              variant="subtle" 
              title="Order confirmed!" 
              description="Your order #1234 has been placed successfully."
            />
            <UAlert 
              color="amber" 
              variant="subtle" 
              title="Kitchen delay" 
              description="Estimated wait time: 5 minutes longer than usual."
            />
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="text-center text-gray-600 dark:text-gray-400">
          <p>&copy; 2024 OrderSystem UI. Built with ❤️ using Nuxt 3 and Nuxt UI.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Set page title and meta
useHead({
  title: 'Modern Ordering System UI',
  meta: [
    { name: 'description', content: 'A modern, eye-friendly ordering system built with Nuxt 3 and Nuxt UI' }
  ]
})
</script>
