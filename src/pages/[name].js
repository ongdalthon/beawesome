import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import useSWR from 'swr'

const Index = () => {
  const { name } = useRouter().query

  const fetcher = async (url) => {
    const params = {
      PR_ID: name,
    }
    return await axios.get(url, { params })
  }

  const { data } = useSWR(() => (name ? '/api/hello' : null), fetcher)

  return <div>gkdl</div>
}

export default Index
