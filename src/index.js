import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Components/navbar'
import Footer from './Components/footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
