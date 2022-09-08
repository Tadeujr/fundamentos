import Layout from "../components/Layout";

export default function Jsx() {
  const titulo = <h1>JSX é um conceito Central</h1>;

  function subtitulo(){
    return <h2>{"muito legal".toUpperCase()}</h2>
  }
  return (
    <>
      <Layout titulo="Entendendo o jsx">
        <div>
            {titulo}
            {subtitulo()}
            <p>{JSON.stringify({nome:"joão",idada:30})}</p>
        </div>

      </Layout>
    </>
  );
}
