import React from 'react'
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import "./Error.css";

import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
  return (
    <>
    <div className='error-wrapper'>
    <SentimentVeryDissatisfiedIcon style={{ fontSize: "72px" }} />
    <h1>Oops !!!</h1>
    <h2>Something went Wrong</h2>
    <h3> {err.status} : {err.statusText}</h3>
    </div>
    </>
  )
}

export default Error
