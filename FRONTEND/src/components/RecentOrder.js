import "../components/recentorder.css";

function RecentOrder() {
  return (
    <>
      <div className="dashboard">
        <h2>Recent Orders</h2>
        <table>
          <thead>
            <tr>
              <th>OrderID</th>
              <th>FoodItem</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Al Pacino</td>
              <td>2</td>
              <td>$10.99</td>
              <td>
                <button
                  className="btn actionBTN btn-outline-danger"
                  type="submit"
                >
                  Edit
                </button>
                <button
                  className="btn actionBTN btn-outline-danger mt-2"
                  type="submit"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>GodFather</td>
              <td>1</td>
              <td>$12.49</td>
              <td>
                <button
                  className="btn actionBTN btn-outline-danger"
                  type="submit"
                >
                  Edit
                </button>
                <button
                  className="btn actionBTN btn-outline-danger mt-2"
                  type="submit"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Gangster's Paradise</td>
              <td>3</td>
              <td>$8.99</td>
              <td>
                <button
                  className="btn actionBTN btn-outline-danger"
                  type="submit"
                >
                  Edit
                </button>
                <button
                  className="btn actionBTN btn-outline-danger mt-2"
                  type="submit"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>ScarFace</td>
              <td>2</td>
              <td>$19.99</td>
              <td>
                <button
                  className="btn actionBTN btn-outline-danger"
                  type="submit"
                >
                  Edit
                </button>
                <button id="b1"
                  className="btn actionBTN btn-outline-danger mt-2"
                  type="submit"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>ScarFace Supreme</td>
              <td>2</td>
              <td>$14.99</td>
              <td>
                <button
                  className="btn actionBTN btn-outline-danger"
                  type="submit"
                >
                  Edit
                </button>
                <button
                  className="btn actionBTN btn-outline-danger mt-2"
                  type="submit"
                >
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Prada Panther</td>
              <td>1</td>
              <td>$11.49</td>
              <td>
                <button
                  className="btn actionBTN btn-outline-danger"
                  type="submit"
                >
                  Edit
                </button>
                <button
                  className="btn actionBTN btn-outline-danger mt-2"
                  type="submit"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default RecentOrder;
