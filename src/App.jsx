import { useEffect, useState } from "react"
import LoginButton from "./Components/loginButton"
import PlaidButton from "./Components/plaidButton"
import AccountTable from "./Components/Account/accountTable"

function App() {
    const [linkToken, setLinkToken] = useState('');
    const [trans, setTransactions] = useState([]);

    return (
        <div id="root" className="container-fluid text-center d-flex align-items-center justify-content-center vh-100">
            <LoginButton setLinkToken={setLinkToken} />
            <PlaidButton linkToken={linkToken} setTransactions={setTransactions} />
            <AccountTable trans={trans} />
            {/* <button id="uploadDB" className=" m-3 btn btn-info">Upload Transaction To DB</button> */}
            {/* <button id="calBudget" className=" m-3 btn btn-success">Calculate Monthly Budget</button> */}
        </div>
    )
}

export default App
