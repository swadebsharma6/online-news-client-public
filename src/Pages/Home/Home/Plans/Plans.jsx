import bgImage from "../../../../assets/images/Banner/space.jpg";
import SectionTitle from "../../../../components/Shared/SectionTitle/SectionTitle";

const Plans = () => {
  return (
    <section className="mb-16 bg-blue-800 bg-opacity-30 pb-8">
      <SectionTitle img={bgImage} title={"Get Every Monthly Updates"}></SectionTitle>
      <div className="text-center mb-5 w-1/2 mx-auto">
        <h2 className="text-2xl font-bold">Newsers</h2>
        <p className="text-xl">Freemium is a business model in which a company offers basic or limited features to users at no cost and then charges a premium for supplemental or advanced </p>  
      </div>
      <div className=" md:max-w-5xl mx-auto md:grid grid-cols-3 gap-4">
         <div>
         <div className="relative flex w-full md:max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
      <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
          Free For 01/month
        </p>
        <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
          <span className="mt-2 text-4xl">$</span>00
          <span className="self-end text-4xl">/mo</span>
        </h1>
      </div>
      <div className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              5 team members
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              200+ components
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              40+ built-in pages
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              1 year free updates
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              Life time technical support
            </p>
          </li>
        </ul>
      </div>
      <div className="p-0 mt-12">
        <button
          className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-dark="true"
        >
          Try Free For 1 month
        </button>
      </div>
     </div>
         </div>
         <div>
         <div className="relative flex w-full md:max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
      <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
          Premium Due
        </p>
        <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
          <span className="mt-2 text-4xl">$</span>16
          <span className="self-end text-4xl">/mo</span>
        </h1>
      </div>
      <div className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              5 team members
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              200+ components
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              40+ built-in pages
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              1 year free updates
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              Life time technical support
            </p>
          </li>
        </ul>
      </div>
      <div className="p-0 mt-12">
        <button
          className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-dark="true"
        >
         Get Premium Due
        </button>
      </div>
     </div>
         </div>
         <div>
         <div className="relative flex w-full md:max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
      <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
          Premium family
        </p>
        <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
          <span className="mt-2 text-4xl">$</span>29
          <span className="self-end text-4xl">/mo</span>
        </h1>
      </div>
      <div className="p-0">
        <ul className="flex flex-col gap-4">
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              5 team members
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              200+ components
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              40+ built-in pages
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              1 year free updates
            </p>
          </li>
          <li className="flex items-center gap-4">
            <span className="p-1 border rounded-full border-white/20 bg-white/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-3 h-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                ></path>
              </svg>
            </span>
            <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
              Life time technical support
            </p>
          </li>
        </ul>
      </div>
      <div className="p-0 mt-12">
        <button
          className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-dark="true"
        >
          Get Premium family
        </button>
      </div>
     </div>
         </div>
      </div>
    </section>
  );
};

export default Plans;
// <div className="join">
//         <input type="text" placeholder="username@site.com" className="input input-bordered input-primary w-full max-w-xs join-item" />
//         <button className="btn btn-primary join-item">Subscribe</button>
// </div>