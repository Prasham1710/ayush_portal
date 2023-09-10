import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { GiCrossMark } from "react-icons/gi";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full">
      <footer className="px-20 divide-y dark:bg-[#2a2a2a] dark:text-gray-100">
        <div className="flex flex-col justify-between py-10 space-y-8 lg:flex-row lg:space-y-0">
          <div className="lg:w-1/4">
            <ul>
              <li>
                <Link
                  href=""
                  className="flex justify-center space-x-3 lg:justify-start"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                    <Image alt="logo" src="" height={""} width={""} />
                  </div>
                  <span className="self-center text-2xl font-semibold">
                    Aayush
                    <div className="text-xs">This is Tagline</div>
                  </span>
                </Link>
              </li>

              <li>
                <div className="mt-4 font-light leading-10">
                  <p className="text-xs">
                    1st Floor, Peddar House, Proctor Street, Nxt To Kamla Niwas,
                    Grant Road, Mumbai <br /> Maharashtra, 400007
                  </p>
                  <div className="mt-3 text-sm font-medium">
                    T. +91 5462781456
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
            <div className="space-y-3">
              <div className="uppercase font-bold dark:text-gray-50">info</div>
              <ul className="space-y-1">
                <li>
                  <Link href="">About Us</Link>
                </li>
                <li>
                  <Link href="">Feedback</Link>
                </li>
                <li>
                  <Link href="">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="">Help</Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase font-bold dark:text-gray-50">
                Contact us
              </div>
              <div className="justify-start">
                <Link
                  href=""
                  title="Facebook"
                  className="flex items-center p-1 space-x-2"
                >
                  <FaFacebook size={25} />
                  <span>Facebook</span>
                </Link>
                <Link
                  href=""
                  title="Whatsapp"
                  className="flex items-center p-1 space-x-2"
                >
                  <FaSquareWhatsapp size={25} />
                  <span>Whatsapp</span>
                </Link>
                <Link
                  href=""
                  title="Twitter"
                  className="flex items-center p-1 space-x-2"
                >
                  <FaSquareTwitter size={25} />
                  <span>Twitter</span>
                </Link>
                <Link
                  href=""
                  title="Instagram"
                  className="flex items-center p-1 space-x-2"
                >
                  <FaInstagram size={25} />
                  <span>Instagram</span>
                </Link>
              </div>
            </div>
            <div className="space-y-3">
              <div className="tracking-wide dark:text-gray-50">
                Subscribe to our newsletter
              </div>
              <ul className="space-y-1">
                <li>
                  {/* <Link  href="">Privacy</Link> */}
                  <div className="flex">
                    <input
                      type="email"
                      className="w-full px-3 py-2 border rounded-l-lg focus:outline-none focus:border-indigo-500"
                      placeholder="Enter your email"
                    />
                    <button className="bg-indigo-500 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-600 focus:outline-none">
                      Send
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm text-center dark:text-gray-400">
          © 2023 Company Co. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
