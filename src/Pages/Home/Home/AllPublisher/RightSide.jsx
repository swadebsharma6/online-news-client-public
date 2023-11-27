import { default as img1, default as img3 } from '../../../../assets/images/qZone2.png';
import img2 from '../../../../assets/images/qZone3.png';

const RightSide = () => {
    return (
        <div className='bg-purple-400'>
        <div className="space-y-4 mb-5 border p-3 rounded">
        <h3 className="text-2xl font-bold">Q Zone </h3>
         <img src={img1} alt="" />
         <img src={img2} alt="" />
         <img src={img3} alt="" />
        </div>
        <div className="space-y-4 mb-5 border p-3 rounded">
        <h3 className="text-2xl font-bold">Q Zone </h3>
         <img src={img1} alt="" />
         <img src={img2} alt="" />
         <img src={img3} alt="" />
        </div>
        </div>
    );
};

export default RightSide;