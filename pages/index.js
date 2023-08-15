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

export default function Home() {
  return (
    <main>
      <Homepage />
      <Portfolio />
      <Industries />
      <Testimonial />
      <Team />
      <Why_Choose_Us />
      <Blog_Section />
      <Contact_Section />
      <Partners />
    </main>
  );
}
