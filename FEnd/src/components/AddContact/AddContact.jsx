import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//for adding new contact:
import { useMutation, useQueryClient } from "react-query";
import { addContact } from "../../fetchContacts/fetchContacts";

const AddContact = () => {
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    DOB: "",
    image: "",
  });


  const queryClient = useQueryClient();

  //for adding new contact:
  const { mutate, isLoading, isError } = useMutation(addContact, {
    // onSuccess: (data) => console.log(data),

    //solution for not rendering card(after clicking on form submit btn of create contact form) after adding new contact
    onSuccess: () => queryClient.invalidateQueries("contact"),
  });




  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(contact);

    mutate(contact);
    navigate("/");
 
  };



  return (
    <section>
      <button
        className="button absolute top-[2rem] left-[4rem] px-5 text-sm"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>

      <div className="flex items-center justify-center h-screen">
        <form
          onSubmit={handleSubmit}
          className="border border-gray-400 w-[30rem] p-5 flex flex-col gap-5 rounded-md shadow-gray-400 m-5 lg:m-0"
        >
          <h1 className="text-center text-xl font-medium">Add Contact</h1>

          <input
            value={contact.fullName}
            onChange={(e) =>
              setContact({ ...contact, fullName: e.target.value })
            }
            className="input"
            type="text"
            placeholder="Full Name..."
          />

          <input
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            className="input"
            type="text"
            placeholder="Email..."
          />

          <input
            value={contact.phoneNumber}
            onChange={(e) =>
              setContact({ ...contact, phoneNumber: e.target.value })
            }
            className="input"
            type="text"
            placeholder="Mobile..."
          />

          <input
            value={contact.DOB}
            onChange={(e) => setContact({ ...contact, DOB: e.target.value })}
            className="input"
            type="date"
          />

          <input
            onChange={(e) => setContact({ ...contact, image: e.target.files[0] })}
            type="file"
          />

          <button className="button">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default AddContact;
