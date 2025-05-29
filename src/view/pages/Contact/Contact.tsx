import { useForm } from "react-hook-form";

type FormData = {
    email: string;
    subject: string;
    message: string;
}

export function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FormData>();

    const onSubmit = (data: FormData) => {
        console.log('form data submitted : ', data);
        alert(`Submitted your case: ${data.subject}`);
    }

    return (
        <div className="min-h-[90vh] w-full flex items-center justify-center bg-gradient-to-br from-[#4c2222] to-[#2d1a1a] text-white font-['Segoe_UI',_Tahoma,_Geneva,_Verdana,_sans-serif]">
            <div className="mt-2.5 bg-white/10 backdrop-blur-md rounded-2xl p-8 w-[450px]   max-w-[500px] shadow-[0_15px_30px_rgba(0,0,0,0.3)] border border-white/10">
                <h1 className="text-[2.5rem] mb-2 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-transparent">
                    Contact Us
                </h1>
                <p className="text-base mb-8 opacity-80">
                    We'd love to hear from you
                </p>

                <form className="flex flex-col !gap-6" onSubmit={handleSubmit(onSubmit)}>
                    {/* Name Field */}
                    <div className="relative">
                        <input
                            type="text"
                            id="name"
                            placeholder=" "
                            className="peer w-[96%] h-100px p-2.5 bg-white/10 border border-white/20 rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#ff7e5f] focus:shadow-[0_0_0_2px_rgba(255,126,95,0.2)]"
                        />
                        <label
                            htmlFor="name"
                            className="absolute left-4 top-0 text-white/70 transition-all duration-300 pointer-events-none peer-focus:translate-y-[-15px] peer-focus:scale-90 peer-focus:bg-gradient-to-r peer-focus:from-[#ff7e5f] peer-focus:to-[#feb47b] peer-focus:px-[5px] peer-focus:text-white peer-focus:rounded-md peer-not-placeholder-shown:translate-y-[-25px] peer-not-placeholder-shown:scale-90 peer-not-placeholder-shown:bg-gradient-to-r peer-not-placeholder-shown:from-[#ff7e5f] peer-not-placeholder-shown:to-[#feb47b] peer-not-placeholder-shown:px-[5px] peer-not-placeholder-shown:text-white peer-not-placeholder-shown:rounded-md"
                        >
                            Your Name
                        </label>
                    </div>

                    {/* Email Field */}
                    <div className="relative">
                        <input
                            type="email"
                            id="email"
                            placeholder=" "
                            className="peer w-[96%] p-2.5 bg-white/10 border border-white/20 rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#ff7e5f] focus:shadow-[0_0_0_2px_rgba(255,126,95,0.2)]"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                        />
                        <label
                            htmlFor="email"
                            className="absolute left-4 top-0 text-white/70 transition-all duration-300 pointer-events-none peer-focus:translate-y-[-15px] peer-focus:scale-90 peer-focus:bg-gradient-to-r peer-focus:from-[#ff7e5f] peer-focus:to-[#feb47b] peer-focus:px-[5px] peer-focus:text-white peer-focus:rounded-md peer-not-placeholder-shown:translate-y-[-25px] peer-not-placeholder-shown:scale-90 peer-not-placeholder-shown:bg-gradient-to-r peer-not-placeholder-shown:from-[#ff7e5f] peer-not-placeholder-shown:to-[#feb47b] peer-not-placeholder-shown:px-[5px] peer-not-placeholder-shown:text-white peer-not-placeholder-shown:rounded-md"
                        >
                            Email Address
                        </label>
                    </div>
                    {errors.email && <span className="text-red-500 text-sm mt-[-0.5rem]">{errors.email.message}</span>}

                    {/* Subject Field */}
                    <div className="relative">
                        <input
                            type="text"
                            id="subject"
                            placeholder=" "
                            className="peer w-[96%] p-2.5 bg-white/10 border border-white/20 rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#ff7e5f] focus:shadow-[0_0_0_2px_rgba(255,126,95,0.2)]"
                            {...register('subject', {
                                required: 'Subject is required',
                                pattern: {
                                    value: /^[A-Za-z\s]+$/,
                                    message: 'Subject can only contain letters and spaces'
                                }
                            })}
                        />
                        <label
                            htmlFor="subject"
                            className="absolute left-4 top-0 text-white/70 transition-all duration-300 pointer-events-none peer-focus:translate-y-[-15px] peer-focus:scale-90 peer-focus:bg-gradient-to-r peer-focus:from-[#ff7e5f] peer-focus:to-[#feb47b] peer-focus:px-[5px] peer-focus:text-white peer-focus:rounded-md peer-not-placeholder-shown:translate-y-[-25px] peer-not-placeholder-shown:scale-90 peer-not-placeholder-shown:bg-gradient-to-r peer-not-placeholder-shown:from-[#ff7e5f] peer-not-placeholder-shown:to-[#feb47b] peer-not-placeholder-shown:px-[5px] peer-not-placeholder-shown:text-white peer-not-placeholder-shown:rounded-md"
                        >
                            Subject
                        </label>
                    </div>
                    {errors.subject && <span className="text-red-500 text-sm mt-[-0.5rem]">{errors.subject.message}</span>}

                    {/* Message Field */}
                    <div className="relative">
                        <textarea
                            id="message"
                            rows={4}
                            placeholder=" "
                            className="peer w-[96%] p-2.5 bg-white/10 border border-white/20 rounded-lg text-white text-base transition-all duration-300 focus:outline-none focus:border-[#ff7e5f] focus:shadow-[0_0_0_2px_rgba(255,126,95,0.2)] min-h-[120px] resize-y"
                            {...register('message', { required: 'Message is required' })}
                        ></textarea>
                        <label
                            htmlFor="message"
                            className="absolute left-4 top-4 text-white/70 transition-all duration-300 pointer-events-none peer-focus:translate-y-[-25px] peer-focus:scale-90 peer-focus:bg-gradient-to-r peer-focus:from-[#ff7e5f] peer-focus:to-[#feb47b] peer-focus:px-[5px] peer-focus:text-white peer-focus:rounded-md peer-not-placeholder-shown:translate-y-[-25px] peer-not-placeholder-shown:scale-90 peer-not-placeholder-shown:bg-gradient-to-r peer-not-placeholder-shown:from-[#ff7e5f] peer-not-placeholder-shown:to-[#feb47b] peer-not-placeholder-shown:px-[5px] peer-not-placeholder-shown:text-white peer-not-placeholder-shown:rounded-md"
                        >
                            Your Message
                        </label>
                    </div>
                    {errors.message && <span className="text-red-500 text-sm mt-[-0.5rem]">{errors.message.message}</span>}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-white border-none py-4 px-8 rounded-full text-base font-semibold cursor-pointer flex items-center justify-center gap-2.5 transition-all duration-300 mt-2.5 hover:translate-y-[-3px] hover:shadow-[0_10px_20px_rgba(255,126,95,0.3)]"
                    >
                        Send Message
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </button>
                </form>
            </div>
        </div>
    );
}