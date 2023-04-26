import logo from "../img/logo.png";

const Sidebar = ()=> {
    return (
        <>
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-100 dark:bg-gray-800">
            <a href="/" className="flex items-center pl-2.5 mb-5">
                <img src={logo} className="h-6 mr-3 sm:h-7" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Sector Insight</span>
            </a>
            <ul className="space-y-2 font-medium">
                <a href="/">
                    <div className="flex bg-gray-300 items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700">
                    <svg aria-hidden="true" className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                    <span className="ml-3">Dashboard</span>
                    </div>
                </a>
            </ul>
        </div>
        </aside>

        <div>

        </div>
        </>
    );
}

export default Sidebar;