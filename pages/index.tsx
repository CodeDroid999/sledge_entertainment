import Head from 'next/head'
import Layout from '../components/layout'
import HeroArea from '../components/home/hero-section'
import Navbar from '../components/layout/navbar'
import AboutSection from '../components/home/about-section'

export default function Index() {
  return (
      <Layout>
        <HeroArea />
        <AboutSection />
      </Layout>
  )
}