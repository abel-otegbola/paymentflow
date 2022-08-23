import "./button.css";

const Button = ({ text, type, nextClick }) => {
    const handleActive = (e) => {
        e.preventDefault();

        nextClick()
    }

    return (
        <button type={type} onClick={(e) => handleActive(e)}>{text}</button>
    )
}
export default Button;