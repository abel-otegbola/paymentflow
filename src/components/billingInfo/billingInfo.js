import { useRef } from "react";
import "./billingInfo.css";

const BillingInfo = ({ values, setValues }) => {
    const cardExpRef = useRef(null)
    const cvvRef = useRef(null)

    const handleExpiryMonth = (value) => {
        setValues({ ...values, cardExpiryMonth: value })

        if(value.length === 2) {
            cardExpRef.current.focus()
        }
    }
    const handleExpiryYear = (value) => {
        setValues({ ...values, cardExpiryYear: value })

        if(value.length === 4) {
            cvvRef.current.focus()
        }
    }

    return (
        <div className="billing_info">

            <label htmlFor="cardname">
                <h4>Name on Card <sup>*</sup></h4>
                <input type="text" name="cardname" id="cardname" onChange={(e) => setValues({ ...values, cardName: e.target.value })} required />
            </label>
            
            <label htmlFor="cardtype">
                <h4>Card Type <sup>*</sup></h4>
                <select className="card_type" onChange={(e) => setValues({ ...values, cardType: e.target.value })}>
                    <option>Visa</option>
                    <option>Mastercard</option>
                </select>
            </label>

            <div className="carddetails">
                <label htmlFor="carddetails" className="cardnumber">
                    <h4>Card Details <sup>*</sup></h4>
                    <input type="number" name="carddetails" id="carddetails" onChange={(e) => setValues({ ...values, cardNumber: e.target.value })} required />
                </label>

                <label htmlFor="expiry" className="expiry">
                    <h4>Expiry date <sup>*</sup></h4>
                    <div className="expiryinputs">
                        <input type="number" name="expiry" id="expiry" placeholder="00" onChange={(e) => handleExpiryMonth(e.target.value)} required />/
                        <input type="number" name="expiry" id="expiry" placeholder="0000" max="99" ref={cardExpRef} onChange={(e) => handleExpiryYear(e.target.value)} required />
                    </div>
                </label>
                
                <label htmlFor="cardcvv" className="cvv">
                    <h4>CVV <sup>*</sup></h4>
                    <input type="number" name="cardcvv" id="cardcvv" ref={cvvRef} onChange={(e) => setValues({ ...values, cardCVV: e.target.value })} required />
                </label>
            </div>

        </div>
    )
}

export default BillingInfo;