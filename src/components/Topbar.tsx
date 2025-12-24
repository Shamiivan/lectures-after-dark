import { useEditor } from '@craftjs/core';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';

export const Topbar = () => {
    const { query } = useEditor();
    const savePage = useMutation(api.pages.savePage);
    const deletePage = useMutation(api.pages.deletePage);

    const handleSave = async () => {
        const json = query.serialize();
        try {
            await savePage({ slug: "home", layout: json });
            alert('Layout saved to database!');
        } catch (error) {
            console.error("Failed to save:", error);
            alert('Failed to save layout.');
        }
    };

    const handleDelete = async () => {
        if (confirm("Are you sure you want to delete this page layout? This cannot be undone.")) {
            try {
                await deletePage({ slug: "home" });
                alert('Layout deleted from database!');
                // Optionally reload or clear editor
                window.location.reload();
            } catch (error) {
                console.error("Failed to delete:", error);
                alert('Failed to delete layout.');
            }
        }
    };

    return (
        <div style={{
            padding: '10px 20px',
            background: '#2c3e50',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '50px'
        }}>
            <h2 style={{ margin: 0, fontSize: '1.2rem' }}>Admin Editor</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button
                    onClick={handleDelete}
                    style={{
                        padding: '8px 16px',
                        background: '#c0392b',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Delete Page
                </button>
                <button
                    onClick={handleSave}
                    style={{
                        padding: '8px 16px',
                        background: '#27ae60',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                    }}
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};
