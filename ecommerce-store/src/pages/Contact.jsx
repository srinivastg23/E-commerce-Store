import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!form.name.trim())
      validationErrors.name = "Name is required";

    if (!form.email.includes("@"))
      validationErrors.email = "Valid email required";

    if (form.message.length < 10)
      validationErrors.message =
        "Message must be at least 10 characters";

    setErrors(validationErrors);

    if (
      Object.keys(validationErrors).length === 0
    ) {
      alert("Message Submitted Successfully");
    }
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />
        {errors.name && <p>{errors.name}</p>}

        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value,
            })
          }
        />
        {errors.email && <p>{errors.email}</p>}

        <textarea
          rows="5"
          placeholder="Message"
          value={form.message}
          onChange={(e) =>
            setForm({
              ...form,
              message: e.target.value,
            })
          }
        />

        {errors.message && (
          <p>{errors.message}</p>
        )}

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}