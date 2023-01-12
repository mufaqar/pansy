import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Homepage from './components/homepage';
import Portfolio from './components/portfolio';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <Homepage />
      <Portfolio />
      <Footer />
    </>
  );
}
