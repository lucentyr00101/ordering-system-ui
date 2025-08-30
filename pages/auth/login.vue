<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <div class="mx-auto flex justify-center">
          <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <div class="w-8 h-8 text-white">🔒</div>
          </div>
        </div>
        <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Welcome back! Please enter your credentials
        </p>
      </div>

      <UCard class="shadow-2xl">
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div class="space-y-4">
            <div class="space-y-2">
              <ULabel for="email">Email address</ULabel>
              <UInput
                id="email"
                v-model="loginForm.email"
                type="email"
                placeholder="Enter your email"
                size="lg"
                :disabled="loading"
                required
              />
            </div>

            <div class="space-y-2">
              <ULabel for="password">Password</ULabel>
              <UInput
                id="password"
                v-model="loginForm.password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Enter your password"
                size="lg"
                :disabled="loading"
                required
              >
                <template #trailing>
                  <UButton
                    variant="ghost"
                    color="gray"
                    size="sm"
                    :disabled="loading"
                    @click="showPassword = !showPassword"
                  >
                    {{ showPassword ? '👁️' : '👁️‍🗨️' }}
                  </UButton>
                </template>
              </UInput>
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-2">
              <UCheckbox
                id="remember"
                v-model="loginForm.rememberMe"
              />
              <ULabel for="remember">Remember me</ULabel>
            </div>
            <UButton variant="link" color="blue" size="sm" :disabled="loading">
              Forgot password?
            </UButton>
          </div>

          <UButton
            type="submit"
            color="blue"
            variant="solid"
            size="lg"
            block
            :loading="loading"
            :disabled="!isFormValid"
          >
            Sign in
          </UButton>
        </form>

        <div class="relative my-6">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-300" />
          </div>
          <div class="relative flex justify-center text-sm">
            <span class="px-2 bg-white text-gray-500">OR</span>
          </div>
        </div>

        <div class="space-y-3">
          <UButton
            variant="outline"
            color="gray"
            size="lg"
            block
            :disabled="loading"
          >
            <span class="mr-2">🔍</span>
            Continue with Google
          </UButton>
          
          <UButton
            variant="outline"
            color="gray"
            size="lg"
            block
            :disabled="loading"
          >
            <span class="mr-2">🐙</span>
            Continue with GitHub
          </UButton>
        </div>

        <div class="mt-6 text-center">
          <p class="text-sm text-gray-600">
            Don't have an account?
            <UButton variant="link" color="blue" size="sm" :disabled="loading">
              Sign up here
            </UButton>
          </p>
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
})

// Reactive data
const loginForm = reactive({
  email: '',
  password: '',
  rememberMe: false
})

const loading = ref(false)
const showPassword = ref(false)

// Computed properties
const isFormValid = computed(() => {
  return loginForm.email.trim() !== '' && 
         loginForm.password.trim() !== '' && 
         /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginForm.email)
})

// Methods
const handleLogin = async () => {
  if (!isFormValid.value) return

  loading.value = true

  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Here you would typically make an API call to authenticate
    console.log('Login attempt:', {
      email: loginForm.email,
      rememberMe: loginForm.rememberMe
    })

    // Show success notification
    const toast = useToast()
    toast.add({
      title: 'Login Successful',
      description: 'Welcome back!',
      color: 'green'
    })

    // Redirect to dashboard or home page
    await navigateTo('/')
    
  } catch (error) {
    console.error('Login error:', error)
    
    // Show error notification
    const toast = useToast()
    toast.add({
      title: 'Login Failed',
      description: 'Invalid credentials. Please try again.',
      color: 'red'
    })
  } finally {
    loading.value = false
  }
}

// Set page title and meta
useHead({
  title: 'Login - Ordering System',
  meta: [
    { name: 'description', content: 'Sign in to your ordering system account' }
  ]
})
</script>

<style scoped>
/* Add any custom styles if needed */
</style>