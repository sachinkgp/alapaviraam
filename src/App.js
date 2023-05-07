import Navbar from './screens/Navbar'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Mycomponents from './screens/test';
import Ourteam from './screens/ourteam';
import Aboutus from './screens/aboutus';
import Contactus from './screens/contactus';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
         <Navbar />
        <Routes>
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/ourteam" element={<Ourteam />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
