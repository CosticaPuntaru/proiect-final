import React from 'react';
import { Link } from "react-router-dom";


export function Homepage() {


    return (
        <div>
            this is the homepage

            <div>
                <Link to="/contact">
                    go to contact page
                </Link>
            </div>

        </div>
    )
}
