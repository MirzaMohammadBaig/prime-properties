function LongCard(){
    return(
        <div className="rounded overflow-hidden shadow-lg">
            <img className="w-full" src="images/chicago.jpg" alt="picure of a property" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">New York</div>
                <p className="text-gray-700">New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean. At its core is Manhattan, a densely populated borough that’s among the world’s major commercial, financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State Building and sprawling Central Park.</p>
            </div>
        </div>
    );
}

export default LongCard;