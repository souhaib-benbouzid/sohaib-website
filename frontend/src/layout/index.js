import React, { useEffect } from 'react';
import './style.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Suspense } from 'react';
import Loading from '../components/common/transitions/loading';
import ReactGa from 'react-ga';

function Layout({ children }) {
  const GA_ID = process.env.REACT_APP_GA_ID;
  useEffect(() => {
    ReactGa.initialize(GA_ID);
  }, [GA_ID]);
  return (
    <div className='layout'>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <ToastContainer />
        <main className='layout__container'>{children}</main>
        <Footer />
      </Suspense>
    </div>
  );
}

export default Layout;
