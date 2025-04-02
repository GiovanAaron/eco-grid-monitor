// src/services/api.js
import {DateTime} from 'luxon';


const queryFormat = () => {

    // as of creation, the query results in settlement period of first and last object in array, equal
    const now = DateTime.now();

    // round down to the nearest 30-minute interval
    const roundedTime = now.startOf('hour').plus({ minutes: 30 * Math.floor(now.minute / 30) });

    // subtract 24.5 hours from the rounded time
    const timeMinus24_5Hours = roundedTime.minus({ hours: 24, minutes: 30 });

    // Format the times to the required format (ISO 8601 with percent-encoded colons)
    const formatTimeForQuery = (time) => {
        return time.toUTC().toISO().replace(/:/g, '%3A');  // replacing colons with %3A to match the required format
    };

    return {
        start_time: formatTimeForQuery(timeMinus24_5Hours),
        end_time: formatTimeForQuery(roundedTime)
    };
};

queryFormat();





export const fetchEnergyData = async () => {
    const response = await fetch(`https://data.elexon.co.uk/bmrs/api/v1/generation/outturn/summary?startTime=${queryFormat().start_time}&endTime=${queryFormat().end_time}`);
    if (!response.ok) {
      throw new Error('Error fetching user data');
    }
   
    const data = await response.json();

    return data;
  };
  

  export default fetchEnergyData;