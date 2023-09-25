import React, { useState } from "react";
import { json } from "react-router-dom";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://e-commerce-data-9bbb1-default-rtdb.firebaseio.com/user.json",
      {
        method: "POST",
        body:JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

  console.log(res.json());  
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name{" "}
        <input
          name="name"
          type="text"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, name: e.target.value }))
          }
          value={form.name}
        />
      </label>

      <label htmlFor="email">
        Email id :{" "}
        <input
          name="email"
          type="text"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
          value={form.email}
        />
      </label>
      <label htmlFor="phone">
        Phone{" "}
        <input
          name="phone"
          type="text"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, phone: e.target.value }))
          }
          value={form.phone}
        />
      </label>

      <button>Submit</button>
    </form>
  );
};

export default Contact;
