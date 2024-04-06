import CustomerList from "./CustomerList";
import List from "../List";
import { useState } from "react";
import { useEffect } from "react";

const SearchCustomer = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filterList, setFilterList] = useState(List);

  const handleFilterList = (e) => {
    if (searchInput === "") {
      setFilterList(List);
      return;
    }

    setFilterList(
      filterList.filter(
        (ele) =>
          ele.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) ||
          ele.age.toString().includes(searchInput) ||
          ele.location.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase()) ||
          ele.gender.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
      )
    );
  };

  useEffect(() => {
    handleFilterList();
  });

  return (
    <div>
      <div className="search-container">
        <input
          className="form-control"
          type="search"
          placeholder="Search Customer"
          autoFocus
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <CustomerList customers={filterList} />
    </div>
  );
};
export default SearchCustomer;
