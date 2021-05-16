import Link from 'next/link'
import { MdMenu, MdClose } from 'react-icons/md'

const Navbar = () => {
    return (
        <>
             <nav>
                <div className='logo'>
                    <img src='/tent.png' />
                    <h1>MindMagic Travels</h1>
                </div>
                <div>

                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="checkbtn">
                        <MdMenu />
                    </label>
                    <div className='navbtn'>
                        <Link href={'/'}><a>Home</a></Link>
                        <Link href={'/destination'}><a>Destination</a></Link>
                        <Link href={'/about'}><a>About</a></Link>
                        <Link href={'/contact'}><a>Contact-Dev</a></Link>
                    </div>
                </div>
            </nav>


        </>
    );
}

export default Navbar;