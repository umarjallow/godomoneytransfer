import Head from 'next/head'
//import {useSelector, shallowEqual} from 'react-redux'
import Header from '../../Header'
import SideBar from '../../Sidebar'

const Layout2 = ({children}) => {

  return (
    <>
      <Head>
        <title>Money transfer</title>
      </Head>
      <div className="flex flex-col w-full bg-content h-screen overflow-hidden">
           <div className="flex flex-row items-stretch lg:space-x-5 space-y-2 lg:space-y-0 mb-2">  
           <SideBar />
                <div className="flex flex-col w-full">
                    {/* <Header /> */}
                    <div className="min-h-screen w-full overflow-x-hidden overflow-y-auto">
                        {children}
                    </div>
                </div>
           </div>
      </div>
    </>
  )
}
export default Layout2
