import {useRouter} from 'next/router'
import Centered from './centered'
import Empty from './empty'
import Layout1 from './layout-1'
import Layout2 from './layout-2'

const Layout = ({children}) => {
    const router = useRouter()
    let {pathname} = {...router}
    if (['/404', '/500'].includes(pathname)) {
      return <Centered>{children}</Centered>
    }
    if (
      [
        '/',
      ].includes(pathname)
    ) {
      return <Empty>{children}</Empty>
    } else if(
      [
        '/dashboard',
      ].includes(pathname)
    ){
      return <Layout1>{children}</Layout1>
    } else {
      return <Layout2>{children}</Layout2>
    }
}

export default Layout
