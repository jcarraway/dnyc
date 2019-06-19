export interface IPackingItem {
  id: number;
  item: string;
  isPacked: boolean;
}

export const packingItems: IPackingItem[] = [
  {
    id: 1,
    item: 'Sneakers (for walking around)',
    isPacked: false,
  },
  {
    id: 2,
    item: '1x fancy outfit',
    isPacked: false,
  },
  {
    id: 3,
    item: '1x (cool) school outfit',
    isPacked: false,
  },
  {
    id: 4,
    item: '3x casual outfits',
    isPacked: false,
  },
  {
    id: 5,
    item: 'Bathing suit (or shorts that can get wet)',
    isPacked: false,
  },
  {
    id: 6,
    item: 'Hat (baseball, bucket, etc.)',
    isPacked: false,
  },
  {
    id: 7,
    item: 'Light jacket',
    isPacked: false,
  },
  {
    id: 8,
    item: 'Rain shell',
    isPacked: false,
  },
  {
    id: 9,
    item: 'Toothbrush',
    isPacked: false,
  },
  {
    id: 10,
    item: 'Undies',
    isPacked: false,
  },
];
