// Importa o arquivo de estilos CSS
import './App.css'

// Importa React e os hooks useState e useRef
import { React, useState, useRef } from "react";

function App() {
  // Cria estados para armazenar os dados do formulário
  const [firstName, setFirstName] = useState(""); // Armazena o primeiro nome digitado
  const [lastName, setLastName] = useState(""); // Armazena o sobrenome digitado
  const [email, setEmail] = useState(""); // Armazena o email digitado
  const [contact, setContact] = useState(""); // Armazena o número de telefone digitado
  const [gender, setGender] = useState("male"); // Armazena o gênero selecionado (valor padrão é "male")

  // Armazena as matérias selecionadas usando um objeto
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });

  const [resume, setResume] = useState(""); // Armazena o arquivo de currículo selecionado
  const [url, setUrl] = useState(""); // Armazena o link digitado (URL)
  const [selectedOption, setSelectedOption] = useState(""); // Armazena a opção escolhida no menu dropdown
  const [about, setAbout] = useState(""); // Armazena o texto sobre o usuário

  // Cria uma referência para o input de arquivo (resume)
  const fileInputRef = useRef(null);

  // Função chamada quando o formulário é enviado
  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    // Mostra os dados digitados no console
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

  // Função para alternar o valor (marcado/desmarcado) das matérias
  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,        // Mantém os valores anteriores
      [sub]: !prev[sub], // Inverte o valor da matéria clicada (true → false ou false → true)
    }));
  };

  // Função que limpa todos os campos do formulário
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
    if (fileInputRef.current) fileInputRef.current.value = null; // Limpa o campo de arquivo também
  };

  // Conteúdo que será exibido na tela
  return (
    <div className="App">
      <h1>Form in React</h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          {/* Campo de primeiro nome */}
          <label htmlFor="firstname">First Name</label>
          <input 
            type="text" 
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />

          {/* Campo de sobrenome */}
          <label htmlFor="lastname">Last Name</label>
          <input 
            type="text" 
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />

          {/* Campo de e-mail */}
          <label htmlFor="email">Enter Email</label>
          <input 
            type="email" 
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            required
          />

          {/* Campo de telefone */}
          <label htmlFor="contact">Contact</label>
          <input 
            type="tel" 
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Mobile Number"
            required 
          />

          {/* Campo de seleção de gênero */}
          <fieldset>
            <legend>Gender</legend>
            {/* Opção masculino */}
            <input 
              type="radio" 
              name="gender"
              value="male" 
              id="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="male">Male</label><br />

            {/* Opção feminino */}
            <input 
              type="radio" 
              name="gender" 
              value="female"
              id="female" 
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="female">Female</label><br />

            {/* Opção outro */}
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

          {/* Campo de seleção de matérias favoritas */}
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

          {/* Upload de arquivo (currículo) */}
          <label htmlFor="file">Upload Resume</label>
          <input 
            type="file" 
            id="file"
            ref={fileInputRef}
            onChange={(e) => setResume(e.target.files[0])}
            required 
          />

          {/* Campo de URL */}
          <label htmlFor="url">Enter URL</label>
          <input 
            type="url" 
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
            required 
          />

          {/* Menu dropdown (select) */}
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

          {/* Campo de texto grande (textarea) */}
          <label htmlFor="about">About</label>
          <textarea 
            id="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            placeholder="About yourself"
            required
          ></textarea>

          {/* Botões de reset e submit */}
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
