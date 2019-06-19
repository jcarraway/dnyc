import React from 'react';

import { IEvent } from '../utils/events';

interface Props {
  event: IEvent;
}

export const Event: React.FC<Props> = ({ event }) => {
  const { title, titleLink, titleText, description } = event;
  return (
    <li>
      <h4>
        {title} {titleLink && <a href={titleLink}>{titleText}</a>}
      </h4>
      {!!description && <p>{description}</p>}
    </li>
  );
};
