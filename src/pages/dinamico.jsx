import Layout from "../components/Layout";

function Dinamico({ data }) {
  
    return (
    <Layout titulo="Conteudo estatico API">
      <>{data.nome}</>
    </Layout>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API `https://api.chucknorris.io/jokes/random
  const res = await fetch(`http://localhost:3000/api/estatico`)
    .then((res) => res.json())
    .then((cliente) => {
      return cliente;
    })
   
  const data = res;
  // Pass data to the page via props
  return { props: { data } };
}

export default Dinamico;
