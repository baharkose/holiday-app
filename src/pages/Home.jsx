import React, { useState } from "react";
import NavbarH from "../components/NavbarH";
import Holidays from "../components/Holidays/Holidays";
import HolidayForm from "../components/Holidays/HolidayForm";
import FooterH from "../components/FooterH";
import holidays from "../helper/data";
import HolidayList from "../components/Holidays/HolidayList";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredList, setFilteredList] = useState(holidays);
  const [seasonFilter, setSeasonFilter] = useState(holidays);
  const [selectedHoliday, setSelectedHoliday] = useState([]);
  const [show, setShow] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSearchInput(value);
    const newList = holidays.filter((item) =>
      item.lokasyon.toLowerCase().includes(value.toLowerCase().trim())
    );
    setFilteredList(newList);
  };

  const handleSeasonName = (e) => {
    const seasonName = e.target.id;
    const newSeasonFilter = holidays.filter((item) =>
      item.sezon.includes(seasonName)
    );
    setSeasonFilter(newSeasonFilter);
    setFilteredList(newSeasonFilter);
  };

  const handleDonem = (e) => {
    const donem = e.currentTarget.name;
    const newCategory = holidays.filter((item) => item.kategori === donem);
    setFilteredList(newCategory);
  };

  return (
    <div>
      <NavbarH
        handleSearch={handleSearch}
        handleSeasonName={handleSeasonName}
        handleDonem={handleDonem} // Make sure this is correctly passed
      />
      <Holidays
        holidays={holidays}
        filteredList={filteredList}
        handleShow={() => setShow(true)}
        setSelectedHoliday={setSelectedHoliday}
      />
      <HolidayForm
        show={show}
        setShow={setShow}
        selectedHoliday={selectedHoliday}
      />
      <HolidayList />
      <FooterH />
    </div>
  );
};

export default Home;
