import Button from './ui/Button';
import SectionTitle from './ui/SectionTitle';
import Paragraph from './ui/Paragraph';

interface TestTailwindProps {
    text?: string;
}

export const TestTailwind = ({ text = "Tailwind Test" }: TestTailwindProps) => {
    return (
        <div
            className="p-8 bg-midnight text-center border-2 border-amber rounded-xl m-4"
        >
            <SectionTitle>Tailwind Integration Check</SectionTitle>

            <Paragraph maxWidth="prose" className="text-cream-dark mb-8 mx-auto">
                {text}
            </Paragraph>

            <div className="flex gap-4 justify-center mb-12">
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

            <div className="space-y-8">
                <div className="p-6 border border-white/10 rounded-lg">
                    <h3 className="text-cream text-xl mb-4 font-headline">Buttons</h3>
                    <div className="flex flex-wrap gap-4 justify-center items-center">
                        <Button variant="primary">Primary</Button>
                        <Button variant="secondary">Secondary</Button>
                        <Button variant="outline">Outline</Button>
                    </div>
                    <div className="flex flex-wrap gap-4 justify-center items-center mt-4">
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                    </div>
                </div>

                <div className="p-6 border border-white/10 rounded-lg text-left">
                    <h3 className="text-cream text-xl mb-4 font-headline text-center">Typography</h3>
                    <SectionTitle className="!mb-4">Section Title Example</SectionTitle>
                    <Paragraph maxWidth="prose" className="mb-4">
                        This is a standard paragraph with prose width. It's designed for optimal reading experience, limiting the characters per line to around 65.
                    </Paragraph>
                    <Paragraph maxWidth="narrow" className="text-cream/80">
                        This is a narrow paragraph, useful for captions or side notes. It has a tighter max-width constraint.
                    </Paragraph>
                </div>
            </div>
        </div>
    );
};
