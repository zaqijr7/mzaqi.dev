import React, { useState } from "react";

const ContactForm = () => {
  const [body, setBody] = useState("");
  const [subject, setSubject] = useState("");
  return (
    <form className="max-w-[500px]">
      <div className="text-justify mb-3">
        Thank you for visiting my website, I am very happy if to be able to
        connect and work together with you in the future, don&apos;t hesitate to
        contact me via the form below. 😊🙏
      </div>
      <div className="flex flex-col mb-3">
        <label>Subject :</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border-2 rounded-md py-1 px-2 border-gray-300 active:border-blue-900"
        />
      </div>
      <div className="flex flex-col mb-3">
        <label>Message :</label>
        <textarea
          className="border-2 rounded-md py-1 px-2 border-gray-300 active:border-blue-900"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <a
        href={`mailto:zaqijr7@gmail.com?subject=${subject}&body=${body}`}
        className="text-sm bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-white py-2 px-10 rounded-md shadow-md active:shadow-none no-underline"
      >
        Send
      </a>
    </form>
  );
};

export default ContactForm;
