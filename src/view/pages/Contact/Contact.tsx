import './Contact.css';
import {useForm} from "react-hook-form";

type FormData = {
    email: string;
    subject: string;
    message: string;
}

export function Contact() {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<FormData>();

    const onSubmit = (data: FormData) =>{
        console.log('form data submitted : ' ,data);
        alert(`Submitted your case: ${data.subject}`);
    }

    return (
        <div className="form-container">
            <div className="contact-card">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-subtitle">We'd love to hear from you</p>

                <form className="contact-form" onSubmit={handleSubmit( onSubmit)}>
                    <div className="form-group">
                        <input
                            type="text"
                            id="name"
                            placeholder=" "
                            className="form-input"
                        />
                        <label htmlFor="name" className="form-label">Your Name</label>
                    </div>


                    <div className="form-group">
                        <input
                            type="email"
                            id="email"
                            placeholder=" "
                            className="form-input"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Invalid email address'
                                }
                            })}
                        />
                        <label htmlFor="email" className="form-label">Email Address</label>
                    </div>
                    {
                        errors.email ? <span className="error-message">{errors.email.message}</span> : ''
                    }

                    <div className="form-group">
                        <input
                            type="subject"
                            id="subject"
                            placeholder=" "
                            className="form-input"
                            {
                                ...register('subject', {
                                    required: 'Subject is required',
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/,
                                        message: 'Subject can only contain letters and spaces'
                                    }
                                })
                            }
                        />
                        <label htmlFor="subject" className="form-label">Subject</label>
                    </div>
                    {
                        errors.subject ? <span className="error-message">{errors.subject.message}</span> : ''
                    }

                    <div className="form-group">
                        <textarea
                            id="message"
                            rows={4}
                            placeholder=" "
                            className="form-input"
                            {
                                ...register(
                                    'message',
                                    {
                                        required: true
                                    }
                                )
                            }

                        ></textarea>
                        <label htmlFor="message" className="form-label">Your Message</label>
                    </div>
                    {
                        errors.message ? <span className="error-message">{errors.message.message} Message is required</span> : ''
                    }


                    <button type="submit" className="submit-btn">
                        Send Message
                        <span className="arrow-icon">→</span>
                    </button>
                </form>
            </div>
        </div>
    );
}