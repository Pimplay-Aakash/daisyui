// import React from 'react'
"use client"

const MOdelPage = () => {
  return (
  
        <div className='text-center mt-4' >
            <button className='btn btn-primary text-white text-xl px-4' onClick={() => document.getElementById('my_modal_1').showModal()}>Open Modal</button>

            <dialog id='my_modal_1' className='modal'>
                <div className='modal-box'>
                    <h3 className='font-bold text-lg'>Hello!</h3>
                    <p className='py-4'> ESC key or click below to close</p>
                    <div className='modal-action'>
                        <form method='dialog'>
                            <button className='btn'>close</button>
                             
                        </form>
                    </div>

                </div>

            </dialog>
        </div>
    
    )
}

export default MOdelPage