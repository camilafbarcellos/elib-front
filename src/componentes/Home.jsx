import { getUsuario } from '../seguranca/Autenticacao';

const Home = () => {

    const usuario = getUsuario();

    return (
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">
            <main role="main" className="inner cover">
                <h1 className="cover-heading">Bem-vindo ao e-Lib!</h1>
                <p className="lead">e-Lib é uma plataforma online para gerenciar e explorar a sua própria coleção de livros. 
                Faça o login para começar ou acesse já a sua biblioteca!</p>
                <p className="lead">
                    <a href={usuario ? "/privado/livros" : "/login"} className="btn btn-lg btn-secondary">
                        {usuario ? "Visitar biblioteca" : "Login"}
                    </a>
                </p>
            </main>

            <footer className="mastfoot mt-auto">
                <div className="inner">
                    <p>&copy; Camila Barcellos, 2024</p>
                </div>
            </footer>
        </div>
    );
};

export default Home;
