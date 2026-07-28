const FotterTop = () => {
    return (
        <div className="w-full bg-[#0a0a0a] p-6 flex justify-center items-center">
            <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-3 gap-4">

                <div className="bg-[#121212] border border-white/20 rounded-2xl p-6 flex items-center gap-4">
                    <div className="text-[#d1f73d] text-2xl">
                        ⚡
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white text-base font-bold custom-wide-font">
                            Fast Delivery
                        </span>
                        <span className="text-zinc-500 text-sm mt-0.5">
                            Same-day on select items
                        </span>
                    </div>
                </div>

                <div className="bg-[#121212] border border-white/20 rounded-2xl p-6 flex items-center gap-4">
                    <div className="text-[#3b82f6] text-2xl">
                        🛡️
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white text-base font-bold custom-wide-font">
                            Secure Payments
                        </span>
                        <span className="text-zinc-500 text-sm mt-0.5">
                            100% encrypted checkout
                        </span>
                    </div>
                </div>

                <div className="bg-[#121212] border border-white/20 rounded-2xl p-6 flex items-center gap-4">
                    <div className="text-[#10b981] text-2xl">
                        🏷️
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white text-base font-bold custom-wide-font">
                            Best Prices
                        </span>
                        <span className="text-zinc-500 text-sm mt-0.5">
                            Price-match guarantee
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FotterTop