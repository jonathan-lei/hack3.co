import addToMailchimp from "gatsby-plugin-mailchimp";
import React, { useState } from "react";
import * as styles from "./MailchimpForm.module.css";

export default function MailchimpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(undefined);

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await addToMailchimp(email, {
      FNAME: firstName,
      LNAME: lastName
    }); // listFields are optional if you are only capturing the email address
    setStatus(data.msg);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <p>
        <label>
          First Name:{" "}
          <input
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            required
            type="text"
          />
        </label>
      </p>
      <p>
        <label>
          Last Name:{" "}
          <input
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            required
            type="text"
          />
        </label>
      </p>
      <p>
        <label>
          Email:{" "}
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            type="email"
            placeholder="user@example.com"
          />
        </label>
      </p>
      <p className={styles.submit}>
        <button>Subscribe</button>
      </p>

      {status !== undefined && <p>{status}</p>}
    </form>
  );
}
