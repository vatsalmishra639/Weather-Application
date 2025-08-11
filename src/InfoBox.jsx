import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox({ info }) {
  const HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?auto=format&fit=crop&w=500&q=60";
  const RAIN_URL = "https://images.unsplash.com/photo-1438449805896-28a666819a20?auto=format&fit=crop&w=500&q=60";

  const imageUrl = info.humidity > 80
    ? RAIN_URL
    : info.temp > 15
      ? HOT_URL
      : COLD_URL;

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={imageUrl}
            title={info.weather}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{
                info.humidity > 80
    ? <ThunderstormIcon/>
    : info.temp > 15
      ? <SunnyIcon/>
      : <AcUnitIcon/> 
              }
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              <p>Temperature = {info.temp}°C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Min Temp = {info.tempMin}°C</p>
              <p>Max Temp = {info.tempMax}°C</p>
              <p>The weather is <i>{info.weather}</i></p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
