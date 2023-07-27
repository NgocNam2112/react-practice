import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Root.css";
import { fetchListContact } from "../../infrastructure/Contact/ContactClient";

const Root = () => {
  const [contacts, setContacts] = useState([]);

  const handleFetchListContact = async () => {
    const res = await fetchListContact();
    setContacts(res);
  };
  useEffect(() => {
    handleFetchListContact();
  }, []);

  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button type="submit">New</button>
          </form>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <Link to={`/contacts/${contact.id}`}>
                    {contact.name ? <>{contact.name}</> : <i>No name</i>}
                    {contact.favorite && <span>★</span>}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
