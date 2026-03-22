import { motion } from 'framer-motion';

const projects = [
    {name:"SQLMason" ,
        desc:"Simple and easy-to-use database management tool.",
        iconLink:"", 
        src:"https://github.com/codeforge11/SQLMason", 
        techs:"GO QT"},
    {name:"CactuDash" ,
        desc:"Minimalistic and highly optimized dashboard for efficient server management, including Docker and Docker Compose. ",
        iconLink:"", 
        src:"https://github.com/codeforge11/CactuDash", 
        techs:"GO GIN JS"},
    {name:"TFT-DesktopClock" ,
        desc:"Simple digital desk clock built with Arduino and a TFT display using appropriate libraries.",
        iconLink:"", 
        src:"https://github.com/codeforge11/TFT-DesktopClock", 
        techs:"ARDUINO CPP"},
]

const myProject = ()=>{
    return(<>
            {projects.map((x) => (
                <motion.div
                    key={x.name}
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.01, y: -5 }}
                >
                    <div class="projectBox" style={{ display: "flex" }} onClick={() => window.open(x.src, "_blank")}>
        
                        <div class="projectCenter">
                            <h1>{x.name}</h1>                          
                            <p>{x.desc}</p>
                            <p  style={{color:'lightSkyBlue'}}>{x.techs}</p>
                    </div>
                </div>
            </motion.div>
            ))}
        </>
    );
}

export default myProject