import React from 'react'

const FormField = ({ LabelName, name, type, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className='block text-sm font-medium text-gray-900'>{LabelName}</label>
        { isSurpriseMe && (
          <button type='button' onClick={handleSurpriseMe} className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'>
            suggest me a prompt
          </button>
        )}
      </div>
      <input type={type} id={name} name={name} value={value} onChange={handleChange} placeholder={placeholder} required className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3 border'/>
    </div>
  )
}

export default FormField