// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ErrorPage = () => {
//   const [position, setPosition] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (position > 90 && direction === 1) {
//         setDirection(-1);
//       } else if (position < 0 && direction === -1) {
//         setDirection(1);
//       }
//       setPosition(prev => prev + direction * 2);
//     }, 50);

//     return () => clearInterval(interval);
//   }, [position, direction]);

//   return (
//     <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-2 overflow-hidden">
//       <div className="max-w-md w-full bg-white rounded-xl shadow-xl overflow-hidden flex flex-col">

//         <div className="h-2 bg-red-600 w-full"></div>

//         <div className="p-8 flex-grow overflow-y-auto">
//           {/* Emoji and main heading ): */}
//           <div className="text-center mb-6">
//             <p className="text-7xl mb-4">🍽️</p>
//             <h1 className="text-3xl font-bold text-red-600 mb-2">Oops! Page Not Found</h1>
//             <p className="text-gray-600 text-lg">
//               Looks like this dish isn't on our menu anymore.
//             </p>
//           </div>

//           {/* Animated delivery guy ): */}
//           <div className="h-24 relative my-8 overflow-hidden">
//             <div
//               className="absolute transition-all duration-500"
//               style={{
//                 left: `${position}%`
//               }}
//             >
//               <div className="flex flex-col items-center">
//                 <div
//                   className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center text-3xl shadow-md"
//                   style={{ transform: direction === 1 ? 'scaleX(1)' : 'scaleX(-1)' }}
//                 >
//                   🛵
//                 </div>
//                 <p className="text-xs font-medium text-gray-500 mt-1">Delivery Rider</p>
//               </div>
//             </div>

//             {/* Delivery Rider Road ): */}
//             <div className="absolute bottom-0 w-full h-1 bg-gray-200"></div>
//           </div>

//           <div className="text-center mb-8">
//             <p className="text-gray-500">
//               Our delivery rider is searching for your page, but can't seem to find it!
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//             <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
//               <h3 className="font-medium text-gray-900 mb-1">Hungry for more?</h3>
//               <p className="text-gray-500 text-sm mb-3">Check out our popular restaurants</p>
//               <button className="w-full text-sm bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors focus:ring-2 focus:ring-red-300 focus:outline-none">
//                 Browse Restaurants
//               </button>
//             </div>

//             <div className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow">
//               <h3 className="font-medium text-gray-900 mb-1">Lost your way?</h3>
//               <p className="text-gray-500 text-sm mb-3">Return to our homepage</p>
//               <button onClick={()=> navigate("/")} className="w-full text-sm border border-red-600 text-red-600 hover:bg-red-50 py-2 rounded-lg transition-colors focus:ring-2 focus:ring-red-200 focus:outline-none">
//                 Go Home
//               </button>
//             </div>
//           </div>

//           {/* <div className="mt-8">
//             <p className="text-sm text-gray-500 mb-2">Or try searching for something else:</p>
//             <div className="flex">
//               <input
//                 type="text"
//                 placeholder="Search for dishes or restaurants..."
//                 className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//               />
//               <button className="bg-red-600 hover:bg-red-700 text-white px-4 rounded-r-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500">
//                 Search
//               </button>
//             </div>
//           </div> */}
//         </div>

//         {/* Footer */}
//         <div className="border-t border-gray-100 p-4 bg-gray-50">
//           <div className="flex justify-between items-center">
//             <div className="text-sm text-gray-500">
//               Error Code: 404
//             </div>
//             <div className="flex space-x-4">
//               <button className="text-gray-500 hover:text-red-600 text-sm">Help</button>
//               <button className="text-gray-500 hover:text-red-600 text-sm">Contact Us</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ErrorPage;


// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ErrorPage = () => {
//   const [position, setPosition] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const [isHungry, setIsHungry] = useState(false);
//   const [isLost, setIsLost] = useState(false);
//   const [dayNightMode, setDayNightMode] = useState('day');
//   const [deliveryComments, setDeliveryComments] = useState('Searching for your page...');
//   const [speed, setSpeed] = useState(2);

//   const navigate = useNavigate();

//   // Switch between day and night mode
//   const toggleDayNight = () => {
//     setDayNightMode(prev => prev === 'day' ? 'night' : 'day');
//   };

