import { useState } from "react";
import BillingInfo from "../billingInfo/billingInfo";
import Button from "../buttons/button";
import CompleteForm from "../complete/complete";
import ConfirmPayment from "../confirmPayment/confirmPayment";
import PersonalInfo from "../personalInfo/personalInfo";
import { isValid, isExpirationDateValid, isSecurityCodeValid } from 'creditcard.js';
import "./paymentForm.css";

const PaymentForm = ({ setActive, active }) => {
    const [values, setValues] = useState({ 
        fullname: "", 
        email: "", 
        address1: "", 
        address2: "", 
        city: "", 
        state: "", 
        cardName: "", 
        cardNumber: "", 
        cardExpiryMonth: 0, 
        cardExpiryYear: 0, 
        cardCVV: "" 
    })
    const [error, setError] = useState("")

    //Validate inputs
    const handleNext = () => {
        if(active === 1) {
            if(values.fullname.length < 5){
                setError("Fullname should be more than 4 letters")
            }
            else if(!(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(values.email)) {
                setError("Email is invalid")
            }
            else if(values.address1.length < 4) {
                setError("Address invalid")
            }
            else if(values.city.length < 3) {
                setError("Please type in your local government")
            }
            else {
                setActive(2)
                setError("")
            }
        }
        if(active === 2) {
            if(values.cardName.length < 5){
                setError("Card name not valid");
            }
            else if(!isValid(values.cardNumber)) {
                setError("Card number not valid")
            }
            else if(!isExpirationDateValid(values.cardExpiryMonth, values.cardExpiryYear)) {
                setError("Expiry date not valid")
            }
            else if(!isSecurityCodeValid(values.cardNumber, values.cardCVV)) {
                setError("Security code not valid")
            }
            else {
                setActive(3)
                setError("")
            }
        }
        if(active === 3) {
            setActive(active+1)
        }
    }

    return (
        <div className="payment_form">
            <div className={active === 4? "active": "box"}>
                <CompleteForm />
            </div>
            <form action="#" method="post" style={{ display: (active===4)? "none": "block" }}> 

                <div className={active === 1? "active": "box"}>
                    <PersonalInfo values={values} setValues={setValues}/>
                </div>
                <div className={active === 2? "active": "box"}>
                    <BillingInfo values={values} setValues={setValues} />
                </div>
                <div className={active === 3? "active": "box"}>
                    <ConfirmPayment />
                </div>
                <div className="error">
                    {error}
                </div>
                <div className="buttons">
                    <Button text={(active === 3) ? "Pay" : "Next"} type={(active === 3) ? "submit" : ""} nextClick={handleNext}/>
                    <h5><a href="/">Cancel Payment</a></h5>
                </div>
            </form>
        </div>
    )
}

export default PaymentForm;