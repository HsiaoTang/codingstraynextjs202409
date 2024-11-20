// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'

const UIProvider = ({ children }: { children: React.ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default UIProvider;