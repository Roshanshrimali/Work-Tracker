import React from 'react'

const Footer = () => {
  return (
    <footer className='footer text-white tablet:px-10 py-2 flex font-semibold bg-slate-700 phone:justify-center tablet:justify-between bottom-0'>
        <div className="footerLinks">
            <ul className='tablet:flex phone:hidden tablet:gap-6 cursor-pointer'>
                <li className='hover:underline'>Terms & Conditions</li>
                <li className='hover:underline'>Service</li>
                <li className='hover:underline'>Explore Us</li>
            </ul>
        </div>
        <div className="copyright">&copy;2024 OnTimer | Dev: <a target='_blank' href="https://www.linkedin.com/in/roshan-shrimali-86967b1ba/"><span className='hover:underline text-blue-200 cursor-pointer'>ROSHAN</span></a></div>
    </footer>
  )
}

export default Footer
