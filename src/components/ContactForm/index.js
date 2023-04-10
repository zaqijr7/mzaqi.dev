import React from "react";

const ContactForm = () => {
  return (
    <>
      <form className="max-w-[500px]">
        <div className="text-justify mb-3">
          Thank you for visiting my website, I am very happy if to be able to
          connect and work together with you in the future, don&apos;t hesitate
          to contact me via the form below. 😊🙏
        </div>
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
        <button className="text-sm bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold text-white py-2 px-10 rounded-md shadow-md active:shadow-none">
          Send
        </button>
      </form>
    </>
  );
};

export default ContactForm;
