import { FooterList } from '../../import/index';

export const Footer = () => {
  return (
    <footer className='pt-20 border-t border-gray-300'>
      <div className="max-w-5xl mx-auto text-sm">
        <div className="">
          <FooterList />
          {/* politicas */}
          <div className="grid grid-cols-5 gap-12 text-xs mb-20">
            <div>España (Español)</div>
              <p className="uppercase">meta quest</p>

              <p>
                <span className="font-semibold text-gray-800">
                  Información para padres y madres:
                </span>{' '}
                Pautas y advertencias sobre seguridad importantes relacionadas
                con el uso del producto por parte de menores{' '}
                <a
                  className="underline text-blue-600"
                  href="https://www.meta.com/es/quest/parent-info/"
                >
                  aquí.
                </a>
              </p>

              <p className="uppercase ">gafas con ia</p>

              <p>
                Algunas funciones de Meta IA solo están disponibles en algunos
                países e idiomas. Comprueba la disponibilidad en tu región. Para
                disfrutar de un rendimiento óptimo, es necesario realizar
                actualizaciones de software.
              </p>

              <p>
                Información de contacto: Meta Platforms Technologies Ireland
                Limited, Merrion Road, Dublin 4, D04 X2K5, Irlanda Meta
                Platforms Technologies, LLC 1 Hacker Way, Menlo Park, CA 94025,
                Estados Unidos
                <a
                  className="underline text-blue-600"
                  href="https://www.meta.com/help/support/"
                >
                  {' '}
                  meta.com/help/support
                </a>
              </p>

              <p className="uppercase ">financiación opcional</p>

              <p>
                La financiación opcional está disponible a través de proveedores
                de terceros, está sujeta a las condiciones de la entidad
                prestamista y a una comprobación de idoneidad realizada por
                dicha entidad, y es posible que no esté disponible en todas las
                ubicaciones ni para todos los productos. Consulta{' '}
                <a
                  className="underline text-blue-600"
                  href="https://www.meta.com/es/legal/financing-offers/"
                >
                  {' '}
                  https://www.meta.com/legal/financing-offers/
                </a>{' '}
                para obtener más información.
              </p>

              <p>©2025 Meta.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
