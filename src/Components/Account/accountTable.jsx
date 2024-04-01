function accountTable(props) {
    return (

        <table id="transTable" className="w-50 mt-auto table table-striped visually-hidden">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Transaction ID</th>
                    <th scope="col">Category</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Date</th>
                </tr>
            </thead>

            <tbody>
                {props.trans.map((transaction, index) => (
                    <tr key={index}>
                        <th scope="row">{transaction.name}</th>
                        <td>{transaction.transaction_id}</td>
                        <td>{transaction.category}</td>
                        <td>${transaction.amount}</td>
                        <td>{transaction.date}</td>
                    </tr>
                ))}

            </tbody>
        </table>

    )
}

export default accountTable