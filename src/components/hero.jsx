import { motion } from "framer-motion";
import "../styles/hero.scss";

const hero = () => {
return (
    <motion.section
        className="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}    
        transition={{ duration: 1 }}
    >
        <div className="hero-content">
            <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Hi, I'm ARBEEL WANI
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
            >
                Full-Stack Developer | Designer | Tech Enthusiast
            </motion.p>
            {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
            >
                View My Work
            </motion.button> */}
        </div>
        <img src="/hero.png" alt="Hero" className="hero-logo" />
    </motion.section>
);
};

export default hero;