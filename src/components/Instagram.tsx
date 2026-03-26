
import styles from './Instagram.module.css';

interface InstagramPost {
    imageUrl: string;
    postUrl?: string;
}

interface InstagramProps {
    title?: string;
    handle?: string;
    posts?: InstagramPost[];
}

const defaultPosts: InstagramPost[] = [
    { imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', postUrl: '' },
    { imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', postUrl: '' },
    { imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', postUrl: '' },
    { imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80', postUrl: '' }
];

export const Instagram = ({
    title = "Follow us on Instagram",
    handle = "@lecturesafterdark",
    posts = defaultPosts
}: InstagramProps) => {
    // Extract username from handle (remove @ if present) and create Instagram URL
    const username = handle.startsWith('@') ? handle.slice(1) : handle;
    const instagramUrl = `https://www.instagram.com/${username}`;

    return (
        <section
            className={styles.section}
        >
            <div className="container">
                <h3 className={styles.title}>{title}</h3>
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={styles.handle}>{handle}</a>

                <div className={styles.grid}>
                    {posts.map((post, index) => (
                        <div key={index} className={styles.imageWrapper}>
                            {post.postUrl ? (
                                <a href={post.postUrl} target="_blank" rel="noopener noreferrer">
                                    <img src={post.imageUrl} alt={`Instagram post ${index + 1}`} loading="lazy" decoding="async" />
                                </a>
                            ) : (
                                <img src={post.imageUrl} alt={`Instagram post ${index + 1}`} loading="lazy" decoding="async" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Instagram;
