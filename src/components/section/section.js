import React from 'react'
import '../../components/bootstrap.min.css'
import './section.css'
export default function Section() {
  return (
    <div>
      <section>
        <div className="container">
        <div className="row">
         <div className="col">
          <h1 className='title'>hello world section title</h1>
         </div>
        </div>
         <div className="row">
           <div className="col-sm-4">Hello</div>
           <div className="col-sm-4">Party</div>
           <div className="col-sm-4">People</div>
         </div>
        </div>
      </section>
    </div>
  )
}
