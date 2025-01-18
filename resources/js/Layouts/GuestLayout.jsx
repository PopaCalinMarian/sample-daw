import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="relative flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0 dark:bg-gray-900">
            
            <img
                    id="background"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src ="/imgs/background-sports.jpeg"
                    alt = "background"
                />
        
            <nav className="fixed justify-center top-0 left-0 w-full bg-opacity-90 bg-gray-800 text-white p-4 flex items-center z-20">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="button-link">
                        Home
                    </Link>
                    <Link href={route('contests.index')} className="button-link">
                        Concursuri
                    </Link>
                    <Link href={route('reports')} className="button-link">
                        Rapoarte
                    </Link>
                    <Link href={route('login')} className="button-link self-end">
                        Login
                    </Link>
                    <Link href={route('register')} className="button-link">
                        Register
                    </Link>     
                </div>
                <Link href="/" className="flex items-center">
                    <ApplicationLogo className="h-10 w-10 fill-current text-gray-500" />
                </Link>
            </nav>

            <div className='relative z-10'>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="relative z-10 mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg dark:bg-gray-800">
                {children}
            </div>
        </div>
    );
}
