import React from 'react';
import Homepage from './components/homepage';
import Portfolio from './components/portfolio';
import Industries from './components/industries';
import Testimonial from './components/testimonial';
import Team from './components/team';
import Why_Choose_Us from './components/why-choose-us';
import Blog_Section from './components/blog-section';
import Contact_Section from './components/contact-section';
import Partners from './components/partners';
import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <main className='overflow-hidden'>
      <Homepage anim={isInView} view={ref} />
      <Portfolio anim={isInView} view={ref} />
      <Industries anim={isInView} view={ref} />
      <Testimonial anim={isInView} view={ref} />
      <Team anim={isInView} view={ref} />
      <Why_Choose_Us anim={isInView} view={ref} />
      <Blog_Section anim={isInView} view={ref} />
      <Contact_Section anim={isInView} view={ref} />
      <Partners anim={isInView} view={ref} />
    </main>
  );
}