//   // Animation for the delivery rider
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (position > 90 && direction === 1) {
//         setDirection(-1);
//         setDeliveryComments("Looking over here now...");
//       } else if (position < 0 && direction === -1) {
//         setDirection(1);
//         setDeliveryComments("Maybe it's this way?");
//       }
//       setPosition(prev => prev + direction * speed);
//     }, 50);

//     return () => clearInterval(interval);
//   }, [position, direction, speed]);

//   // Random food emoji generator
//   const getFoodEmoji = () => {
//     const foodEmojis = ["🍕", "🍔", "🍣", "🍜", "🍗", "🥗", "🌮", "🥪", "🍝", "🍱"];
//     return foodEmojis[Math.floor(Math.random() * foodEmojis.length)];
//   };

//   // Random comments when hovering delivery guy
//   const getHoverComment = () => {
//     const comments = [
//       "Hey! I'm working here!",
//       "Honk honk! Coming through!",
//       "Need directions?",
//       "Food's getting cold!",
//       "Five-star rating please!"
//     ];
//     return comments[Math.floor(Math.random() * comments.length)];
//   };

//   const handleRiderHover = () => {
//     setDeliveryComments(getHoverComment());
//     // Reset after 2 seconds
//     setTimeout(() => {
//       setDeliveryComments("Searching for your page...");
//     }, 2000);
//   };

//   const speedUp = () => {
//     setSpeed(prev => Math.min(prev + 1, 10));
//     setDeliveryComments("Speeding up! 🚀");
//   };

//   // console.log("speed",speed)

//   const bgColor = dayNightMode === 'day' ? 'bg-gradient-to-b from-blue-50 to-gray-100' : 'bg-gradient-to-b from-gray-900 to-blue-900';
//   const cardBg = dayNightMode === 'day' ? 'bg-white' : 'bg-gray-800';
//   const textColor = dayNightMode === 'day' ? 'text-gray-800' : 'text-gray-100';
//   const subtextColor = dayNightMode === 'day' ? 'text-gray-600' : 'text-gray-300';
//   const boxBg = dayNightMode === 'day' ? 'bg-gray-50' : 'bg-gray-700';

//   return (
//     <div className={`min-h-screen w-full flex items-center justify-center ${bgColor} p-4 overflow-auto transition-colors duration-1000`}>
//       <div className={`max-w-[190%] w-full ${cardBg} rounded-xl shadow-2xl overflow-hidden flex flex-col transition-colors duration-1000 `}>
//         {/* Header with day/night toggle */}
//         <div className="h-2 bg-red-600 w-full relative">
//           <button 
//             onClick={toggleDayNight}
//             className="absolute -bottom-8 right-4 w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 z-10"
//             style={{
//               background: dayNightMode === 'day' 
//                 ? 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)' 
//                 : 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)'
//             }}
//           >
//             {dayNightMode === 'day' ? '☀️' : '🌙'}
//           </button>
//         </div>

//         {/* Main content */}
//         <div className={`p-8 ${textColor} transition-colors duration-1000`}>
//           {/* Emoji and main heading */}
//           <div className="text-center mb-6 relative">
//             <div className="absolute -top-6 w-full flex justify-center pointer-events-none">
//               {isHungry && (
//                 <>
//                   <div className="animate-bounce text-3xl ml-16 mt-2 absolute">
//                     {getFoodEmoji()}
//                   </div>
//                   <div className="animate-bounce text-3xl -ml-16 mt-4 absolute" style={{animationDelay: '0.3s'}}>
//                     {getFoodEmoji()}
//                   </div>
//                 </>
//               )}
//             </div>
//             <p className="text-7xl mb-4 transform transition-transform hover:scale-110 hover:rotate-12 cursor-pointer relative z-10" 
//               onClick={() => setIsHungry(!isHungry)}>
//               🍽️
//             </p>
//             <h1 className="text-3xl font-bold text-red-600 mb-2">
//               Oops! Page Not Found
//             </h1>
//             <p className={`${subtextColor} text-lg`}>
//               Looks like this dish isn't on our menu anymore.
//             </p>
//           </div>

//           {/* Animated delivery guy */}
//           <div 
//             className={`h-40 relative my-8 overflow-hidden rounded-lg ${boxBg} transition-colors duration-1000`}
//             onClick={speedUp}
//           >
//             {/* Sky elements - stars or clouds */}
//             {dayNightMode === 'day' ? (
//               <div className="absolute top-0 left-0 w-full">
//                 <div className="absolute top-2 left-10 text-xl opacity-60">☁️</div>
//                 <div className="absolute top-1 right-20 text-xl opacity-70">☁️</div>
//               </div>
//             ) : (
//               <div className="absolute top-0 left-0 w-full">
//                 <div className="absolute top-2 left-10 text-sm opacity-80">✨</div>
//                 <div className="absolute top-1 right-10 text-sm opacity-70">✨</div>
//                 <div className="absolute top-3 left-32 text-sm opacity-90">✨</div>
//               </div>
//             )}

//             {/* Delivery rider with speech bubble */}
//             <div
//               className="absolute transition-all duration-500 cursor-pointer"
//               style={{
//                 left: `${position}%`,
//                 top: '60%',
//                 transform: 'translateY(-50%)'
//               }}
//               onMouseEnter={handleRiderHover}
//             >
//               <div className="relative">
//                 {/* Speech bubble - adjusted positioning */}
//                 <div 
//                   className={`absolute -top-10 ${direction === 1 ? 'left-0' : 'right-0'} ${dayNightMode === 'day' ? 'bg-white' : 'bg-gray-600'} px-2 py-1 rounded-lg text-xs w-32 shadow-md transition-all duration-300 opacity-90 z-20`}
//                   style={{
//                     transform: `translateX(${direction === 1 ? '0' : '-100%'})`,
//                   }}
//                 >
//                   {deliveryComments}
//                   <div 
//                     className={`absolute -bottom-2 ${direction === 1 ? 'left-6' : 'right-6'} w-4 h-4 ${dayNightMode === 'day' ? 'bg-white' : 'bg-gray-600'} transform rotate-45`}
//                   ></div>
//                 </div>

//                 <div className="flex flex-col items-center">
//                   <div
//                     className={`w-16 h-16 ${dayNightMode === 'day' ? 'bg-red-100' : 'bg-red-900'} rounded-full flex items-center justify-center text-3xl shadow-md transition-transform hover:scale-110`}
//                     style={{ transform: direction === 1 ? 'scaleX(1)' : 'scaleX(-1)' }}
//                   >
//                     {speed > 4 ? '🏍️' : '🛵'}
//                   </div>
//                   <p className={`text-xs font-medium ${subtextColor} mt-1`}>
//                     {speed > 4 ? 'Speed Mode!' : 'Delivery Rider'}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Road with dashed lines */}
//             <div className="absolute bottom-4 w-full h-2 bg-gray-300 flex items-center">
//               <div className="absolute w-full flex justify-between">
//                 {[...Array(10)].map((_, i) => (
//                   <div key={i} className="h-1 w-8 bg-yellow-400"></div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Fun message */}
//           <div className="text-center mb-8">
//             <p className={`${subtextColor}`}>
//               Our delivery rider is searching for your page, but can't seem to find it!
//               <br/>
//               <span className="text-sm italic">(Tap the road to speed up the search)</span>
//             </p>
//           </div>

//           {/* Options grid */}
//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//             <div 
//               className={`${boxBg} p-4 rounded-lg transition-all duration-300 ${isHungry ? 'scale-105 shadow-md ring-2 ring-red-500' : 'hover:shadow-md'}`}
//               onMouseEnter={() => setIsHungry(true)}
//               onMouseLeave={() => setIsHungry(false)}
//             >
//               <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1 flex items-center">
//                 <span className="mr-2 text-lg">🍲</span> Hungry for more?
//               </h3>
//               <p className={`${subtextColor} text-sm mb-3`}>Check out our popular restaurants</p>
//               <button className="w-full text-sm bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-all hover:shadow-lg focus:ring-2 focus:ring-red-300 focus:outline-none">
//                 Browse Restaurants
//               </button>
//             </div>

//             <div 
//               className={`${boxBg} p-4 rounded-lg transition-all duration-300 ${isLost ? 'scale-105 shadow-md ring-2 ring-blue-500' : 'hover:shadow-md'}`}
//               onMouseEnter={() => setIsLost(true)}
//               onMouseLeave={() => setIsLost(false)}
//             >
//               <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1 flex items-center">
//                 <span className="mr-2 text-lg">🏠</span> Lost your way?
//               </h3>
//               <p className={`${subtextColor} text-sm mb-3`}>Return to our homepage</p>
//               <button 
//                 onClick={()=> navigate("/")} 
//                 className="w-full text-sm border border-red-600 text-red-600 hover:bg-red-50 dark:hover:bg-red-900 py-2 rounded-lg transition-all hover:shadow-lg focus:ring-2 focus:ring-red-200 focus:outline-none"
//               >
//                 Go Home
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Footer with easter egg */}
//         <div className={`border-t ${dayNightMode === 'day' ? 'border-gray-100 bg-gray-50' : 'border-gray-700 bg-gray-800'} p-4 transition-colors duration-1000`}>
//           <div className="flex justify-between items-center">
//             <div className={`text-sm ${subtextColor} group relative cursor-help`}>
//               Error Code: 404
//               <span className="absolute bottom-full left-0 bg-black text-white text-xs rounded px-2 py-1 mb-2 hidden group-hover:block w-48 z-20">
//                 Fun fact: The 404 error began at CERN, where Tim Berners-Lee invented the web!
//               </span>
//             </div>
//             <div className="flex space-x-4">
//               <button className={`${subtextColor} hover:text-red-600 text-sm transition-colors`}>
//                 Help
//               </button>
//               <button className={`${subtextColor} hover:text-red-600 text-sm transition-colors`}>
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ErrorPage;





// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const ErrorPage = () => {
//   // Core state
//   const [position, setPosition] = useState(0);
//   const [direction, setDirection] = useState(1);
//   const [deliveryComments, setDeliveryComments] = useState('Searching for your page...');
//   const [speed, setSpeed] = useState(2);
//   const [dayNightMode, setDayNightMode] = useState('day');
//   const [shake, setShake] = useState(false);

//   const navigate = useNavigate();

//   // Reset animation function
//   const resetAnimation = () => {
//     setPosition(0);
//     setDirection(1);
//     setSpeed(2);
//     setDeliveryComments("Searching for your page...");
//   };

//   // Toggle day/night mode
//   const toggleDayNight = () => {
//     setDayNightMode(dayNightMode === 'day' ? 'night' : 'day');
//   };

//   // Rider animation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (position > 90 && direction === 1) {
//         setDirection(-1);
//         setDeliveryComments("Looking over here now...");
//         setShake(true);
//       } else if (position < 0 && direction === -1) {
//         setDirection(1);
//         setDeliveryComments("Maybe it's this way?");
//         setShake(true);
//       }

//       setPosition(prev => prev + direction * speed * 0.16);
//     }, 16);
//     return () => clearInterval(interval);
//   }, [position, direction, speed]);

//   // Reset shake effect
//   useEffect(() => {
//     if (shake) {
//       setTimeout(() => setShake(false), 500);
//     }
//   }, [shake]);

