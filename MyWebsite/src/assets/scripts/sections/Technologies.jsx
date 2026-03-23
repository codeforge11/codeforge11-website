import myTechnologies from "../atoms/myTechs";

const mainIconFolder = "src/assets/icons/";

const Technologies = () => {
    const niceTable = [...myTechnologies, ...myTechnologies];
    
    return (<>
        <div className="technologies">
            <div className="technologiesContainer">
                <div className="technologiesScroll">
                    {niceTable.map((tech, index) => (
                     <a className="techCard" key={index} href={tech.src} target="_blank" rel="noopener noreferrer" >
                            
                        <div className="iconBox">
                            <img src={`/${mainIconFolder}${tech.file}`} className="techIcon" />
                        </div>
                     </a>
                    ))}
                </div>
            </div>
        </div>
    </>
);};

export default Technologies;