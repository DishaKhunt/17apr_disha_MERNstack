import React, { useState, useEffect } from 'react';

export default function Function() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Component did mount logic
        console.log('Component mounted');

        return () => {
            // Component will unmount logic
            console.log('Component will unmount');
        };
    }, []);

    useEffect(() => {
        // Component did update logic
        console.log('Component updated', count);

        return () => {
            // Cleanup before next update
            console.log('Cleanup before update', count);
        };
    }, [count]);

    return (
        <div className='mt-10 mx-auto text-center'>
            <p className='text-xl mb-10'>Count: {count}</p>
            <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2" onClick={() => setCount(count + 1)}>Increment</button>
            
        </div>
    );
}
