# Copilot Instructions for Ordering System UI

## Project Overview
This is a modern ordering system user interface built with **Nuxt 3** and **Nuxt UI**. The system is designed to provide an intuitive, accessible, and eye-friendly experience for restaurant/food ordering workflows.

## Technology Stack
- **Framework**: Nuxt 3 (Vue.js meta-framework)
- **UI Library**: Nuxt UI (built on Tailwind CSS and Headless UI)
- **Styling**: Tailwind CSS with custom theme configuration
- **Package Manager**: npm (package-lock.json present)
- **Development**: TypeScript, ESLint

## Design System Guidelines

### Color Palette (Eye-Friendly)
- **Primary**: Warm blue-green tones (good contrast, reduces eye strain)
- **Secondary**: Soft orange/amber for accents and CTAs
- **Background**: Warm neutral grays instead of pure white
- **Text**: Dark grays instead of pure black for better readability
- **Success**: Soft green for confirmations
- **Warning**: Warm amber for alerts
- **Error**: Muted red for error states

### Typography
- Use system fonts for performance
- Maintain proper contrast ratios (WCAG AA compliance)
- Use appropriate font weights and sizes for hierarchy

### Component Patterns
- Prefer Nuxt UI components for consistency
- Use composables for reactive state management
- Follow Vue 3 Composition API patterns
- Implement proper accessibility attributes

## File Structure
```
/
├── app.vue                 # Main app entry point
├── app.config.ts          # Nuxt UI theme configuration
├── nuxt.config.ts         # Nuxt configuration
├── components/            # Reusable Vue components
├── pages/                 # File-based routing
├── layouts/               # App layouts
├── composables/           # Vue composables
├── assets/                # Static assets
├── public/                # Public static files
└── server/                # Server-side code
```

## Development Guidelines

### Component Development
- Use TypeScript for all components
- Follow Vue 3 Composition API with `<script setup>`
- Use Nuxt UI components as building blocks
- Implement proper props validation and default values
- Add JSDoc comments for complex logic

### State Management
- Use `useState()` for global state
- Use `useLocalStorage()` for persistent client state
- Use `useFetch()` and `$fetch()` for API calls
- Implement proper error handling

### Ordering System Specific Features
- **Menu Management**: Categories, items, pricing, availability
- **Cart Functionality**: Add/remove items, quantity management, totals
- **Order Flow**: Cart → Customer details → Payment → Confirmation
- **Admin Features**: Menu updates, order management, analytics
- **Responsive Design**: Mobile-first approach for tablet/phone ordering

### Accessibility Requirements
- Maintain WCAG 2.1 AA compliance
- Use semantic HTML elements
- Implement proper keyboard navigation
- Add ARIA labels for screen readers
- Ensure sufficient color contrast
- Test with screen readers

### Performance Guidelines
- Use lazy loading for large components
- Implement proper image optimization with `<NuxtImg>`
- Use `<ClientOnly>` for client-side only features
- Optimize bundle size with tree-shaking
- Implement proper caching strategies

## Code Style
- Use 2-space indentation
- Follow ESLint configuration
- Use meaningful variable and function names
- Write clean, self-documenting code
- Add comments for business logic

## Common Patterns

### Page Layout
```vue
<template>
  <div>
    <AppHeader />
    <main class="container mx-auto px-4 py-8">
      <!-- Page content -->
    </main>
    <AppFooter />
  </div>
</template>
```

### Component Structure
```vue
<script setup lang="ts">
interface Props {
  // Define props with proper types
}

const props = withDefaults(defineProps<Props>(), {
  // Default values
})

// Composables and reactive state
const { data, pending, error } = await useFetch('/api/endpoint')
</script>

<template>
  <!-- Template with Nuxt UI components -->
</template>
```

### API Integration
- Use `/server/api/` directory for API routes
- Implement proper error handling and validation
- Use TypeScript for API types and interfaces
- Follow RESTful conventions

## Testing
- Write unit tests for complex business logic
- Test accessibility features
- Test responsive design across devices
- Validate form inputs and error states

## Deployment
- Build optimized for production with `npm run build`
- Environment-specific configuration in `.env` files
- Proper error pages and loading states
- SEO optimization with proper meta tags

When working on this project, prioritize user experience, accessibility, and maintainable code. Always consider the ordering system context and ensure features work seamlessly across different device types and user scenarios.