//   // Random hover comments for the delivery rider
//   const getHoverComment = () => {
//     const comments = [
//       "Hey! I'm working here!",
//       "Need directions?",
//       "Food's getting cold!",
//       "Did you order the 404 special?",
//       "This website is under construction... or demolition?",
//     ];
//     return comments[Math.floor(Math.random() * comments.length)];
//   };

//   const handleRiderHover = () => {
//     setDeliveryComments(getHoverComment());
//     setTimeout(() => {
//       setDeliveryComments("Searching for your page...");
//     }, 2000);
//   };

//   const speedUp = () => {
//     setSpeed(prev => Math.min(prev + 1, 10));
//     setDeliveryComments(speed > 7 ? "Maximum speed! 🔥" : "Speeding up! 🚀");
//   };

//   // Dynamic styling based on day/night mode
//   const bgColor = dayNightMode === 'day' 
//     ? 'bg-gradient-to-b from-blue-50 to-gray-100' 
//     : 'bg-gradient-to-b from-gray-900 to-blue-900';

//   const cardBg = dayNightMode === 'day' ? 'bg-white' : 'bg-gray-800';
//   const textColor = dayNightMode === 'day' ? 'text-gray-800' : 'text-gray-100';
//   const subtextColor = dayNightMode === 'day' ? 'text-gray-600' : 'text-gray-300';
//   const boxBg = dayNightMode === 'day' ? 'bg-gray-50' : 'bg-gray-700';

