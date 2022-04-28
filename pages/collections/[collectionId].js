import React from 'react'
import {useRouter} from "next/router";

const Collection = () => {

    const router = useRouter();
    console.log(router.query)
    
    console.log("collection id ====>",router.query.collectionId)

  return (
    <div> <h2>{router.query.collectionId}</h2>
    
    </div>
  )
   
}

export default Collection