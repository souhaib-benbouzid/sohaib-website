import React from 'react';
import './style.scss';
import ContactForm from './ContactForm';
import ReactGa from 'react-ga';
import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { getContactDataQuery } from '../../apollo/queries';
import LoadingProgressBar from '../../components/common/loading';

const Contact = (props) => {
  const { error, data, loading } = useQuery(getContactDataQuery);

  useEffect(() => {
    ReactGa.pageview('/contact');
  }, []);
  return (
    <section className='contact'>
      <LoadingProgressBar loading={loading} />
      {data ? (
        <>
          <div className='left'>
            <h1>{data.contact.title}</h1>
            <p>{data.contact.description}</p>
            <ContactForm />
          </div>
          <header className='contact-info'>
            <h1>{data.contact.contactInfo.street}</h1>
            <h2>{`${data.contact.contactInfo.postalCode}, ${data.contact.contactInfo.city}, ${data.contact.contactInfo.country}`}</h2>
            <a href={`tel:${data.contact.contactInfo.phone}`}>
              {data.contact.contactInfo.phone}
            </a>
            <a href={`mailto:${data.contact.contactInfo.email}`}>
              {data.contact.contactInfo.email}
            </a>
          </header>
        </>
      ) : error ? (
        <div>No Data Available! Please Reload Your Browser</div>
      ) : null}
    </section>
  );
};

export default Contact;
