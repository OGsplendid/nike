import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import NotFound from './pages/404';
import Nav from './components/Nav';
import Footer from './sections/Footer';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Contacts from './pages/Contacts';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Navigate to='/home' />} />
      <Route path='/home' element={<Main />} />
      <Route path='/about-us' element={<AboutUs />} />
      <Route path='/products' element={<Products />} />
      <Route path='/contact-us' element={<Contacts />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default App;
