import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route
} from 'react-router-dom';
import Layout from './layouts/DefaultLayout';
import Page from './Page';
import HomePage from './pages/HomePage';
import AgriculturePage from './pages/AgriculturePage';
import BusinessPage from './pages/BusinessPage';
import RealEstatePage from './pages/RealEstatePage';
import MediationPage from './pages/MediationPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <>
              <Page title='Law Offices of Cathy Cowin' />
              <HomePage />
            </>
          }
        />
        <Route
          path="/agriculture"
          element={
            <>
              <Page title='Agricultural Law | Law Offices of Cathy Cowin' />
              <AgriculturePage />
            </>
          }
        />
        <Route
          path="/business"
          element={
            <>
              <Page title='Business Law | Law Offices of Cathy Cowin' />
              <BusinessPage />
            </>
          }
        />
        <Route
          path="/real-estate"
          element={
            <>
              <Page title='Real Estate Law | Law Offices of Cathy Cowin' />
              <RealEstatePage />
            </>
          }
        />
        <Route
          path="/mediation"
          element={
            <>
              <Page title='Mediation/Arbitration Services | Law Offices of Cathy Cowin' />
              <MediationPage />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Page title='About | Law Offices of Cathy Cowin' />
              <AboutPage />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Page title='Contact | Law Offices of Cathy Cowin' />
              <ContactPage />
            </>
          }
        />
        <Route
          path="/*"
          element={
            <>
              <Page title='404 Page Not Found | Law Offices of Cathy Cowin' />
              <h1>404 Page Not Found</h1>
            </>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
