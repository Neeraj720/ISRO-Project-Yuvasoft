import React, { useState, useEffect } from 'react';
import useFetchData from '../Hooks/useFetchData';
import Pagination from '../Components/Pagination/Pagination';
import { FaClipboardList } from 'react-icons/fa';
import useSearchData from '../Hooks/useSearchData';
import Loader from '../Components/Loading/Loader';

function CustomerSatellites() {
  const { data: { customer_satellites }, error, loading } = useFetchData('/api/customer_satellites');
  console.log(customer_satellites);
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 12;
  
  const { setSearchItem, filterData } = useSearchData(customer_satellites || []);
  
  const totalPages = Math.ceil(filterData?.length / itemPerPage);
  
  // Current Item Page
  const currentItems = filterData?.slice(
    (currentPage - 1) * itemPerPage, currentPage * itemPerPage
  );

  console.log(currentItems)



  return (
    <>
      {loading ? (
        <div className='d-flex align-items-center justify-content-center vh-100'>
          <Loader />
        </div>
      ) : (
        <>
          <div className="container mt-3 mb-3">
            <h4 className='text-center mb-3 text-danger'>Customer Satellites Data <FaClipboardList /></h4>
            <div className="row">
              <input
                type="text"
                className='form-control mb-3 mt-3'
                placeholder='Search item'
                onChange={(e) => setSearchItem(e.target.value)}
              />
              {
                currentItems?.map((customer) => (
                  <div className="col-md-4 mb-3" key={customer.id}>
                    <div className="card" style={{ width: "18rem" }}>
                      <div className="card-body">
                        <h5 className="card-title">{customer.id}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          <span className='text-dark'>Country</span> {customer.country}
                        </h6>
                        <span>Launch Date: {customer.launch_date}</span><br />
                        <span>Mass: {customer.mass}</span><br />
                        <span>Launcher: {customer.launcher}</span>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            <div>
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CustomerSatellites;