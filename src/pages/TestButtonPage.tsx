import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import Paragraph from '../components/ui/Paragraph';

export default function TestButtonPage() {
    return (
        <div className="min-h-screen bg-midnight p-8 pt-24 text-cream">

            <SectionTitle className="text-center">Design System Test</SectionTitle>

            <div className="max-w-4xl mx-auto space-y-12">

                {/* Typography */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold border-b border-cream/20 pb-2">Typography</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm uppercase tracking-wider opacity-70 mb-2">Section Title</h3>
                            <SectionTitle className="!mb-0">The Quick Brown Fox</SectionTitle>
                        </div>
                        <div>
                            <h3 className="text-sm uppercase tracking-wider opacity-70 mb-2">Paragraph (Prose)</h3>
                            <Paragraph maxWidth="prose">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </Paragraph>
                        </div>
                        <div>
                            <h3 className="text-sm uppercase tracking-wider opacity-70 mb-2">Paragraph (Narrow)</h3>
                            <Paragraph maxWidth="narrow" className="text-cream/80">
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </Paragraph>
                        </div>
                    </div>
                </section>

                {/* Variants */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-bold border-b border-cream/20 pb-2">Button Variants</h2>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button variant="primary">Primary Button</Button>
                        <Button variant="secondary">Secondary Button</Button>
                        <Button variant="outline">Outline Button</Button>
                    </div>
                </section>

                {/* Sizes */}
                <section className="space-y-10">
                    <h2 className="text-2xl font-bold border-b border-cream/20 pb-2">Button Sizes</h2>
                    <div className="flex flex-wrap gap-4 items-end">
                        <Button size="sm">Small</Button>
                        <Button size="md">Medium</Button>
                        <Button size="lg">Large</Button>
                    </div>
                </section>

                {/* States */}
                <section className="space-y-10">
                    <h2 className="text-2xl font-bold border-b border-cream/20 pb-2">Button States</h2>
                    <div className="flex flex-wrap gap-4">
                        <Button disabled>Disabled Primary</Button>
                        <Button variant="secondary" disabled>Disabled Secondary</Button>
                        <Button variant="outline" disabled>Disabled Outline</Button>
                    </div>
                </section>
            </div>
        </div>
    );
}
