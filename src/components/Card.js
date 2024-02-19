function Card(){
    return(
        <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src="images/home1.jpg" alt="picure of a property" />
            <div className="px-6 pt-4">
                <div className="font-bold text-xl mb-2">Orchid Villa</div>
                <p className="text-gray-700">Located in the suburbs of california, orchid villa offers luxury with a modern touch. Equipped with green lighting and a rainwater harvesting system, this property is eco-friendly.</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block text-green-300 font-bold text-sm px-3 py-1 mr-2 mb-2">$4,500,000</span>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block px-3 py-1 text-sm font-semibold bg-gray-200 rounded-full text-gray-700 mr-2 mb-2">7 Beds</span>
                <span className="inline-block px-3 py-1 text-sm font-semibold bg-gray-200 rounded-full text-gray-700 mr-2 mb-2">7 Baths</span>
            </div>
            <div className="px-6 pt-4 pb-10">
                <button className="inline-block px-3 py-1 font-bold bg-green-500 rounded-full text-white mr-2 mb-2 hover:bg-green-600">View Property</button>
            </div>
        </div>
    );
}

export default Card;