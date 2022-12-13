import React from "react";

const ContactForm = () => {
  return (
    <>
      <form className="max-w-[500px]">
        <div className="flex flex-col mb-3">
          <label>Subject :</label>
          <input
            type="text"
            className="border-2 rounded-md py-1 px-2 border-gray-300 active:border-blue-900"
          />
        </div>
        <div className="flex flex-col mb-3">
          <label>Message :</label>
          <textarea className="border-2 rounded-md py-1 px-2 border-gray-300 active:border-blue-900"></textarea>
        </div>
        <button className="bg-primary font-semibold text-white py-3 px-5 rounded-md shadow-md active:shadow-none">
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
