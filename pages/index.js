import Homepage from './components/homepage';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import Industries from './components/industries';
import Testimonial from './components/testimonial';
import Team from './components/team';

export default function Home() {
  return (
    <main>
      <Homepage />
      <Portfolio />
      <Industries />
      <Testimonial />
      <Team />
      <Footer />
    </main>
  );
}
