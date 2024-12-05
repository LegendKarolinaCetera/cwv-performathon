import type { Metadata } from 'next';

import CallToAction from '../src/components/widgets/CallToAction';
import FAQs4 from '../src/components/widgets/FAQs4';
import { heroFaqs, callToActionFaqs, faqs4Faqs } from '../src/shared/data/pages/faqs.data';
import Hero from '../src/components/widgets/Hero';

export const metadata: Metadata = {
  title: 'FAQs',
};

const Page = () => {
  return (
    <>
      <Hero {...heroFaqs} />
      <FAQs4 {...faqs4Faqs} />
      <CallToAction {...callToActionFaqs} />
    </>
  );
};

export default Page;
