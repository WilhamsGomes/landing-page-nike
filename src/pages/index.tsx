import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { Container } from '@/styles/pages'
import ContentBot from '@/components/ContentBot'
import Galery from '@/components/Galery'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Container>
      <ContentBot/>
      <Galery/>
    </Container>
  )
}
