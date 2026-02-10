import { motion } from 'framer-motion';
import MyFavoriteTech from './myFavoriteTech';

const LTechnologies = () => {
  return (
    <div id="MyFavoriteTech">
        {MyFavoriteTech.map((tech, index) => (
            <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`techCard ${tech.type}`}>

            <div id="iconCard">{tech.icon}</div>
            <h3 id="titleCard">{tech.name}</h3>
            <p id="descCard">{tech.description}</p>
            </motion.div>
        ))}
    </div>
  );
};

export default LTechnologies;