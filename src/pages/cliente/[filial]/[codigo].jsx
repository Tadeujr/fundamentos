import Layout from "../../../components/Layout"
import { useRouter } from "next/router";


export default function ClientePorCodigo(){
    const router = useRouter();
    return(
        <Layout titulo="Navegação Dinâmica">
            <div>Código = {router.query.codigo}</div>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}


// export default function handler(req,res){

//     if(req.method ==="GET"){
//         handleGet(req,res)
//     }else{
//         res.status(405).send()
//     }


//     function handleGet(req,res){
//         res.status(200).json({
//             id:3,
//             nome:'Maria',
//             email: "maria@hotmail"
//         })
//     }
// }