import { useNode } from '@craftjs/core';

interface TestTailwindProps {
    text?: string;
}

export const TestTailwind = ({ text = "Tailwind Test" }: TestTailwindProps) => {
    const { connectors: { connect, drag } } = useNode();

    return (
        <div
            ref={(ref: HTMLDivElement | null) => {
                if (ref) connect(drag(ref));
            }}
            className="p-8 bg-midnight text-center border-2 border-amber rounded-xl m-4"
        >
            <h2 className="text-section-title text-cream font-headline mb-4">
                Tailwind Integration Check
            </h2>
            <p className="text-xl text-cream-dark font-body">
                {text}
            </p>
            <div className="flex gap-4 justify-center mt-6">
                <div className="w-16 h-16 bg-amber rounded-full flex items-center justify-center text-white font-bold">
                    Amber
                </div>
                <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center text-midnight font-bold">
                    Cream
                </div>
                <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center text-white font-bold">
                    Brown
                </div>
            </div>
        </div>
    );
};

const TestTailwindSettings = () => {
    const { actions: { setProp }, text } = useNode((node) => ({
        text: node.data.props.text
    }));

    return (
        <div>
            <label className="block mb-2">Text Content</label>
            <input
                type="text"
                value={text}
                onChange={(e) => setProp((props: TestTailwindProps) => props.text = e.target.value)}
                className="w-full p-2 border rounded"
            />
        </div>
    );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(TestTailwind as any).craft = {
    props: {
        text: "If you can see this styled correctly, Tailwind is working!"
    },
    related: {
        settings: TestTailwindSettings
    }
};
