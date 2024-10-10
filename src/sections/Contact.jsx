import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

const API = import.meta.env.VITE_API;
// const API = "http://localhost:3000/mail"

const initFormState = {
  name: "",
  email: "",
  message: "",
};

function Contact() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const formRef = useRef(null);
  const [formData, setFormData] = useState(initFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  function handleChange({ target: { name, value } }) {
    setFormData((form) => ({ ...form, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError(false);
      setIsSubmitting(true);

      //if the mail api doesn't do anything in atmost 3 seconds reject the operation
      const resp = await Promise.race([
        fetch(API, {
          method: "POST",
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }),
        new Promise((_, reject) =>
          setTimeout(
            () =>
              reject(
                "Server took too long to respond. Please try again later.",
              ),
            3000,
          ),
        ),
      ]);
      const data = await resp.json();

      if (resp.status !== 200) {
        throw new Error(data.message);
      }
      setMessage("Message sent successfully.");
      setFormData(initFormState);
    } catch (error) {
      setError(true);
      setMessage(error.message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="c-space relative my-20">
      <div className="relative flex flex-col items-center justify-center">
        {!isMobile && (
          <img
            alt="terminal background"
            src={`${import.meta.env.BASE_URL}assets/terminal.png`}
            className="absolute inset-0 min-h-full"
          />
        )}

        <div className="contact-container">
          <h3 className="head-text">Let&apos;s talk</h3>
          <p className="mt-3 text-lg text-white-600">
            Whether you&apos;re looking to build a new website, improve your
            existing platform, or bring a unique project to life. I&apos;m here
            to help
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Alen Mercury"
                className="field-input"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="alenMercury@gmail.com"
                className="field-input"
              />
            </label>

            <label className="space-y-3">
              <span className="field-label">Your message</span>
              <textarea
                name="message"
                required
                value={formData.message}
                rows={5}
                onChange={handleChange}
                placeholder="Hey, I am interested in..."
                className="field-input"
              />
            </label>

            <button type="submit" disabled={isSubmitting} className="field-btn">
              {isSubmitting ? "Sending..." : "Send"}

              {!isSubmitting && (
                <img
                  src={`${import.meta.env.BASE_URL}assets/arrow-up.png`}
                  alt="arrow-up"
                  className="field-btn_arrow"
                />
              )}
            </button>
          </form>
        </div>
      </div>
      {message?.length > 0 && (
        <Toast
          message={message}
          resetMessage={() => setMessage("")}
          isError={error}
        />
      )}
    </section>
  );
}

export default Contact;

function Toast({ message, resetMessage, isError = false }) {
  useEffect(
    function () {
      let timeoutId;
      async function clearMessage() {
        await new Promise(
          (resolve) =>
            (timeoutId = setTimeout(() => {
              resetMessage?.();
              resolve();
            }, 2000)),
        );
      }

      if (message?.length) clearMessage();

      if (timeoutId) return () => clearTimeout(timeoutId);
    },
    [message.length, resetMessage],
  );

  if (!message?.length) return null;
  return (
    <div
      id="toast-simple"
      className={`absolute -bottom-[1%] right-0 flex w-full max-w-sm items-center space-x-4 divide-x divide-white-700 rounded-lg p-4 text-xl text-white shadow rtl:space-x-reverse rtl:divide-x-reverse ${isError ? "bg-orange-700" : "bg-blue-700"} `}
      role="alert"
    >
      {isError && (
        <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg dark:bg-orange-600 dark:text-orange-200">
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM10 15a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-4a1 1 0 0 1-2 0V6a1 1 0 0 1 2 0v5Z" />
          </svg>
        </div>
      )}
      {!isError && (
        <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-700 text-blue-200">
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
          </svg>
        </div>
      )}
      <div className="ps-4 text-sm font-normal">{message}</div>
    </div>
  );
}
