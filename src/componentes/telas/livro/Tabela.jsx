import { useContext } from "react";
import LivroContext from "./LivroContext";
import Alerta from "../../comuns/Alerta";

function Tabela() {

    const { alerta, listaObjetos, remover, novoObjeto, editarObjeto } =
        useContext(LivroContext);

    console.log(listaObjetos);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Livros</h1>
            <Alerta alerta={alerta} />
            <button type="button" className="btn btn-primary"
                data-bs-toggle="modal" data-bs-target="#modalEdicao"
                onClick={() => novoObjeto()}>
                Novo <i className="bi bi-file-plus"></i>
            </button>
            {listaObjetos.length === 0 && <h1>Nenhum registro encontrado</h1>}
            {listaObjetos.length > 0 &&
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" style={{ textAlign: 'center' }}>Ações</th>
                                <th scope="col">Código</th>
                                <th scope="col">Título</th>
                                <th scope="col">Autor</th>
                                <th scope="col">Editora</th>
                                <th scope="col">Ano</th>
                                <th scope="col">Data Cadastro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listaObjetos.map(objeto => (
                                    <tr key={objeto.codigo}>
                                        <td align="center">
                                            <button className="btn btn-info"
                                                title="Editar"
                                                data-bs-toggle="modal"
                                                data-bs-target="#modalEdicao"
                                                onClick={() => editarObjeto(objeto.codigo)} >
                                                <i className="bi bi-pencil-square"></i>
                                            </button>
                                            <button className="btn btn-danger"
                                                title="Remover"
                                                onClick={() =>
                                                    remover(objeto.codigo)}>
                                                <i className="bi bi-trash"></i>
                                            </button>
                                        </td>
                                        <th scope="row">{objeto.codigo}</th>
                                        <td>{objeto.titulo}</td>
                                        <td>{objeto.autor_nome}</td>
                                        <td>{objeto.editora_nome}</td>
                                        <td>{objeto.ano}</td>
                                        <td>{objeto.data_cadastro}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            }

        </div>
    )
}

export default Tabela;
