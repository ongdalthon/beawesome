import React, { useEffect, useMemo, useState } from 'react'
import { MaterialReactTable } from 'material-react-table'
import axios from 'axios'

const fetchProduct = async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/product')
    return response
  } catch (e) {
    console.log(e)
  }
}

const index = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchProduct().then((result) => {
      setData(result.data.product)
      //   console.log(result.data)
    })
  }, [])
  console.log(data)
  const columns = useMemo(
    () => [
      {
        header: 'ID',
        accessorKey: 'PR_ID_PK', //simple accessorKey pointing to flat data
      },
      {
        header: 'Name',
        accessorKey: 'PR_NAME', //simple accessorKey pointing to flat data
      },
      {
        header: 'AlC',
        accessorKey: 'PR_ALC', //simple accessorKey pointing to flat data
      },
    ],
    []
  )
  return <MaterialReactTable columns={columns} data={data} />
}

export default index
