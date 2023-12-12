import React, { useState } from "react";
import NavbarH from "../components/NavbarH";
import Holidays from "../components/Holidays/Holidays";
import HolidayForm from "../components/Holidays/HolidayForm";
import FooterH from "../components/FooterH";
import holidays from "../helper/data";
import HolidayList from "../components/Holidays/HolidayList";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredList, setFilteredList] = useState(holidays); //- koşula göre filtrelenen veriler
  const [categoryList, setCategoryList] = useState(holidays);
  const [seasonFilter, setSeasonFilter] = useState(holidays);
  const [selectedHoliday, setSelectedHoliday] = useState([]); //- veriyi çekeceğin yerde set, alacağın yerde state kullan. satın alma alanına gidecek olan liste

  const handleShow = () => setShow(true); //- Modal
  const [show, setShow] = useState(false);

  //- tetikleme olunca filtereleme başlasın, inputtan gelen verilere göre
  const handleSearch = (e) => {
    const value = e.target.value;
    const newList = holidays.filter((item) =>
      item.lokasyon.toLowerCase().includes(searchInput.toLowerCase().trim())
    );
    setFilteredList(newList);
  };

  //- Döneme göre filtreleme işlemi
  const handleDonem = (e) => {
    const donem = e.currentTarget.name;
    const newCategory = seasonFilter.filter((item) => item.kategori === donem);
    setFilteredList(newCategory);
    console.log(newCategory);
  };

  //- sezona göre filtreleme işlemi
  const handleSeasonName = (e) => {
    const newName = e.target.id;
    console.log(newName);
    //- öncelikle sezonlara göre filtreleme kalan filtre yurt içi ve yurt dışına pay edildi
    const newSeasonFilter = holidays.filter((item) =>
      item.sezon.includes(newName)
    );
    setSeasonFilter(newSeasonFilter);
  };

  return (
    <div>
      <NavbarH
        handleSearch={handleSearch}
        handleDonem={handleDonem}
        handleSeasonName={handleSeasonName}
      />
      <Holidays
        holidays={holidays}
        filteredList={filteredList}
        handleShow={handleShow}
        setSelectedHoliday={setSelectedHoliday}
      />
      <HolidayForm //- Modal
        show={show}
        setShow={setShow}
        selectedHoliday={selectedHoliday}
      />

      <HolidayList/>
      <FooterH />
    </div>
  );
};

export default Home;
