import Layout from "./layout";
import { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await fetch("/api/index/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        setSuccess(true);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error("Error sending email", error);
    }
  };

  return (
      <section className="mx-auto py-20 bg-accent">
        <h2 className="text-5xl font-bold mb-16 text-center">Contact Me</h2>
        {success ? (
          <div className="text-2xl font-bold text-center">
            Thank you for your message!
          </div>
        ) : (
          <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-text text-lg font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="bg-secondary focus:text-secondary appearance-none border-2 border-gray-500 rounded w-full py-2 px-4 text-text leading-tight focus:outline-none focus:bg-white focus:border-accent"
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-text text-lg font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="bg-secondary focus:text-secondary appearance-none border-2 border-gray-500 rounded w-full py-2 px-4 text-text leading-tight focus:outline-none focus:bg-white focus:border-accent"
                id="email"
                type="email"
                placeholder="johndoe@example.com"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-text text-lg font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="bg-secondary focus:text-secondary appearance-none border-2 border-gray-500 rounded w-full py-2 px-4 text-text leading-tight focus:outline-none focus:bg-white focus:border-accent"
                id="message"
                rows={8}
                placeholder="Write your message here"
                value={message}
                onChange={handleMessageChange}
              />
            </div>
            <button
              className="bg-accent hover:bg-secondary hover:text-text text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </form>
        )}
      </section>
  );
};

export default ContactPage;
