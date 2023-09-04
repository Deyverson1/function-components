// import ClassComponent from "./components/ClassComponent";
// import FuncComponent from "./components/FuncComponent";
// import { Fragment } from "react";
import { Container, Typography } from "@mui/material";
import FormSignUp from "./components/FormSignUp";


function App() {
  return (
    <Container component="section" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">Formulario registro</Typography>
      <FormSignUp/>
    </Container>
  );
}

export default App;
