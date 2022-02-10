import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import VendorCard from '../components/VendorCard';
import { BASE_URL } from "../globals/index";


const WaresDisplay = (props) => {
  const navigate = useNavigate()
  let vendorProfilesArray = [];
  const [vendorProfiles, setVendorProfiles] = useState(vendorProfilesArray);




  const getVendorProfiles = async (user) => {
    const response = await axios.get(`${BASE_URL}/departments/info/4`);
    setVendorProfiles(response.data.vendor);
  
  };
//   userProfiles.sort((a, b) => a.name.localeCompare(b.name))

  
  useEffect(() => {
    getVendorProfiles();
  }, []);


  return (
    <div className="thumbnail-grid">
        {vendorProfiles.map((vendor) => (
        <VendorCard
          key={vendor.id}
          {...vendor}
          name = {vendor.name}
          image={vendor.image}
          id = {vendor.id}
          onClick= {()=> navigate(`/users/info/${vendor.id}`)
        }
        />
      ))} 
    </div>
  );
  
} 

export default WaresDisplay