import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// import { Container, Row, Col, Button, Card } from "react-bootstrap";


//#region Schema
// Esquema de validación con Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email inválido')
    .required('El email es requerido'),
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es requerida')
});

//#endregion

const Login =() => {




    
    return(
        <>
       Hello Login
        </>
    )
};


export default Login;