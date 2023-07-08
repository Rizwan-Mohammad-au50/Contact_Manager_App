import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//for adding new contact:
import { useMutation, useQueryClient } from "react-query";
import { updateContact } from "../../fetchContacts/fetchContacts";
import { contactContextShare } from "../../context/Context";

const UpdateContact = () => {
  const navigate = useNavigate();

  const [contact, setContact] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    DOB: "",
    image: "",
  });

  ////////////////////////////////////////////////context-api/////start//////////////////////////////////

  //   context api for updating/edit card data:
  const { setUpdate, update } = contactContextShare();
  //   console.log(update);
  // when you click on edit/update btn:
  useEffect(() => {
    if (update) {
      setContact({
        ...contact,
        fullName: update.fullName,
        email: update.email,
        phoneNumber: update.phoneNumber,
        DOB: update.DOB.split("T")[0],
        image: update.image,
        _id: update._id
      });
    }
  }, []);

  ////////////////////////////////////////////////context-api/////end//////////////////////////////////

  const queryClient = useQueryClient();

  ///////////////////////////////////////////////////context-api/////////start/////////////////////////

  //for adding new contact:
  const {
    mutate: updateContacts,
    isLoading: updateLoading,
    isError: updateError,
  } = useMutation(updateContact, {
    onSuccess: () => queryClient.invalidateQueries("contact"),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(contact);
    if(update) {
      updateContacts(contact);
      navigate("/");
    } else {
      mutate(data);
      navigate("/");
    }
  };

  /////////////////////////////////////////////////////////context-api/////////end//////////////////////////////

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
          <h1 className="text-center text-xl font-medium">Update Contact</h1>

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
            onChange={(e) =>
              setContact({ ...contact, image: e.target.files[0] })
            }
            type="file"
          />

          <button className="button">Update</button>
        </form>
      </div>
    </section>
  );
};

export default UpdateContact;
