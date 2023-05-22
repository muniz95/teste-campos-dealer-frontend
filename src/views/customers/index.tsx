import React from "react";
import service from "../../services/customer.service"
import Customer from "../../models/Customer";

const Customers = () => {
  const [customers, setCustomers] = React.useState<Customer[]>([]);
  const [total, setTotal] = React.useState<number>(0);
  React.useEffect(() => {
    service.getCustomers().then(response => {
      setCustomers(response);
      setTotal(response.length);
    });
  }, []);
  return <div>
    <strong>Total: {total}</strong>
    {customers.map((customer) =>
      <div key={customer.id}>{customer.name}</div>
    )}
  </div>
}

export default Customers