import React from "react";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mwkaqwda");
  if (state.succeeded) {
    return (
      <p className="text-2xl font-bold text-center p-4">Thanks for joining!</p>
    );
  }
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen">
      <h1 className="text-2xl font-bold text-center p-4">
        Let's work together
      </h1>

      <form id='gallery' className="max-w-[600px] m-auto" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-2 my-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            name="name"
            placeholder="Name"
            required
          />

          <input
            className="border shadow-lg p-3"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
         
        <textarea
          className="border shadow-lg p-3 w-full"
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="message"
          required
        ></textarea>

        <button
          type="submit"
          disabled={state.submitting}
          className="border shadow-lg p-3 w-full mt-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
