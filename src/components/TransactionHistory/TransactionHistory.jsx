import "./TransactionHistory.css";

function TransactionHistory({ items }) {
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((t) => (
          <tr key={t.id}>
            <td>{t.type}</td>
            <td>{t.amount}</td>
            <td>{t.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TransactionHistory;
