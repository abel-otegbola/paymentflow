import { State } from "country-state-city";
import "./personalInfo.css";

const PersonalInfo = ({ values, setValues }) => {


    return (
        <div className="payment_info">

            <label htmlFor="fullname">
                <h4>Name</h4>
                <input type="text" name="fullname" id="fullname" onChange={e => setValues({ ...values, fullname: e.target.value})} />
            </label>
            
            <label htmlFor="email">
                <h4>Email Address <sup>*</sup></h4>
                <p>The purchase receipt would be sent to this address</p>
                <input type="email" name="email" id="email" required  onChange={e => setValues({ ...values, email: e.target.value})} />
            </label>

            <label htmlFor="address1">
                <h4>Address 1</h4>
                <input type="address" name="address1" id="address1" onChange={e => setValues({ ...values, address1: e.target.value})}/>
            </label>

            <label htmlFor="address2">
                <h4>Address 2</h4>
                <input type="address" name="address2" id="address2"  onChange={e => setValues({ ...values, address2: e.target.value})} />
            </label>

            <div className="address-contd">
                <label htmlFor="city">
                    <h4>Local Government</h4>
                    <input type="text" name="city" id="city" onChange={e => setValues({ ...values, city: e.target.value})} />
                </label>

                <label htmlFor="state">
                    <h4>State</h4>
                    <select name="state" id="state" onChange={e => setValues({ ...values, state: e.target.value})}>
                        <option>Choose city</option>
                        {
                            State.getStatesOfCountry("NG").map(state => { return (
                                <option key={state.isoCode}>{state.name}</option>
                            )})
                        }
                    </select>
                </label>
            </div>

        </div>
    )
}

export default PersonalInfo;