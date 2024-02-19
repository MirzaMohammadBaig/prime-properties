import Link from './Link'; 
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

function Footer(){
    return (
        <footer className='pt-40 px-4 divide-y'>
            <div className="container flex flex-col justify-between mx-auto space-y-8 lg:flex-row lg:space-y-0 mb-10">
                <div className='lg:w-1/3'>
                    <Link to="" className='flex justify-center'>
                        <div className='flex w-12 h-12 '>
                            <img src="images/house.png" className='h-8 w-8 mr-2' alt="" />
                        </div>
                        <span className='font-semibold text-gray-500 text-2xl'>Prime Properties</span>
                    </Link>
                </div>
                <FooterMenu />
            </div>
            <RightsFooter />
        </footer>
    );
}

function FooterMenu(){
    return(
        <div className='grid grid-cols-2 gap-x-3 gap-y-8 text-sm sm:grid-cols-4 lg:w-2/3 w-3/4 mx-auto'>
            <div className='space-y-3'>
                <h3 className='text-green-500 font-semibold uppercase tracking-wide'>Product</h3>
                <ul className='space-y-1'>
                    <li><Link className="text-gray-800">Features</Link></li>
                    <li><Link className="text-gray-800">Integrations</Link></li>
                    <li><Link className="text-gray-800">Pricing</Link></li>
                    <li><Link className="text-gray-800">FAQs</Link></li>
                </ul>
            </div>
            <div className='space-y-3'>
                <h3 className='text-green-500 font-semibold uppercase tracking-wide'>Company</h3>
                <ul className='space-y-1'>
                    <li><Link className="text-gray-800">Features</Link></li>
                    <li><Link className="text-gray-800">Integrations</Link></li>
                    <li><Link className="text-gray-800">Pricing</Link></li>
                    <li><Link className="text-gray-800">FAQs</Link></li>
                </ul>
            </div>
            <div className='space-y-3'>
                <h3 className='text-green-500 font-semibold uppercase tracking-wide'>Developers</h3>
                <ul className='space-y-1'>
                    <li><Link className="text-gray-800">Features</Link></li>
                    <li><Link className="text-gray-800">Integrations</Link></li>
                    <li><Link className="text-gray-800">Pricing</Link></li>
                    <li><Link className="text-gray-800">FAQs</Link></li>
                </ul>
            </div>
            <div className='space-y-3'>
                <h3 className='text-green-500 font-semibold uppercase tracking-wide'>Social media</h3>
                <div className='flex justify-start p-2 space-x-3'>
                    <Link to="/prime-properties/"><BsFacebook /></Link>
                    <Link to="/prime-properties/"><FaTwitter/></Link>
                    <Link to="https://www.instagram.com/mirza.muhammadd/"><BsInstagram/></Link>
                </div>
            </div>
            
        </div>
    );
}
function RightsFooter(){
    return(
        <div className='py-6 text-center text-green-500 text-sm '>
            © 1968 Company Co. All rights reserved.
        </div>

    );
}
export default Footer;