import "../components/recentorder.css";

function COrders() {
  return (
    <>
      <div className="dashboard">
      <h2>Cancelled Orders</h2>
    <table>
        <thead>
            <tr>
                <th>OrderID</th>
                <th>Product</th>
                <th>Reason for Cancelling</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1001</td>
                <td>Product A</td>
                <td>Out of Stock</td>
            </tr>
            <tr>
                <td>1002</td>
                <td>Product B</td>
                <td>Customer Requested</td>
            </tr>
            <tr>
                <td>1003</td>
                <td>Product C</td>
                <td>Defective Item</td>
            </tr>
            <tr>
                <td>1004</td>
                <td>Product D</td>
                <td>Wrong Size</td>
            </tr>
            <tr>
                <td>1005</td>
                <td>Product E</td>
                <td>Changed Mind</td>
            </tr>
        </tbody>
    </table>
      </div>
    </>
  );
}

export default COrders;
