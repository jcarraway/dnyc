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

const flightDeparture = new Date('June 20, 2019 03:24:00');

const Home: React.FC = () => {
  return (
    <Layout title="DNYC">
      <Countdown blastoff={flightDeparture} />
      <Day date={'Thursday'} events={thursdayEvents} />
      <Day date={'Friday'} events={fridayEvents} />
      <Day date={'Saturday'} events={saturdayEvents} />
      <Day date={'Sunday'} events={sundayEvents} />
      <Day date={'Monday'} events={mondayEvents} />
    </Layout>
  );
};

export default Home;
