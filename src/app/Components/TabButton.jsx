import React from 'react'

const TabButton = ({active, selectTab, children}) => {
    const buttonClasses = active ? 'text-dark text-base text-justify sm:text-base pb-2 lg:px-4 px-2 lg:text-base font-bold underline pb-2 underline-offset-8' : 'text-[#ADB7BE] pb-2 lg:px-4 px-2 text-base text-justify sm:text-base lg:text-base font-bold underline underline-offset-8'
    return (
        <button onClick={selectTab} >
            <h2 className={`font-semibold hover:text-dark ${buttonClasses}`}>
                {children}
            </h2>
        </button>
    )
}

export default TabButton;
