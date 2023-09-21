import React, { useState } from "react";

const AddNewMovieForm = ({movies,addMovies}) => {
  const [form, setForm] = useState({
   
    title: "",
    opening_Text: "",
    releaseDate: "",
  });

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log(form);
 addMovies(form);
 }
  
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title </label>
      <br />
      <input
        name="title"
        type="text"
        value={form.title}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, title: e.target.value }))
        }
      />
      <br />
      <label htmlFor="opening_Text">Opening Text </label>
      <br />
      <input
        name="opening_Text"
        type="text"
        value={form.opening_Text}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, opening_Text: e.target.value }))
        }
      />
      <br />
      <label htmlFor="releaseDate">Release Date </label>
      <br />
      <input
        name="releaseDate"
        type="text"
        value={form.releaseDate}
        onChange={(e) =>
          setForm((prev) => ({ ...prev, releaseDate: e.target.value }))
        }
      />

      <button>Add Movie</button>
    </form>
  );
};

export default AddNewMovieForm;
