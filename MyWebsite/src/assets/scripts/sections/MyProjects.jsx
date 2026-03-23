import { motion } from 'framer-motion';

const projects = [
    {   name:"SQLMason" ,
        desc:"Simple and easy-to-use database management tool.",
        iconLink:"https://raw.githubusercontent.com/codeforge11/SQLMason/refs/heads/main/src/public/logomark.png", 
        src:"https://github.com/codeforge11/SQLMason", 
        techs:"GO QT"
    },
    {   name:"CactuDash" ,
        desc:"Minimalistic and highly optimized dashboard for efficient server management, including Docker and Docker Compose. ",
        iconLink:"https://raw.githubusercontent.com/codeforge11/CactuDash/master/server/static/img/logomark.svg", 
        src:"https://github.com/codeforge11/CactuDash", 
        techs:"GO GIN JS"
    },
    {   name:"TFT-DesktopClock" ,
        desc:"Simple digital desk clock built with Arduino and a TFT display using appropriate libraries.",
        iconLink:"", 
        src:"https://github.com/codeforge11/TFT-DesktopClock", 
        techs:"ARDUINO CPP"
    },
    {
        name:"betterLogs",
        iconLink:"",
        src: "https://github.com/codeforge11/betterLogs",
        techs: "GO",
        desc:"Lightweight and high-performance logging GO library designed for simplicity. It provides an intuitive way to generate logs and manage automated archiving with minimal resource overhead."
    },
]

const myProject = () => {
    return ( <>
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
                            <p style={{color:'lightSkyBlue'}}>{x.techs}</p>
                        </div>

                        {x.iconLink !== "" && (
                            <img src={x.iconLink} alt={x.name}/>
                        )}
                    </div>
                </motion.div>
            ))}
        </>
    );
}

export default myProject