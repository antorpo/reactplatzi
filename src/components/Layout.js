import React from "react";
import Navbar from "./Navbar";

function Layout(props) {
  /* Para agregar contenido interno a la etiqueta
    <Layout />, como bien dice children (hijos).
  */
  const children = props.children;

  /* React.Fragment -> Permite devolver mas de un elemento, 
     ya que solo podemos devolver un elemento dentro del return.
  */
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
}

export default Layout;
