export default defineAppConfig({
  ui: {
    // Eye-friendly color palette for ordering system
    primary: 'teal', // Warm blue-green, easy on eyes
    gray: 'slate', // Softer than pure gray
    
    // Component-specific styling overrides for better UX
    button: {
      defaultVariants: {
        color: 'neutral'
      },
      variants: {
        rounded: {
          lg: 'rounded-lg'
        }
      }
    },
    card: {
      slots: {
        root: 'rounded-xl shadow-sm bg-white dark:bg-gray-900 ring-1 ring-gray-200 dark:ring-gray-800',
        header: 'px-6 py-4',
        body: 'px-6 py-4',
        footer: 'px-6 py-4'
      }
    },
    input: {
      slots: {
        root: 'rounded-lg',
        base: 'placeholder-gray-400 dark:placeholder-gray-500'
      },
      variants: {
        size: {
          sm: 'text-sm px-3 py-2',
          md: 'text-sm px-4 py-2.5',
          lg: 'text-base px-4 py-3'
        }
      }
    },
    notification: {
      slots: {
        content: 'rounded-lg'
      }
    },
    modal: {
      slots: {
        content: 'rounded-xl'
      }
    }
  }
})