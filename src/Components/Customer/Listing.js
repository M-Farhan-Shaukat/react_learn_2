import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table'
export default function Listing() {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    fetchCustomers();
  }, []);
  const fetchCustomers = async () => {
    var config = {
      method: "GET",
      maxBodyLength: Infinity,
      url: "http://localhost:8001/api/v1/contacts?contact_type=all&page=1&sort_by=display_name&order_by=asc&view=20&search=",
      headers: {
        Authorization: "64cc9dfea33a140afa8bd0d1041d26992ccdaf4b4657e",
        organization: "104",
        accept: "application/json",
      },
    };

    axios(config).then(function (response) {
      response && setCustomers(response.data.contacts);
    });
  };
  console.log(customers.data)
  return (
    
      <div className="col-12">
        <div className="card card-body">
          <div className="table-responsive">
          <Table striped bordered hover variant="dark">
              <thead>
              <tr>
                <th> Name</th>
                <th>Contact Type</th>
                <th>Company</th>
                <th>Email</th>
                <th>Work Phone</th>
                <th>ReceiveAble</th>
                <th>PayAble</th>
                </tr>
              </thead>
              <tbody>
              {customers.data && customers.data.length > 0 &&
                  customers.data.map((row, key) => (
                    <tr key={key}>
                      <td>{row.display_name}</td>
                      <td>{row.contact_type}</td>
                      <td>{row.company_name}</td>
                      <td>{row.email}</td>
                      <td>{row.work_phone}</td>
                      <td>{row.receivable}</td>
                      <td>{row.payable}</td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
  );
}
