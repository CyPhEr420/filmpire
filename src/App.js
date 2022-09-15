
import { Box, CssBaseline } from '@mui/material';
import {
  Routes,
  Route,
} from 'react-router-dom';
import {
  Movies,
  Actors,
  MovieInformation,
  NavBar,
  Profile
} from './components/';
import { styled } from '@mui/system';


const Toolbar = styled(Box)({
  height: '17px'
})



function App() {
  return (
    <Box sx={{ display: 'flex', height: '100%' }}>
      <CssBaseline />
      <NavBar />
      <Box sx={{ flexGrow: '1', padding: '2em' }}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/Movie/:id" element={<MovieInformation />} />
          <Route path="/actor/:id" element={<Actors />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
