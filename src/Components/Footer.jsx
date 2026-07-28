import React from 'react'

const Footer = () => {
    return (
        <div className="w-full bg-[#0a0a0a] border-t border-zinc-800 py-8 flex justify-center items-center">
            <div className="max-w-[1200px] w-full flex flex-col items-center justify-center text-center gap-2">

                <span className="text-[#d1f73d] text-lg font-bold tracking-tight custom-wide-font">
                    SkyMart
                </span>

                <span className="text-zinc-500 text-xs md:text-sm">
                    © 2026 SkyMart • Built with React + Context API + React Router + Tailwind CSS
                </span>

            </div>
        </div>
    )
}

export default Footer