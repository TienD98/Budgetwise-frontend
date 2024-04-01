import { usePlaidLink } from "react-plaid-link";
import axios from "axios"

// usePlaidFunctions func request for a link token and after success public and access token is called.
export const usePlaidFunctions = (linkToken, setTransactions) => {
    const { open, ready } = usePlaidLink({
        token: linkToken,
        onSuccess: async (public_token, metadata) => {
            // hide the plaid button after success connect 
            document.getElementById("plaidBut").classList.add('visually-hidden');

            // after success get public token we request for exchange access token
            console.log("call request for exchange token");
            const accessToken = await exchangeTokenPlaid(public_token);
            console.log(accessToken);
            // after get access then request for transactions. 
            console.log("call request for get transactions");
            await getTrans(accessToken, setTransactions);

            // after fetch all transaction then enable transaction table.
            document.getElementById("transTable").classList.remove('visually-hidden');
        },
    });

    return { open, ready };
}

// exchangeTokenPlaid func call post request to give the public token for a access token
const exchangeTokenPlaid = async (publicToken) => {
    const accessToken = await axios.post('/plaid/exchange_public_token', { public_token: publicToken });
    return accessToken.data;
}

// getTrans call for Post request api to get the transactions from Plaid 
const getTrans = async (accessToken, setTransactions) => {
    try {
        const response = await axios.post('/transaction/', { access_token: accessToken });
        setTransactions(response.data);
        console.log(response.data);
    } catch (err) {
        console.error(err);
        return null;
    }
}