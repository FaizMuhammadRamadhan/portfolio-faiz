import { useForm } from "react-hook-form";
import { useForm as useFormspree } from "@formspree/react";
import { Link } from "react-router-dom";

const Contact = () => {
  const formspreeKey = "maennzpv"; 
  
  const [formspreeState, sendToFormspree] = useFormspree(formspreeKey);
  
  const currentYear = new Date().getFullYear();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const response = await sendToFormspree(data);
    if (response?.response?.ok || formspreeState.succeeded) {
      reset();
    }
  };

  const styleDefault =
    "relative z-10 overflow-hidden bg-teal-500 text-black px-2 py-1 md:px-5 md:py-2 rounded font-medium transition-colors duration-300 text-center " +
    "before:absolute before:left-0 before:top-0 before:w-full before:h-0 before:bg-black before:-z-10 " +
    "before:transition-all before:duration-300 before:ease-in-out hover:before:h-full hover:text-white ";

  return (
    <section id="contact" className="bg-teal-500 text-white pt-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-black font-semibold tracking-wider uppercase text-sm flex gap-3">
            <span className="h-1 my-auto bg-black w-10"></span>Contact Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2">Let's Work Together</h2>
          <p className="text-white mt-2 max-w-lg">
            Interested in collaborating on a project or just want to say hello? Feel free to drop a message below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-900 border border-gray-800 rounded-lg text-teal-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm text-black font-medium">Email</h4>
                  <a href="mailto:faizmuhammadrmdhn@gmail.com" className="text-lg font-semibold hover:text-teal-400 transition-colors">
                    faizmuhammadrmdhn@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-900 border border-gray-800 rounded-lg text-teal-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm text-black font-medium">Location</h4>
                  <p className="text-lg font-semibold">Tangerang, Indonesia</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg text-white font-medium mb-3">Find me on</h4>
              <div className="flex space-x-3">
                <Link to="https://github.com/FaizMuhammadRamadhan">
                  <i className="ri-github-fill text-slate-200 text-4xl hover:text-black"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/faiz-muhammad-ramadhan/">
                  <i className="ri-linkedin-box-fill text-slate-200 text-4xl hover:text-black"></i>
                </Link>
                <Link to="https://gitlab.com/FaizMuhammadRamadhan">
                  <i className="ri-gitlab-line text-slate-200 text-4xl hover:text-black"></i>
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-gray-900 border border-gray-800 p-8 rounded-xl shadow-lg">
            {formspreeState.succeeded ? (
              <div className="p-4 bg-teal-500 rounded-lg text-black text-center">
                <h3 className="text-lg font-semibold">Pesan Terkirim!</h3>
                <p className="text-sm text-gray-800 mt-1">
                  Terima kasih telah menghubungi. Saya akan segera membalas pesan Anda.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      {...register("name", { required: "Name is required" })}
                      className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400 transition-colors"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                    <input
                      type="email"
                      placeholder="youremail@example.com"
                      {...register("email", {
                        required: "Email wajib diisi",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400 transition-colors"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / General Question"
                    {...register("subject", { required: "Subject is required" })}
                    className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400 transition-colors"
                  />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    rows="5"
                    placeholder="Write your project details or questions here..."
                    {...register("message", {
                      required: "Message is required",
                      minLength: { value: 10, message: "Minimum 10 characters required" },
                    })}
                    className="w-full bg-gray-950 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400 transition-colors resize-none"
                  ></textarea>
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={formspreeState.submitting}
                  className={`w-full ${styleDefault} justify-center space-x-2 disabled:opacity-50`}
                >
                  <span>{formspreeState.submitting ? "Sending..." : "Send Message"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <footer className="py-5 mt-10 text-center">
        © Copyright {currentYear} Faiz Muhammad Ramadhan | All Rights Reserved
      </footer>
    </section>
  );
};

export default Contact;