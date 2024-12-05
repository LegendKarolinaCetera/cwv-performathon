import type { Metadata } from 'next';

import Hero from '../src/components/widgets/Hero';
import Pricing from '../src/components/widgets/Pricing';
import Comparison from '../src/components/widgets/Comparison';
import FAQs3 from '../src/components/widgets/FAQs3';
import { heroPricing, comparisonPricing, faqs3Pricing, pricingPricing } from '../src/shared/data/pages/pricing.data';

export const metadata: Metadata = {
  title: 'Pricing',
};

const Page = () => {
  return (
    <>
      <Hero {...heroPricing} />
      <Pricing {...pricingPricing} />
      <Comparison {...comparisonPricing} />
      <FAQs3 {...faqs3Pricing} />
    </>
  );
};

export default Page;
