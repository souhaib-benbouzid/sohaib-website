import React from 'react';
import './style.scss';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Suspense } from 'react';
import Loading from '../components/common/transitions/loading';

function Layout({ children }) {
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
