import Head from 'next/head'
import Layout from '../components/layout'
import HeroArea from '../components/home/hero-section'

export default function Index() {
  return (
      <Layout>
        <HeroArea />
      </Layout>
  )
}