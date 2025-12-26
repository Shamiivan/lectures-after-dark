import Button from '../components/ui/Button';

export default function TestButtonPage() {
    return (
        <div className="min-h-screen bg-midnight p-8 pt-24 text-cream ">

            <h1 className="text-4xl font-headline mb-8 text-center">Button System Test</h1>

            <div className="max-w-4xl mx-auto space-y-12">

                {/* Variants */}
                <section className="space-y-4  ">
                    <h2 className="text-2xl font-bold border-b border-cream/20 pb-2">Variants</h2>
                    <div className="flex flex-wrap gap-4 items-center">
                        <Button variant="primary">Primary Button</Button>
                        <Button variant="secondary">Secondary Button</Button>
                        <Button variant="outline">Outline Button</Button>
                    </div>
                </section>

                {/* Sizes */}
                <section className="space-y-10">
                    <h2 className="text-2xl font-bold border-b border-cream/20 pb-2">Sizes</h2>
                    <div className="flex flex-wrap gap-4 items-end">
                        <div className="p- bg-amber text-midnight"> <p>Smallest</p></div>
                        <Button size="sm" className="mb-10">Small</Button>
                        <Button size="md" className="mb-10">Medium</Button>
                        <Button size="lg" className="mb-10">Large</Button>
                        <button className="p-10 bg-amber text-midnight">Largest</button>
                    </div>
                </section>

                {/* States */}
                <section className="space-y-10">
                    <h2 className="text-2xl font-bold border-b border-cream/20 pb-2">States</h2>
                    <div className="flex flex-wrap gap-4">
                        <Button disabled>Disabled Primary</Button>
                        <Button variant="secondary" disabled>Disabled Secondary</Button>
                        <Button variant="outline" disabled>Disabled Outline</Button>
                    </div>
                </section>

                {/* Combinations */}
                <section className="space-y-10">
                    <h2 className="text-2xl font-bold border-b border-cream/20 pb-2">Combinations</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <h3 className="text-sm uppercase tracking-wider opacity-70">Small</h3>
                            <div className="flex flex-col gap-2 items-start">
                                <Button size="sm" variant="primary">Primary</Button>
                                <Button size="sm" variant="secondary">Secondary</Button>
                                <Button size="sm" variant="outline">Outline</Button>
                                <button className="px-4 bg-amber text-midnight">Smallesr</button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-sm uppercase tracking-wider opacity-70">Medium</h3>
                            <div className="flex flex-col gap-2 items-start">
                                <Button size="md" variant="primary">Primary</Button>
                                <Button size="md" variant="secondary">Secondary</Button>
                                <Button size="md" variant="outline">Outline</Button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-sm uppercase tracking-wider opacity-70">Large</h3>
                            <div className="flex flex-col gap-2 items-start">
                                <Button size="lg" variant="primary">Primary</Button>
                                <Button size="lg" variant="secondary">Secondary</Button>
                                <Button size="lg" variant="outline">Outline</Button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
