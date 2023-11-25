import { Parallax } from 'react-parallax';


const SectionTitle = ({img, title,}) => {
    return (
        <section className='mb-5'>
        <Parallax
        bgImage={img}
        bgImageAlt="Banner"
        strength={-100}
    >
    <div className="hero h-[200px]" >
    <div className="hero-overlay bg-opacity-30"></div>
    <div className="hero-content text-center text-neutral-content">
      <div className=" md:max-w-2xl mx-auto bg-gray-300 rounded-md bg-opacity-20 px-28 py-10">
        <h1 className="mb-5 text-4xl font-bold uppercase">{title}</h1>
      </div>
    </div>
  </div>  
    </Parallax>

      
        </section>
    );
};

export default SectionTitle;


// <section>
//             <div>
//             <div  className="md:h-[220px] rounded-xl">
//             <div className="hero md:h-[200px]" >
//             <div className="hero-overlay bg-opacity-60"></div>
//             <div className="hero-content text-center text-neutral-content">
//               <div className=" md:max-w-2xl  bg-gray-800 bg-opacity-40 px-28 py-10">
//                 <h1 className="mb-5 text-4xl font-bold uppercase">{title}</h1>
//                 <p className="mb-5 text-lg">{details} </p>
//               </div>
//             </div>
//           </div> 
//           </div>
//             </div>
//  </section>