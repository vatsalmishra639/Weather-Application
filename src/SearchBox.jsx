import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import './SearchBox.css';

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "1a1372d17b3a681494a0294de2fd9d13";

  const getWeatherInfo = async (cityName) => {
    const resp = await fetch(`${API_URL}?q=${encodeURIComponent(cityName)}&units=metric&appid=${API_KEY}`);
    const data = await resp.json();
    if (!resp.ok) throw new Error(data.message);
    return {
      city: data.name,
      temp: data.main.temp,
      tempMin: data.main.temp_min,
      tempMax: data.main.temp_max,
      humidity: data.main.humidity,
      feelsLike: data.main.feels_like,
      weather: data.weather[0].description,
    };
  };

  const handleChange = evt => {
    setCity(evt.target.value);
    setError(false);  // clear error immediately on input change
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    if (!city.trim()) return;
    setLoading(true);
    setError(false);   // reset before fetch starts

    try {
      const newInfo = await getWeatherInfo(city);
      updateInfo(newInfo);
      setCity("");
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br /><br />
        <Button variant="contained" endIcon={<SendIcon />} type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </Button>
        {error && (
          <p style={{ color: "red" }}>
            {city ? "No such place exists!" : "Enter a city name."}
          </p>
        )}
      </form>
    </div>
  );
}






