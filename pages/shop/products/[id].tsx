import React from 'react'
import Link from 'next/link'
import DataJson from '../../../util/products.json'
import { useAppDispatch } from '../../../app/hooks/hooks'
import {
  addToCart,
  removeToCart
} from '../../../app/redux/states/product/actions'

const Detalles = ({ data }) => {
  const dispatch = useAppDispatch()
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 mb-24">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="relative mb-10" style={{ height: '564px' }}>
              <img
                className="object-cover w-full h-full"
                src={`${data.img}`}
                alt=""
              />
            </div>
            <div className="flex flex-wrap -mx-2"></div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="lg:pl-20">
              <div className="mb-10 pb-10 border-b">
                <span className="text-gray-500">Ropa</span>
                <h2 className="mt-2 mb-6 max-w-xl text-5xl md:text-6xl font-bold font-heading">
                  {data.nombre}
                </h2>
                <div className="mb-8">
                  <button>
                    <img src="yofte-assets/elements/star-gold.svg" alt="" />
                  </button>
                  <button>
                    <img src="yofte-assets/elements/star-gold.svg" alt="" />
                  </button>
                  <button>
                    <img src="yofte-assets/elements/star-gold.svg" alt="" />
                  </button>
                  <button>
                    <img src="yofte-assets/elements/star-gold.svg" alt="" />
                  </button>
                  <button>
                    <img src="yofte-assets/elements/star-gray.svg" alt="" />
                  </button>
                </div>
                <p className="inline-block mb-8 text-2xl font-bold font-heading text-blue-300">
                  <span>{data.precio}</span>
                  <span className="font-normal text-base text-gray-400 line-through">
                    $90.69
                  </span>
                </p>
                <p className="max-w-md text-gray-500">{data.descripcion}</p>
              </div>
              <div className="flex mb-12">
                <div className="mr-6">
                  <span className="block mb-4 font-bold font-heading text-gray-400 uppercase">
                    QTY
                  </span>
                  <div className="inline-flex items-center px-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md">
                    <button
                      onClick={() => dispatch(removeToCart(data.id))}
                      className="py-2 hover:text-gray-700 mr-5"
                    >
                      <svg
                        width="12"
                        height="2"
                        viewBox="0 0 12 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.35">
                          <rect
                            x="12"
                            width="2"
                            height="12"
                            transform="rotate(90 12 0)"
                            fill="currentColor"
                          ></rect>
                        </g>
                      </svg>
                    </button>
                    <button
                      className="py-2 hover:text-gray-700"
                      onClick={() => dispatch(addToCart(data))}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.35">
                          <rect
                            x="5"
                            width="2"
                            height="12"
                            fill="currentColor"
                          ></rect>
                          <rect
                            x="12"
                            y="5"
                            width="2"
                            height="12"
                            transform="rotate(90 12 5)"
                            fill="currentColor"
                          ></rect>
                        </g>
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <span className="block mb-4 font-bold font-heading text-gray-400 uppercase">
                    Size
                  </span>
                  <select
                    className="pl-6 pr-10 py-4 font-semibold font-heading text-gray-500 border border-gray-200 focus:ring-blue-300 focus:border-blue-300 rounded-md"
                    name=""
                    id=""
                  >
                    <option value="1">Medium</option>
                    <option value="2">Small</option>
                    <option value="3">Large</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-wrap -mx-4 mb-14 items-center">
                <div className="w-full xl:w-1/3 px-4">
                  <a
                    className="ml-auto sm:ml-0 flex-shrink-0 inline-flex mr-4 items-center justify-center w-16 h-16 rounded-md border hover:border-gray-500"
                    href="#"
                  >
                    <svg
                      className="w-6 h-6"
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.4993 26.2061L4.70067 16.9253C3.9281 16.1443 3.41815 15.1374 3.24307 14.0471C3.06798 12.9568 3.23664 11.8385 3.72514 10.8505V10.8505C4.09415 10.1046 4.63318 9.45803 5.29779 8.96406C5.96241 8.47008 6.73359 8.14284 7.54782 8.00931C8.36204 7.87578 9.19599 7.93978 9.98095 8.19603C10.7659 8.45228 11.4794 8.89345 12.0627 9.48319L13.4993 10.9358L14.9359 9.48319C15.5192 8.89345 16.2327 8.45228 17.0177 8.19603C17.8026 7.93978 18.6366 7.87578 19.4508 8.00931C20.265 8.14284 21.0362 8.47008 21.7008 8.96406C22.3654 9.45803 22.9045 10.1046 23.2735 10.8505V10.8505C23.762 11.8385 23.9306 12.9568 23.7556 14.0471C23.5805 15.1374 23.0705 16.1443 22.298 16.9253L13.4993 26.2061Z"
                        stroke="black"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="flex-shrink-0 inline-flex items-center justify-center w-16 h-16 rounded-md border hover:border-gray-500"
                    href="#"
                  >
                    <svg
                      className="w-6 h-6"
                      width="24"
                      height="23"
                      viewBox="0 0 24 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.01328 18.9877C2.05682 16.7902 2.71436 12.9275 6.3326 9.87096L6.33277 9.87116L6.33979 9.86454L6.3398 9.86452C6.34682 9.85809 8.64847 7.74859 13.4997 7.74859C13.6702 7.74859 13.8443 7.75111 14.0206 7.757L14.0213 7.75702L14.453 7.76978L14.6331 7.77511V7.59486V3.49068L21.5728 10.5736L14.6331 17.6562V13.6558V13.5186L14.4998 13.4859L14.1812 13.4077C14.1807 13.4075 14.1801 13.4074 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M2.01328 18.9877C7.16281 11.8391 14.012 13.3662 14.1792 13.4072M2.01328 18.9877L14.1792 13.4072M23.125 10.6961L23.245 10.5736L23.125 10.4512L13.7449 0.877527L13.4449 0.571334V1V6.5473C8.22585 6.54663 5.70981 8.81683 5.54923 8.96832C-0.317573 13.927 0.931279 20.8573 0.946581 20.938L0.946636 20.9383L1.15618 22.0329L1.24364 22.4898L1.47901 22.0885L2.041 21.1305L2.04103 21.1305C4.18034 17.4815 6.71668 15.7763 8.8873 15.0074C10.9246 14.2858 12.6517 14.385 13.4449 14.4935V20.1473V20.576L13.7449 20.2698L23.125 10.6961Z"
                        fill="black"
                        stroke="black"
                        strokeWidth="0.35"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <span className="mr-8 text-gray-500 font-bold font-heading uppercase">
                  SHARE IT
                </span>
                <a className="mr-1 w-8 h-8" href="#">
                  <img src="yofte-assets/buttons/facebook-circle.svg" alt="" />
                </a>
                <a className="mr-1 w-8 h-8" href="#">
                  <img src="yofte-assets/buttons/instagram-circle.svg" alt="" />
                </a>
                <a className="w-8 h-8" href="#">
                  <img src="yofte-assets/buttons/twitter-circle.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Detalles

export const getStaticPaths = async () => {
  const { products } = DataJson
  const paths = products.map(({ id }) => ({ params: { id: `${id}` } }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }) => {
  const { products } = DataJson
  const data = products.find(({ id }) => id === params.id)
  return { props: { data } }
}
