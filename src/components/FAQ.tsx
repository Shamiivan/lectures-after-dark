import { useState } from 'react';
import { useNode } from '@craftjs/core';
import styles from './FAQ.module.css';
import { Plus } from 'lucide-react';
import { useFaq } from '../hooks/useTinaContent';

interface FAQProps {
    title?: string;
}

export const FAQ = ({
    title = "Frequently Asked Questions"
}: FAQProps) => {
    const { connectors: { connect, drag } } = useNode();
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const { faq, loading } = useFaq();

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const items = faq?.items ?? [];

    return (
        <section
            ref={(ref: HTMLElement | null) => {
                if (ref) {
                    connect(drag(ref));
                }
            }}
            id="faq"
            className={styles.section}
        >
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>

                {loading ? (
                    <p style={{ textAlign: 'center', opacity: 0.6 }}>Loading FAQ...</p>
                ) : (
                    <div className={styles.list}>
                        {items.map((item, index) => item && (
                            <div key={index} className={styles.item} data-open={openIndex === index}>
                                <button className={styles.question} onClick={() => toggle(index)}>
                                    <span className={styles.questionText}>{item.question}</span>
                                    <span className={styles.icon}><Plus size={20} /></span>
                                </button>
                                <div className={styles.answer}>
                                    <div className={styles.answerContent}>
                                        {item.answer?.split('\n\n').map((paragraph, i) => (
                                            <p key={i} style={i < (item.answer?.split('\n\n').length ?? 1) - 1 ? { marginBottom: '1rem' } : undefined}>
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

const FAQSettings = () => {
    const { actions: { setProp }, title } = useNode((node) => ({
        title: node.data.props.title,
    }));

    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <label style={{ display: 'block', marginBottom: '5px' }}>Title</label>
                <input
                    type="text"
                    value={title || ''}
                    onChange={(e) => setProp((props: FAQProps) => props.title = e.target.value)}
                    style={{ width: '100%', padding: '5px' }}
                />
            </div>
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(FAQ as any).craft = {
    props: {
        title: "Frequently Asked Questions"
    },
    related: {
        settings: FAQSettings
    }
};

export default FAQ;
