import React from 'react';
import { useEditor } from '@craftjs/core';

export const SettingsPanel = () => {
    const { selected, actions } = useEditor((state, query) => {
        const [currentNodeId] = state.events.selected;
        let selected;

        if (currentNodeId) {
            selected = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.name,
                settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
                isDeletable: query.node(currentNodeId).isDeletable(),
            };
        }

        return {
            selected,
        };
    });

    return selected ? (
        <div style={{ padding: '20px', background: '#f5f5f5', borderLeft: '1px solid #ddd', width: '300px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <h3>Settings</h3>
                {selected.isDeletable ? (
                    <button
                        onClick={() => {
                            actions.delete(selected.id);
                        }}
                        style={{ padding: '5px 10px', background: '#ff4d4f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        Delete
                    </button>
                ) : null}
            </div>
            {selected.settings && React.createElement(selected.settings)}
        </div>
    ) : null;
};
