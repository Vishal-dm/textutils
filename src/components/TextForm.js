import React from 'react'

export default function TextForm(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea clayBoxsName="form-control" id="myBOX" cols="100"rows="8"></textarea>
        </div>
        <button className="btn btn primary" >
            Convert To Uppercase
        </button>
    </div>
  )
}
