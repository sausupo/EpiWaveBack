import './BottomNavigation.css';

export default function BottomNavigation(): JSX.Element {
    return (
        <div className='navbar'>
            <a href="#home" className="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
        </div>
    )
}