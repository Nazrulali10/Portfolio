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
         <form onSubmit={sendEmail} className="bg-gray-900 flex-col gap-6 text-white w-full flex px-4 md:px-18 py-15 rounded-2xl">
             <h2 className="text-3xl flex w-full justify-center">Contact Me</h2>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 px-4 rounded-xl bg-gray-800 text-sm focus:outline-none focus:border focus:border-sky-500"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-xl px-4 bg-gray-800 text-sm focus:outline-none focus:border focus:border-sky-500"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 px-4 rounded-xl bg-gray-800 h-32 text-sm focus:outline-none focus:border focus:border-sky-500"
          value={form.message}
          onChange={handleChange}
          required
        />
<div className="w-full justify-center flex">
     <button
          type="submit"
          className="bg-sky-600 hover:bg-sky-700 text-white text-sm w-32 px-2 py-2 justify-center rounded-lg "
        >
          Send Message
        </button>
</div>
       
      </form>

      </motion.div>
     
    
  );
}
