import "./confirmPayment.css";

const ConfirmPayment = () => {
    return (
        <div className="confirm_payment">
            <div className="heading">
                <p>Item Name</p>
                <p>Price</p>
            </div>

            <div className="body">
                <div className="item">
                    <p>Data Science and usability</p>
                    <p>50,000.00</p>
                </div>
                <div className="item">
                    <p>Shipping</p>
                    <p>0.00</p>
                </div>
            </div>

            <div className="bottom">
                <p>Total</p>
                <p>50,000.00</p>
            </div>
        </div>
    )
}

export default ConfirmPayment;