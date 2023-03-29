import { IconButton, Paper } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

const onhandleSubmit = (e) => {
e.preventDefault();

if(searchTerm){
  navigate(`/search/${searchTerm}`)
  setSearchTerm('');
}
};


  <Paper
    component="form"
    sx={{
      borderRadius: 20,
      border: "1px solid #e3e3e3",
      pl: 2,
      boxShadow: "none",
      mr: { sm: 5 },
    }}
    onSubmit={onhandleSubmit}
  >
    <input
      className="search-bar"
      placeholder="Search..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />

    <IconButton
      type="submit"
      sx={{ p: "10px", color: "red" }}
      aria-label="search"
    >
      <SearchIcon />
    </IconButton>
  </Paper>
};

export default SearchBar;
