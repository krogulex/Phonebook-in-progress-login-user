import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError, selectIsAdding } from 'redux/contacts/selectors';
import { useEffect } from 'react';

import { ThreeDots } from 'react-loader-spinner';

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);
    const isAdding = useSelector(selectIsAdding);
    const error = useSelector(selectError);
  
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
    
    return (
      <div className='page-contacts'>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && (
          <div className='loader'>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#319795"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
              ma
            />
          </div>
        )}
        {error && (
          <p>Service communication error</p>
        )
        }
        <ContactList />
        {isAdding && !error && (
          <div className='loader'>
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#319795"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
              ma
            />
          </div>
        )}
      </div>
    );
  };
  