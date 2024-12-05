import { Metadata } from 'next';
import CallToAction from '../src/components/widgets/CallToAction';
import Content from '../src/components/widgets/Content';
import FAQs from '../src/components/widgets/FAQs';
import Features2 from '../src/components/widgets/Features2';
import Features4 from '../src/components/widgets/Features4';
import Hero from '../src/components/widgets/Hero';
import Testimonials from '../src/components/widgets/Testimonials';
import {
  callToActionServices,
  contentServicesOne,
  contentServicesTwo,
  faqsServices,
  features2Services,
  features4Services,
  heroServices,
  testimonialsServices,
} from '../src/shared/data/pages/services.data';

export const metadata: Metadata = {
  title: 'Services',
};

const Page = () => {
  return (
    <>
      <Hero {...heroServices} />
      <Features2 {...features2Services} />
      <Content {...contentServicesOne} />
      <Content {...contentServicesTwo} />
      <Features4 {...features4Services} />
      <Testimonials {...testimonialsServices} />
      <FAQs {...faqsServices} />
      <CallToAction {...callToActionServices} />
    </>
  );
};

export default Page;
