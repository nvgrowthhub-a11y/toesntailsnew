// 'use client';

// const reviews = [
//   {
//     name: 'Deepa Jha',
//     location: 'South Delhi',
//     text: 'Amazing at-home grooming experience with Prashant bhaiya. He was extremely polite and gentle, and most importantly, clearly knew what he was doing. His knowledge and comfort with dogs really showed throughout the session. I would strongly recommend him to anyone looking for a gentle, hassle-free, at-home grooming experience for their fur babies.',
//     rating: 5,
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5%20%20-KgQlhZPxkB6Jfg4JCjtVa13qHQYF55.jpeg'
//   },
//   {
//     name: 'Meera Choudhary',
//     location: 'Gurgaon',
//     text: 'I wanted to thank your team Toes N Tails for the excellent grooming service. The attention to detail, cleanliness, and care shown toward my pet was outstanding. It’s clear you genuinely love animals.',
//     rating: 5,
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20%20-Ab2n7cnLuszI18u4XXCeRCnJ7jbCUE.jpeg'
//   },
//   {
//     name: 'Akansha Tuteja ',
//     location: 'Noida',
//     text: 'One of the best dog groomers in Ghaziabad. Prashant has a lot of experience in dog grooming, and it clearly shows. I booked his services last week, and I don’t think I’ve ever had a better experience. He was very patient and calm throughout the session, and handled my dog with great care. I’m very happy with the service and will definitely book him again. Highly recommended for all pet parents.',
//     rating: 5,
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5%20%20-KgQlhZPxkB6Jfg4JCjtVa13qHQYF55.jpeg'
//   },
//   {
//     name: 'Samir Sudan',
//     location: 'Faridabad',
//     text: 'Very good experience of our Pamerian dogs grooming by Prashant Pet Grooming. Very much satisfied. Best Pet Groomer at Rajnagar Extension, Ghaziabad.',
//     rating: 5,
//     image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2%20%20-Ab2n7cnLuszI18u4XXCeRCnJ7jbCUE.jpeg'
//   },
// ];

// export default function Reviews() {
//   return (
//     <section className="py-20 px-4 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
//           What Our Clients Say
//         </h2>
//         <p className="text-center text-gray-600 mb-12 text-lg">
//           Hear from our happy pet parents across India
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {reviews.map((review, idx) => (
//             <div key={idx} className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-lg shadow-lg border-l-4 border-pink-600">
//               <div className="flex items-center gap-4 mb-4">
//                 <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold">
//                   {review.name.charAt(0)}
//                 </div>
//                 <div>
//                   <p className="font-bold text-gray-800">{review.name}</p>
//                   <p className="text-sm text-gray-600">📍 {review.location}</p>
//                 </div>
//               </div>
//               <div className="flex gap-1 mb-4">
//                 {[...Array(review.rating)].map((_, i) => (
//                   <span key={i} className="text-yellow-400">⭐</span>
//                 ))}
//               </div>
//               <p className="text-gray-700 italic leading-relaxed">"{review.text}"</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

const reviews = [
  {
    name: 'Deepa Jha',
    location: 'South Delhi',
    text: 'Amazing at-home grooming experience with Prashant bhaiya. He was extremely polite and gentle, and most importantly, clearly knew what he was doing. His knowledge and comfort with dogs really showed throughout the session. I would strongly recommend him to anyone looking for a gentle, hassle-free, at-home grooming experience for their fur babies.',
    rating: 5,
  },
  {
    name: 'Meera Choudhary',
    location: 'Gurgaon',
    text: 'I wanted to thank your team Toes N Tails for the excellent grooming service. The attention to detail, cleanliness, and care shown toward my pet was outstanding. It’s clear you genuinely love animals.',
    rating: 5,
  },
  {
    name: 'Akansha Tuteja',
    location: 'Noida',
    text: 'One of the best dog groomers in Ghaziabad. Prashant has a lot of experience in dog grooming, and it clearly shows. I booked his services last week, and I don’t think I’ve ever had a better experience. He was very patient and calm throughout the session, and handled my dog with great care. I’m very happy with the service and will definitely book him again. Highly recommended for all pet parents.',
    rating: 5,
  },
  {
    name: 'Samir Sudan',
    location: 'Faridabad',
    text: 'Very good experience of our Pomeranian dog grooming by Prashant Pet Grooming. Very much satisfied. Best Pet Groomer at Raj Nagar Extension, Ghaziabad.',
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          What Our Clients Say
        </h2>

        <p className="text-center text-gray-600 mb-12 text-lg">
          Hear from our happy pet parents across India
        </p>

        <div
          className="overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          <div className="flex gap-6 w-max">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="group w-[330px] md:w-[420px] flex-shrink-0 bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl shadow-lg border-l-4 border-pink-600 transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_35px_rgba(236,72,153,0.35)]"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-full bg-pink-600 flex items-center justify-center text-white font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {review.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      📍 {review.location}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 leading-7 italic">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}