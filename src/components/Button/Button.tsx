

interface Props{
    label: string, 
    onClick: () => void
}

export const Button = ({label, onClick}:Props) => {
    return(
        <button className="button" onClick={onClick}>{label}</button>
    )
}