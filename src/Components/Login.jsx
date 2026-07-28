import { Mail, Lock, Eye, ArrowRight, Currency } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from 'react-hook-form'
import { useContext } from "react";
import { MyStore } from "../context/MyWebsite";
import { toast } from 'react-hot-toast'

const Login = () => {
    let navigate = useNavigate()
    let { users, setCurrentUser , currentUser} = useContext(MyStore)

    if(currentUser){
        navigate('/dashboard')
    }

    let { register, handleSubmit, reset, formState: { errors }, watch } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit'
    })

    let emailWatch = watch('email')

    const formSubmit = (data) => {
        let found = users.find((user) => user.email === data.email && user.password === data.password)

        setCurrentUser(found)
        navigate('/dashboard')
        localStorage.setItem('current', JSON.stringify(found))
    }

    const onError = (error) => {
        console.log(error);
        
        let val = Object.keys(error)[0]            
        toast.error(error[val].message, {
            style: {
                color: 'black'
            }
        })

    }

    return (
        <div className="min-h-screen w-[50%] bg-[#0d0d0d] flex flex-col items-center justify-center p-4 selection:bg-[#ccff00] selection:text-black custom-wide-font">

            <div className="w-full max-w-[420px] bg-[#141414] border border-[#222222] rounded-[24px] p-6 md:p-8 shadow-2xl">

                <div className="mb-6">
                    <h1 className="text-white text-3xl font-bold tracking-tight mb-1">
                        Sign in
                    </h1>
                    <p className="text-[#666666] text-xs font-medium tracking-wide">
                        Enter your credentials to continue
                    </p>
                </div>

                <form onSubmit={handleSubmit(formSubmit, onError)} className="space-y-3.5">

                    <div className="relative">
                        <span className="absolute inset-y-0 left-3.5 flex items-center text-[#555555]">
                            <Mail className="w-4 h-4" />
                        </span>
                        <input {...register('email', {
                            required: 'Email is Required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Invalid Email'
                            },

                            validate: (val) => {
                                let found = users.find((user) => user.email === val)
                                if (!found) {
                                    return 'Not Found'
                                }
                            }
                        })}
                            type="email"
                            placeholder="Email address"
                            className="w-full bg-[#1c1c1c] text-white placeholder-[#555555] text-sm pl-10 pr-4 py-2.5 rounded-xl border border-[#2a2a2a] focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-all duration-200 custom-wide-font"
                        />
                    </div>

                    <div className="relative">
                        <span className="absolute inset-y-0 left-3.5 flex items-center text-[#555555]">
                            <Lock className="w-4 h-4" />
                        </span>
                        <input {...register('password', {
                            required: 'Password is Required',
                            validate: (val) => {
                                let found = users.find((user) => user.email === emailWatch)

                                if (!found) {
                                    return 'invalid Email & Password'
                                }

                                if (found.password !== val) {
                                    return 'Invalid Email & Password'
                                }
                            }
                        })}
                            type="password"
                            placeholder="Password"
                            className="w-full bg-[#1c1c1c] text-white placeholder-[#555555] text-sm pl-10 pr-10 py-2.5 rounded-xl border border-[#2a2a2a] focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-all duration-200 custom-wide-font"
                        />
                        <span className="absolute inset-y-0 right-3.5 flex items-center text-[#555555]">
                            <Eye className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                        </span>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#ccff00] text-black font-bold text-base py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#b5e600] active:scale-[0.99] tracking-wide transition-all duration-200 mt-4 shadow-lg shadow-[#ccff00]/15 custom-wide-font"
                    >
                        Sign in
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                </form>

                <div className="text-center mt-6">
                    <p className="text-[#666666] text-sm font-medium">
                        Don't have an account?{' '}
                        <span onClick={() => { navigate('/Register') }} className="text-[#ccff00] hover:underline font-bold transition-all">
                            Create one
                        </span>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Login;