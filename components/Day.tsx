import React from 'react';

import { Event } from './Event';
import { IEvent } from '../utils/events';

interface Props {
  date: string;
  events: IEvent[];
}

export const Day: React.FC<Props> = ({ date, events }) => {
  return (
    <div>
      <h2>{date}</h2>
      {events.map(e => {
        return (
          <ul key={`${e.title}-${e.description}`}>
            <Event event={e} />
          </ul>
        );
      })}
    </div>
  );
};
