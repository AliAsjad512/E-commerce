// // import Link from 'next/link'
// // import { BsChevronDown } from 'react-icons/bs'
// // import { AiOutlineShoppingCart } from 'react-icons/ai'

// // export default function TopMenu() {
// //   return (
// //     <>
// //       <div id="TopMenu" className="border-b">
// //         <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
// //           <ul
// //             id="TopMenuLeft"
// //             className="flex items-center text-[11px] text-[#333333] px-2 h-8"
// //           >
// //             <li className="relative px-3">
// //               <Link
// //                 href="/auth"
// //                 className="flex items-center gap-2 hover:underline cursor-pointer"
// //               >
// //                 <div>Login</div>
// //                 <BsChevronDown />
// //               </Link>

// //               <div
// //                 id="AuthDropdown"
// //                 className=" hidden absolute bg-white w-[200px] text-[#333333] z-40 top-[20px] left-0 border shadow-lg"
// //               >
// //                 <div className="flex items-center justify-start gap-1 p-3">
// //                   {/* <img width={50} src={user?.picture} /> */}

// //                   <img
// //                     width={50}
// //                     src="https://picsum.photos/seed/picsum/200/50/50"
// //                   />
// //                   <div className="font-bold text-[13px]">User Name</div>
// //                 </div>

// //                 <div className="border-b" />

// //                 <ul className="bg-white">
// //                   <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
// //                     <Link href="/orders">My Orders</Link>
// //                   </li>

// //                   <ul className="bg-white">
// //                     <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
// //                       Sign out
// //                     </li>
// //                   </ul>
// //                 </ul>
// //               </div>
// //             </li>
// //             <li className="px-3 hover:underline cursor-pointer">Daily Deals</li>
// //             <li className="px-3 hover:underline cursor-pointer">
// //               Help & Contact
// //             </li>
// //           </ul>

// //           <ul
// //             id="TopMenuRight"
// //             className="flex items-center text-[11px] text-[#333333] px-2 h-8"
// //           >
// //             <li className="flex items-center gap-2 px-3 hover:underline cursor-pointer">
// //               <img width={32} src="/images/uk.png" />
// //               Ship to
// //             </li>

// //             <li className="px-3 hover:underline cursor-pointer">
// //               <AiOutlineShoppingCart size={22} />
// //               <div className="absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white">
// //                 <div className=" flex items-center justify-center -mt-[1px]">
// //                   0
// //                 </div>
// //               </div>
// //               : <div></div>
// //             </li>
// //           </ul>
// //         </div>
// //       </div>
// //     </>
// //   )
// // }


// import Link from 'next/link'
// import { BsChevronDown } from 'react-icons/bs'
// import { AiOutlineShoppingCart } from 'react-icons/ai'

// export default function TopMenu() {
//   return (
//     <div id="TopMenu" className="border-b">
//       <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
//         <ul
//           id="TopMenuLeft"
//           className="flex items-center text-[11px] text-[#333333] px-2 h-8"
//         >
//           <li className="relative px-3">
//             <Link
//               href="/auth"
//               className="flex items-center gap-2 hover:underline cursor-pointer"
//             >
//               <div>Login</div>
//               <BsChevronDown />
//             </Link>

//             <div
//               id="AuthDropdown"
//               className="hidden absolute bg-white w-[200px] text-[#333333] z-40 top-[20px] left-0 border shadow-lg"
//             >
//               <div className="flex items-center justify-start gap-1 p-3">
//                 <img
//                   width={50}
//                   src="https://picsum.photos/seed/picsum/200/50/50"
//                 />
//                 <div className="font-bold text-[13px]">User Name</div>
//               </div>

//               <div className="border-b" />

//               <ul className="bg-white">
//                 <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
//                   <Link href="/orders">My Orders</Link>
//                 </li>

//                 <ul className="bg-white">
//                   <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
//                     Sign out
//                   </li>
//                 </ul>
//               </ul>
//             </div>
//           </li>
//           <li className="px-3 hover:underline cursor-pointer">Daily Deals</li>
//           <li className="px-3 hover:underline cursor-pointer">
//             Help & Contact
//           </li>
//         </ul>

//         <ul
//           id="TopMenuRight"
//           className="flex items-center text-[11px] text-[#333333] px-2 h-8"
//         >
//           <li className="flex items-center gap-2 px-3 hover:underline cursor-pointer">
//             <img width={32} src="/images/uk.png" />
//             Ship to
//           </li>

//           <li className="relative px-3 hover:underline cursor-pointer">
//             <AiOutlineShoppingCart size={22} />
//             <div className="absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] rounded-full text-white">
//               <div className="flex items-center justify-center h-full">0</div>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </div>
//   )
// }


import { useState } from 'react'; // Import useState hook

import Link from 'next/link';
import { BsChevronDown } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function TopMenu() {
  // State to manage dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div id="TopMenu" className="border-b">
      <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
        <ul
          id="TopMenuLeft"
          className="flex items-center text-[11px] text-[#333333] px-2 h-8"
        >
          <li className="relative px-3">
            {/* Add onClick event handler to toggle dropdown visibility */}
            <div
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-2 hover:underline cursor-pointer"
            >
              <div>Login</div>
              <BsChevronDown />
            </div>

            {/* Show dropdown based on dropdownOpen state */}
            {dropdownOpen && (
              <div
                id="AuthDropdown"
                className="absolute bg-white w-[200px] text-[#333333] z-40 top-[28px] left-0 border shadow-lg"
              >
                <div className="flex items-center justify-start gap-1 p-3">
                  <img  width={50}  src="https://picsum.photos/seed/picsum/100/50" />
                  <div className="font-bold text-[13px]">User Name</div>
                </div>

                <div className="border-b" />

                <ul className="bg-white">
                  <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                    <Link href="/orders">My Orders</Link>
                  </li>

                  <li
                    onClick={() => setDropdownOpen(false)} // Close dropdown on Sign out
                    className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer"
                  >
                    Sign out
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li className="px-3 hover:underline cursor-pointer">Daily Deals</li>
          <li className="px-3 hover:underline cursor-pointer">
            Help & Contact
          </li>
        </ul>

        <ul
          id="TopMenuRight"
          className="flex items-center text-[11px] text-[#333333] px-2 h-8"
        >
          <li className="flex items-center gap-2 px-3 hover:underline cursor-pointer">
            <img width={32} src="/images/uk.png" />
            Ship to
          </li>

          <li className="relative px-3 hover:underline cursor-pointer">
            <AiOutlineShoppingCart size={22} />
            <div className="absolute text-[10px] -top-[2px] -right-[0px] bg-red-500 w-[14px] h-[14px] rounded-full text-white items-center justify-center">
              <div className="flex items-center justify-center h-full">0</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

