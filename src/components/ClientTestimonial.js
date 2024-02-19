import Link from './Link';
function ClientTestimonial(){
    return(
        <div className='shadow-lg w-72 bg-white rounded-xl p-4 mx-auto'>
            <p className='text-gray-600 text-md p-2'>
                <span className='text-green-600 text-xl font-bold mx-1'>"</span>
                To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself
                <span className='text-green-600 text-xl font-bold mx-1'>"</span>
            </p>
            <div className='flex bg-green-100 items-center rounded-full '>
                <Link to="" className='block relative'>
                    <img className='h-10 w-10 rounded-full mx-auto' src="images/avatar.png" alt="" />
                </Link>
                <div className='flex flex-col ml-2 justify-between'>
                    <span className='text-sm text-green-500 font-semibold'>Mirza</span>
                    <span className='text-xs flex items-center'>Director</span>
                </div>
            </div>
        </div>
    );
}

export default ClientTestimonial;