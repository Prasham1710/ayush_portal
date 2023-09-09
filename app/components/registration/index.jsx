import {BsCloudUpload} from 'react-icons/bs'

export default function index () {
  return (
    <div className='mt-10 ml-96'>
<div className="my-4 text-2xl font-extrabold text-green-800">Registration Form For Users</div>
<form className="w-full max-w-lg">
  <div className="flex  -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <div className="block uppercase  text-gray-700 text-xs font-bold mb-2" >
        First Name
      </div>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Enter Your First name" />
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" >
        Last Name
      </div>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Enter Your Last Name" />
    </div>
    
  </div>

  <div className="block uppercase  text-gray-700 text-xs font-bold mb-2" >
        Company Icon
      </div>

  <div className="flex items-center justify-center w-full mb-4">

    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
            
                <BsCloudUpload  size={30}/>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 


<div className="block uppercase  text-gray-700 text-xs font-bold mb-2" >
        Cover Picture
      </div>
<div className="flex items-center justify-center w-full mb-4">
    <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <BsCloudUpload  size={30}/>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" className="hidden" />
    </label>
</div> 



  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-2">
      <div className="block uppercase  text-gray-700 text-xs font-bold mb-2" >
        Company Name
      </div>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Enter Your Company name" />
      </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-2">
      <div className="block uppercase  text-gray-700 text-xs font-bold mb-2" >
        Email
      </div>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="Enter Your Email-Id" />
      </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-2">
      <div className="block uppercase  text-gray-700 text-xs font-bold mb-2" >
        Company Description
      </div>
      <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
            placeholder="Company Description"
            cols="40"
            rows="4"
          ></textarea>
      </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-2">
      <div className="block uppercase  text-gray-700 text-xs font-bold mb-2" >
        Team Members
      </div>
      <textarea
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
            placeholder="Team Member Name"
            cols="40"
            rows="4"
          ></textarea>
      </div>
  </div>

  <div className="flex flex-wrap -mx-3 mb-2">
    
    <div classNames="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Requirement
      </div>
      <div className="relative">
        <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>Incumator</option>
          <option>Accelator</option>
          <option>Government</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
  </div>
  <div className='my-4'>
     <button className='bg-green-700 py-2 px-14 rounded-3xl'>Submit</button>
   </div>
</form>



    </div>
  )
}