import { useState } from "react";
import Layout from "../components/Layout";

export default function Estado() {
  const [numero,setNumero] = useState(0);//React hooks
//   let numero = state[0];
//   let alterarnumero = state[1];


  function incrementar() {
    setNumero(numero + 1);
  }
  return (
    <Layout titulo="Componente com Estado">
      <span>{numero}</span>
      <button onClick={incrementar}>Incrementar</button>
    </Layout>
  );
}
