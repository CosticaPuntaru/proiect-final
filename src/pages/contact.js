import React from 'react';
import { Link } from 'react-router-dom'


export function Contact() {
    return (
        <div>
            this is the contact page
            <div>


                <Link to="/">
                    go to homepage
                </Link>
            </div>
            <div>
                <a href='http://google.com/'>
                    go to google
                </a>
            </div>
        </div>
    )
}
