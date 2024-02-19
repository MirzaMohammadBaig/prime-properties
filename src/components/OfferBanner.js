function OfferBanner(){
    return (
        <div className="py-20" style={{backgroundImage:"linear-gradient(315deg, #D1FAE5 0%, #10B981 74%)"}}>
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-white mb-2">Save upto 50% on broker commisions</h2>
                <h3 className="text-2xl mb-8 text-white">Lowest brokerage fees</h3>
                <button className="text-black uppercase rounded-2xl bg-white px-8 py-4 font-bold tracking-wider shadow-lg ">Enquire</button>
            </div>
        </div>
    );
}

export default OfferBanner;