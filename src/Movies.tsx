import * as React from 'react';
import axios from 'axios';

/**
 * when you select a number from the dropdown
 * you send a request to star wars api
 */
export function Movies() {
  const [number, setNumber] = React.useState(1);
  const [movie, setMovie] = React.useState('');
  React.useEffect(() => {
    async function getMovieInfo() {
      const response = await axios.get(`https://swapi.dev/api/films/${number}`);
      setMovie(response.data.title);
    }
    getMovieInfo();
  }, [number]);
  return (
    <div>
      <h4>{movie}</h4>
      <select value={number} onChange={(e) => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
}
