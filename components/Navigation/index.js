import Link from 'next/link';
import GenericIcon from '../GenericIcon'

    function Navigation ({items}) {   
        //console.log('first', Object.values(items))
            return(
            <>
                {
                    Object.values(items)[0].map(item => (
                        <li className="p-1">
                            <Link href={item.url}>
                                <a className="flex flex-row items-center py-4 pl-10 group text-gray-400 ">
                                    <GenericIcon Icon = {item.Icon} />
                                    <span className="group-hover:text-purple-900 text-lg font-normal">{item.title}</span>
                                </a>
                            </Link>
                        </li>
                    ))
                }
            </>)
    }            

export default Navigation