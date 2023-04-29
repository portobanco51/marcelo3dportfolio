import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal)

export const sendEmail = (e, form) => {
    e.preventDefault()

    emailjs.sendForm('service_jpqmoxn', 'template_rbt0h7a', form.current, 'UqLVJIJKBSMpzJTBn').then(() => {
        form.current.reset()
        MySwal.fire(
            {
                icon: 'success',
                title: 'Sent!',
                text: `Thank you for your message, I'll be reaching out shortly!`,
                showConfirmButton: false,
                timer: 2000,
                color: '#fff ',
                background: '#2D2E32',
                backdrop: 'rgba(0,0,0,0.8)',
            }
        )
    }, (error) => {
        MySwal.fire(
            {
                icon: 'error',
                title: 'Ups!',
                text: `${error.text}`,
                showConfirmButton: false,
                timer: 2000,
                color: '#fff ',
                background: '#2D2E32',
                backdrop: 'rgba(0,0,0,0.8)',
            }
        )
    })

}