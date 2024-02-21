function InsertButton({onAdd}) {
    return(
        <button type="submit" onSubmit={onAdd}>
            <span>+</span>Inserisci
        </button>
    )
}


export default InsertButton