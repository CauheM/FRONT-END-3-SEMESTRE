import Contato from "./ExercicioEight"

function Contatos(){
    const LContatos = [
        {
            nome : "Joao",
            telefone: 93932935,
            email: "oasksa@hhto.com"
        },
        {
            nome : "Julio",
            telefone: 93934935,
            email: "eunseu@hhto.com"
        },
        {
            nome : "Cauhê",
            telefone: 94554534,
            email: "uhe@hhto.com"
        },
        {
            nome : "Mario",
            telefone: 939234235,
            email: "pocolho@hhto.com"
        },
        {
            nome : "Torolho",
            telefone: 93939324,
            email: "oadsasa@hhto.com"
        },
    ]

    return(
        LContatos.map((c) => {
            return(
            <Contato
            Nome = {c.nome}
            Telefone = {c.telefone}
            Email = {c.email}
            />
            )
        })
    )
}

export default Contatos