import { useContext, useEffect, useState } from "react";
import { StyledContact } from "./styles/StyledContact";
import { GlobalContext } from "../contexts/GlobalContext";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Alert, Button, TextField } from "@mui/material";
import { githubURL, linkedinUrl } from "../URLS/url-folder";
import axios from "axios";
import { LineWave } from "react-loader-spinner";
import { AiOutlineClose } from "react-icons/ai";

const initialState = {
  fullName: "",
  email: "",
  message: "",
}

export default function Contact(props) {
  const { render, changeRender } = useContext(GlobalContext);
  const [inputValue, setInputValue] = useState(initialState);
  const [spinnerOn, setSpinnerOn] = useState(false);
  const [successMessage, setSuccessMessage] = useState("")
  const [error, setError] = useState("");
  const inputChanger = (name, value) => {
    setInputValue({ ...inputValue, [name]: value })
  }
  const closeMessages = () => {
    setSuccessMessage("");
    setError("");
  }

  const submissionHandler = (e) => {
    e.preventDefault();
    setSpinnerOn(true);
    const trimmedAndSanitized = {
      fullName: inputValue.fullName.trim(),
      email: inputValue.email.trim(),
      message: inputValue.message.trim(),
    }
    if (trimmedAndSanitized.fullName.length < 3 || typeof trimmedAndSanitized.fullName !== "string"
      || !(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(trimmedAndSanitized.email))) {
      setError("Full name and email required")
    } else {
      axios.post("https://formspree.io/f/mqkvnnjd", trimmedAndSanitized).then(res => {
        setSuccessMessage("Thanks so much for taking the time to contact, I will respond soon!");
        setTimeout(() => {
          setSpinnerOn(false);
        }, 600);
        setError("");
        setInputValue(initialState); 
      }).catch(err => {
        setSpinnerOn(false);
        console.error(err)
      })
    }
  }


  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove("show");
          changeRender("")
        }
      })
    })
    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
  }, [changeRender])

  return (
    <StyledContact id="contact" className={render === "contact" ? "show" : "hidden"}>
      {spinnerOn ?
        <div style={{ display: 'flex', flexDirection : "columm", justifyContent: "center", alignItems: "center", height: "100vh", width: "90vw" }}>
          <h3>Sending Message</h3>
          <LineWave
            height="200"
            width="200"
            color="dodgerblue"
            ariaLabel="line-wave"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
        </div> :
        successMessage ?
          <div>
            <Alert style={{ textAlign: "center", alignItems: "center", width : "90vw" }} severity="success">{successMessage}
              <AiOutlineClose onClick={() => closeMessages()} style={{ height: "1.5rem", width: "1.5rem", cursor: "pointer", marginLeft : "2rem" }} /></Alert>
          </div> :
          <>
            <h3>Want To Reach Out To Me?</h3>
            <form onSubmit={(e) => submissionHandler(e)} id="form">
              <div >
                <TextField
                  sx={{ input: { color: 'white' } }}
                  InputLabelProps={{ style: { color: "white" } }} name="fullName"
                  onChange={(e) => inputChanger(e.target.name, e.target.value)}
                  value={inputValue.fullName}
                  id="standard-basic" className="inputName" label="Full Name" variant="standard" /></div>
              <div >
                <TextField
                  sx={{ input: { color: 'white' } }}
                  InputLabelProps={{ style: { color: "white" } }} name="email"
                  onChange={(e) => inputChanger(e.target.name, e.target.value)}
                  value={inputValue.email}
                  className="inputName" id="standard-basic" label="Email" variant="standard" /></div>
              <div >
                <TextField
                  name="message"
                  sx={{ textarea: { color: 'white' } }}
                  onChange={(e) => inputChanger(e.target.name, e.target.value)}
                  value={inputValue.message}
                  InputLabelProps={{ style: { color: "white" } }}
                  className="inputName mess" label="Message"
                  id="outlined-multiline-static" multiline
                  rows={4}
                />
              </div>
              <div id="socialMediaIcons">
                <a href={linkedinUrl} target="_blank" rel="noreferrer"><AiFillLinkedin className="socials" /></a>
                <a href={githubURL} target="_blank" rel="noreferrer"><AiFillGithub className="socials" /></a>
              </div>
              <Button onClick={(e) => submissionHandler(e)} id="submissionButton" variant="contained">Send</Button>
            </form>
            {error && <Alert style={{ marginTop: "3rem" }} severity="error">{error}</Alert>}</>}
    </StyledContact>
  )
}