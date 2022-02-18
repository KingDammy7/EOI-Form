import React from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from  'react-loader-spinner'

function Spinner() {
    return (
        <div>
<TailSpin
    heigth="100"
    width="100"
    color='grey'
    arialLabel='loading'
  />
        </div>
    )
}

export default Spinner
