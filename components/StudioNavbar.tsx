import { LaunchIcon } from '@sanity/icons'
import Link from 'next/link'
import React from 'react'

export default function StudioNavbar(props: any) {
    return (
        <div>
            <div className='dark:bg-[#1a1a1a] dark:text-[#ACACAC] text-black flex items-center justify-between px-3 py-2'>
                <Link href={'/'} className='flex items-center'>
                    <LaunchIcon height={30} width={30} />
                    Go to Website
                </Link>
            </div>
            <>{props.renderDefault(props)}</>
        </div>
    )
}
