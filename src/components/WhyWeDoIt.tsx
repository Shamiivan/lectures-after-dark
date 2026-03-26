import styles from './WhyWeDoIt.module.css';

interface WhyWeDoItProps {
    kicker?: string;
    title?: string;
    paragraph1?: string;
    paragraph2?: string;
    paragraph3?: string;
}

export const WhyWeDoIt = ({
    kicker = "Why We Do It",
    title = "Make learning a night out.",
    paragraph1 = "A lot of us miss that campus vibe — hearing a great idea, debating it after, and leaving with something that sticks. Lectures After Dark brings that back, just in a bar: relaxed, social, and actually fun.",
    paragraph2 = "It's for people who want to keep learning without going back to school. For anyone who loves real conversation more than just another drink.",
    paragraph3 = "And honestly? It's a break from endless scrolling and fake \u201Cfacts.\u201D Real ideas, real speakers, real people — all in one room, and it's a vibe."
}: WhyWeDoItProps) => {
    return (
        <section
            className={styles.section}
        >
            <div className="container">
                <div className={styles.content}>
                    <span className={styles.kicker}>{kicker}</span>
                    <h2 className={styles.title}>{title}</h2>
                    <div className={styles.bodyText}>
                        <p>{paragraph1}</p>
                        <p>{paragraph2}</p>
                        <p>{paragraph3}</p>
                    </div>
                    {/* <div style={{ marginTop: '3rem' }}>
                        <a href="https://instagram.com" className="btn" style={{
                            backgroundColor: 'var(--midnight)',
                            color: 'var(--cream)',
                            border: 'none'
                        }}>
                            Follow us on Instagram
                        </a>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default WhyWeDoIt;
