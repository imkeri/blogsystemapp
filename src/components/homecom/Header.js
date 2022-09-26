import React from 'react'
import "./header.css"
const header = () => {
  return (
    <div id="main_header">
       <div className='container-fluid'>
          <div className='row'>
          <div className='col-md-6 main_text offset-1'>
                <div className='text_div '>
                    <div className='big_text'><h1>Stay curious.</h1></div>
                    <div className='small_text'><p>Discover stories, thinking, and expertise from writes on any topic</p></div>
                    <div className='btn_text'>start reading</div>
                </div>
          </div>
          <div className='col-md-4 offset-1'>
              <div className='animation'>
              <h1 class="typing">M  </h1>
              </div>
          </div>
          </div>
       </div>
    </div>
  )
}

export default header