//   return (
//     <div className={`min-h-screen w-full flex flex-col items-center justify-center ${bgColor} p-4 transition-colors duration-1000`}>
//       {/* Main Card */}
//       <div className={`max-w-[100%] w-full ${cardBg} rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-500 ${shake ? 'animate-shake' : ''}`}>
//         {/* Header with Day/Night Toggle */}
//         <div className="h-2 bg-red-600 w-full relative">
//           <button
//             onClick={toggleDayNight}
//             className="absolute -bottom-8 right-4 w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:scale-110 z-10"
//             style={{
//               background: dayNightMode === 'day'
//                 ? 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)'
//                 : 'linear-gradient(135deg, #4b6cb7 0%, #182848 100%)',
//             }}
//           >
//             <span className="text-xl">{dayNightMode === 'day' ? '☀️' : '🌙'}</span>
//           </button>
//         </div>

//         {/* Main Content */}
//         <div className={`p-8 ${textColor} transition-colors duration-500`}>
//           <div className="text-center mb-6">
//             <p className="text-7xl mb-4 hover:scale-110 cursor-pointer transition-transform">
//               🍽️
//             </p>
//             <h1 className="text-3xl font-bold text-red-600 mb-2">
//               Oops! Page Not Found
//             </h1>
//             <p className={`${subtextColor} text-lg`}>
//               Looks like this dish isn't on our menu anymore.
//             </p>
//           </div>

//           {/* Delivery Rider Animation */}
//           <div
//             className={`h-40 relative my-6 overflow-hidden rounded-lg ${boxBg} shadow-inner hover:shadow-lg cursor-pointer`}
//             onClick={speedUp}
//           >
//             {/* Simple Background Elements */}
//             <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
//               {dayNightMode === 'day' ? (
//                 <>
//                   <div className="absolute top-2 left-10 text-xl opacity-60">☁️</div>
//                   <div className="absolute top-1 right-20 text-xl opacity-70">☁️</div>
//                   <div className="absolute bottom-8 left-10 text-xl">🏢</div>
//                   <div className="absolute bottom-8 right-20 text-xl">🏬</div>
//                 </>
//               ) : (
//                 <>
//                   <div className="absolute top-2 left-10 text-sm opacity-80">✨</div>
//                   <div className="absolute top-1 right-10 text-sm opacity-70">✨</div>
//                   <div className="absolute top-4 right-8 text-lg opacity-90">🌕</div>
//                   <div className="absolute bottom-8 text-xl w-full flex justify-around">
//                     <span>🌆</span>
//                   </div>
//                 </>
//               )}
//             </div>

//             {/* Delivery Rider with Speech Bubble */}
//             <div
//               className="absolute transition-all duration-300 cursor-pointer"
//               style={{
//                 left: `${position}%`,
//                 top: '60%',
//                 transform: 'translateY(-50%)',
//               }}
//               onMouseEnter={handleRiderHover}
//             >
//               <div className="relative">
//                 <div
//                   className={`absolute -top-10 ${direction === 1 ? 'left-0' : 'right-0'} ${dayNightMode === 'day' ? 'bg-white' : 'bg-gray-600'} px-2 py-1 rounded-lg text-xs w-36 shadow-md`}
//                   style={{
//                     transform: `translateX(${direction === 1 ? '0' : '-100%'})`,
//                   }}
//                 >
//                   {deliveryComments}
//                   <div className={`absolute -bottom-2 ${direction === 1 ? 'left-6' : 'right-6'} w-4 h-4 ${dayNightMode === 'day' ? 'bg-white' : 'bg-gray-600'} transform rotate-45`}></div>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   <div
//                     className="w-14 h-14 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center text-2xl shadow-md hover:scale-110 transition-transform"
//                     style={{
//                       transform: direction === 1 ? 'scaleX(1)' : 'scaleX(-1)',
//                     }}
//                   >
//                     {speed > 8 ? '🏍️' : speed > 4 ? '🛵' : '🚲'}
//                   </div>
//                   <p className={`text-xs font-medium ${subtextColor} mt-1`}>
//                     {speed > 8 ? 'Turbo Mode!' : speed > 4 ? 'Speed Mode!' : 'Delivery Rider'}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Simple Road */}
//             <div className="absolute bottom-4 w-full h-3 bg-gray-400 dark:bg-gray-600 shadow-inner flex items-center">
//               <div
//                 className="absolute w-full flex justify-between"
//                 style={{
//                   animation: `roadScroll ${10 / speed}s linear infinite`,
//                   animationDirection: direction === 1 ? 'normal' : 'reverse',
//                 }}
//               >
//                 {[...Array(10)].map((_, i) => (
//                   <div
//                     key={i}
//                     className="h-1 w-8 bg-yellow-400"
//                   />
//                 ))}
//               </div>
//             </div>

