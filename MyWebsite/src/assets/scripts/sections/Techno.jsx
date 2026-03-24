import { useState, useEffect } from "react";
import myTechnologies from "../atoms/myTechs";

const mainIconFolder = "src/assets/icons/";

const techGroups = [
  "Languages",
  "IDEs & Editors",
  "Libraries & Frameworks",
  "OS",
  "Databases",
  "AI",
  "Browsers",
  "Other",
];

const Techno = () => {
  const [activeTab, setActiveTab] = useState(techGroups[0]);

  useEffect(() => {
    myTechnologies.forEach((tech) => {
      const img = new Image();
      img.src = `/${mainIconFolder}${tech.file}`;
    });
  }, []);

  const currentTechs = myTechnologies.filter((tech) => tech.type === activeTab);

  return (
    <div className="techCardContainer">

      <div className="techCardHeader">
        {techGroups.map((x) => {

          const count = myTechnologies.filter((tech) => tech.type === x).length;
          if (!x) return null;

          return (
            <button
              key={x}
              className={`tab ${activeTab === x ? "active" : ""}`}
              onClick={() => setActiveTab(x)}
            >
              {x}
              <span className="badge">{count}</span>
            </button>
          );
        })}
      </div>

      <div className="techCardGrid">
        {currentTechs.map((tech) => (
          <a
            key={tech.file}
            href={tech.src}
            target="_blank"
            rel="noopener noreferrer"
            className="techCardE"
          >

              <div 
                className="techCardIconBox"
                style={tech.innerColor ? { backgroundColor: tech.innerColor } : {}}
              >
                <img
                  src={`/${mainIconFolder}${tech.file}`}
                  className="techCardIcon"
                />
              </div>
            {/* <span className="">
              {tech.name || tech.file.split(".")[0]}
            </span> */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Techno;