import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>

            <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div>
                    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse justify-center ">
                            <img src="https://tse2.mm.bing.net/th?id=OIG4.DCNk6bXJXUUm1Z3DOL46&pid=ImgGn" className="h-8" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">HKXMS</span>
                        </Link>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to={"/"} className="hover:underline">HKXMS™</Link>. All Rights Reserved.</span>
                </div>
            </footer>



        </div>
    );
};

export default Footer;