import React from "react"
import {Link, useLocation, Outlet} from "react-router-dom"

// file responsible for all the pages in the app (components)

export function Home(){
    return(
        <div>
            <h1>[Company Wesbite]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>
    )
}

// Outlet: this will render the nested routes in app.js, about is parent route.. 
export function About(){
    return(
        <div>
            <h1>[About]</h1>
            <Outlet />
        </div>
    )
}

export function Services(){
    return(
        <div>
            <h2>Our Services</h2>
        </div>
    );
}

export function CompanyHistory(){
    return(
        <div>
            <h2>Our Company History</h2>
        </div>
    );
}

export function Location(){
    return(
        <div>
            <h2>Our Location</h2>
        </div>
    );
}

export function Events(){
    return(
        <div>
            <h1>[Events]</h1>
        </div>
    )
}

export function Contact(){
    return(
        <div>
            <h1>[Contact]</h1>
        </div>
    )
}

/* examine the location output in console, so location.pathname gives a sense, we are using useLocation() hook */
export function Whoops404() {
    let location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>This page does not exist!</h1>
            <p>Resource not found at {location.pathname}</p>
        </div>
    )
}