import React from 'react';
import PageBanner from '../components/page-banner';
import Blog_Tabs from '../components/blog-tabs';

export default function Blog() {
  return (
    <main>
      <PageBanner
        title="Blog"
        content="We're always open to talk to good people"
        Custom_bg="bg-[url(/images/backgrounds/1.jpg)]" />
      <Blog_Tabs />
    </main>
  );
}
