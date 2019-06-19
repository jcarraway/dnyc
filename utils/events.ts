export interface IEvent {
  title: string;
  titleLink?: string;
  titleText?: string;
  description?: string;
}

export const thursdayEvents: IEvent[] = [
  {
    title: 'Flight to NYC',
    titleLink:
      'https://www.flightstats.com/v2/flight-tracker/AA/4115?year=2019&month=06&date=20&flightId=1003992373',
    titleText: 'Flight tracker',
    description:
      "Leave GSO @ 2:39pm and arrive LGA @ 4:24pm. We'll pick you up!",
  },
  {
    title: 'Dinner @ 8:30pm',
    titleLink: 'https://fogodechao.com/location/new-york/',
    titleText: 'Fogo de Chao',
    description: 'Dress nicely and bring an empty stomach',
  },
];
export const fridayEvents = [
  {
    title: 'Tour @ 1:00pm',
    titleLink: 'https://www.nps.gov/sahi/index.htm',
    titleText: 'Sagamore Hills',
    description: "Don't forget your walking shoes",
  },
  {
    title: 'Dinner @',
    titleLink: '/dinner-options',
    titleText: 'Dinner Options',
    description:
      'Take your pick or find something on your own. The city is your oyster',
  },
];
export const saturdayEvents = [
  {
    title: 'Meditation @ 11:00am',
    titleLink: 'https://www.mndflmeditation.com/',
    titleText: 'Mndfl',
    description: 'Wear comfy clothes that can get wet',
  },
  {
    title: 'Brunch @ 11:30',
    titleLink: '/brunch-options',
    titleText: 'Brunch Options',
    description: 'Classic NYC Saturday',
  },
  {
    title: 'Kayaking on the Hudson River',
    description: 'You will get a locker for your shoes and phone',
  },
];
export const sundayEvents = [
  {
    title: 'Art browsing @ ?',
    titleLink: 'https://www.metmuseum.org/',
    titleText: 'The Met',
    description: 'Art! History!',
  },
  {
    title: 'Lunch @ ?',
    titleLink: 'https://www.neuegalerie.org/cafes/sabarsky',
    titleText: 'Cafe Sabarsky',
    description: 'Dress smart and prepare for chocolate',
  },
];
export const mondayEvents = [
  {
    title: 'Creative Careers @ 12:30 - 4:30pm',
    titleLink: 'http://www.fitnyc.edu/precollege/classes/events.php',
    titleText: 'FIT (Fashion Institute of Technology)',
    description: 'How to become a fashion designer',
  },
  {
    title: 'Flight Home',
    titleLink: '/',
    titleText: 'Flight tracker (will be posted two days before your flight)',
    description:
      "Leave LGA @ 6:59pm and arrive GSO @ X:XXpm. We'll drop you off!",
  },
];
