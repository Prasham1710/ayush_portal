"use client"
import { BsCloudUpload } from 'react-icons/bs';
import { useSession } from "next-auth/react";
export default function UserDetails() {
  const { data: session } = useSession();
  return (
    <div className='mt-10 ml-96'>
      <div className="my-4 text-2xl font-extrabold text-green-800">Registration Form For Users</div>
      <form className="w-full max-w-lg">
        <div className="flex -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <div className="block uppercase text-gray-700 text-xs font-bold mb-2">
              Name
            </div>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              readOnly
              placeholder={session?.user?.name}
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <div className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </div>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              readOnly
              placeholder={session?.user?.email
            }
            />
          </div>
        </div>

        <div className="block uppercase text-gray-700 text-xs font-bold mb-2">
          Company Icon
        </div>

        <div className="flex items-center justify-center w-full mb-4">
          <label
            htmlFor="company-icon"
            className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <BsCloudUpload size={30} />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="company-icon" type="file" className="hidden" />
          </label>
        </div>

        <div className="block uppercase text-gray-700 text-xs font-bold mb-2">
          Cover Picture
        </div>

        <div className="flex items-center justify-center w-full mb-4">
          <label
            htmlFor="cover-picture"
            className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <BsCloudUpload size={30} />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="cover-picture" type="file" className="hidden" />
          </label>
        </div>

        {/* ... (rest of the form fields) */}

        <div className="my-4">
          <button className="bg-green-700 py-2 px-14 rounded-3xl" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
