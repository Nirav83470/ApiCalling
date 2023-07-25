import axios from "axios";
import { useEffect, useState } from "react";

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() !== "") {
      // Fetch data from the API based on the search term
      axios
        .get(`https://dummyjson.com/products?query=${searchTerm}`)
        .then((response) => {
          setRepos(response.data.items);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } else {
      // Clear the repos list when search term is empty
      setRepos([]);
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search repositories on GitHub"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <ul>
          {repos.map((repo) => (
            <li key={repo.id}>{repo.full_name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchFilter;
