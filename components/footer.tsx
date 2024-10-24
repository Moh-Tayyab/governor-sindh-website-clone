// app/components/footer.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Core Courses Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Core Courses</h2>
          <ul>
            <li className="mb-2">
              <Link href="/">Programming Fundamentals</Link>
            </li>
            <li className="mb-2">
              <Link href="/">Web2 Using NextJS</Link>
            </li>
            <li className="mb-2">
              <Link href="/">Earn as You Learn</Link>
            </li>
          </ul>
        </div>

        {/* Advanced Courses Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Advanced Courses</h2>
          <ul>
            <li className="mb-2">
              <Link href="/">Web 3 and Metaverse</Link>
            </li>
            <li className="mb-2">
              <Link href="/">Cloud-Native Computing</Link>
            </li>
            <li className="mb-2">
              <Link href="/">Artificial Intelligence (AI) and Deep Learning</Link>
            </li>
            <li className="mb-2">
              <Link href="/">Ambient Computing and IoT</Link>
            </li>
            <li className="mb-2">
              <Link href="/">Genomics and Bioinformatics</Link>
            </li>
            <li className="mb-2">
              <Link href="/">Network Programmability and Automation</Link>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div>
          <h2 className="font-bold text-lg mb-4">Social Links</h2>
          <div className="flex space-x-4 mb-4">
            <Link href="https://www.facebook.com/TeamKTessori">
              <FaFacebookF className="text-2xl text-blue-600 hover:text-blue-800" />
            </Link>
            <Link href="https://www.youtube.com/@KamranTessorikk">
              <FaYoutube className="text-2xl text-red-600 hover:text-red-800" />
            </Link>
            <Link href="https://x.com/KamranTessoriPk">
              <FaTwitter className="text-2xl text-blue-400 hover:text-blue-600" />
            </Link>
            <Link href="https://www.instagram.com/KamranTessoriPk">
              <FaInstagram className="text-2xl text-pink-500 hover:text-pink-700" />
            </Link>
            <Link href="https://www.tiktok.com/@KamranTessoriPk">
              <FaTiktok className="text-2xl text-black hover:text-gray-800" />
            </Link>
          </div>
          <Link href="mailto:education@governorsindh.com" className="text-blue-600 hover:underline ">
            <Image src="/mail-icon.png" alt="Mail Icon" width={24} height={24} />
            education@governorsindh.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
