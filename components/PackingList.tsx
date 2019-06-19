import React from 'react';
import { IPackingItem, packingItems } from '../utils/packing-items';
import { Checkbox } from './Checkbox';

interface Props {
  packingItems: IPackingItem[];
}

export const PackingList: React.FC<Props> = () => {
  return (
    <div>
      {packingItems.map(i => (
        <Checkbox key={`${i.item}-${i.id}`} packingItem={i} />
      ))}
    </div>
  );
};
