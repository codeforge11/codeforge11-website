import { motion } from 'framer-motion';
import MyFavoriteTech from './myFavoriteTech';

const lTechnologies = () => {
  return (
    <div className="MyFavoriteTech">
        {MyFavoriteTech.map((tech, index) => (
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                id={`${tech.type}`}>

                <div className="iconCard"><img src={tech.iconSRC}/></div>
                <h3 className="titleCard">{tech.name}</h3>
                <p className="descCard">{tech.description}</p>
            </motion.div>
        ))}
    </div>
  );
};

export default lTechnologies;