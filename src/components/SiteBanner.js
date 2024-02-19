import Link from './Link';

function SiteBanner(){
    return(
        <main className="mt-10 px-4 md:mt-16 mx-auto max-w-7xl lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
                <h1 className="tracking-tight font-extrabold text-4xl sm:text-5xl md:text-6xl xl:flex">
                    <span className="block">Premium Properties</span>
                    <span className="block text-green-500 xl:px-2">Non-premium Prices</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 md:text-xl md:mt-5 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0">At prime properties, we ensure that our clients get the best properties at affordable prices. Luxury is our priority and budget is our constrain. Pick and choose from 1000+ properties across the globe.</p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:flex lg:justify-start">
                    <div className="md:m-1">
                        <Link to="/prime-properties/" className="flex mb-2 font-semibold justify-center rounded-md bg-green-500 text-white px-8 py-4 hover:bg-green-600 transition duration-300">View properties</Link>
                    </div>
                    <div className="md:m-1">
                        <Link to="/prime-properties/" className="flex mb-2 font-semibold justify-center rounded-md bg-green-200 text-green-700 px-8 py-4 hover:bg-green-300 transition duration-300">Explore Locations</Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SiteBanner;