//             {/* Controls */}
//             <div className="absolute bottom-2 flex gap-2 items-center right-2 text-xs font-mono">
//               <button onClick={resetAnimation} className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
//                 Reset
//               </button>
//               <span className={`${subtextColor} bg-gray-200 dark:bg-gray-700 px-1 py-0.5 rounded`}>
//                 Speed: {speed}/10
//               </span>
//             </div>
//           </div>

//           <div className="text-center mb-6">
//             <p className={`${subtextColor}`}>
//               Our delivery rider is searching for your page, but can't seem to find it!
//             </p>
//             <p className="text-sm italic mt-1 text-gray-500 dark:text-gray-400">
//               Tap the road to speed up the search
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//             <div className={`${boxBg} p-4 rounded-lg hover:shadow-md hover:-translate-y-1 transition-all duration-300`}>
//               <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1 flex items-center">
//                 <span className="mr-2 text-lg">🍔</span>
//                 Browse Menu
//               </h3>
//               <p className="text-sm text-gray-600 dark:text-gray-300">
//                 Check out our delicious offerings.
//               </p>
//             </div>
//             <div className={`${boxBg} p-4 rounded-lg hover:shadow-md hover:-translate-y-1 transition-all duration-300`}>
//               <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-1 flex items-center">
//                 <span className="mr-2 text-lg">🍕</span>
//                 Order Online
//               </h3>
//               <p className="text-sm text-gray-600 dark:text-gray-300">
//                 Place an order for delivery or pickup.
//               </p>
//             </div>
//           </div>

//           <div className="mt-6 text-center">
//             <button onClick={() => navigate("/")} className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors">
//               Go to Homepage
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Simple CSS Animation Keyframes */}
//       <style jsx>{`
//         @keyframes roadScroll {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(100%); }
//         }

//         @keyframes shake {
//           0%, 100% { transform: translateX(0); }
//           25% { transform: translateX(-5px); }
//           75% { transform: translateX(5px); }
//         }

//         .animate-shake {
//           animation: shake 0.5s;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ErrorPage;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Sun, Moon, RefreshCw, Home, Menu, ShoppingBag, TrendingUp, Flag } from 'lucide-react';

