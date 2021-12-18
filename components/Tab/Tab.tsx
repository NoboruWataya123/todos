import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/router"

export default function Tab() {
    const router = useRouter()

        const tab = router.asPath
        let className = 'w-1/3 pb-4 text-center text-gray-600 font-header font-semibold cursor-pointer border-b-2 hover:cursor-pointer hover:border-b-4 hover:transition-all';
        let active = 'w-1/3 pb-4 text-center text-gray-600 font-header font-semibold cursor-pointer border-b-2 hover:cursor-pointer hover:border-b-4 hover:transition-all';
        let complete = 'w-1/3 pb-4 text-center text-gray-600 font-header font-semibold cursor-pointer border-b-2 hover:cursor-pointer hover:border-b-4 hover:transition-all';

        switch (true) {
            case tab === "/" || tab == null:
                className += ' border-blue-600';
                break;
            case  tab === "/active":
                active += ' border-blue-600';
                break;
            case tab === "/complete":
                complete += ' border-blue-600';
                break;
            default:
                className = 'w-1/3 pb-4 text-center text-gray-600 font-header font-semibold cursor-pointer border-b-2 hover:cursor-pointer hover:border-b-4 hover:transition-all';
        }

    return (
        <div className='flex h-20 flex-row justify-center items-center w-full mt-4'>
          <Link passHref href={'/'}><div id='/' className={className}><a href='#'>All</a></div></Link>
          <Link passHref href={'/active'}><div id='active' className={active}><a href='#'>Active</a></div></Link>
          <Link passHref href={'/complete'}><div id='complete' className={complete}><a href='#'>Complete</a></div></Link>
        </div>
    )
}