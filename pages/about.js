import React from 'react';
import Header from './components/header';
import PageBanner from './components/page-banner';
import TabsRender from './components/tabs';

export default function About() {
  return (
    <main>
      <Header />
      <PageBanner
        title="The Story Of Us"
        content="Toi is a full-sevice web design and mobile agency based in San Fransisco, Los Angeles, Austin and Beunos Aires. We take pride in what we do, believe in our work, and are motivated by the success of our clients."
        Custom_bg="bg-[url(/images/backgrounds/3.jpg)]" />
        <TabsRender />
    </main>
  );
}