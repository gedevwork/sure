import {
  challenge1,
  challenge10,
  challenge2,
  challenge3,
  challenge4,
  challenge5,
  challenge6,
  challenge7,
  challenge8,
  challenge9,
  welcome,
} from './markdown';

const instructions = [
  {
    title: 'Getting started',
    label: welcome,
  },
  {
    title: '1. Update NavBar link behavior',
    label: challenge1,
  },
  {
    title: '2. Add a unit test',
    label: challenge2,
  },
  {
    title: '3. Add another unit test',
    label: challenge3,
  },
  {
    title: '4. Update the footer position',
    label: challenge4,
  },
  {
    title: '5. Integrate with the backend API',
    label: challenge5,
  },
  {
    title: '6. Render the results of the first GET request',
    label: challenge6,
  },
  {
    title: '7. Add a feature to create a policyholder',
    label: challenge7,
  },
  {
    title: '8. Render the results of the second API request',
    label: challenge8,
  },
  {
    title: "9. List remaining to-do's before release",
    label: challenge9,
  },
  {
    title: '10. Update the Cypress test',
    label: challenge10,
  },
];

export default instructions;
