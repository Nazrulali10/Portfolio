"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { motion } from 'framer-motion'

export default function Email() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs.send(
      "service_r02mvha",
      "template_lao64m5",
      form,
      "_dpMHnZr-hh3cn4oI"
    )
      .then(() => {
        toast.success("Message sent successfully!")
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => toast.error(err));
  }

  return (


    <motion.div id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className=" w-full flex px-4 md:px-110 flex-col justify-center items-center pb-20 mt-10">
      <form onSubmit={sendEmail} className="bg-slate-50 border border-slate-100 flex-col gap-6 text-gray-900 w-full flex px-4 md:px-18 py-15 rounded-2xl shadow-sm">
        <h2 className="text-3xl flex w-full justify-center">Contact Me</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 px-4 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:border focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-xl px-4 bg-white border border-slate-200 text-sm focus:outline-none focus:border focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 px-4 rounded-xl bg-white border border-slate-200 h-32 text-sm focus:outline-none focus:border focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          value={form.message}
          onChange={handleChange}
          required
        />
        <div className="w-full justify-center flex">
          <button
            type="submit"
            className="bg-amber-600 hover:bg-amber-700 text-white text-sm w-32 px-2 py-2 justify-center rounded-lg shadow-md transition-all active:scale-95"
          >
            Send Message
          </button>
        </div>

      </form>

    </motion.div>


  );
}
