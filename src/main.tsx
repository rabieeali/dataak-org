import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/index.css'
import { RTLProvider } from '@/theme/RTLProvider.tsx'
import { ThemeProvider } from '@/theme/ThemeProvider.tsx'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/config/tanstack-query.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<p>loading ...</p>}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <RTLProvider>
            <App />
          </RTLProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Suspense>
  </StrictMode>
)
