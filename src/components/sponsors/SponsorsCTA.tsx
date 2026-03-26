interface SponsorsCTAProps {
    title?: string;
    text?: string;
    buttonText?: string;
    email?: string;
}

export const SponsorsCTA = ({
    title = "Let's Build Something Together",
    text = "We're not just hosting events—we're building a movement. Partner with us to reach an audience that values substance, curiosity, and authentic experiences.",
    buttonText = "Contact Us",
    email = "partnerships@lecturesafterdark.com"
}: SponsorsCTAProps) => {
    return (
        <section
            className="py-20 px-8 bg-white text-center"
        >
            <div className="container mx-auto max-w-2xl">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-midnight pb-4">{title}</h2>
                <p className="text-base md:text-lg text-warm-brown pb-8">{text}</p>
                <a href={`mailto:${email}`} className="bg-midnight text-cream py-4 px-12 text-lg font-semibold rounded-full transition-transform transform hover:scale-105 inline-block">{buttonText}</a>
            </div>
        </section>
    );
};
