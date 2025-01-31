import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";

export const Experience = () => {
  React.useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes snakeAnimation {
        0% { 
          border-image-source: linear-gradient(90deg, #04152d, transparent); 
          border-image-slice: 1; 
          border-image-width: 5px; 
          box-shadow: 0 0 15px 5px rgba(4, 21, 45, 0.6); 
        }
        25% { 
          border-image-source: linear-gradient(180deg, #04152d, transparent); 
          border-image-slice: 1; 
          border-image-width: 5px; 
          box-shadow: 0 0 15px 5px rgba(4, 21, 45, 0.6); 
        }
        50% { 
          border-image-source: linear-gradient(270deg, #04152d, transparent); 
          border-image-slice: 1; 
          border-image-width: 5px; 
          box-shadow: 0 0 15px 5px rgba(4, 21, 45, 0.6); 
        }
        75% { 
          border-image-source: linear-gradient(360deg, #04152d, transparent); 
          border-image-slice: 1; 
          border-image-width: 5px; 
          box-shadow: 0 0 15px 5px rgba(4, 21, 45, 0.6); 
        }
        100% { 
          border-image-source: linear-gradient(90deg, #04152d, transparent); 
          border-image-slice: 1; 
          border-image-width: 5px; 
          box-shadow: 0 0 15px 5px rgba(4, 21, 45, 0.6); 
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Define inline styles
  const listStyle = {
    listStyleType: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: "600px",
    gap: "20px",
  };

  const skillStyle = {
    border: "5px solid transparent", // Create space for the border effect
    margin: "0.5rem",
    padding: "1rem",
    width: "100px", // Ensure width and height are equal
    height: "70px", // Ensure width and height are equal
    display: "flex",
    maxHeight: "90px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flex: "1 1 120px",
    maxWidth: "150px",
    position: "relative",
    overflow: "hidden",
    // borderImageSource: "linear-gradient(90deg, red, blue, green)",
    borderImageSlice: 1,
    borderImageWidth: "5px",
    animation: "snakeAnimation 7s infinite linear",
    // boxShadow: "0 0 15px rgba(70, 0, 0, 0.6)", // Default to red glow
  };

  const skillIconContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "0.5rem",
    borderRadius: "100%",
  };

  const skillIconStyle = {
    fontSize: "45px",
    color: "white",
  };

  const skillTextStyle = {
    fontSize: "0.9rem",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  // Helper function to get box-shadow color based on the animation phase
  const getBoxShadowColor = (animationProgress) => {
    const color = "rgba(4, 21, 45, 0.6)"; // #04152d in RGBA format

    return color;
  };

  // State for hover effect
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>
        Experience{" "}
        {/* <Link to="/qualifications" className={styles.linkStyle}>
          Know About Anubhab's Qualifications
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
            className={styles.arrowIcon}
            style={{ marginLeft: "8px" }} // Add some margin to space out the icon
          >
            <path
              fillRule="evenodd"
              d="M1.5 8a.5.5 0 0 1 .5-.5h10.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 1 1-.708-.708L12.793 8.5H2a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </Link> */}
      </h2>

      <div className={styles.content}>
        <ul style={listStyle}>
          {skills.map((skill, id) => (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative", // Ensure the animation stays within the div
              }}
              key={id}
            >
              <li
                style={{
                  ...skillStyle,
                }}
                onMouseEnter={() => setHoveredIndex(id)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div style={skillIconContainerStyle}>
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                    style={{ width: "60px" }}
                  />
                </div>
              </li>
              <p style={skillTextStyle}>{skill.title}</p>
            </div>
          ))}
        </ul>
        {/* <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div> */}
        <ul className={styles.history}>
          {history.map((historyItem, id) => (
            <li key={id} className={styles.historyItem}>
              <div style={{ display: "flex", height: "100%" }}>
                <div style={{ height: "fit" }}>
                  <img
                    style={{ borderRadius: "100%" }}
                    className={styles.historyImg}
                    src={getImageUrl(historyItem.imageSrc)}
                    alt={`${historyItem.organisation} Logo`}
                  />
                </div>
              </div>
              <div className={styles.historyItemDetails}>
                <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                <ul>
                  {historyItem.experiences.map((experience, id) => (
                    <li key={id}>{experience}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
