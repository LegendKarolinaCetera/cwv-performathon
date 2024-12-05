import type { Metadata } from 'next';

import Contact2 from '../src/components/widgets/Contact2';
import Features2 from '../src/components/widgets/Features2';
import Hero from '../src/components/widgets/Hero';
import { heroContact, contact2Contact, features2Contact } from '../src/shared/data/pages/contact.data';

export const metadata: Metadata = {
  title: 'Contact us',
};

const Page = () => {
  return (
    <>
      <Hero {...heroContact} />
      <Contact2 {...contact2Contact} />
      <Features2 {...features2Contact} />
    </>
  );
};

export default Page;
