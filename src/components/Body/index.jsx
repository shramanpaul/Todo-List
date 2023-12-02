// Body.jsx
import React from 'react'

function Body() {
  return (
    <div className='container mx-auto p-4 flex flex-col items-center justify-center min-h-screen'>
      <div className='border-2 border-rose-900 p-4'>
      <div class="flex justify-between items-center">
  <div class="text-2xl font-bold mb-4">
    To-Do
  </div>
  <div class="user">Username:</div>
</div>

        <hr />
        <div className='text-lg'>Main Content Goes Here</div>
      </div>
      <div className='mt-4 text-sm text-gray-500'>
        Timestamp: {new Date().toLocaleString()}
      </div>
    </div>
  )
}

export default Body
