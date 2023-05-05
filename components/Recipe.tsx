import React from 'react'

export default function Recipe() {
    return (
        <div className='relative w-full mt-[120px] border-[20px] border-sky-50 bg-sky-50 text-blue-950'>
            <div className='absolute -mt-[100px] -ml-[100px] left-[50%]'>
                <div className='bg-white border-white border-[10px] rounded-xl w-[200px] h-[200px]'>
                    <div className='bg-sky-400 rounded-lg w-full h-full' />
                </div>
            </div>
            <div className='p-2 pt-28 text-center bg-blue-100 text-blue-800'>
                <h2 className='text-3xl font-bold'>Title</h2>
            </div>
            <div className='mt-2'>
                <h3 className='text-2xl font-medium'>Ingredients</h3>
                <ul className='list-disc ml-4'>
                    <li>1 teaspoon olive oil, more if needed</li>
                    <li>1 pound hot Italian sausage links</li>
                    <li>1 yellow onion, peeled and diced</li>
                    <li>2 tablespoons butter, divided</li>
                </ul>
                <br className='my-2' />
                <h3 className='text-2xl font-medium'>Instructions</h3>
                <h4 className='text-2xl'>Cook the sausages:</h4>
                <p>
                        Drizzle 1 teaspoon of oil in a wide pot. Turn the heat to medium-high. Once hot, add the sausages and cook without moving for 3–5 minutes until golden brown. Flip and cook for 3–5 minutes until the other side is golden brown. Transfer to a plate.
                </p>
            </div>
        </div>
    )
}
