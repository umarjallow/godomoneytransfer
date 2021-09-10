


function Header (){
    return(
        <div className="flex flex-row  p-1 justify-between space-y-2 lg:space-y-0 mb-2 lg:mb-4 ">
            <div className="space-y-3">
                <div className="capitalize text-xl">
                <span className="font-semibold">Rapport Resumé</span> <span className="font-thin"></span>
                </div>
                <div className="text-lg text-gray-400 font-thin">
                    Bonjour, Bobo DIALLO
                </div>
            </div>
           {/* <div className="flex space-x-3">
                <div className="flex items-center justify-center mx-auto border-gray-50 h-10 w-10 bg-gray-50 rounded-lg shadow-lg">
                    <MoonIcon className="h-5 text-indigo-700" /> 
                </div>
                <div className="flex items-center justify-center mx-auto border-gray-50 h-10 w-10 bg-gray-50 rounded-lg shadow-lg">
                    <CogIcon className="h-5 text-indigo-700" /> 
                </div>
            </div>*/}
        </div>
    )
}

export default Header