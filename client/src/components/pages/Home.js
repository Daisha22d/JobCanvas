import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

//temp (restructure after done inputting bootstrap inputs)
import {Button} from 'react-bootstrap';

export default function Home() {
    return (
        <div className='home'>
            <div class="container">
            <h2>Welcome! This is the homepage</h2>
            <Button>Test Button</Button>
            </div>
        </div>
    )
}