const CustomerList = ({ customers }) => {
  return (
    <div className="wrapper">
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
            <th>Gender</th>
            <th>Income</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => {
            return (
              <tr>
                <td>{customer.name}</td>
                <td>{customer.age}</td>
                <td>{customer.location}</td>
                <td>{customer.gender}</td>
                <td>{customer.income}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default CustomerList;
