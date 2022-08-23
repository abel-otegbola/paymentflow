import React, { useState } from "react";
import Header from "./components/header/header";
import PaymentForm from "./components/paymentForm/paymentForm";

const App = () => {
    const [active, setActive] = useState(1)

    return(
        <div className="App">
            <Header active={active}/>
            <PaymentForm setActive={setActive} active={active}/>
        </div>
    )
}

export default App;