import axios from "axios";
axios.defaults.baseURL = "https://us-central1-budgetwise-challenge-fdc3f.cloudfunctions.net/budgetwiseAPI"

export const loginPlaid = async (setLinkToken) => {
    const tempLinkToken = await axios.post('/plaid/create_link_token');
    setLinkToken(tempLinkToken.data.link_token);
    document.getElementById("plaidBut").classList.remove('visually-hidden');
    document.getElementById("loginBut").classList.add('visually-hidden');
}