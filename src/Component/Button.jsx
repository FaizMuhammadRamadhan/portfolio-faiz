import { motion } from "framer-motion";

const Button = ({
  type = "button",
  variant = "bg-black",
  children = ".....",
}) => {
  return (
    <motion.button
      type={type}
      className={`w-full ${variant} text-white py-3 rounded-lg font-semibold`}
      whileHover={{
        scale: 1.1,
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.5)",
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
