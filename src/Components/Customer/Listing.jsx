import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
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

  const deleteProduct = async (id) => {
    const isConfirm = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        return result.isConfirmed
      });

      if(!isConfirm){
        return;
      }

      var config = {
        method: 'delete',
      maxBodyLength: Infinity,
        url: `http://localhost:8001/api/v1/contacts/${id}`,
        headers: {
          Authorization: "64cc9dfea33a140afa8bd0d1041d26992ccdaf4b4657e",
          organization: "104",
          accept: "application/json",
        },
      };
      
      axios(config)
      .then(({data})=>{
        Swal.fire({
          icon:"success",
          text:data.message
      })
      fetchCustomers()
      })
      .catch(({response:{data}})=>{
        Swal.fire({
          text:data.message,
          icon:"error"
      })
      });
    }
  console.log(customers.data);
  return (
    <div className="container">
    <div className="row">
      <div className='col-12'>
          <Button className='btn btn-primary mb-2 float-end' to={''}>
              Create Product
          </Button>
      </div>
    <div className="col-12">
      <div className="card card-body">
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th> Name</th>
                <th>Contact Type</th>
                <th>Company</th>
                <th>Email</th>
                <th>Work Phone</th>
                <th>ReceiveAble</th>
                <th>PayAble</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {customers.data &&
                customers.data.length > 0 &&
                customers.data.map((row, key) => (
                  <tr key={key}>
                    <td>{row.display_name}</td>
                    <td>{row.contact_type}</td>
                    <td>{row.company_name}</td>
                    <td>{row.email}</td>
                    <td>{row.work_phone}</td>
                    <td>{row.receivable}</td>
                    <td>{row.payable}</td>
                    <Button
                     variant="danger"
                     onClick={()=>deleteProduct(row.id)}
                     >
                      Delete
                     </Button>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
