
interface IdeaSectionProps {
    title?: string;
    description1?: string;
    description2?: string;
}

export const IdeaSection = ({
    title = "The Idea",
    description1 = "Lectures After Dark is a growing movement of intellectual social events that combine academic learning settings with the social experience of a bar.",
    description2 = "Our events are designed to be accessible to everyone while still offering deep insights. Curiosity is the only requirement."
}: IdeaSectionProps) => {
    return (
        <section
            id="about"
            className="py-32 bg-white relative overflow-hidden"
        >
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
                    <div>
                        {/* Title with gold accent bar */}
                        <div className="flex items-center gap-6 !mb-8">
                            <div className="w-16 h-1 bg-gold"></div>
                            <h2 className="font-headline text-5xl text-midnight md:text-[3.5rem]">{title}</h2>
                        </div>

                        <p className="font-serif text-xl leading-[2] text-warm-brown !mb-10">{description1}</p>
                        <p className="font-serif text-xl leading-[2] text-warm-brown !mb-12">{description2}</p>
                    </div>

                    <div className="relative">
                        <div className="relative p-1 bg-gradient-to-br from-gold/20 to-transparent rounded-lg">
                            <picture>
                                <source srcSet="/idea.webp" type="image/webp" />
                                <img
                                    src="/idea.png"
                                    alt="Cocktails and Conversation"
                                    className="w-full rounded-lg shadow-2xl"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IdeaSection;
