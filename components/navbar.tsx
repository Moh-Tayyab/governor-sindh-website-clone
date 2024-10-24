
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-sky-900  text-[#b9d8f3]">
      <div className="container mx-4 flex justify-between items-center  ">
        {/* Logo */}
        <div className="flex justify-items-stretch ">
          {/* Using next/image instead of img */}
          <Image
            src="/logo.png"  // Replace with the actual path to your logo
            alt="Logo"
            width={90}  // Adjust the width and height based on the actual size
            height={113}
            priority  // Ensures the logo is loaded as a priority (important for LCP)
          />
          <h1 className="justify-between text-wrap font-bold text-2xl mt-8">
            Tuition Free Education Program on Latest Technologies
          </h1>
        </div>

        {/* Menu Items */}
        <ul className=" justify-between flex space-x-6">
          <li>
            <Link href="/" className="hover:text-gray-500 text-white">
              Home
            </Link>
          </li>
          <li>
            <Link href="/apply" className="hover:text-gray-500 text-white">
              Apply
            </Link>
          </li>
          <li>
            <Link href="/jobs" className="hover:text-gray-500 text-white">
              Jobs
            </Link>
          </li>
          <li>
            <Link href="/results" className="hover:text-gray-500 text-white">
              Result
            </Link>
          </li>
          {/* Courses Dropdown */}
          <li className="relative group">
            <Link href="#" className="hover:text-gray-500 text-white">
              Courses ⌄
            </Link>
            <ul className="absolute left-0 hidden group-hover:block bg-white text-black mt-2 rounded shadow-lg w-[250px]">
              <div className="px-4 py-4">
                {/* Core Courses */}
                <h3 className="font-bold text-gray-700 mb-2">Core Courses</h3>
                <ul className="mb-4">
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/courses/programming-fundamentals">Programming Fundamentals</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/courses/web2-nextjs">Web2 Using NextJS</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/courses/earn-as-you-learn">Earn as You Learn</Link>
                  </li>
                </ul>

                {/* Advanced Courses */}
                <h3 className="font-bold text-gray-700 mb-2">Advanced Courses</h3>
                <ul>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/courses/web3-metaverse">Web 3 and Metaverse</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/courses/cloud-native">Cloud-Native Computing</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/courses/ai-deep-learning">Artificial Intelligence and Deep Learning</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/courses/ambient-iot">Ambient Computing and IoT</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/courses/genomics-bioinformatics">Genomics and Bioinformatics</Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100">
                    <Link href="/courses/network-programmability">Network Programmability and Automation</Link>
                  </li>
                </ul>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
