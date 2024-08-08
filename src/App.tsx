import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Main from './pages/Main';
import Nav from './components/Nav';
import Footer from './sections/Footer';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import NotFound from './pages/404';

const App = () => (
  <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/nike' element={<Navigate to='/nike/home' />} />
      <Route path='/nike/home' element={<Main />} />
      <Route path='/nike/about-us' element={<AboutUs />} />
      <Route path='/nike/products' element={<Products />} />
      <Route path='/nike/contact-us' element={<Contacts />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)

export default App;
