import React from 'react'

const Header = () => {

    const navItems = [
        {
            icon: '/home.webp',
            title: 'Home',
            link: '/'
        },
        {
            icon: '/about.webp',
            title: 'About',
            link: '/about'
        }
    ]

  return (
    <header className='bg-[#0000006b] p'>

        {/* logo  */}
        <div>
            <img src="/logo.webp" alt="logo" />
        </div>

        {/* links  */}

        <nav>
            <a href="/">Next.js 14 Course</a>
            <a href="/about" className='bg-gradient-to-r from-blue-500 to-red-500 bg-overlay'>Masterclass coaching</a>
        </nav>

    </header>
  )
}

export default Header