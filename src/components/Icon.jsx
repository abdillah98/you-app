import Image from 'next/image'
import IconEye from '../../public/icons/icon-eye.svg'
import IconEyeSlash from '../../public/icons/icon-eye-slash.svg'
import IconEditPen from '../../public/icons/icon-edit-pen.svg'
import IconArrowLeft from '../../public/icons/icon-arrow-left.svg'
import IconPlus from '../../public/icons/icon-plus.svg'
import IconHoroscope from '../../public/icons/icon-horoscope.svg'
import IconZodiac from '../../public/icons/icon-zodiac.svg'

export default function Icon({name, size}) {

	switch(name) {
		case 'icon-eye':
			return <Image src={IconEye} width={size} height={size} alt={name}/>
			break;
		case 'icon-eye-slash':
			return <Image src={IconEyeSlash} width={size} height={size} alt={name}/>
			break;
		case 'icon-edit-pen':
			return <Image src={IconEditPen} width={size} height={size} alt={name}/>
			break;
		case 'icon-arrow-left':
			return <Image src={IconArrowLeft} width={size} height={size} alt={name}/>
			break;
		case 'icon-plus':
			return <Image src={IconPlus} width={size} height={size} alt={name}/>
			break;
		case 'icon-horoscope':
			return <Image src={IconHoroscope} width={size} height={size} alt={name}/>
			break;
		case 'icon-zodiac':
			return <Image src={IconZodiac} width={size} height={size} alt={name}/>
			break;
		default:
			return <div>No icon found</div>
	}
}