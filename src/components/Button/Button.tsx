import "./Button.scss"

type ButtonProps = {
    label: string;
    variant : "primary" | "secondary";
}

const Button = ({label, variant = "primary"} : ButtonProps) => {
return (
    <button className={`button button--${variant}`} >{label}</button>


)

}

export default Button;