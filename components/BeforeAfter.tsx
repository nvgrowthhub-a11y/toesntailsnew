// 'use client';

// import Image from 'next/image';

// const beforeAfterExamples = [
//   {
//     before: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2275.PNG-tQDksTIX3NWNW6hyLxrZPxrDfKoSLa.png',
//     after: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2275.PNG-tQDksTIX3NWNW6hyLxrZPxrDfKoSLa.png',
//   },
//   {
//     before: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2278.PNG-ehKF01HHleZmiyRgT1JFPzijDLUHPa.png',
//     after: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2278.PNG-ehKF01HHleZmiyRgT1JFPzijDLUHPa.png',
//   },
//   {
//     before: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2277.PNG-9kfl7aOp32G1yYfY51QmZSKywQITI9.png',
//     after: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2277.PNG-9kfl7aOp32G1yYfY51QmZSKywQITI9.png',
//   },
//   {
//     before: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2276.PNG-7jd9KShvg75fa31SrT3UwmZVq8CsD9.png',
//     after: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2276.PNG-7jd9KShvg75fa31SrT3UwmZVq8CsD9.png',
//   },
//   {
//     before: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2274.PNG-XwdpdFWhmQ1YvbIxtlmQ7lmbHvpG3e.png',
//     after: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2274.PNG-XwdpdFWhmQ1YvbIxtlmQ7lmbHvpG3e.png',
//   },
// ];

// export default function BeforeAfter() {
//   return (
//     <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
//           Transformation Gallery
//         </h2>
//         <p className="text-center text-gray-600 mb-12 text-lg">
//           See the amazing transformations our grooming services provide
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {beforeAfterExamples.map((example, idx) => (
//             <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
//               <div className="relative w-full aspect-video">
//                 <Image
//                   src={example.before}
//                   alt="Before and After"
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-4 text-center">
//                 <p className="text-gray-700 font-semibold">Beautiful Transformation</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

const beforeAfterExamples = [
  {
    before:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2275.PNG-tQDksTIX3NWNW6hyLxrZPxrDfKoSLa.png",
  },
  {
    before:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2278.PNG-ehKF01HHleZmiyRgT1JFPzijDLUHPa.png",
  },
  {
    before:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2277.PNG-9kfl7aOp32G1yYfY51QmZSKywQITI9.png",
  },
  {
    before:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2276.PNG-7jd9KShvg75fa31SrT3UwmZVq8CsD9.png",
  },
  {
    before:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2274.PNG-XwdpdFWhmQ1YvbIxtlmQ7lmbHvpG3e.png",
  },
];

export default function BeforeAfter() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Transformation Gallery
        </h2>

        <p className="text-center text-gray-600 mb-12 text-lg">
          See the amazing transformations our grooming services provide
        </p>

        {/* Horizontal Scrolling Gallery */}
        <div
          className="overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex gap-8 w-max">
            {beforeAfterExamples.map((example, idx) => (
              <div
                key={idx}
                // className="w-[320px] md:w-[380px] flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
                className="w-[320px] md:w-[380px] flex-shrink-0 bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-500 cursor-pointer hover:-translate-y-2hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.6),0_0_80px_rgba(236,72,153,0.35)]"
              >
                <div className="relative w-full h-64">
                  <Image
                    src={example.before}
                    alt={`Transformation ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4 text-center">
                  <p className="text-gray-700 font-semibold">
                    Beautiful Transformation
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
