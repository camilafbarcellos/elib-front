const Home = () => (
    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column text-center">
        <main role="main" className="inner cover">
            <h1 className="cover-heading">Bem-vindo ao e-Lib!</h1>
            <p className="lead">e-Lib é uma plataforma online para gerenciar e explorar uma vasta coleção de livros. Faça o login para começar a explorar nossa biblioteca ou cadastrar novos livros.</p>
            <p className="lead">
                <a href="/login" className="btn btn-lg btn-secondary">Login</a>
            </p>
        </main>

        <footer className="mastfoot mt-auto">
            <div className="inner">
                <p>&copy; Camila Barcellos</p>
            </div>
        </footer>
    </div>
);

export default Home;