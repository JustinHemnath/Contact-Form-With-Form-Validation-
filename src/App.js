import './custom.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//PAGES
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
