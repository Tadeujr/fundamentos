import { useEffect, useState } from "react";
import Layout from "../components/Layout";

export default function EstaticoApi(props) {
  const [cliente, setCliente] = useState();

  async function getCliente() {
    const res = await fetch(`http://localhost:3000/api/estatico`)
      .then((res) => res.json())
      .then((cliente) => {
        return cliente;
      })
      .finally((e) => {
        console.log(e);
      });

    setCliente(res);
  }

  useEffect(() => {
    getCliente();
  }, []);

  const t = JSON.stringify(cliente);
  

  return (
    <Layout titulo="Conteudo estatico API">
      <>{t}</>
    </Layout>
  );
}
