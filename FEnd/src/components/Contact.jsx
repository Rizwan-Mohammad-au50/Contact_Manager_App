import React from "react";
import {FaTrashAlt,FaEdit} from "react-icons/fa"
import { useMutation, useQueryClient } from "react-query";
import { deleteContact } from "../fetchContacts/fetchContacts";
import { contactContextShare } from "../context/Context";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const Contact = ({ contact }) => {
  const { _id, fullName, email, phoneNumber, image, DOB } = contact;



  ////////////////////////////////////////////////context-api///////////////////////////////////////////

  //context api for updating/edit card data:
  const {setUpdate,update} = contactContextShare();
  // console.log(update);

  // when you click on edit/update btn:
  const navigate = useNavigate();

  const handleEdit = () => {
    setUpdate(contact);
    navigate("/UpdateContact") 
  }

  ////////////////////////////////////////////////context-api///////////////////////////////////////////






  const folder = import.meta.env.VITE_IMAGE_UPLOAD_URL;

  //delete conntact:
  const queryClient = useQueryClient();
  const {mutate,isLoading,isError} = useMutation(["contact", _id], deleteContact, {
    onSuccess : () => queryClient.invalidateQueries("contact")
  })

  return(
    <div className="w-[17rem] shadow-md shadow-gray-700 overflow-hidden rounded-lg">
        <img className="w-full h-[12rem] object-cover" src={image && folder + image} alt="Image" />

        <div  className="p-3 text-sm flex flex-col gap-1">
            <p>Full Name: {fullName}</p>
            <p>Email: {email}</p>
            <p>Mobile: {phoneNumber}</p>
            <p>DOB: {moment(DOB).format("l")}</p>
        </div>

        <div className="flex items-center justify-end p-3 gap-4">
            <button className=" cursor-pointer text-red-600 hover:text-red-800 text-xl"><FaTrashAlt onClick={()=>mutate(_id)} /></button>
            <button className=" cursor-pointer text-green-900 hover:text-green-700 text-xl"><FaEdit onClick={()=>handleEdit()} /></button>
        </div>
    </div>
  )
};

export default Contact;
