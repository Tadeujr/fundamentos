import Navegador from "../components/Navegador";

export default function Inicio() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      <Navegador texto="Estiloso" destino="/estiloso" />
      <Navegador texto="Exemplo" destino="/exemplo" cor="#9400d3" />
      <Navegador texto="JSX" destino="/teste" cor="crimson" />
      <Navegador texto="Navegação #01" destino="/navegacao" cor="green" />
      <Navegador texto="Navegação #02" destino="/cliente/sp-2/123" cor="blue" />
      <Navegador texto="Componente com Estado" destino="/estado" cor="pink" />
      <Navegador texto="Integraçao com API #01" destino="/integracao_1" cor="yellow" />
      <Navegador texto="Conteúdo estático" destino="/estatico" cor="#fa054a" />
      <Navegador texto="Conteúdo estático API" destino="/estaticoApi" cor="#fa048a" />
    </div>
  );
}
