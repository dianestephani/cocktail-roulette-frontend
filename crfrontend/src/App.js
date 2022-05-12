import logo from './logo.svg';
import './App.css';
import { Card } from '@mui/material';
import SimpleCard from './components/spiritcard';
// import Grid from '@material-ui/core/Grid';

function App() {
  return (
    
    <div className="App">

      <header className="App-header">
        <Card >
          {SimpleCard()}
        </Card>
       
      </header>
    </div>
  );
}

export default App;
