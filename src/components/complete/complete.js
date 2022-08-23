import "./complete.css"

const CompleteForm = () => {
    return (
        <div className="complete_form">
            <i>&#10003;</i>
            <h1>Purchase Completed</h1>
            <p>Please check your email for details concerning this transaction</p>

            <a href="/">Return Home</a>
        </div>
    )
}

export default CompleteForm;