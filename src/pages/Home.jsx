import React, { useState } from "react";
import NavbarH from "../components/NavbarH";
import Holidays from "../components/Holidays/Holidays";
import HolidayForm from "../components/Holidays/HolidayForm";
import FooterH from "../components/FooterH";
import holidays from "../helper/data";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredList, setFilteredList] = useState(holidays) 

  
  console.log(searchInput)

  const handleSearch = (e) => {
    const value = e.target.value
    setSearchInput(value);
    console.log(filteredList)
    const newList = holidays.filter((item)=>item.lokasyon.toLowerCase().includes(searchInput.toLowerCase().trim()))
    setFilteredList(newList)

  }

  return (
    <div>
      <NavbarH handleSearch={handleSearch} />
      <Holidays holidays={holidays} filteredList={filteredList} />
      <HolidayForm />
      <FooterH />
    </div>
  );
};

export default Home;
