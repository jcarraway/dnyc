import React, { useState } from 'react';

import { IPackingItem, packingItems } from '../utils/packing-items';

interface Props {
  packingItem: IPackingItem;
}

export const Checkbox: React.FC<Props> = ({ packingItem }) => {
  const [isChecked, setIsChecked] = useState(packingItem.isPacked);
  const itemIndex = packingItems.findIndex(i => i.id === packingItem.id);
  const _onChange = () => {
    packingItems[itemIndex].isPacked = !packingItem.isPacked;
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <label>
        <input type="checkbox" checked={isChecked} onChange={_onChange} />
        <span>{packingItem.item}</span>
      </label>
    </div>
  );
};
