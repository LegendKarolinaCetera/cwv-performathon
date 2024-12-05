import type { Metadata } from 'next';
import Contact from '../../../src/components/widgets/Contact';

import FAQs from '../../../src/components/widgets/FAQs';
import Features from '../../../src/components/widgets/Features';
import Features3 from '../../../src/components/widgets/Features3';
import Features4 from '../../../src/components/widgets/Features4';
import Hero2 from '../../../src/components/widgets/Hero2';
import Stats from '../../../src/components/widgets/Stats';
import Steps from '../../../src/components/widgets/Steps';
import Team2 from '../../../src/components/widgets/Team2';
import Testimonials2 from '../../../src/components/widgets/Testimonials2';
import {
  contactAbout,
  faqsAbout,
  featuresFourAbout,
  featuresFourAboutTwo,
  features3About,
  hero2About,
  statsAbout,
  stepsAbout,
  testimonials2About,
  featuresAbout,
  teamAbout,
} from '../../../src/shared/data/pages/about.data';

export const metadata: Metadata = {
  title: `About us`,
};

const Page = () => {
  return (
    <>
      <Hero2 {...hero2About} />
      <Stats {...statsAbout} />
      <Features4 {...featuresFourAbout} />
      <Features4 {...featuresFourAboutTwo} />
      <Steps {...stepsAbout} />
      <Features3 {...features3About} />
      <Features {...featuresAbout} />
      <Team2 {...teamAbout} />
      <Testimonials2 {...testimonials2About} />
      <FAQs {...faqsAbout} />
      <Contact {...contactAbout} />
    </>
  );
};

export default Page;
