// se for clier pasta tem que por index
export default function handler(req, res) {
    res.status(200).json({
     id: 3,
      nome: "Maria",
      email: "maria@hotmail",
    });
  }