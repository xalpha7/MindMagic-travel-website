import Link from 'next/link'
import axiosFetch from '../pages/axiosFetch'
import { MdMenu, MdClose } from 'react-icons/md'

const Navbar = () => {
    const { data: blogs, isPending, error } = axiosFetch('https://my-json-server.typicode.com/xalpha7/Mindmagic-blog-db/blogs');
    return (
        <>
            {error && <div>{error}</div>}
            {isPending && <div> Loading... </div>}
            {blogs && <nav>
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
            </nav>}


        </>
    );
}

export default Navbar;