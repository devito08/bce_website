// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}"
//   ],
//   theme: {
//     extend: {
//       colors: {
//         darkBlue: '#050a30',
//       },
//       keyframes: {
//         typing: {
//           '0%': { width: '0' },
//           '100%': { width: '100%' }
//         },
//       },
//       animation: {
//         typing: 'typing 3s steps(40) 1s 1 normal both',
//       },
//     },
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#050a30',
      },
      keyframes: {
        typing: {
          '0%': { width: '0', opacity: '0' },
          '100%': { width: '100%', opacity: '1' },
        },
        blink: {
          '0%': { borderColor: 'transparent' },
          '50%': { borderColor: '#fff' },
          '100%': { borderColor: 'transparent' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        typing: 'typing 4s steps(40) 1s 1 normal both',
        blink: 'blink 0.75s step-end infinite',
        slideInLeft: 'slideInLeft 1.5s ease-out forwards',

      },
      
    },
  },
  plugins: [],
}
