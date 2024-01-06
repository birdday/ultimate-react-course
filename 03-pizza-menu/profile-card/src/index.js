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

function Skillset(props) {
  return (
    <div className="skill-list">
      <Skill skillName="Python" emoji="🤩" color="green" />
      <Skill skillName="Git/Github" emoji="🤩" color="green" />
      <Skill skillName="JavaScript" emoji="😄" color="green" />
      <Skill skillName="TypeScript" emoji="🙂" color="green" />
      <Skill skillName="React" emoji="🙂" color="green" />
      <Skill skillName="HTML/CSS" emoji="🙂" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.skillName}
      {props.emoji}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
