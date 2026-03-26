import styles from './OurTeam.module.css';

interface OurTeamProps {
    title?: string;
    subtitle?: string;
}

export const OurTeam = ({
    title = "Our Team",
    subtitle = "Meet the passionate individuals behind Lectures After Dark"
}: OurTeamProps) => {
    return (
        <section
            className={styles.teamSection}
        >
            <div className="container">
                <div className={styles.teamHeader}>
                    <h2>{title}</h2>
                    {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                </div>
                <div
                    className={styles.teamGrid}
                >
                    {/* Team member cards will be dropped here in the editor */}
                </div>
            </div>
        </section>
    );
};
