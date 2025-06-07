import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Search, Calendar, Filter, MoreHorizontal, ArrowUp, ArrowDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import CreateOrder from './CreateOrder';

import { ordersData } from '../data/data';

// Stats card component
const StatsCard = ({ icon, title, value, change, period, color }) => (
  <div className="bg-white rounded-lg p-6 border border-gray-200">
    <div className="flex items-center justify-between mb-4">
      <div className="w-12 h-12 rounded-lg flex items-center justify-center">
        {icon}
      </div>
    </div>
    <div className="space-y-1">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-semibold text-gray-900">{value}</p>
      <div className="flex items-center text-sm">
        {change > 0 ? (
          <ArrowUp className="w-4 h-4 text-green-500 mr-1" />
        ) : (
          <ArrowDown className="w-4 h-4 text-red-500 mr-1" />
        )}
        <span className={change > 0 ? 'text-green-500' : 'text-red-500'}>
          {Math.abs(change)}%
        </span>
        <span className="text-gray-500 ml-1">{period}</span>
      </div>
    </div>
  </div>
);

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const navigate = useNavigate();

  return (
    <div className="flex h-screen overflow-hidden">
      <div className='flex-1 overflow-y-auto bg-[#F9FAFB]'>
        <Navbar />
        
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">Orders</h1>
              <p className="text-sm text-gray-500">12 orders</p>
            </div>
            <div className="flex items-center space-x-3">
              <button className="flex items-center px-4 py-2 border border-blue-600 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <ArrowUp className="w-4 h-4 mr-2 text-blue-600" />
                <span className='text-blue-600'>Export CSV</span>
              </button>
              <button onClick={() => navigate('/dashboard/create-order ')} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                <span className="mr-2">+</span>
                Create an order
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            icon={
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd_721_6255)">
                  <rect x="6" y="2" width="48" height="48" rx="24" fill="#6E90C7" />
                  <rect
                    x="6.5"
                    y="2.5"
                    width="47"
                    height="47"
                    rx="23.5"
                    stroke="#E3E0E0"
                  />
                </g>
                <path
                  d="M38.25 20H23.25C23.0511 20 22.8603 19.921 22.7197 19.7803C22.579 19.6397 22.5 19.4489 22.5 19.25C22.5 19.0511 22.579 18.8603 22.7197 18.7197C22.8603 18.579 23.0511 18.5 23.25 18.5H36C36.1989 18.5 36.3897 18.421 36.5303 18.2803C36.671 18.1397 36.75 17.9489 36.75 17.75C36.75 17.5511 36.671 17.3603 36.5303 17.2197C36.3897 17.079 36.1989 17 36 17H23.25C22.6533 17 22.081 17.2371 21.659 17.659C21.2371 18.081 21 18.6533 21 19.25V31.25C21 31.8467 21.2371 32.419 21.659 32.841C22.081 33.2629 22.6533 33.5 23.25 33.5H38.25C38.6478 33.5 39.0294 33.342 39.3107 33.0607C39.592 32.7794 39.75 32.3978 39.75 32V21.5C39.75 21.1022 39.592 20.7206 39.3107 20.4393C39.0294 20.158 38.6478 20 38.25 20ZM38.25 32H23.25C23.0511 32 22.8603 31.921 22.7197 31.7803C22.579 31.6397 22.5 31.4489 22.5 31.25V21.3716C22.7408 21.4569 22.9945 21.5004 23.25 21.5H38.25V32ZM33.75 26.375C33.75 26.1525 33.816 25.935 33.9396 25.75C34.0632 25.565 34.2389 25.4208 34.4445 25.3356C34.65 25.2505 34.8762 25.2282 35.0945 25.2716C35.3127 25.315 35.5132 25.4222 35.6705 25.5795C35.8278 25.7368 35.935 25.9373 35.9784 26.1555C36.0218 26.3738 35.9995 26.6 35.9144 26.8055C35.8292 27.0111 35.685 27.1868 35.5 27.3104C35.315 27.434 35.0975 27.5 34.875 27.5C34.5766 27.5 34.2905 27.3815 34.0795 27.1705C33.8685 26.9595 33.75 26.6734 33.75 26.375Z"
                  fill="white"
                />
                <defs>
                  <filter
                    id="filter0_dd_721_6255"
                    x="0"
                    y="0"
                    width="60"
                    height="60"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_dropShadow_721_6255"
                    />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_721_6255"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feMorphology
                      radius="2"
                      operator="erode"
                      in="SourceAlpha"
                      result="effect2_dropShadow_721_6255"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_721_6255"
                      result="effect2_dropShadow_721_6255"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_721_6255"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            }
            title="Amount owed"
            value="₦0.00"
            change={-24.5}
            period="vs 7 days ago"
            color="bg-blue-50"
          />

            <StatsCard
              icon={
                <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_dd_720_6194)">
                <rect x="6.29999" y="2" width="48" height="48" rx="24" fill="#B867BA"/>
                </g>
                <path d="M39.67 20.2017L31.42 15.6876C31.1996 15.5658 30.9519 15.502 30.7 15.502C30.4482 15.502 30.2004 15.5658 29.98 15.6876L21.73 20.2036C21.4944 20.3325 21.2977 20.5223 21.1605 20.7532C21.0233 20.984 20.9506 21.2475 20.95 21.5161V30.4823C20.9506 30.7509 21.0233 31.0144 21.1605 31.2452C21.2977 31.4761 21.4944 31.6659 21.73 31.7948L29.98 36.3108C30.2004 36.4326 30.4482 36.4964 30.7 36.4964C30.9519 36.4964 31.1996 36.4326 31.42 36.3108L39.67 31.7948C39.9056 31.6659 40.1023 31.4761 40.2395 31.2452C40.3767 31.0144 40.4494 30.7509 40.45 30.4823V21.517C40.4499 21.248 40.3774 20.9839 40.2402 20.7525C40.103 20.5211 39.906 20.3308 39.67 20.2017ZM30.7 17.0001L38.2319 21.1251L30.7 25.2501L23.1681 21.1251L30.7 17.0001ZM22.45 22.4376L29.95 26.542V34.5848L22.45 30.4833V22.4376ZM31.45 34.5848V26.5458L38.95 22.4376V30.4795L31.45 34.5848Z" fill="white"/>
                <defs>
                <filter id="filter0_dd_720_6194" x="0.299988" y="0" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_720_6194"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_720_6194"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_720_6194"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow_720_6194" result="effect2_dropShadow_720_6194"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_720_6194" result="shape"/>
                </filter>
                </defs>
                </svg>
              }
              title="Total orders"
              value="22"
              change={45}
              period="vs 7 days ago"
              color="bg-purple-50"
            />
            <StatsCard
              icon={
                <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_dd_720_6180)">
                <rect x="6.59998" y="2" width="48" height="48" rx="24" fill="#A4845D"/>
                <rect x="7.09998" y="2.5" width="47" height="47" rx="23.5" stroke="#E3E0E0"/>
                </g>
                <path d="M29.2922 28.8053C30.2973 28.1361 31.0605 27.1612 31.4688 26.0248C31.877 24.8883 31.9087 23.6506 31.5591 22.4947C31.2096 21.3389 30.4973 20.3262 29.5277 19.6064C28.5581 18.8867 27.3825 18.498 26.175 18.498C24.9674 18.498 23.7919 18.8867 22.8223 19.6064C21.8526 20.3262 21.1404 21.3389 20.7908 22.4947C20.4412 23.6506 20.4729 24.8883 20.8812 26.0248C21.2894 27.1612 22.0526 28.1361 23.0578 28.8053C21.2395 29.4755 19.6866 30.7156 18.6309 32.3406C18.5754 32.4231 18.5369 32.5158 18.5175 32.6133C18.4982 32.7108 18.4984 32.8111 18.5182 32.9085C18.5379 33.0059 18.5769 33.0984 18.6327 33.1807C18.6886 33.2629 18.7602 33.3332 18.8434 33.3875C18.9267 33.4418 19.0199 33.479 19.1177 33.497C19.2154 33.5149 19.3158 33.5133 19.4129 33.4921C19.51 33.4709 19.6019 33.4307 19.6834 33.3737C19.7648 33.3167 19.8341 33.244 19.8872 33.16C20.5682 32.1126 21.5 31.2519 22.5981 30.6561C23.6961 30.0603 24.9257 29.7482 26.175 29.7482C27.4243 29.7482 28.6538 30.0603 29.7519 30.6561C30.85 31.2519 31.7818 32.1126 32.4628 33.16C32.5728 33.3235 32.7427 33.4371 32.9358 33.4763C33.1289 33.5156 33.3297 33.4772 33.4948 33.3695C33.6598 33.2619 33.7759 33.0936 33.8178 32.9011C33.8598 32.7085 33.8243 32.5072 33.719 32.3406C32.6633 30.7156 31.1104 29.4755 29.2922 28.8053ZM22.05 24.1253C22.05 23.3095 22.2919 22.512 22.7452 21.8336C23.1984 21.1552 23.8427 20.6265 24.5964 20.3143C25.3501 20.0021 26.1795 19.9204 26.9797 20.0796C27.7799 20.2388 28.5149 20.6316 29.0918 21.2085C29.6687 21.7854 30.0615 22.5204 30.2207 23.3206C30.3799 24.1208 30.2982 24.9502 29.986 25.7039C29.6738 26.4576 29.1451 27.1019 28.4667 27.5551C27.7883 28.0084 26.9908 28.2503 26.175 28.2503C25.0813 28.2491 24.0328 27.8141 23.2595 27.0408C22.4862 26.2675 22.0512 25.219 22.05 24.1253ZM41.7506 33.3785C41.584 33.4871 41.3811 33.5251 41.1865 33.4841C40.9918 33.4432 40.8215 33.3266 40.7128 33.16C40.0326 32.112 39.1009 31.2509 38.0026 30.6554C36.9043 30.0598 35.6744 29.7487 34.425 29.7503C34.2261 29.7503 34.0353 29.6713 33.8946 29.5307C33.754 29.39 33.675 29.1992 33.675 29.0003C33.675 28.8014 33.754 28.6107 33.8946 28.47C34.0353 28.3293 34.2261 28.2503 34.425 28.2503C35.0324 28.2498 35.6323 28.115 36.1817 27.8557C36.731 27.5965 37.2163 27.2191 37.6029 26.7505C37.9895 26.2819 38.2679 25.7337 38.418 25.1451C38.5682 24.5565 38.5865 23.942 38.4717 23.3455C38.3568 22.749 38.1117 22.1852 37.7537 21.6944C37.3957 21.2036 36.9337 20.798 36.4008 20.5064C35.8678 20.2149 35.2771 20.0447 34.6707 20.0079C34.0644 19.9711 33.4574 20.0687 32.8931 20.2938C32.8011 20.3335 32.7021 20.3545 32.6018 20.3553C32.5016 20.3562 32.4022 20.3369 32.3096 20.2987C32.2169 20.2605 32.1329 20.2041 32.0624 20.1328C31.9919 20.0616 31.9364 19.9769 31.8991 19.8839C31.8619 19.7908 31.8437 19.6912 31.8456 19.591C31.8475 19.4908 31.8695 19.392 31.9103 19.3004C31.951 19.2089 32.0097 19.1264 32.0829 19.0579C32.156 18.9894 32.2422 18.9362 32.3362 18.9016C33.6276 18.3866 35.0639 18.368 36.3682 18.8496C37.6724 19.3311 38.7521 20.2785 39.399 21.5092C40.0459 22.7398 40.2141 24.1664 39.8712 25.5137C39.5283 26.861 38.6986 28.0336 37.5422 28.8053C39.3605 29.4755 40.9133 30.7156 41.969 32.3406C42.0777 32.5072 42.1157 32.7102 42.0747 32.9048C42.0338 33.0994 41.9172 33.2698 41.7506 33.3785Z" fill="white"/>
                <defs>
                <filter id="filter0_dd_720_6180" x="0.599976" y="0" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_720_6180"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_720_6180"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_720_6180"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow_720_6180" result="effect2_dropShadow_720_6180"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_720_6180" result="shape"/>
                </filter>
                </defs>
                </svg>
              }
              title="Completed orders"
              value="14"
              change={-24.5}
              period="vs 7 days ago"
              color="bg-orange-50"
            />
            <StatsCard
              icon={
                <svg width="61" height="60" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_dd_720_6208)">
                <rect x="6.89996" y="2" width="48" height="48" rx="24" fill="#307F9A"/>
                <rect x="7.39996" y="2.5" width="47" height="47" rx="23.5" stroke="#E3E0E0"/>
                </g>
                <path d="M35.875 27.5H34V24.5H35.875C36.5425 24.5 37.195 24.3021 37.7501 23.9312C38.3051 23.5604 38.7376 23.0333 38.9931 22.4166C39.2485 21.7999 39.3154 21.1213 39.1852 20.4666C39.0549 19.8119 38.7335 19.2105 38.2615 18.7385C37.7895 18.2665 37.1881 17.9451 36.5334 17.8149C35.8787 17.6846 35.2001 17.7515 34.5834 18.0069C33.9667 18.2624 33.4396 18.6949 33.0688 19.25C32.6979 19.805 32.5 20.4575 32.5 21.125V23H29.5V21.125C29.5 20.4575 29.3021 19.805 28.9312 19.25C28.5604 18.6949 28.0333 18.2624 27.4166 18.0069C26.7999 17.7515 26.1213 17.6846 25.4666 17.8149C24.8119 17.9451 24.2105 18.2665 23.7385 18.7385C23.2665 19.2105 22.9451 19.8119 22.8149 20.4666C22.6846 21.1213 22.7515 21.7999 23.0069 22.4166C23.2624 23.0333 23.6949 23.5604 24.25 23.9312C24.805 24.3021 25.4575 24.5 26.125 24.5H28V27.5H26.125C25.4575 27.5 24.805 27.6979 24.25 28.0688C23.6949 28.4396 23.2624 28.9667 23.0069 29.5834C22.7515 30.2001 22.6846 30.8787 22.8149 31.5334C22.9451 32.1881 23.2665 32.7895 23.7385 33.2615C24.2105 33.7335 24.8119 34.0549 25.4666 34.1852C26.1213 34.3154 26.7999 34.2485 27.4166 33.9931C28.0333 33.7376 28.5604 33.3051 28.9312 32.7501C29.3021 32.195 29.5 31.5425 29.5 30.875V29H32.5V30.875C32.5 31.5425 32.6979 32.195 33.0688 32.7501C33.4396 33.3051 33.9667 33.7376 34.5834 33.9931C35.2001 34.2485 35.8787 34.3154 36.5334 34.1852C37.1881 34.0549 37.7895 33.7335 38.2615 33.2615C38.7335 32.7895 39.0549 32.1881 39.1852 31.5334C39.3154 30.8787 39.2485 30.2001 38.9931 29.5834C38.7376 28.9667 38.3051 28.4396 37.7501 28.0688C37.195 27.6979 36.5425 27.5 35.875 27.5ZM34 21.125C34 20.7542 34.11 20.3916 34.316 20.0833C34.522 19.775 34.8149 19.5346 35.1575 19.3927C35.5001 19.2508 35.8771 19.2137 36.2408 19.286C36.6045 19.3584 36.9386 19.537 37.2008 19.7992C37.4631 20.0614 37.6416 20.3955 37.714 20.7592C37.7863 21.1229 37.7492 21.4999 37.6073 21.8425C37.4654 22.1851 37.225 22.478 36.9167 22.684C36.6084 22.89 36.2458 23 35.875 23H34V21.125ZM24.25 21.125C24.25 20.6277 24.4475 20.1508 24.7992 19.7992C25.1508 19.4475 25.6277 19.25 26.125 19.25C26.6223 19.25 27.0992 19.4475 27.4508 19.7992C27.8025 20.1508 28 20.6277 28 21.125V23H26.125C25.6277 23 25.1508 22.8025 24.7992 22.4508C24.4475 22.0992 24.25 21.6223 24.25 21.125ZM28 30.875C28 31.2458 27.89 31.6084 27.684 31.9167C27.478 32.225 27.1851 32.4654 26.8425 32.6073C26.4999 32.7492 26.1229 32.7863 25.7592 32.714C25.3955 32.6416 25.0614 32.4631 24.7992 32.2008C24.537 31.9386 24.3584 31.6045 24.286 31.2408C24.2137 30.8771 24.2508 30.5001 24.3927 30.1575C24.5346 29.8149 24.775 29.522 25.0833 29.316C25.3916 29.11 25.7542 29 26.125 29H28V30.875ZM29.5 24.5H32.5V27.5H29.5V24.5ZM35.875 32.75C35.3777 32.75 34.9008 32.5525 34.5492 32.2008C34.1975 31.8492 34 31.3723 34 30.875V29H35.875C36.3723 29 36.8492 29.1975 37.2008 29.5492C37.5525 29.9008 37.75 30.3777 37.75 30.875C37.75 31.3723 37.5525 31.8492 37.2008 32.2008C36.8492 32.5525 36.3723 32.75 35.875 32.75Z" fill="white"/>
                <defs>
                <filter id="filter0_dd_720_6208" x="0.899963" y="0" width="60" height="60" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect1_dropShadow_720_6208"/>
                <feOffset dy="2"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_720_6208"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feMorphology radius="2" operator="erode" in="SourceAlpha" result="effect2_dropShadow_720_6208"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"/>
                <feBlend mode="normal" in2="effect1_dropShadow_720_6208" result="effect2_dropShadow_720_6208"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_720_6208" result="shape"/>
                </filter>
                </defs>
                </svg>
              }
              title="Unpaid orders"
              value="6"
              change={45}
              period="vs 7 days ago"
              color="bg-teal-50"
            />
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-lg border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search for user name, ID etc.."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-80"
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </button>
                  <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <Calendar className="w-4 h-4 mr-2" />
                    Select Date
                  </button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left">
                      <input type="checkbox" className="rounded border-gray-300" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ACTION
                      <ChevronDown className="w-4 h-4 inline ml-1" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ORDER NO.
                      <ChevronDown className="w-4 h-4 inline ml-1" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ORDER NAME
                      <ChevronDown className="w-4 h-4 inline ml-1" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      AMOUNT
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      DATE
                      <ChevronDown className="w-4 h-4 inline ml-1" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      PAYMENT
                      <ChevronDown className="w-4 h-4 inline ml-1" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      STATUS
                      <ChevronDown className="w-4 h-4 inline ml-1" />
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {ordersData.map((order, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <input type="checkbox" className="rounded border-gray-300" />
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreHorizontal className="w-5 h-5" />
                        </button>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {order.orderId}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {order.orderName}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {order.amount}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900">
                        {order.date}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                          order.payment === 'Paid' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          • {order.payment}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                          • {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing 1-10 of 100 entries
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">Show</span>
                  <select 
                    value={entriesPerPage}
                    onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                    className="border border-gray-300 rounded px-2 py-1 text-sm"
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                  </select>
                  <span className="text-sm text-gray-500">entries</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                    ‹
                  </button>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm">
                    1
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm hover:bg-gray-50">
                    ›
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;