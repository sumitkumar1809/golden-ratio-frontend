import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import LandingPage from '../pages/LandingPage';
import MovieDetail from '../pages/MovieDetail';
import MoviesPage from '../pages/MoviesPage';
import NewsDetail from '../pages/NewsDetail';
import NewsEventsPage from '../pages/NewsEventsPage';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import SearchPage from '../pages/SearchPage';
import TeamPage from '../pages/TeamPage';
import TermsPage from '../pages/TermsPage';
import UpcomingMoviesPage from '../pages/UpcomingMoviesPage';

const MainBuilder = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/about' element={<AboutPage />} />
          <Route exact path='/team' element={<TeamPage />} />
          <Route exact path='/portfolio' element={<MoviesPage />} />
          <Route
            exact
            path='/movies/:movietype'
            element={<UpcomingMoviesPage />}
          />
          <Route exact path='/movie/:id' element={<MovieDetail />} />
          <Route exact path='/news' element={<NewsEventsPage />} />
          <Route exact path='/news/:id' element={<NewsDetail />} />
          <Route exact path='/contact' element={<ContactPage />} />
          <Route exact path='/search' element={<SearchPage />} />
          <Route exact path='/terms-conditions' element={<TermsPage />} />
          <Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </>
  );
};

export default MainBuilder;
