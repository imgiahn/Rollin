import { useState } from "react";
import "./SearchBar.css";
const SearchBar = () => {
    const [searchKey, setSearchKey] = useState({ searchKey: "" });
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setSearchKey(Object.assign(Object.assign({}, searchKey), { [name]: value }));
    };
    const onSubmitSearch = () => {
        alert("hi");
    };
    return (<form className="searchBar" onSubmit={onSubmitSearch}>
           <input type="text" placeholder="검색" name="name" onChange={(e) => onChangeHandler(e)}></input>
           <button type="submit"></button>
       </form>);
};
export default SearchBar;
