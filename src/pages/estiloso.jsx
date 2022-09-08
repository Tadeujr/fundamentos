import style from "../styles/Estiloso.module.css";

import Layout from "../components/Layout";

export default function Estiloso() {
  return (
    <Layout titulo="Exemplo de CSS Modularizado">
      <div className={style.roxo}>
        <h1>Estilo Usando módulos</h1>
      </div>
    </Layout>
  );
}
