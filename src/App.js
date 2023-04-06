import { Routes, Route, Link } from 'react-router-dom';
import { Container } from '@chakra-ui/react'

import Header from './components/Header/Header';
import Home from './routes/Home';
import PropertyDetails from './routes/PropertyDetails';
import Footer from './components/Footer'
import HouseProvider from './context/HouseContext';
import HouseDetails from './components/PropertyDetails/HouseDetails';
import Features from './components/Features';

const App = () => {
  return (
    <HouseProvider>
      <Header />
      <Container maxW='container.lg' px='6'>
        
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='home' element={<Home />} />
          <Route path='property-details' element={<PropertyDetails />} >
         <Route path=":propertyId" element={<HouseDetails />} />
         </Route> 
         <Route path='features' element={<Features />} />
            
         <Route path='*' element={ <main style={{ padding: "1rem" }}><p>There's nothing here!</p><Link to='home'>Go back to home</Link></main>}
          /> 
        </Routes>
      </Container>
      <Footer />
    </HouseProvider>
  )
}

export default App