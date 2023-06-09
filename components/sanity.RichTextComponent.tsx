import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../lib/urlFor';

export const RichTextComponent: any = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className='relative w-full h-96 m-10 mx-auto'>
                    <Image 
                        className='object-contain'
                        src={urlFor(value).url()} 
                        alt={value.alt}
                        fill
                    />
                </div>
            );
        },
    },
    list: {
        
    },
    block: {
        // Ex. 1: customizing common block types
        h1: ({ children }: any) => <h1 className="text-2xl my-2">{children}</h1>,
        h2: ({ children }: any) => <h2 className='text-2xl font-semibold my-2'>{children}</h2>,
        h3: ({ children }: any) => <h3 className='text-xl font-medium my-2'>{children}</h3>,
        h4: ({ children }: any) => <h4 className='text-lg font-medium my-2'>{children}</h4>,
        blockquote: ({ children }: any) => (
            <blockquote className='border-l-slate-500 border-l-4 pl-5 py-5 my-5'>
                {children}
            </blockquote>
        ),
        number: ({ children }: any) => (
            <ol className='list-decimal list-inside mx-10'>{children}</ol>
        ),
        bullet: ({ children }: any) => <ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>,
    },
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith("")
                ? "noreferrer noopener"
                : undefined;
            
            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="underline decoration-slate-800 text-purple-600 dark:text-purple-500"
                >
                    {children}
                </Link>
            )
        }
    }
}

