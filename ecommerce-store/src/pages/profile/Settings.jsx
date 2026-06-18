import { useState } from "react";

export default function Settings() {
  const [name, setName] =
    useState("John Doe");

  const [email, setEmail] =
    useState("john@gmail.com");

  return (
    <div>
      <h2>Account Settings</h2>

      <input
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        placeholder="Name"
      />

      <input
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        placeholder="Email"
      />

      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}