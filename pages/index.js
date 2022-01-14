import Head from 'next/head'
import Image from 'next/image'
import AboutUs from '../components/AboutUs'
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import HowItWork from '../components/HowItWork'
import NavBarSection from '../components/NavBarSection'
import TopSection from '../components/TopSection'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <TopSection />
      <NavBarSection />
      <HeroSection />
      <HowItWork />
      <AboutUs />
      <ContactUs />
      <Footer />
    </>
  )
}
