import { useContext, useEffect } from "react";
import Alerta from "../../comuns/Alerta";
import LivroContext from "./LivroContext";

function Form() {
    const { objeto, handleChange, acaoCadastrar, alerta, listaAutores, listaEditoras } = useContext(LivroContext);

    useEffect(() => {
        'use strict';

        const forms = document.querySelectorAll('.needs-validation');

        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add('was-validated');
            }, false);
        });
    }, []);

    return (
        <div className="modal fade" id="modalEdicao" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edição de Livros</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form id="formulario" onSubmit={acaoCadastrar} className="needs-validation" noValidate>
                        <div className="modal-body">
                            <Alerta alerta={alerta} />
                            <div className="mb-3">
                                <label htmlFor="txtTitulo" className="form-label">Título</label>
                                <input type="text" className="form-control" id="txtTitulo" placeholder="Informe o título" required name="titulo" value={objeto.titulo || ''} onChange={handleChange} />
                                <div className="valid-feedback">Título OK!</div>
                                <div className="invalid-feedback">Informe o título!</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="txtAno" className="form-label">Ano</label>
                                <input type="number" className="form-control" id="txtAno" placeholder="Informe o ano" required name="ano" value={objeto.ano || ''} onChange={handleChange} />
                                <div className="valid-feedback">Ano OK!</div>
                                <div className="invalid-feedback">Informe o ano!</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="selectAutor" className="form-label">Autor</label>
                                <select type="text" className="form-control" id="selectAutor" required name="autor" value={objeto.autor || ''} onChange={handleChange}>
                                    <option disabled="true" value="">Selecione o autor</option>
                                    {listaAutores.map((autor) => (
                                        <option key={autor.codigo} value={autor.codigo}>
                                            {autor.nome}
                                        </option>
                                    ))}
                                </select>
                                <div className="valid-feedback">Autor OK!</div>
                                <div className="invalid-feedback">Selecione o autor!</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="selectEditora" className="form-label">Editora</label>
                                <select type="text" className="form-control" id="selectEditora" required name="editora" value={objeto.editora || ''} onChange={handleChange}>
                                    <option disabled="true" value="">Selecione a editora</option>
                                    {listaEditoras.map((editora) => (
                                        <option key={editora.codigo} value={editora.codigo}>
                                            {editora.nome}
                                        </option>
                                    ))}
                                </select>
                                <div className="valid-feedback">Editora OK!</div>
                                <div className="invalid-feedback">Selecione a editora!</div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-success">
                                Salvar
                                <i className="bi bi-save"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
