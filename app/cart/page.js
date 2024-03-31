"use client"

import MainLayout from "../layouts/MainLayout"
import SimilarProducts from "../components/SimilarProducts"
import CartItem from "../components/CartItem"
// import { useCart } from "../context/cart"
// import { useEffect } from "react"
// import { useRouter } from "next/navigation"
// import useIsLoading from "../hooks/useIsLoading"
// import ClientOnly from "../components/ClientOnly"

export default function Cart() {
  
    const product = 
      
        {
          id: 1,
          title: "School Books",
          description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          url: "https://picsum.photos/id/20",
          price: 1999
        }
    
      
    

  return (
    <>
        <MainLayout>
          <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
            <div className="text-2xl font-bold my-4">Shopping cart</div>
            <div className="relative flex items-baseline justify-between gap-2">
              <ClientOnly>
                <div className="w-[65%]">
                  {cart.getCart().map(product => (
                    <CartItem key={product.id} product={product}/>
                  ))}
                </div>
              </ClientOnly>

              <div id="GoToCheckout" className="md:w-[33%] absolute top-0 right-0 m-2">
                  <ClientOnly>
                      <div className="bg-white p-4 border">
                          
                          <button 
                            onClick={() => goToCheckout()} 
                            className="flex items-center justify-center bg-blue-600 w-full text-white font-semibold p-3 rounded-full mt-4"
                          >
                              Go to checkout
                          </button>

                          <div className="flex items-center justify-between mt-4 text-sm mb-1">
                              <div>Items (3)</div>
                              <div>£ 12.99</div>
                          </div>
                          <div className="flex items-center justify-between mb-4 text-sm">
                              <div>Shipping:</div>
                              <div>Free</div>
                          </div>

                          <div className="border-b border-gray-300"/>

                          <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                              <div>Subtotal</div>
                              <div>£ 12.99</div>
                          </div>
                      </div>
                  </ClientOnly>
              </div>
            </div>
          </div>

          <SimilarProducts />

      </MainLayout>
    </>
  )
}