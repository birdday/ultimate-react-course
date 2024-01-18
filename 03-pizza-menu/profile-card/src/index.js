import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  const introText = "Placeholder Intro.";
  const skills = ["JavaScript", "Python", "Git/Github"];

  return (
    <div className="card">
      <Avatar photo="profile-pic.jpg" />
      <div className="data">
        <Intro name="Brian A. Day" introText={introText} />
        <Skillset className="skill-list" skills={skills} />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.photo} alt={props.name} />;
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.introText}</p>
    </div>
  );
}

function levelToEmoji(level) {
  const emojiDict = {
    beginner: " 🙂",
    intermediate: " 😄",
    advanced: " 🥳",
  };

  return emojiDict[level];
}

function Skillset(props) {
  const skillList = [
    { skill: "Python", level: "advanced", color: "green" },
    { skill: "Git/Github", level: "advanced", color: "green" },
    { skill: "JavaScript", level: "intermediate", color: "green" },
    { skill: "TypeScript", level: "intermediate", color: "green" },
    { skill: "React", level: "beginner", color: "green" },
    { skill: "HTML/CSS", level: "beginner", color: "green" },
  ];

  return (
    <ul className="skill-list">
      {skillList.map((skill) => (
        // <Skill skillObj={skill} key={skill.name} />
        <SkillAlt
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.name}
        />
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  return (
    <div className="skill" style={{ backgroundColor: skillObj.color }}>
      {skillObj.skill}
      {levelToEmoji(skillObj.level)}
    </div>
  );
}

function SkillAlt({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      {skill}
      {level === "beginner" && " 🙂"}
      {level === "intermediate" && " 😄"}
      {level === "advanced" && " 🥳"}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
