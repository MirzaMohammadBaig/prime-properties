import Link from './Link';

function NavigationBar(){
    const links = [
        { label: 'Dropdown', path: '/' },
        { label: 'Accordion', path: '/accordion' },
        { label: 'Buttons', path: '/buttons' },
        { label: 'Modal', path: '/modal' },
    ];

    const renderedLinks = links.map((link)=>{
        return <span><Link 
        key={link.label} 
        to={link.path} 
        className='mb-3' 
        activeClassName='font=bold border-l-4 border-blue-500 pl-2'
        >
            {link.label}
        </Link></span>
    });

    return(
        <div>{renderedLinks}</div>
    );
}
export default NavigationBar;