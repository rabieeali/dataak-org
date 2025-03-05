import rtlPlugin from 'stylis-plugin-rtl'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'
import { ReactNode } from 'react'

const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
})

interface Props {
  children: ReactNode
}

export function RTLProvider({ children }: Props) {
  return <CacheProvider value={cacheRtl}>{children}</CacheProvider>
}
