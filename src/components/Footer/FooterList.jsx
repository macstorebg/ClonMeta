import {
  ListMetaStore,
  ListAsistencia,
  ListAplicaciones,
  ListComunidad,
  ListInformación,
  ListIniciativas,
  Listcondiciones,
} from '../../utils/ListFooter';
import Logo from '../../assets/imagenes/meta.svg';


export const FooterList = () => {
  return (
    <div className="grid grid-cols-5 gap-12 mb-20">
      <div className=''>
        <div className='mb-10'>
          <img className="h-5" src={Logo} alt="Logo de Meta" />
        </div>
        <div className='flex items-center gap-7'>
          <img 
              width="20" height="30" 
              src="https://img.icons8.com/ios-filled/50/facebook-new.png" 
              alt="facebook-new"
              
          />

          <img 
              width="20" height="30" 
              src="https://img.icons8.com/ios/50/threads.png" 
              alt="threads"
            
          />
          
          <img 
              width="20" height="30" 
              src="https://img.icons8.com/ios/50/instagram-new--v1.png" 
              alt="instagram-new--v1"
              
          />

          <img 
              width="20" height="30" 
              src="https://img.icons8.com/ios/50/twitterx--v2.png" 
              alt="twitterx--v2"
              
          />

          <img 
              width="20" height="30" 
              src="https://img.icons8.com/ios-filled/50/youtube-play.png" 
              alt="youtube-play"
              
          />
        </div>
      </div>

      <div></div>
      {/* lista items */}
      <div className='space-y-12 text-gray-600'>
        <ul className='space-y-[6px]'>
          <li className="font-bold mb-2 text-gray-900">Meta Store</li>
          {ListMetaStore.map((store) => (
            <li key={store.id} className='hover:underline hover:underline-offset-2 font-medium cursor-pointer'>{store.title}</li>
          ))}
        </ul>
        <ul className='space-y-[6px]'>
          <li className="font-semibold mb-2 text-gray-900">
            Asistencia de la tienda e información legal
          </li>
          {ListAsistencia.map((asist) => (
            <li key={asist.id} className='hover:underline hover:underline-offset-2 font-medium cursor-pointer'>{asist.title}</li>
          ))}
        </ul>
      </div>

      <div className='space-y-12 text-gray-600'>
        <ul className='space-y-[6px]'>
          <li className="font-bold mb-2 text-gray-900">Comunidad</li>
          {ListComunidad.map((item) => (
            <li key={item.id} className='hover:underline hover:underline-offset-2 font-medium cursor-pointer'>{item.title}</li>
          ))}
        </ul>

        <ul className='space-y-[6px]'>
          <li className="font-semibold mb-2 text-gray-900">Nuestras iniciativas</li>
          {ListIniciativas.map((list) => (
            <li key={list.id} className='hover:underline hover:underline-offset-2 font-medium cursor-pointer'>{list.title}</li>
          ))}
        </ul>
      </div>

      <div className='space-y-12 text-gray-600'>
        <ul className='space-y-[6px]'>
          <li className="font-bold mb-2 text-gray-900">Información</li>
          {ListInformación.map((item) => (
            <li key={item.id} className='hover:underline hover:underline-offset-2 font-medium cursor-pointer'>{item.title}</li>
          ))}
        </ul>

        <ul className='space-y-[6px]'>
          <li className="font-semibold mb-2 text-gray-900">Políticas y condiciones del sitio</li>
          {Listcondiciones.map((item) => (
            <li key={item.id} className='hover:underline hover:underline-offset-2 font-medium cursor-pointer'>{item.title}</li>
          ))}
        </ul>
        <ul className='space-y-[6px]'>
          <li className="font-semibold mb-2 text-gray-600">Asistencia para aplicaciones</li>
          {ListAplicaciones.map((apps) => (
            <li key={apps.id} className='hover:underline hover:underline-offset-2 font-medium cursor-pointer'>{apps.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
