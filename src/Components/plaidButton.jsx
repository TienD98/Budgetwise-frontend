import Logo from "../assets/plaid.svg"
import { usePlaidFunctions } from "../handlers/plaidButtonHandler";

function plaidButton(props) {

    const { open } = usePlaidFunctions(props.linkToken, props.setTransactions);

    return (
        <button id="plaidBut" onClick={open} className="visually-hidden btn btn-warning" >Connect To Your Bank Account Now! <br /> <img className="p-2" src={Logo} /></button >
    );
}
export default plaidButton