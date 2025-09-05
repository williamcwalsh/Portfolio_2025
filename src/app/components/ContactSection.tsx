// import { useState } from "react";
// import emailjs from "emailjs-com";

// function validateEmail(email: string) {
//   // Simple email regex
//   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

export default function ContactSection() {
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [error, setError] = useState("");
  // const [success, setSuccess] = useState(false);

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (!email || !validateEmail(email)) {
  //     setError("Please enter a valid email address.");
  //     return;
  //   }
  //   setError("");
  //   emailjs
  //     .send(
  //       "service_7tpei8y",
  //       "template_hvwzf5a",
  //       {
  //         name: email,
  //         message: message,
  //       },
  //       "public_k6M3yq_JNvHyVq4bA"
  //     )
  //     .then(
  //       () => {
  //         setSuccess(true);
  //       },
  //       () => {
  //         setError("Failed to send. Please try again.");
  //       }
  //     );
  // }

  return (
    <section className="w-full max-w-screen-md mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold text-[#000080] mb-4">Contact Me</h2>
      <p className="mb-8 text-base text-gray-700">
        Please contact me directly at{" "}
        <a
          href="mailto:williamcudahywalsh@gmail.com"
          className="text-[#1E90FF] underline hover:text-[#000080] transition-colors"
        >
          williamcudahywalsh@gmail.com
        </a>{" "}
      </p>
      {/* <div className="w-full max-w-2xl mx-auto border border-gray-300 rounded-xl shadow-lg p-8 bg-transparent flex flex-col gap-6 items-center">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
            setSuccess(false);
          }}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] transition"
        />
        {error && (
          <div className="w-full text-left text-sm text-red-600">{error}</div>
        )}
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={6}
          className="w-full border border-gray-300 rounded-md px-4 py-3 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] transition"
        />
        <button
          type="button"
          onClick={handleSubmit}
          className="flex items-center gap-2 px-6 py-3 bg-[#f8f8f8] border border-gray-300 rounded-full shadow-[inset_2px_2px_4px_rgba(255,255,255,0.8),_inset_-2px_-2px_4px_rgba(0,0,0,0.1)] font-semibold text-[#000080] hover:text-[#1E90FF] transition-colors"
        >
          Submit
          <span className="ml-1">✉️</span>
        </button>
        {success && (
          <div className="w-full text-left text-green-600 text-sm">
            Message sent! (demo only)
          </div>
        )}
      </div> */}
    </section>
  );
}
