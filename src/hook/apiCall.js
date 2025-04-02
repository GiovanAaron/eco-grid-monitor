// src/services/api.js
import {DateTime} from 'luxon';


const queryFormat = () => {
    const nowBST = DateTime.now().setZone('Europe/London');

    // Round down to the nearest half hour
    const roundedTime = nowBST.startOf('hour').plus({ minutes: 30 * Math.floor(nowBST.minute / 30) });

    // Subtract 90 minutes from the rounded time
    const adjustedTime = roundedTime.minus({ minutes: 90 });

    const bstDate = adjustedTime.toJSDate();

    console.log('Rounded down time (nearest half hour) and pushed back 90 minutes:', adjustedTime.toISO());
    console.log('Adjusted time as Date object:', bstDate);
};

queryFormat();






export const fetchEnergyData = async () => {
    const response = await fetch(`https://data.elexon.co.uk/bmrs/api/v1/generation/outturn/summary`);
    if (!response.ok) {
      throw new Error('Error fetching user data');
    }
   
    const data = await response.json();

    return data;
  };
  

  export default fetchEnergyData;