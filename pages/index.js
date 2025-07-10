import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Sobre from '../components/Sobre';
import Novelas from '../components/Novelas';
import Blog from '../components/Blog';
import Newsletter from '../components/Newsletter';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Héctor Mare - Autor</title>
        <meta name="description" content="Página oficial del autor Héctor Mare" />
      </Head>
      <main className="bg-gray-900 text-gray-100 min-h-screen font-sans">
        <Header />
        <Hero />
        <Sobre />
        <Novelas />
        <Blog />
        <Newsletter />
        <Contacto />
        <Footer />
      </main>
    </>
  );
}