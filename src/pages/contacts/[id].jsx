import React, { useEffect, useState } from "react";
import { Form, Link, useParams } from "react-router-dom";
import Favorite from "../../components/Favorite/Favorite";
import { fetchContactDetail } from "../../infrastructure/Contact/ContactClient";

const ContactDetail = () => {
  const { id } = useParams();
  const [contact, setContact] = useState(null);

  //   const contact = {
  //     createdAt: "2023-07-27T13:00:27.051Z",
  //     name: "name 1",
  //     avatar:
  //       "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/195.jpg",
  //     favorite: "favorite 1",
  //     id: "1",
  //   };

  const handleFetchContactDetail = async () => {
    const res = await fetchContactDetail(id);
    setContact(res);
  };

  useEffect(() => {
    handleFetchContactDetail();
  }, [id]);

  return (
    <div id="contact">
      <div>
        <img
          key={contact?.avatar}
          src={contact?.avatar || null}
          alt="contact_image"
        />
      </div>

      <div>
        <h1>
          {contact?.name ? <>{contact.name}</> : <i>No Name</i>}{" "}
          <Favorite contact={contact} />
        </h1>

        {contact?.twitter && (
          <p>
            <Link
              target="_blank"
              to={`https://twitter.com/${contact?.twitter}`}
              rel="noreferrer"
            >
              {contact.twitter}
            </Link>
          </p>
        )}

        {contact?.notes && <p>{contact?.notes}</p>}

        <div>
          <Link to="/contacts/edit/1">
            <button type="submit">Edit</button>
          </Link>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              // eslint-disable-next-line no-restricted-globals
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
