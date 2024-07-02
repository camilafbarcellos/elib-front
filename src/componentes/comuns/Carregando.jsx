function Carregando(props) {

    return (
        <>
            {
                !props.carregando ? props.children :

                <div className="d-flex flex-column align-items-center m-5">
                    <div className="spinner-border" role="status" aria-hidden="true"></div>
                    <strong className="mt-2">Carregando...</strong>
                </div>
            }
        </>
    );

}

export default Carregando;
