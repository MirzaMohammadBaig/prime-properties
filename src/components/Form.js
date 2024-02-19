function Form(){
    return(
        <div className="mt-5 flex p-10 justify-center items-center" style={{backgroundImage:"linear-gradient(315deg, #D1FAE5 0%, #10B981 74%)"}}>
            <form className="w-full max-w-lg">
                <div className="flex flex-wrap md:flex-nowrap">
                 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block px-1 uppercase text-xs text-gray-700 font-bold tracking-wide mb-2">First Name</label>
                    <input type="text" className="block mb-3 py-3 px-4 rounded text-gray-700 w-full border border-green-500" placeholder="Jane"/>
                    <p className="text-xs text-green-200 italic">Please fill out this field</p>
                 </div>
                 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block px-1 uppercase text-xs text-gray-700 font-bold tracking-wide mb-2">Last Name</label>
                    <input type="text" className="block py-3 px-4 rounded text-gray-700 w-full border border-green-500" placeholder="Jones"/>
                 </div>
                </div>
                <div className="flex flex-col mt-6 mb-1">
                    <div className="w-full px-3 mb-6 ">
                        <label className="block px-1 uppercase text-xs text-gray-700 font-bold tracking-wide mb-2">Email</label>
                        <input type="text" className="block mb-3 py-3 px-4 rounded text-gray-700 w-full border border-green-500" placeholder="xyz@gmail.com"/>
                        <p className="text-xs text-gray-700 italic">Some tips - as long as needed</p>
                    </div>
                    <div className="w-full px-3 mb-6 ">
                        <label className="block px-1 uppercase text-xs text-gray-700 font-bold tracking-wide mb-2">Message</label>
                        <textarea className="block mb-3 py-3 px-4 no-resize resize-none h-48 appearance-none rounded text-gray-700 w-full border border-green-500"/>
                        <p className="text-xs text-gray-700 italic">Some tips - as long as needed</p>
                    </div>
                    <div className="w-full px-3 mb-0 ">
                        <button className="py-2 px-6 font-bold rounded bg-green-500 text-white rounded hover:bg-green-600 transition duration-300">Send</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
export default Form;