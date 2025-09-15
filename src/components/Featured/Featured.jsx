import { IconArrowLeft } from '../../import/index';
import Video from '../../assets/videos/video.mp4'

export const Featured = () => {
  return (
    <div className="relative">
      <div className="relative py-32 max-w-6xl mx-auto px-8 z-30">
        <div className="max-w-[500px]  text-white">
          <h1 className="text-5xl font-semibold leading-[50px] ">
            Diseño de Oakley con tecnología de Meta
          </h1>
          <p className="my-6 text-lg">
            Cincuenta años de diseño se fusionan con la última tecnología en las
            gafas Oakley Meta HSTN.
          </p>

          <div className="flex items-center gap-6">
            <button className="py-4 px-8 inline-block text-sm bg-blue-600 rounded-full font-semibold  transition transform duration-300 hover:scale-115">
              Compra Ahora
            </button>
            <div className="flex items-center gap-2 group cursor-pointer">
              <IconArrowLeft />
              <a
                href="#"
                className="relative text-white font-medium inline-block transition-transform duration-500 group-hover:scale-110 group-hover:translate-x-2"
              >
                Descubre Oakley Meta HSTN
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-sky-300 to-fuchsia-500 transition-all duration-1000 group-hover:w-full"></span>
              </a>
            </div>
          </div>
        </div>
      </div>

        <div className='absolute top-0 z-20 opacity-80 bg-gradient-to-r from-black from-30% bg-transparent w-full h-full'>

        </div>
      <video autoPlay loop muted className='absolute top-0 z-10 w-auto min-w-full object-fill max-h-full max-w-none'>
        <source src={Video} type='video/mp4'/>
      </video>
    </div>
  );
};
