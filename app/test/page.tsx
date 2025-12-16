"use client"

export default function page() {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=tucorreo@ejemplo.com&su=${encodeURIComponent('Hellow!')}&body=${encodeURIComponent('Me gustaria solicitar tus servicios')}`;


    // mobile
    // const mailtoLink = `mailto:tucorreo@ejemplo.com?subject=${encodeURIComponent('Asunto')}&body=${encodeURIComponent('Mensaje')}`;

    // <a href={mailtoLink} className="tu-clase-de-boton">
    //     Gmail
    // </a>

    return (
        <div>

            <button onClick={() => window.open(gmailUrl, '_blank')}>
                Gmail
            </button>
        </div>
    )
}
