import { MdPerson, MdLocalPhone } from "react-icons/md";
import { useDispatch } from "react-redux";

import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice.js";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  return (
    <div className={css.ContactItem}>
      <div className={css.ContactItemDetails}>
        <div className={css.ContactItemDetailItem}>
          <MdPerson />
          <span>{name}</span>
        </div>
        <div className={css.ContactItemDetailItem}>
          <MdLocalPhone />
          <span>{number}</span>
        </div>
      </div>
      <div>
        <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
      </div>
    </div>
  );
}
