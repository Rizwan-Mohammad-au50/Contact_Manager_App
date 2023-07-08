import axios from "axios";

//Base URL:
const BaseURL = import.meta.env.VITE_BASEURL;

// (fetch all contacts)
// 1. Get all the data from BEnd api
// 2. Go to main.jsx and import {QueryClient,QueryClientProvider} from "react-query" package and wrap the <App />
// 3. To use the values fetched from BEnd, use "useQuery" by importing from "react-query" in any file
export const getAllData = async () => {
  try {
    const res = await axios.get(`${BaseURL}/api/contacts`);
    return res.data.allContacts;
  } catch (error) {
    throw new Error(error);
  }
};


// (Create contact)
// 1. Create New Contact
// 2. import {useMutation} from react-query
export const addContact = async (data) => {
  //1. upload image
  //2. upload remaining text content

  //1.
  if (data.image) {
    // create new form-data
    const form = new FormData();
    const imageName = Date.now() + data.image.name;
    form.append("name", imageName);
    form.append("file", data.image);

    data.image = imageName;
    try {
      await axios.post(`${BaseURL}/api/upload`, form);
    } catch (error) {
      throw new Error(error);
    }
  }
  //2.
  try {
    const res = await axios.post(`${BaseURL}/api/contacts/create`, data);
    return res.data;
    // return res.data;
  } catch (error) {
    throw new Error(error);
  }
};


// (delete contact)
export const deleteContact = async (id) => {
    try {
        await axios.delete(`${BaseURL}/api/contacts/delete/${id}`);
    } catch (error) {
        throw new Error(error);
    }
}



// (update/edit contact)
// used context api hhalf part
// export const updateContact = async (contact) => {
//     try {
//         await axios.put(`${BaseURL}/api/contacts/update/${contact._id}`,contact);
//     } catch (error) {
//         throw new Error(error);
//     }
// }

export const updateContact = async (data) => {
    if (data.image) {
      const form = new FormData();
      const name = Date.now() + data.image.name;
      form.append("name", name);
      form.append("file", data.image);
      data.image = name;
  
      try {
        await axios.put(`${BaseURL}/api/contacts/update`, form);
      } catch (error) {
        throw Error(error);
      }
    }
    try {
      const res = await axios.put(`${BaseURL}/api/contacts/update/${data._id}`,data);
      return res.data;
    } catch (error) {
      throw Error(error);
    }
  };


