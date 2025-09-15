import { IconSearch, IconUser, IconCart, IconArrow } from '../../import/index';
import Logo from '../../assets/imagenes/meta.svg';

export const Header = () => {
  const MetaQuest = [
    { id: 1, title: 'Información General sobre MetaQuest' },
    { id: 2, title: 'Meta Quest 3 Novedad' },
    { id: 3, title: 'Meta Quest 2 Oferta Especial' },
    { id: 4, title: 'Meta Quest Pro' },
    { id: 5, title: 'Compara Dispositivos' },
    { id: 6, title: 'Accesorios' },
  ];

  return (
    // header
    <div className='bg-white '>
      <div className="py-3">
        {/* navbar */}
        <div className="max-w-7xl mx-auto p-6 flex items-center justify-between text-sm">
          <div className="flex  items-center gap-8">
            <div>
              <img className="h-4" src={Logo} alt="Logo de Meta" />
            </div>

            <div className="flex items-center gap-4 ">
              {/* meta Quest */}
              <div className="relative group">
                <div className="flex items-center gap-1 cursor-pointer">
                  Meta Quest
                  <IconArrow />
                </div>
                {/* dropdown */}
                <div
                  className="absolute left-0 top-full w-screen bg-white border-t border-gray-300 
                  opacity-0 translate-y-5 pointer-events-none transition-all duration-300 ease-out 
                  group-hover:opacity-100  group-hover:translate-y-0 group-hover:pointer-events-auto"
                >
                  <div className="max-w-6xl mx-auto flex gap-16 text-lg py-16">
                    <div className="w-56">
                      <ul className="space-y-3">
                        {MetaQuest.map((item) => (
                          <li
                            key={item.id}
                            className="hover:underline hover:underline-offset-4 hover:decoration-1"
                          >
                            {item.title}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <ul className="space-y-3">
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          Aplicaciones y juegos
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          Meta Quest+
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          Experiencias de VR
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* end meta Quest */}

              {/* Ray-Ban | Meta */}
              <div className="relative group">
                <div className="flex items-center gap-1">
                  Ray-Ban | Meta
                  <IconArrow />
                </div>

                {/* Dropdown */}
                <div
                  className="absolute left-0 top-full w-screen bg-white border-t border-gray-300 
                  opacity-0 translate-y-5 pointer-events-none transition-all duration-300 ease-out 
                  group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
                >
                  <div className="max-w-6xl mx-auto text-lg py-16 ">
                    <div className="">
                      <ul className="space-y-3">
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          Información General sobre Ray-Ban | Meta
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          Wayfarer
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          Headliner
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          Explora todo
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* end Ray-Ban | Meta */}
            </div>
          </div>

          <div className="flex items-center gap-5 ">
            <div className="flex items-center gap-4">
              <div>
                <a
                  href="#"
                  title="Informacion sobre meta"
                  className="hover:underline underline-offset-4 decoration-[#418af7]"
                >
                  Información sobre Meta
                </a>
              </div>
              {/* Asistente */}
              <div className="relative group">
                <a
                  href="#"
                  title="Informacion sobre meta"
                  className="hover:underline underline-offset-4 decoration-[#418af7]"
                >
                  Asistente
                </a>

                {/* Dropdown */}
                <div
                  className="absolute -right-96 top-full w-screen bg-white border-t border-gray-300 
                  opacity-0 translate-y-5 pointer-events-none transition-all duration-300 ease-out 
                  group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
                >
                  <div className="max-w-7xl flex items-center justify-end gap-10 text-lg py-16 ">
                    {/* bloque 1 */}
                    <div className="w-68">
                      <ul className="space-y-3">
                        <li className="font-semibold text-sm">
                          Servicios de ayuda de la tienda y los dispositivos
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          Encuentra Tu pedido
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          Meta Quest y Quest Pro
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          Meta Portal
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          Gafas Inteligentes
                        </li>
                      </ul>
                    </div>
                    {/* bloque 2 */}
                    <div className="w-68">
                      <ul className="space-y-3">
                        <li className="font-semibold text-sm">
                          Servicios de ayuda de Meta
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          Centro de cuentas
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          Meta Pay
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          Políticas
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          Experiencias conectadas
                        </li>
                      </ul>
                    </div>
                    {/* bloque 3 */}
                    <div className="w-68">
                      <ul className="space-y-3">
                        <li className="font-semibold text-sm">
                          Servicios de ayuda de las aplicaciones
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          Meta Horizon
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          FaceBook
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          Messeger
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          Instagram
                        </li>
                        <li className="hover:underline hover:underline-offset-4 hover:decoration-1">
                          WhatsApp
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* end Asistente */}
            </div>
            {/* input */}
            <div className="flex items-center gap-2 p-2 text-xs rounded-lg border border-gray-300 text-gray-400">
              <IconSearch />
              Buscar en Meta Store
            </div>
            {/*usuario  */}
            <div className="flex items-center gap-3">
              <div>
                <IconCart />
              </div>
              <div>
                <IconUser />
              </div>
            </div>
          </div>
        </div>
        {/* end navbar */}

      </div>
    </div>
    // end header
  );
};
