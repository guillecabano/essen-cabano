const FormatNumber = ({number}) => {
    return <span>{new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(number)}</span>
}

export default FormatNumber;