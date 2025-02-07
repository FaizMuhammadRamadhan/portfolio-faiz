import { motion } from "framer-motion";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Certi from "./Certi";
const Cardlist = [
  {
    id: 1,
    title: "Web Developer",
    children:
      "I have a strong interest in technology, and my learning approach begins with understanding the fundamentals before applying them directly for better comprehension. Currently, I am focused on web development, starting with frontend technologies such as HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, and React.js. On the backend, I have studied Laravel and plan to deepen my knowledge of databases. I have worked on several web development projects as part of my college assignments, including: We Listen You (built with Laravel, Tailwind CSS, and MySQL), SmartWardrobe (built with Laravel and MySQL), Personal Notes App (built with React.js and Tailwind CSS) Additionally, I have designed a UI using Figma for a Student Creativity Program (PKM) project, which focused on an event ticket and merchandise sales platform called MerchEvent. I believe that gaining hands-on experience in the professional world will provide me with valuable insights and skills that cannot be acquired through self-study alone. My goal is to excel in web development and make meaningful contributions to the industry while continuously expanding my knowledge.",
  },
];

const Content = () => {
  return (
    <section className="pt-80 md:pt-30 lg:pt-20">
      <div className="relative mx-4 md:mx-8 md:ml-12">
        {/* Section Title */}
        <div
          id="Experience"
          className="relative pt-20 md:pt-50 top-[950px] md:top-[700px]"
        >
          <motion.h1
            className="text-4xl md:pt-20 lg:pt-20 font-extrabold md:text-6xl md:-ml-8 lg:ml-0.5 lg:text-6xl block drop-shadow-lg italic md:absolute inset-0 text-black stroke-2 stroke-black"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <span className="text-teal-500 block">MY</span>EXPERIENCE
          </motion.h1>
          <motion.hr
            className="border lg:block w-70 right-0 -mt-11 md:-mt-16 md:w-160 lg:w-200 absolute lg:right-0 lg:-mt-[65px]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          />
        </div>

        {/* Cards */}
        <motion.div
          className="relative mt-240 md:w-150 md:-ml-6 md:mt-180 lg:ml-[0.4px] lg:w-220 lg:mt-180"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {Cardlist.map((Cards) => (
            <Card key={Cards.id} title={Cards.title} variant="mb-3">
              {Cards.children}
            </Card>
          ))}
        </motion.div>
        <Card3 variant="hidden md:block md:right-10 md:top-230 lg:block lg:right-15 lg:top-220" />

        <div className="mt-30 pb-5">
          <Certi />
        </div>
      </div>
    </section>
  );
};

export default Content;
