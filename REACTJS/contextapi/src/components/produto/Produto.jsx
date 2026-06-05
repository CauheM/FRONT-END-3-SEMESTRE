import { useContext, useState } from "react";
import { ProdutoContext } from "../../context/produtoContext";

const Produtos = () => {
  const { produtos, addProduto } = useContext(ProdutoContext);

  const [novoProduto, setNovoProduto] = useState("");

  const Cadastrar = async () => {
    const nome = novoProduto.trim()
    if (!nome) return
    try {
      await addProduto(nome)
      setNovoProduto("")
    } catch (error) {
      alert("Erro ao cadastrar produto. Veja console.")
    }
  }

  return (
    <div>
      <h2>Produtos</h2>

      <div>
        <input
          type="text"
          placeholder="Digite o nome do produto"
          value={novoProduto}
          onChange={(e) => setNovoProduto(e.target.value)}
        />

        <button onClick={Cadastrar}>Cadastrar produto</button>
      </div>

      <h2>Produtos Cadastrados</h2>
      <ul>  
        {produtos && produtos.length > 0 ? (
          produtos.map((p, id) => <li key={id}>{p.nome}</li>)
        ) : (
          <li>Nenhum produto cadastrado</li>
        )}
      </ul>
    </div>
  );
};

export default Produtos;