import { motion } from "framer-motion";

const GradientBackground = () => {
  return (
    <motion.div
      className="w-full h-screen"
      style={{
        background: "linear-gradient(135deg, #2563eb, #1d4ed8)",
        backgroundSize: "400% 400%",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"], // Gradient moves horizontally
      }}
      transition={{
        duration: 8,
        ease: "easeInOut",
        repeat: Infinity, // Animation repeats infinitely
      }}
    >
      <div className="flex justify-center items-center h-full">
        <h1 className="text-white text-4xl font-bold">PayTM</h1>
      </div>
    </motion.div>
  );
};

export default GradientBackground;
