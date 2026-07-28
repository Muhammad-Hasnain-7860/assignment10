import { Zap, User, Mail, Lock, Eye, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { useContext } from "react";
import { MyStore } from "../context/MyWebsite";

const register = () => {
    let navigate = useNavigate()
    let { users, setUsers, currentUser, setCurrentUser } = useContext(MyStore)
    let { register, handleSubmit, reset, formState: { errors }, watch } = useForm({
        mode: 'onSubmit',
        reValidateMode: 'onSubmit'
    })

    let passwordWatch = watch('password')

    const success = (data) => {
        let obj = { ...data, shopping: [] }
        let arr = [...users, { ...data, shopping: [] }]
        setUsers(arr)
        setCurrentUser(obj)
        localStorage.setItem('users', JSON.stringify(arr))
        localStorage.setItem('current', JSON.stringify(obj))
        reset()
        navigate('/dashboard')
    }

    const onErrors = (error) => {
        let val = Object.keys(error)[0]
        toast.error(error[val].message, {
            style: {
                color: "black"
            }
        })
    }


    return (
        <div className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center p-4 selection:bg-[#ccff00] selection:text-black">

            <div className="flex items-center gap-2 mb-6">
                <div className="bg-[#ccff00] rounded-xl flex items-center justify-center w-9 h-9 shadow-lg shadow-[#ccff00]/10">
                    <Zap className="w-5 h-5 text-black fill-black" />
                </div>
                <span className="text-white text-xl font-bold tracking-tight custom-wide-font">
                    Sky<span className="text-white custom-wide-font">Mart</span>
                </span>
            </div>

            <div className="w-full max-w-[420px] bg-[#141414] border border-[#222222] rounded-[24px] p-6 md:p-8 shadow-2xl custom-wide-font">

                <div className="mb-6 custom-wide-font">
                    <h1 className="text-white text-3xl font-bold tracking-tight mb-1 custom-wide-font">
                        Create account
                    </h1>
                    <p className="text-[#666666] text-xs font-medium tracking-wide custom-wide-font">
                        Join SkyMart and start shopping
                    </p>
                </div>

                <form onSubmit={handleSubmit(success, onErrors)} className="space-y-3.5 custom-wide-font">

                    <div className="relative custom-wide-font">
                        <span className="absolute inset-y-0 left-3.5 flex items-center text-[#555555]">
                            <User className="w-4 h-4" />
                        </span>
                        <input {...register('username', {
                            required: 'UserName is Required',
                            minLength: {
                                value: 3,
                                message: 'Minium 3 Character Required'
                            }
                        })}
                            type="text"
                            placeholder="Full name"
                            className="w-full bg-[#1c1c1c] text-white placeholder-[#555555] text-sm pl-10 pr-4 py-2.5 rounded-xl border border-[#2a2a2a] focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-all duration-200 custom-wide-font"
                        />
                    </div>

                    <div className="relative custom-wide-font">
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
                                if (found) {
                                    return 'Already Email Exists'
                                }
                            }
                        })}
                            type="email"
                            placeholder="Email address"
                            className="w-full bg-[#1c1c1c] text-white placeholder-[#555555] text-sm pl-10 pr-4 py-2.5 rounded-xl border border-[#2a2a2a] focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-all duration-200 custom-wide-font"
                        />
                    </div>

                    <div className="relative custom-wide-font">
                        <span className="absolute inset-y-0 left-3.5 flex items-center text-[#555555]">
                            <Lock className="w-4 h-4" />
                        </span>
                        <input {...register('password', {
                            required: 'Password is Required',
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters'
                            }
                        })}
                            type="password"
                            placeholder="Password (min 6 chars)"
                            className="w-full bg-[#1c1c1c] text-white placeholder-[#555555] text-sm pl-10 pr-10 py-2.5 rounded-xl border border-[#2a2a2a] focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-all duration-200 custom-wide-font"
                        />
                        <span className="absolute inset-y-0 right-3.5 flex items-center text-[#555555]">
                            <Eye className="w-4 h-4 cursor-pointer hover:text-white transition-colors" />
                        </span>
                    </div>

                    <div className="relative custom-wide-font">
                        <span className="absolute inset-y-0 left-3.5 flex items-center text-[#555555]">
                            <Lock className="w-4 h-4" />
                        </span>
                        <input {...register('confirmPass', {
                            required: 'Confirm Password is Required',
                            validate: (val) => {
                                if (val !== passwordWatch) {
                                    return 'Password do not Match'
                                }
                            }
                        })}
                            type="password"
                            placeholder="Confirm password"
                            className="w-full bg-[#1c1c1c] text-white placeholder-[#555555] text-sm pl-10 pr-4 py-2.5 rounded-xl border border-[#2a2a2a] focus:outline-none focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-all duration-200 custom-wide-font"
                        />
                    </div>

                    <button
                        type="submit"
                        className="cursor-pointer w-full bg-[#ccff00] text-black font-bold text-base py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#b5e600] active:scale-[0.99] tracking-wide transition-all duration-200 mt-4 shadow-lg shadow-[#ccff00]/15 custom-wide-font"
                    >
                        Create Account
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                </form>

                <div className="text-center mt-6 custom-wide-font">
                    <p className="text-[#666666] text-sm cursor-pointer font-medium custom-wide-font flex gap-3 justify-center">
                        Already have an account?{' '}
                        <span onClick={() => { navigate('/') }} className="text-[#ccff00] hover:underline font-bold transition-all custom-wide-font">
                            Sign in
                        </span>
                    </p>
                </div>

            </div>

           

        </div>
    );
};

export default register;
