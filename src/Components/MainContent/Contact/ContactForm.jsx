// ContactForm.jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const ContactForm = () => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-4xl font-semibold mb-6 text-center">Contact Me</h2>
      <form
        action="https://formspree.io/f/xaygrkye"
        method="POST"
        className="max-w-2xl mx-auto"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Your Name:
          </label>
          <input
            type="text"
            name="name"
            className="border border-gray-300 p-2 w-full rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Your Email:
          </label>
          <input
            type="email"
            name="_replyto"
            className="border border-gray-300 p-2 w-full rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Message:
          </label>
          <textarea
            name="message"
            className="border border-gray-300 p-2 w-full rounded-md"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Send
        </button>
        <div className="mt-6 flex items-center">
          {/* GitHub Icon */}
          <a
            href="https://github.com/Saif-Rahman-801"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            <FaGithub className="text-2xl" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/saif-rahman-72a659290"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition duration-300"
          >
            <FaLinkedin className="text-2xl ml-4" />
          </a>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
