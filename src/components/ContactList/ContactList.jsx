import { useDispatch } from 'react-redux';
import css from './ContactList.module.css';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();
  return (
    <>
      <ul className={css.contactList}>
        {contacts.map(item => {
          return (
            <li key={item.id} className={css.contactListItem}>
              <p className={css.contactName}>
                {item.name}:{' '}
                <span className={css.contactNumber}>{item.number}</span>
              </p>
              <button
                type="button"
                name="delete"
                className={css.contactDeleteBtn}
                onClick={() => dispatch(deleteContact(item.id))}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
