import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../../styles";
import Earth from "./canvas/Earth";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {};

  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse 
    flex gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p
          className={`${styles.sectionSubText} bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... `}
        >
          Get in Touch
        </p>
        <h3
          className={`${styles.sectionHeadText} bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... `}
        >
          Contact.
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8 "
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handlechange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 
             placeholder:text-secondary text-white rounded-lg 
             outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handlechange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 
             placeholder:text-secondary text-white rounded-lg 
             outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handlechange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 
             placeholder:text-secondary text-white rounded-lg 
             outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 
           outline-none w-fit text-white font-bold 
           shadow-md shadow-primary rounded-xl"
          >
            {loading ? "sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <Earth />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
