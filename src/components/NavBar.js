import Link from './Link';

function NavBar(){
    const links = [
        { label: 'Home', path: '/prime-properties/' },
        { label: 'Services', path: '/prime-properties/services' },
        { label: 'About', path: '/prime-properties/about' },
        { label: 'Contact Us', path: '/prime-properties/contact' },
    ];
    const renderedLinks = links.map((link)=> {
        return <Link to={link.path} className="py-4 px-2 font-semibold text-gray-500 hover:text-green-500 transition duration-300" activeClassName="text-green-500 border-green-500 border-b-4">{link.label}</Link>
    });
    return(
        <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                    <div>
                        <Link to='/prime-properties/' className="flex items-center py-4 px-2">
                            <img className="h-8 w-8 mr-2" src="images/house.png" alt="logo" />
                            <span className="font-semibold text-gray-500 text-lg">Prime Properties</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        {renderedLinks}
                    </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;