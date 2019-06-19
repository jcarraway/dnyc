import React from 'react';

import { Layout } from '../components/Layout';
import { packingItems } from '../utils/packing-items';
import { PackingList } from '../components/PackingList';

interface Props {}

const PackingPage: React.FC<Props> = () => {
  return (
    <Layout>
      <a href="/">{'<< Go back'}</a>
      <h1>Packing List</h1>
      <PackingList packingItems={packingItems} />
    </Layout>
  );
};

export default PackingPage;
