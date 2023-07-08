import React from 'react'
import Contact from './Contact';
import { useNavigate } from 'react-router-dom';
import {useQuery} from "react-query";
import { getAllData } from '../fetchContacts/fetchContacts';

const Contacts = () => {

  const dummyData = [
    {
      id: 1,
      fullName: "Amir Amiri",
      email: "amir@gmail.com",
      phoneNumber: 123412312341234,
      image:
        "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      DOB: "12/14/2000",
    },
    {
      id: 2,
      fullName: "Amir Amiri",
      email: "amir@gmail.com",
      phoneNumber: 123412312341234,
      image:
        "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      DOB: "12/14/2000",
    },
    {
      id: 2,
      fullName: "Amir Amiri",
      email: "amir@gmail.com",
      phoneNumber: 123412312341234,
      image:
        "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      DOB: "12/14/2000",
    },
    {
      id: 2,
      fullName: "Amir Amiri",
      email: "amir@gmail.com",
      phoneNumber: 123412312341234,
      image:
        "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      DOB: "12/14/2000",
    },
    {
      id: 2,
      fullName: "Amir Amiri",
      email: "amir@gmail.com",
      phoneNumber: 123412312341234,
      image:
        "https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg",
      DOB: "12/14/2000",
    },
  ];

      const{data, isLoading, isError} = useQuery("contact", getAllData);
      // console.log(data);

      const navigate = useNavigate();

  return (
    <div className='w-[80%] mx-auto my-[3rem] border-2 border-violet-200 shadow-md shadow-gray-400 rounded-lg'>
        <h1 className='p-6 text-center flex-1 text-2xl font-bold text-gray-700'>Contact Manager</h1>

        <div className='text-right mr-10'>
            <button className='button text-sm px-4' onClick={()=> navigate("/AddContact")}>Add Contact</button>
        </div>
        <div className='p-4 lg:p-7 flex items-center justify-center flex-wrap gap-5 w-[95%] mx-auto'>
          {isLoading && <p>Loading...</p>}
          {isError && <p>Unable to fetch data...</p>}
          {data?.length == 0 ? (<p>No Contact Found...</p>) : (
            
                data?.map((contact,i)=>(
                    <Contact key={i} contact={contact} />
                ))
            )}
        </div>
    </div>
  )
}

export default Contacts