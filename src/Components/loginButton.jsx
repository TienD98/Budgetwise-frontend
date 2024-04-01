import { loginPlaid } from "../handlers/loginButtonHandler.js"

function Button(props) {
    return (
        <button id="loginBut" className="btn btn-primary" onClick={() => loginPlaid(props.setLinkToken)}>Login</button>
    )
}

export default Button