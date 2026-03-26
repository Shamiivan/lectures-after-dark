import { EventCardRedesign } from './EventCardRedesign';

interface UpcomingEventsProps {
    title?: string;
    subtitle?: string;
}

export const UpcomingEvents = ({
    title = "UPCOMING EVENTS",
    subtitle = "Curated nights for the curious mind.",
}: UpcomingEventsProps) => {
    return (
        <section
            id="events"
            className="py-16 bg-cream"
        >
            <div className="container mx-auto px-4">
                {/* Header with decorative elements */}
                <div className="container">
                    <div className="flex !mb-8 max-md:flex-col max-md:items-start max-md:!mb-6">
                        <div className="">
                            {/* Title with gold accent */}
                            <div className="flex items-center gap-4 mb-2">
                                <div className="w-12 h-1 bg-gradient-to-r from-gold to-amber rounded-full max-md:w-8"></div>
                                <h2 className="font-headline text-5xl text-midnight max-md:text-4xl">{title}</h2>
                            </div>

                            {/* Subtitle */}
                            <p className="font-serif text-warm-brown text-lg ml-16 max-md:ml-12">{subtitle}</p>

                            {/* Decorative divider */}
                            <div className="flex items-center gap-3 mt-6 ml-16 max-md:ml-12 max-md:mt-4">
                                <div className="h-[2px] w-20 bg-gradient-to-r from-gold/60 to-transparent"></div>
                                <div className="w-1.5 h-1.5 rounded-full bg-gold/60"></div>
                                <div className="h-[2px] w-20 bg-gradient-to-l from-gold/60 to-transparent"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cards Grid */}
                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {/* Default cards - will be replaced by saved state from database */}
                    <EventCardRedesign
                        title="The Psychology of Ambition: Why Some People Win and Most Don't"
                        day="22"
                        month="JAN"
                        time="7:00"
                        location="Montreal"
                        price="$29.99"
                        image="/the_psychology_of_ambition.webp"
                    />
                    <EventCardRedesign
                        title="Modern Dating is Negotiating"
                        day="29"
                        month="JAN"
                        time="6:30"
                        location="Montreal"
                        price="$25.00"
                        image="/modern_dating.webp"
                    />
                    <EventCardRedesign
                        title="How Power Really Works"
                        day="05"
                        month="FEB"
                        time="8:00"
                        location="Montreal"
                        price="$35.00"
                        image="/how_power_works.webp"
                    />
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
