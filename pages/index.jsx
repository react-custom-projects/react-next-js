import React from 'react';
//next imports
import Link from 'next/link';
import Router from 'next/router';

const IndexPage = () => (
    <div>
        <p>The main page</p>
        <p>
            Go to{' '}
            <Link href="/auth">
                <a>Auth</a>
            </Link>
        </p>
        <button onClick={() => Router.push('/auth')}>Go to auth</button>
    </div>
);

export default IndexPage;