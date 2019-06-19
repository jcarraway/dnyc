import React from 'react';

import { Layout } from '../components/Layout';
import { Countdown } from '../components/Countdown';
import { Day } from '../components/Day';
import {
  thursdayEvents,
  fridayEvents,
  saturdayEvents,
  sundayEvents,
  mondayEvents,
} from '../utils/events';

const flightDeparture = new Date(2019, 5, 20, 14, 39, 0);

const Home: React.FC = () => {
  console.log('FLIGHT', flightDeparture);
  return (
    <Layout>
      <Countdown blastoff={flightDeparture} />
      <a href="/packing-list">Packing List >></a>
      <Day date={'Thursday'} events={thursdayEvents} />
      <Day date={'Friday'} events={fridayEvents} />
      <Day date={'Saturday'} events={saturdayEvents} />
      <Day date={'Sunday'} events={sundayEvents} />
      <Day date={'Monday'} events={mondayEvents} />
    </Layout>
  );
};

export default Home;
