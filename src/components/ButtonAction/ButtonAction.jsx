function ButtonAction({ onClickAction, children }) {
  return (
    <button onClick={onClickAction}>
      {children}
    </button>
  )
}

export default ButtonAction