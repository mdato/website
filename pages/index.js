import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import Slider from '../components/Slider'
import { SliderData } from '../components/SliderData';
import Instagram from '../components/Instagram';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bodie :: Creative Web Development Agency :: Marcelo Dato :: Full Stack Developer </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Bodie' message='Creative web development agency' />
      <Slider slides={SliderData} />
      <Instagram />
    </div>
  )
}
