import { Zap } from 'lucide-react';
const LeftLogin = () => {
    return (
        <div className="w-[50%] bg-[#0a0a0a] min-h-screen p-6 md:p-16 flex flex-col justify-between text-white">

            <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#d1f73d] rounded-full flex items-center justify-center text-black">
                    <Zap className="w-5 h-5 fill-black" strokeWidth={2.5} />
                </div>
                <span className="text-xl font-black tracking-tight custom-wide-font">
                    Sky<span className="text-[#d1f73d]">Mart</span>
                </span>
            </div>

            <div className="max-w-[800px] w-full my-auto flex flex-col gap-6 mt-16 md:mt-24">
                <span className="text-[#d1f73d] text-xs font-bold uppercase tracking-[0.2em]">
                    Welcome Back
                </span>

                <h1 className="text-white text-5xl md:text-7xl font-bold tracking-tight custom-wide-font leading-[1.1]">
                    Shop the future.<br />
                    <span className="text-[#d1f73d]">Today.</span>
                </h1>

                <p className="text-zinc-500 text-sm md:text-lg max-w-[500px] leading-relaxed">
                    Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[1000px] mt-12">

                <div className="flex-1 bg-[#121212]/40 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-1.5 backdrop-blur-sm">
                    <span className="text-[#d1f73d] text-2xl font-black tracking-tight custom-wide-font">
                        20K+
                    </span>
                    <span className="text-zinc-500 text-xs font-medium">
                        Products
                    </span>
                </div>

                <div className="flex-1 bg-[#121212]/40 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-1.5 backdrop-blur-sm">
                    <span className="text-[#d1f73d] text-2xl font-black tracking-tight custom-wide-font">
                        50K+
                    </span>
                    <span className="text-zinc-500 text-xs font-medium">
                        Users
                    </span>
                </div>

                <div className="flex-1 bg-[#121212]/40 border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-1.5 backdrop-blur-sm">
                    <span className="text-[#d1f73d] text-2xl font-black tracking-tight custom-wide-font flex items-center gap-1">
                        4.9<span className="text-sm">★</span>
                    </span>
                    <span className="text-zinc-500 text-xs font-medium">
                        Rating
                    </span>
                </div>

            </div>

        </div>
    )
}

export default LeftLogin