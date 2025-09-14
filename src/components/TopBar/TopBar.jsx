import { IconProof, IconShipments, IconWarranty} from '../../import/index';

export const TopBar = () => {
  return (
    <div className='flex items-center justify-center gap-4 py-3 md:text-xs text-[8px] w-full bg-[#344854] text-white'>
        <div className='flex items-center justify-center gap-2 '>
          <IconShipments />
          Envio Gratis
        </div>
        <div className='flex items-center justify-center gap-2 '>
          <IconProof />
          Prueba sin compromiso
        </div>
        <div className='flex items-center justify-center gap-2 '>
          <IconWarranty />
          Garantía
        </div>
    </div>
  )
}
