export default defineAppConfig({
  ui: {
    strategy: 'merge',
    primary: 'blue',
    gray: 'slate',
    colors: ['blue', 'slate', 'green', 'red'],
    button: {
      default: {
        size: 'lg',
        loadingIcon: 'i-heroicons-arrow-path-20-solid'
      }
    },
    input: {
      default: {
        size: 'lg'
      }
    },
    card: {
      shadow: 'shadow-xl',
      rounded: 'rounded-xl'
    }
  }
})