const ErrorPage = () => {
  // Core state
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);
  const [deliveryComments, setDeliveryComments] = useState('Searching for your page...');
  const [speed, setSpeed] = useState(2);
  const [dayNightMode, setDayNightMode] = useState('day');
  const [shake, setShake] = useState(false);

  const navigate = useNavigate();

  // Reset animation function
  const resetAnimation = () => {
    setPosition(0);
    setDirection(1);
    setSpeed(2);
    setDeliveryComments("Searching for your page...");
  };

  // Toggle day/night mode
  const toggleDayNight = () => {
    setDayNightMode(dayNightMode === 'day' ? 'night' : 'day');
  };

  // Rider animation
  useEffect(() => {
    const interval = setInterval(() => {
      if (position > 90 && direction === 1) {
        setDirection(-1);
        setDeliveryComments("Looking over here now...");
        setShake(true);
      } else if (position < 0 && direction === -1) {
        setDirection(1);
        setDeliveryComments("Maybe it's this way?");
        setShake(true);
      }
      
      setPosition(prev => prev + direction * speed * 0.16);
    }, 16);
    return () => clearInterval(interval);
  }, [position, direction, speed]);

  // Reset shake effect
  useEffect(() => {
    if (shake) {
      setTimeout(() => setShake(false), 500);
    }
  }, [shake]);

  // Random hover comments for the delivery rider
  const getHoverComment = () => {
    const comments = [
      "Hey! I'm working here! 😤",
      "Need directions? 🧭",
      "Food's getting cold! 🥶",
      "Did you order the 404 special? 🍲",
      "This website is under construction... or demolition? 🚧",
    ];
    return comments[Math.floor(Math.random() * comments.length)];
  };

  const handleRiderHover = () => {
    setDeliveryComments(getHoverComment());
    setTimeout(() => {
      setDeliveryComments("Searching for your page...");
    }, 2000);
  };

  const speedUp = () => {
    setSpeed(prev => Math.min(prev + 1, 10));
    setDeliveryComments(speed > 7 ? "Maximum speed! 🔥" : "Speeding up! 🚀");
  };

  // Dynamic styling based on day/night mode
  const bgColor = dayNightMode === 'day' 
    ? 'bg-gradient-to-b from-red-50 to-gray-100' 
    : 'bg-gradient-to-b from-gray-900 to-red-950';
  
  const cardBg = dayNightMode === 'day' ? 'bg-white' : 'bg-gray-800';
  const textColor = dayNightMode === 'day' ? 'text-gray-800' : 'text-gray-100';
  const subtextColor = dayNightMode === 'day' ? 'text-gray-600' : 'text-gray-300';
  const boxBg = dayNightMode === 'day' ? 'bg-gray-50' : 'bg-gray-700';
  
  // Zomato red theme colors
  const primaryRed = dayNightMode === 'day' ? 'bg-red-600' : 'bg-red-700';
  const secondaryRed = dayNightMode === 'day' ? 'bg-red-500' : 'bg-red-600';
  const lightRed = dayNightMode === 'day' ? 'bg-red-100' : 'bg-red-900';
  const textRed = dayNightMode === 'day' ? 'text-red-600' : 'text-red-400';

  // Vehicle selection based on speed
  const getVehicleIcon = () => {
    if (speed > 8) return "🏍️";
    if (speed > 6) return "🛻";
    if (speed > 4) return "🛵";
    if (speed > 2) return "🚲";
    return "🛴";
  };

  // Scene elements based on day/night
  const getSceneElements = () => {
    if (dayNightMode === 'day') {
      return (
        <>
          <div className="absolute top-2 left-10 text-xl opacity-60">☁️</div>
          <div className="absolute top-1 right-20 text-xl opacity-70">☁️</div>
          <div className="absolute bottom-8 left-16 text-xl">🏙️</div>
          <div className="absolute bottom-8 right-16 text-xl">🏪</div>
          <div className="absolute top-4 left-1/3 text-2xl opacity-90">☀️</div>
        </>
      );
    } else {
      return (
        <>
          <div className="absolute top-2 left-10 text-sm opacity-80">✨</div>
          <div className="absolute top-1 right-20 text-sm opacity-80">✨</div>
          <div className="absolute top-1 left-1/4 text-sm opacity-70">✨</div>
          <div className="absolute top-4 right-1/4 text-lg opacity-90">🌕</div>
          <div className="absolute bottom-8 text-xl w-full flex justify-around">
            <span>🌃</span>
          </div>
        </>
      );
    }
  };

  return (
    <div className={`min-h-screen w-full flex flex-col items-center justify-center ${bgColor} p-4 transition-colors duration-1000`}>
      {/* Main Card */}
      <div className={`max-w-[100%] w-full ${cardBg} rounded-xl shadow-2xl overflow-hidden flex flex-col transition-all duration-500 ${shake ? 'animate-shake' : ''}`}>
        {/* Header with Day/Night Toggle */}
        <div className="h-3 bg-red-600 w-full relative">
          {/* <button
            onClick={toggleDayNight}
            className="absolute -bottom-8 right-4 w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:scale-110 z-10 transition-all duration-300"
            style={{
              background: dayNightMode === 'day'
                ? 'linear-gradient(135deg, #f5f7fa 0%, #e31837 100%)'
                : 'linear-gradient(135deg, #000000 0%, #e31837 100%)',
            }}
          >
            {dayNightMode === 'day' ? 
              <Sun size={24} className="text-gray-800" /> : 
              <Moon size={24} className="text-gray-100" />
            }
          </button> */}
        </div>

        {/* Main Content */}
        <div className={`p-8 ${textColor} transition-colors duration-500`}>
          <div className="text-center mb-8">
            <div className="inline-block p-6 bg-red-100 dark:bg-red-900 rounded-full mb-6 shadow-lg hover:scale-110 cursor-pointer transition-transform duration-300">
              <div className="text-7xl">🍽️</div>
            </div>
            <h1 className="text-4xl font-bold text-red-600 dark:text-red-400 mb-3">
              Oops! Page Not Found
            </h1>
            <p className={`${subtextColor} text-lg max-w-lg mx-auto`}>
              Looks like this dish isn't on our menu anymore. Our delivery team is looking everywhere!
            </p>
          </div>

          {/* Delivery Rider Animation */}
          <div
            className={`h-48 relative my-8 overflow-hidden rounded-xl ${boxBg} shadow-inner hover:shadow-xl cursor-pointer transition-all duration-300`}
            onClick={speedUp}
          >
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
              {getSceneElements()}
            </div>

            {/* Delivery Rider with Speech Bubble */}
            <div
              className="absolute transition-all duration-300 cursor-pointer"
              style={{
                left: `${position}%`,
                top: '60%',
                transform: 'translateY(-50%)',
              }}
              onMouseEnter={handleRiderHover}
            >
              <div className="relative">
                <div
                  className={`absolute -top-14 ${direction === 1 ? 'left-0' : 'right-0'} ${dayNightMode === 'day' ? 'bg-white' : 'bg-gray-700'} px-3 py-2 rounded-xl text-sm w-40 shadow-lg border-l-4 ${dayNightMode === 'day' ? 'border-red-500' : 'border-red-600'}`}
                  style={{
                    transform: `translateX(${direction === 1 ? '0' : '-100%'})`,
                  }}
                >
                  {deliveryComments}
                  <div className={`absolute -bottom-2 ${direction === 1 ? 'left-6' : 'right-6'} w-4 h-4 ${dayNightMode === 'day' ? 'bg-white' : 'bg-gray-700'} transform rotate-45`}></div>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className={`w-16 h-16 flex items-center justify-center text-3xl shadow-md hover:scale-110 transition-transform rounded-full ${dayNightMode === 'day' ? 'bg-red-100' : 'bg-red-900'}`}
                    style={{
                      transform: direction === 1 ? 'scaleX(1)' : 'scaleX(-1)',
                    }}
                  >
                    {getVehicleIcon()}
                  </div>
                  <div className={`mt-2 px-3 py-1 rounded-full text-xs font-medium ${dayNightMode === 'day' ? 'bg-red-100 text-red-800' : 'bg-red-800 text-red-100'}`}>
                    {speed > 8 ? 'TURBO MODE!' : speed > 4 ? 'EXPRESS MODE!' : 'DELIVERY GUY'}
                  </div>
                </div>
              </div>
            </div>

            {/* Modern Road */}
            <div className="absolute bottom-4 w-full h-4 bg-gray-700 dark:bg-gray-900 shadow-inner flex items-center">
              <div className="absolute top-0 h-full w-full opacity-20 bg-pattern-grid"></div>
              <div
                className="absolute w-full flex justify-between"
                style={{
                  animation: `roadScroll ${10 / speed}s linear infinite`,
                  animationDirection: direction === 1 ? 'normal' : 'reverse',
                }}
              >
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="h-1 w-10 bg-white"
                  />
                ))}
              </div>
            </div>

            {/* Modern Controls */}
            <div className="absolute bottom-2 flex gap-2 items-center right-2 text-xs font-mono">
              <button 
                onClick={resetAnimation} 
                className="px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white rounded-full flex items-center gap-1 shadow-md hover:shadow-lg transition-all"
              >
                <RefreshCw size={14} />
                <span>Reset</span>
              </button>
              <span className={`${dayNightMode === 'day' ? 'bg-red-50 text-red-800' : 'bg-red-900 text-red-100'} px-3 py-1.5 rounded-full flex items-center gap-1`}>
                <TrendingUp size={14} />
                <span>Speed: {speed}/10</span>
              </span>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className={`${subtextColor} font-medium`}>
              Our delivery rider is searching for your page, but can't seem to find it!
            </p>
            <div className="inline-flex items-center gap-1 text-sm italic mt-2 px-3 py-1 rounded-full bg-red-50 dark:bg-red-900 text-red-700 dark:text-red-100">
              <Flag size={14} />
              <span>Tap the road to speed up the search</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-8">
            <div className={`${boxBg} p-5 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-red-500`}>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                  <Menu size={20} className="text-red-600 dark:text-red-300" />
                </div>
                Browse Menu
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Check out our delicious offerings and special deals.
              </p>
            </div>
            <div className={`${boxBg} p-5 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-red-500`}>
              <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-red-100 dark:bg-red-900">
                  <ShoppingBag size={20} className="text-red-600 dark:text-red-300" />
                </div>
                Order Online
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Place an order for delivery or pickup in just a few clicks.
              </p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button 
              onClick={() => navigate("/")} 
              className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <Home size={18} />
              <span className="font-medium">Back to Homepage</span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animation Keyframes */}
      <style jsx>{`
        @keyframes roadScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        
        .animate-shake {
          animation: shake 0.5s cubic-bezier(.36,.07,.19,.97) both;
        }
        
        .bg-pattern-grid {
          background-image: linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px),
                            linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;