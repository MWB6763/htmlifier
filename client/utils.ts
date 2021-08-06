import { createElement as e, ReactNode } from './lib/react.ts'

export const link = (href: string, text: string) => e('a', { href }, text)

export const label = (...children: ReactNode[]) => e('label', null, children)

export const blockLabel = (...children: ReactNode[]) =>
  e('p', null, e('label', null, children))