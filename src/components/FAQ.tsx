import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { Plus } from 'lucide-react';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Is there a dress code?",
            answer: "Smart casual. We want you to feel comfortable but the vibe is sophisticated. Think date night or cocktail bar attire."
        },
        {
            question: "Do I need to be an expert?",
            answer: "Not at all. Our talks are designed to be accessible to everyone while still offering deep insights. Curiosity is the only requirement."
        },
        {
            question: "Are drinks included?",
            answer: "Tickets cover entry and the lecture. A curated menu of cocktails, wine, and non-alcoholic drinks is available for purchase at the bar."
        }
    ];

    return (
        <section id="faq" className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Frequently Asked Questions</h2>

                <div className={styles.list}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.item} data-open={openIndex === index}>
                            <button className={styles.question} onClick={() => toggle(index)}>
                                <span className={styles.questionText}>{faq.question}</span>
                                <span className={styles.icon}><Plus size={20} /></span>
                            </button>
                            <div className={styles.answer}>
                                <div className={styles.answerContent}>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
