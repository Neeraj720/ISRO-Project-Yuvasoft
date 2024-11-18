import React, { useState } from 'react'
import useFetchData from '../Hooks/useFetchData'
import { FaClipboardList } from 'react-icons/fa'
import Pagination from '../Components/Pagination/Pagination'
import Loader from '../Components/Loading/Loader'

function Launchers() {
  const { data :{launchers}, error, loading } = useFetchData('/api/launchers')
  // console.log(data)
  const [currentPage, setCurrentPage] = useState(1)
  const itemPerPage = 15
  const totelPages = Math.ceil(launchers?.length / itemPerPage)

  // Current Item Page

  const currentItems = launchers?.slice(
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
          <div className="container mt-3 h-100 w-100">
            <h4 className='text-center mb-3 text-danger'>Launcer Data <FaClipboardList /></h4>
            <div className="table-responsive d-flex align-items-center justify-content-center">
              <table className="table table-dark table-striped table-striped table-bordered w-75">
                <thead>
                  <tr>
                    {/* <th scope="col">Id</th> */}
                    <th scope="col" className='text-center'>Index</th>
                    <th scope="col" className='text-center'>Id</th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems?.map((launce, index) => (
                    <tr key={launce.id}>
                      {/* <td>{user.id}</td> */}
                      <td className='text-center'>{index + 1}</td>
                      <td className='text-center'>{launce.id}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <Pagination
                totalPages={totelPages}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Launchers


