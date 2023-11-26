import { Parallax } from "react-parallax";

const Cover = ({img, title, details}) => {
    return (
        <section className='mb-10'>
        <Parallax
        blur={{ min: -50, max: 50}}
        bgImage={img}
        bgImageAlt="Banner"
        strength={-200}
    >
    <div className="hero h-[400px]" >
    <div className="hero-overlay bg-opacity-60"></div>
    <div className="hero-content  text-neutral-content">
      <div className="px-28 py-10">
        <h1 className="mb-5 text-5xl font-bold text-white uppercase">{title}</h1>
        <p className="mb-5 text-lg">{details}</p>
      </div>
    </div>
  </div>  
    </Parallax>

      
        </section>
    );
};

export default Cover;