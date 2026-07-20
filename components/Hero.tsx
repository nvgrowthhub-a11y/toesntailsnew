// "use client";

// import Image from "next/image";

// export default function Hero() {
//   const handleBookAppointments = () => {
//     document.getElementById("contact")?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   const handleBookServices = () => {
//     document.getElementById("services")?.scrollIntoView({
//       behavior: "smooth",
//     });
//   };

//   return (
//     <section
//       id="home"
//       className="bg-gradient-to-r from-pink-200 via-pink-100 to-purple-100 pt-28 pb-24 px-4 overflow-hidden"
//     >
//       <br />
//       <div className="max-w-7xl mx-auto text-center">
//         {/* Curved Logo */}
//         <div className="relative flex justify-center mb-8">
//           {/* Curved Ring */}
//           <div className="absolute -top-12 w-72 h-72 border-[5px] border-pink-400 rounded-full opacity-25"></div>

//           {/* Logo */}
//           <div className="relative z-10 bg-white p-5 rounded-full shadow-2xl">
//             <Image
//               src="/images/toes-n-tails-logo.png"
//               alt="Toes N Tails"
//               width={180}
//               height={180}
//               priority
//               className="w-40 h-40 object-contain"
//             />
//           </div>
//         </div>

//         <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
//           professional pet grooming
//           <br />
//           <span className="text-pink-600">At Home</span>
//         </h1>

//         <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
//           Professional Pet Spa, Grooming & Care Experience. Where your furry
//           companions receive the royal treatment they deserve.
//         </p>

//         <div className="flex justify-center gap-5 flex-wrap">
//           <button
//             onClick={handleBookAppointments}
//             className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl transition duration-300 hover:scale-105"
//           >
//             Book Appointments
//           </button>

//           <button
//             onClick={handleBookServices}
//             className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-10 py-4 rounded-full text-lg font-semibold transition duration-300"
//           >
//             Book Services
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";

export default function Hero() {
  const handleBookAppointments = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleBookServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="bg-gradient-to-r from-pink-200 via-pink-100 to-purple-100 pt-28 pb-24 px-4 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        {/* Premium Logo */}
        <div className="flex justify-center mb-10">
          <div className="relative group">
            {/* Animated Glow */}
            <div className="absolute inset-0 rounded-full bg-pink-400 blur-3xl opacity-30 group-hover:opacity-50 transition duration-700 animate-pulse"></div>

            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border-[4px] border-pink-300 scale-110"></div>

            {/* Middle Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-white/70 scale-[1.18]"></div>

            {/* Logo Card */}
            <div className="relative bg-white rounded-full p-4 shadow-[0_20px_60px_rgba(236,72,153,0.35)] group-hover:scale-105 transition duration-500">
              <Image
                src="/images/toes-n-tails-logo.png"
                alt="Toes N Tails"
                width={150}
                height={150}
                priority
                className="w-32 h-32 md:w-36 md:h-36 object-contain rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Offer Card */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-2xl shadow-2xl border border-pink-200 px-6 py-4 flex flex-col md:flex-row items-center gap-4">
            <div className="text-4xl animate-bounce">🎉</div>

            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-gray-900">
                <span className="text-pink-600">30% OFF</span> for the First 50
                Customers
              </h3>

              <p className="text-gray-600">
                Limited Time Offer • Book your pet's grooming today.
              </p>
            </div>

            <button
              onClick={handleBookAppointments}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition duration-300 hover:scale-105"
            >
              Book Now →
            </button>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
          Professional Pet Grooming
          <br />
          <span className="text-pink-600">At Home</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-10">
          Professional Pet Spa, Grooming & Care Experience. Where your furry
          companions receive the royal treatment they deserve.
        </p>

        <div className="flex justify-center gap-5 flex-wrap">
          <button
            onClick={handleBookAppointments}
            className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl transition duration-300 hover:scale-105"
          >
            Book Appointment
          </button>

          <button
            onClick={handleBookServices}
            className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-10 py-4 rounded-full text-lg font-semibold transition duration-300"
          >
            View Services
          </button>
        </div>
      </div>
    </section>
  );
}
