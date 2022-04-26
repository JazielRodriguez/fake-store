import { ReactNode } from 'react'
export interface Product {
  id: number
  title: string
  image: string
  description: string
}
export interface Children {
  children: ReactNode
}
