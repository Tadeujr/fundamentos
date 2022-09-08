import Cabecalho from "../components/Cabecalho";
import React from "react";
import Layout from "../components/Layout";
export default function Exemplo() {
  return (
    <>
      <Layout titulo="Usando componentes">
        <Cabecalho titulo="NExj.js & React" />
        <Cabecalho titulo="Aprender Next na Pratica" />
      </Layout>
    </>
  );
}
