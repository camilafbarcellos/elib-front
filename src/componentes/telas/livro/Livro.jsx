import { useState, useEffect } from "react";
import LivroContext from "./LivroContext";
import { getEditorasAPI }
    from "../../../servicos/EditoraServico";
import {
    getLivrosAPI, getLivroPorCodigoAPI,
    deleteLivroPorCodigoAPI, cadastrarLivroAPI
} from "../../../servicos/LivroServico"
import Tabela from "./Tabela";
import Carregando from "../../comuns/Carregando";
import Form from "./Form";
import WithAuth from "../../../seguranca/WithAuth";
import { useNavigate } from 'react-router-dom';
import { getAutoresAPI } from "../../../servicos/AutorServico";

function Livro() {

    let navigate = useNavigate();

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [listaObjetos, setListaObjetos] = useState([]);
    const [listaEditoras, setListaEditoras] = useState([]);
    const [listaAutores, setListaAutores] = useState([]);
    const [editar, setEditar] = useState(false);
    const [objeto, setObjeto] = useState({
        codigo: "", titulo: "",
        data_cadastro: new Date().toISOString().slice(0, 10),
        editora: "", autor: "", ano: ""
    });
    const [carregando, setCarregando] = useState(true);

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({
            codigo: "", titulo: "",
            data_cadastro: new Date().toISOString().slice(0, 10),
            editora: "", autor: "", ano: ""
        });
    }

    const editarObjeto = async codigo => {
        try {
            setObjeto(await getLivroPorCodigoAPI(codigo));
            setEditar(true);
            setAlerta({ status: "", message: "" });
        } catch (err) {
            window.location.reload();
            navigate("/login", { replace: true });
        }
    }

    const acaoCadastrar = async e => {
        e.preventDefault();
        let metodo = editar ? "PUT" : "POST";
        try {
            let retornoAPI = await cadastrarLivroAPI(metodo, objeto);
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            setObjeto(retornoAPI.objeto);
            if (!editar) {
                setEditar(true);
            }
        } catch (err) {
            window.location.reload();
            navigate("/login", { replace: true });
        }
        recuperaLivros();
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    const recuperaLivros = async () => {
        try {
            setCarregando(true);
            setListaObjetos(await getLivrosAPI());
            setCarregando(false);
        } catch (err) {
            window.location.reload();
            navigate("/login", { replace: true });
        }
    }

    const recuperaEditoras = async () => {
        try {
            setListaEditoras(await getEditorasAPI());
        } catch (err) {
            window.location.reload();
            navigate("/login", { replace: true });
        }
    }

    const recuperaAutores = async () => {
        try {
            setListaAutores(await getAutoresAPI());
        } catch (err) {
            window.location.reload();
            navigate("/login", { replace: true });
        }
    }

    const remover = async codigo => {
        if (window.confirm('Deseja remover este objeto?')) {
            try {
                let retornoAPI = await deleteLivroPorCodigoAPI(codigo);
                setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
                recuperaLivros();
            } catch (err) {
                window.location.reload();
                navigate("/login", { replace: true });
            }
        }
    }

    useEffect(() => {
        recuperaLivros();
        recuperaEditoras();
        recuperaAutores();
    }, []);


    return (
        <LivroContext.Provider value={{
            alerta, listaObjetos, remover,
            objeto, editar, acaoCadastrar, handleChange, novoObjeto, editarObjeto,
            listaEditoras, listaAutores
        }}>
            <Carregando carregando={carregando}>
                <Tabela />
            </Carregando>
            <Form />

        </LivroContext.Provider>
    )
}

export default WithAuth(Livro);
