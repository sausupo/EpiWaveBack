import { useUserData } from '../../../store';
import './Header.css';
import reactLogo from '../../../assets/avatar-svgrepo-com.svg'

export default function Header(): JSX.Element {
    const { firstName, lastName, photoUrl } = useUserData(state => state);

    return (
        <div className='header'>
            <div className='header--left-side'>
            <img src={photoUrl || reactLogo} alt="Avatar" className="avatar"/>
            <div className='header--fio'>{firstName} {lastName}</div>
            </div>
        </div>
    )
}