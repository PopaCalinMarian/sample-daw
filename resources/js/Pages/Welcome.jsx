import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
                <img
                    id="background"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src ="/imgs/background-sports.jpeg"
                    alt = "background"
                />
                <div className="relative flex min-h-screen flex-col items-start justify-start selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-start gap-2 py-3 lg:grid-cols-3 self-start">
 
                            <nav className="fixed right-20 -mx-3 test-right flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="button-link"
                                        >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="button-link"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="button-link"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <footer className="fixed bottom-0 w-full py-1 text-left items-end text-sm text-black dark:text-black/70 self-end">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}
