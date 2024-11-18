import React, { useState } from 'react'
import useFetchData from '../Hooks/useFetchData'
import Pagination from '../Components/Pagination/Pagination'
import { FaClipboardList } from "react-icons/fa";
import Loader from '../Components/Loading/Loader';
function Spacecrafts() {
  const { data:{spacecrafts}, error, loading } = useFetchData('/api/spacecrafts')
  // console.log("Space Craft Data is:" , data)
  // pagination

  const [currentPage, setCurrentPage] = useState(1)
  const itemPerPage = 15
  const totelPages = Math.ceil(spacecrafts?.length / itemPerPage)

  // Current Item Page

  const currentItems = spacecrafts?.slice(
    (currentPage - 1) * itemPerPage, currentPage * itemPerPage
  )
  return (
    <>
      {loading ? (
        <div className='d-flex align-items-center justify-content-center vh-100'>
          <Loader />
        </div>
      ) : (
        <>
          <div className="container mt-3 vh-100 w-100">
            <h4 className='text-center mb-3 text-danger'>Spacecraft Data <FaClipboardList /></h4>
            <div className="table-responsive d-flex align-items-center justify-content-center">
              <table className="table table-dark table-striped table-striped table-bordered w-75">
                <thead>
                  <tr>
                    {/* <th scope="col">Id</th> */}
                    <th scope="col" className='text-center'>Id</th>
                    <th scope="col" className='text-center'>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems?.map((space) => (
                    <tr key={space.id}>
                      {/* <td>{user.id}</td> */}
                      <td className='text-center'>{space.id}</td>
                      <td className='text-center'>{space.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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

export default Spacecrafts