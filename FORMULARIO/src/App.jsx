import './App.css'
import { React, useState, useRef } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });

  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const fileInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about
    );
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name</label>
          <input 
            type="text" 
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />

          <label htmlFor="lastname">Last Name</label>
          <input 
            type="text" 
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />

          <label htmlFor="email">Enter Email</label>
          <input 
            type="email" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />

          <label htmlFor="contact">Contact</label>
          <input 
            type="tel" 
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Mobile Number"
            required 
          />

          <fieldset>
            <legend>Gender</legend>
            <input 
              type="radio" 
              name="gender"
              value="male" 
              id="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="male">Male</label><br />
            <input 
              type="radio" 
              name="gender" 
              value="female"
              id="female" 
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="female">Female</label><br />
            <input 
              type="radio" 
              name="gender" 
              value="other"
              id="other"
              checked={gender === "other"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="other">Other</label>
          </fieldset>

          <label>Your best Subject</label>
          <input 
            type="checkbox" 
            id="english"
            checked={subjects.english}
            onChange={() => handleSubjectChange("english")}
          />
          <label htmlFor="english">English</label><br />
          <input 
            type="checkbox" 
            id="maths"
            checked={subjects.maths}
            onChange={() => handleSubjectChange("maths")}
          />
          <label htmlFor="maths">Maths</label><br />
          <input 
            type="checkbox" 
            id="physics"
            checked={subjects.physics}
            onChange={() => handleSubjectChange("physics")}
          />
          <label htmlFor="physics">Physics</label>

          <label htmlFor="file">Upload Resume</label>
          <input 
            type="file" 
            id="file"
            ref={fileInputRef}
            onChange={(e) => setResume(e.target.files[0])}
            required 
          />

          <label htmlFor="url">Enter URL</label>
          <input 
            type="url" 
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
            required 
          />

          <label htmlFor="select">Select your choice</label>
          <select 
            id="select"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            required
          >
            <option value="" disabled>Select your Ans</option>
            <optgroup label="Beginners">
              <option value="1">HTML</option>
              <option value="2">CSS</option>
              <option value="3">JavaScript</option>
            </optgroup>
            <optgroup label="Advance">
              <option value="4">React</option>
              <option value="5">Node</option>
              <option value="6">Express</option>
              <option value="7">MongoDB</option>
            </optgroup>
          </select>

          <label htmlFor="about">About</label>
          <textarea 
            id="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="About yourself"
            required
          ></textarea>

          <button type="reset" onClick={handleReset}>
            Reset
          </button>
          <button type="submit">
            Submit
          </button>
        </form>
      </fieldset>
    </div>
  );
}

export default App;
