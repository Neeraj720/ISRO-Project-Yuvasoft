import React, { useState } from 'react'

function useSearchData(data) {
    const [searchItem, setSearchItem] = useState('')

    const filterData = data?.filter((satellite) => {
        return satellite.country.toLowerCase().includes(searchItem.toLowerCase())
    })
    return {
        setSearchItem, filterData
    }
}

export default useSearchData