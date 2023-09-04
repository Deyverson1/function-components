import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { FormGroup, Switch, FormControlLabel } from "@mui/material";

function FormSignUp() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [prom, setProm] = useState(true);
  const [nov, setNov] = useState(false);

  const [errors, setErrors] = useState({
    name: {
      error: false,
      message: 
      "Deben ser al menos 3 caracteres",
    },
  })

  function validarNombre (nombre){
    if(nombre.length >= 3){
      return { name: { error: false, message: ''}}
    }else{
      return { name: { error: true, message: "Deben ser al menos 3 caracteres"}}
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); //se debe como tal abrir el parentesis debido a que es una funcion
        console.log({ name, lastName, email, prom, nov });
      }}
    >
      <TextField
        id="name"
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setName(e.target.value)}
        value={name}
        error={errors.name.error}
        helperText={errors.name.error ? errors.name.message : " "} //verifica si existe un error, de ser asi pasa el error.name.message, de lo contario solo pasara un string vacio
        onBlur={(e)=>{ setErrors(validarNombre(e.target.value))}}
      />
      <TextField
        id="lastName"
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="normal"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <FormGroup>
        {" "}
        {/* Todos los switches estan engrapados con el formgruop */}
        <FormControlLabel
          control={
            <Switch
              checked={prom}
              onChange={(e) => setProm(e.target.checked)}
            />
          }
          label="Promociones"
        />
        <FormControlLabel
          control={
            <Switch
              checked={nov}
              onChange={(e) => setNov(e.target.checked)}
            />
          }
          label="Novedades"
        />
      </FormGroup>

      <Button variant="contained" type="submit">
        Registrarse
      </Button>
    </form>
  );
}

export default FormSignUp;
