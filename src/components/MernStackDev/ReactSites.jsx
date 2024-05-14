import React from 'react'
import { logos } from '../../Logos'


export const Logo = ({logo}) => {
    return (
        <abbr title={logo.title} className='bg-[#161821] p-5 w-28 aspect-square rounded-lg grid place-content-center'>
            <img className={`w-10 ${logo.className}`} src={`/react-sites${logo.url}`} alt={logo.title} />
        </abbr>
    )
}

const ReactSites = () => {
  return (
    <div className='grid grid-cols-3 gap-3 w-fit md:gap-5 lg:gap-7 xl:gap-10 xl:grid-cols-4'>
        {
            logos.map((logo, index) => (
                <Logo key={index} logo={logo} />
            ))
        }

    </div>
  )
}

export default ReactSites