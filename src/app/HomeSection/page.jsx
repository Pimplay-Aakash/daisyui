import React from 'react'

const ExampleSection = () => {
  return (
    <div>
        <div className="flex items-center justify-center bg-gray-100 p-10 gap-4">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-5">Hello everyone </h1>
          <div className="mb-4 ">
            <p className="text-gray-600">Button</p>
            <button className="btn btn-primary">Primary Button</button>
            <button className="btn btn-secondary">secondary Button</button>
          </div>

          <div className="mb-4 ">
            <p className="text-gray-600">Alert</p>
            <div className="alert alert-success text-white font-bold">
              success
            </div>
            <div className="alert alert-error text-white font-bold">Error</div>
          </div>
        </div>

        <div className="mb-4 bg-white p-8 rounded-lg shadow-lg">
          <p className="text-gray-600 mb-2">Form</p>
          <div className="form-control">
            <label htmlFor="name" className="lable">
              Name
            </label>
            <input type="text" className="input input-bordered" />
          </div>
        </div>
      </div>
      
      <div className="flex items-center justify-center bg-gray-100 p-10 gap-4">
        <div className="mb-4 bg-white p-8 rounded-lg shadow-lg">
          <p className="card p-4">
            <h2 className="text-xl font-semibold">Card Title</h2>
            <p className='text-gray-600 mt-2'>the card contain goes hear</p>

          </p>

        </div>
      </div>

    </div>
  )
}

export default ExampleSection