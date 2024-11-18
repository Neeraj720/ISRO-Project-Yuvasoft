import React, { useState } from 'react'
import useFetchData from '../Hooks/useFetchData'
import Pagination from '../Components/Pagination/Pagination'
import { FaClipboardList } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import Loader from '../Components/Loading/Loader'

function Centres() {
  const { data:{centres}, error, loading } = useFetchData('/api/centres')
  console.log(centres)
  const navigate = useNavigate()
  // console.log("customer data:", data)
  const [currentPage, setCurrentPage] = useState(1)
  const itemPerPage = 12
  const totelPages = Math.ceil(centres?.length / itemPerPage)
  // Current Item Page
  const currentItems = centres?.slice(
    (currentPage - 1) * itemPerPage, currentPage * itemPerPage
  )
  // Handle view

  const handleView = (id) =>{
    navigate(`/view/${id}`)
  }
  return (
    <>
      {loading ? (
        <div className='d-flex align-items-center justify-content-center vh-100'>
          <Loader />
        </div>
      ) : (
        <>
          <div className="container mt-3 mb-3">
            <h4 className='text-center mb-3 text-danger'>Centers Data <FaClipboardList /></h4>
            <div className="row">
              {
                currentItems?.map((center) => {
                  return <>
                    <div className="col-md-4 mb-3" key={center.id}>
                      <div class="card" style={{ width: "18rem", height: "100%" }}>
                        <div class="card-body">
                          <h5 class="card-title">{center.id}</h5>
                          <h6 class="card-subtitle mb-2 text-muted"><span className='text-dark'>Name</span> {center.name}</h6>
                          <span>Place : {center.Place}</span> <br />
                          <span>State : {center.State}</span> <br />
                          <button className='btn btn-primary mt-3' onClick={() => handleView(center.id)}>View</button>
                        </div>
                      </div>
                    </div>
                  </>
                })
              }
            </div>
          </div>
          <div>
              <Pagination
                totalPages={totelPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
        </>
      )}
    </>
  )
}

export default Centres

