import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
    { title: 'Main', url: '/' },
    { title: 'Users', url: '/users' },
    { title: 'Posts', url: '/posts' },
    { title: 'Todos', url: '/todos' }
]


const Navbar = () => {

    
    return (
        <>
            <div className="nav">
                <Link to='/' className='logo' href="#">Logo</Link>
                <ul className="nav__list">
                    {links.map((link, i) => (
                        <li key={i}>
                            <NavLink to={link.url} className="nav__link">{link.title}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Navbar