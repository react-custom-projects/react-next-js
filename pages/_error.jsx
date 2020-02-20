import React from 'react';
//next imports
import Link from 'next/link';

const errorPage = () => {
    return (
        <div>
            <p>Oops, something went wrong.</p>
            <p>Try <Link href="/"><a>going back</a></Link></p>
        </div>
    );
};

export default errorPage;