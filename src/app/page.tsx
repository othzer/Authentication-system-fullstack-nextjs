// import Image from "next/image";

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }


import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="w-full max-w-3xl px-8 py-24 bg-white dark:bg-black rounded-xl shadow-sm">
        <div className="flex flex-col items-center text-center gap-6">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            OTZR Auth System
          </h1>

          <p className="max-w-md text-lg text-zinc-600 dark:text-zinc-400">
            A secure authentication system built with Next.js, JWT, MongoDB, and
            modern best practices.
          </p>

          <div className="flex gap-4 mt-6">
            <Link
              href="/login"
              className="px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200 transition"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="px-6 py-3 rounded-full border border-zinc-300 text-zinc-900 font-medium hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-900 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              Secure Auth
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              JWT-based authentication with hashed passwords.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              Email Verification
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              Account verification and password reset via email.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
              Production Ready
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              Built with env validation, TypeScript, and Vercel deployment.
            </p>
          </div>
        </div>

        <p className="mt-16 text-center text-sm text-zinc-500 dark:text-zinc-500">
          © {new Date().getFullYear()} OTZR Auth System
        </p>
      </main>
    </div>
  );
}
