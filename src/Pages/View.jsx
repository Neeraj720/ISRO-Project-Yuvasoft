import React from 'react'
import { useParams } from 'react-router-dom'
import useFetchData from '../Hooks/useFetchData'

function View() {
    const { id } = useParams()
    const { data :{centres}, error, loading } = useFetchData('/api/centres')
    const center = Array.isArray(centres) ? centres?.find((center) => center.id.toString() === id) : null;
    return (
        <>
            <div className="container d-flex align-items-center justify-content-center vh-100">
                {
                    loading ? (
                        <h1 className='text-center'>Loading...</h1>
                    ) : (
                        <>
                                <div className='shadow rounded' style={{ padding: '3rem' }}>
                                    <h5>Center Details</h5>
                                    <b>Name :</b> <span> {center?.name }</span> <br />
                                    <b>Place :</b> <span> {center?.Place }</span> <br />
                                    <b>State :</b> <span> {center?.State }</span> <br />   
                                </div>
                        </>

                    )
                }
            </div>
        </>
    )
}

export default View