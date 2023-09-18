import React, { useState } from "react";

const AddNewMovieForm = ({movies,addMovies}) => {
  const [form, setForm] = useState({
    episode_id:"",
    title: "",
    opening_Text: "",
    releaseDate: "",
  });

  const handleSubmit = (event) => {
  event.preventDefault();
  console.log(form);
 addMovies(prev=>{
  const updatedMovieArr = [...prev];
  form.episode_id = updatedMovieArr.length+1;
  updatedMovieArr.push({
    episode_id:form.episode_id,
    title:form.title,
    release_date:form.releaseDate,
    opening_crawl:form.opening_Text

  });

  return updatedMovieArr;
 })
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
