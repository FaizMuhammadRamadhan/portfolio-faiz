import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footer";
import Button from "./Button";
import Card3 from "./Card3";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const nama = data.get("name");
    const email = data.get("email");
    const deskripsi = data.get("description");

    localStorage.setItem("nama", nama);
    localStorage.setItem("email", email);
    localStorage.setItem("deskripsi", deskripsi);

    e.target.reset(); // Mengosongkan input setelah submit
  };

  return (
    <section id="Contact" className="pt-5 lg:pt-10">
      <div className="bg-slate-200 mt-20 text-black mx-4 md:mx-8 md:ml-12 py-12 rounded-sm">
        <div className="items-center text-center">
          <h1 className="text-3xl font-semibold">Contact</h1>
          <motion.h1
            className="text-6xl font-extrabold mt-8"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Let's Connect
          </motion.h1>
          <Card3 variant="hidden md:block md:right-15" />
        </div>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-5 md:w-120 w-72 mx-auto mt-3"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div>
            <input
              type="text"
              name="name"
              placeholder="Nama"
              className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div>
            <textarea
              name="description"
              placeholder="Pesan"
              className="w-full p-3 h-36 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <Button type="submit" variant="bg-black">
            Submit
          </Button>
        </motion.form>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
