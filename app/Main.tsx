'use client';
import { useEffect, useState } from 'react';

import { ScrollArea } from '@/components/lab/scroll-area';
import { WritingList } from '@/components/lab/writing-list';
import { FloatingHeader } from '@/components/lab/floating-header';
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import { components } from '@/components/MDXComponents';
import Image from '@/components/Image';
import { useTheme } from 'next-themes';

const MAX_DISPLAY = 5;

export default function Home({ posts: items, authors }) {
  const { resolvedTheme } = useTheme();
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (resolvedTheme) setTheme(resolvedTheme);
  }, [resolvedTheme]);

  return (
    <ScrollArea useScrollAreaId={true}>
      <FloatingHeader scrollTitle="Home" />
      <section className="mx-auto max-w-[840px] px-4 pt-8 md:m-auto">
        <div className="grid grid-cols-1 gap-x-16 gap-y-1 sm:grid-cols-3">
          {/* ABOUT ME */}
          <div className="sm:col-span-2 sm:row-span-2">
            <h1 className="text-m mb-m font-bold leading-tight text-[#ff0a78] dark:text-[#ff0a78] sm:text-lg">
              ABOUT TIL
            </h1>
            <div className="py-4 sm:pl-0 [&>p:last-child]:mb-0 [&>p]:mb-4">
              <MDXLayoutRenderer code={authors.body.code} components={components} />
            </div>
          </div>
          <div className="self-center sm:col-span-1 sm:row-span-2">
            <Image
              src={theme === 'light' ? '/static/images/dot.png' : '/static/images/dot_dark.png'}
              height={500}
              width={500}
              alt={'Connect the dot'}
              className="rounded-[12px] shadow-none"
            />
          </div>
        </div>
        <div className="my-8 lg:my-4">
          <h1 className="text-m mb-m font-bold leading-tight text-[#ff0a78] dark:text-[#ff0a78] sm:text-lg">
            Recent TIL
          </h1>
          <WritingList items={items} maxDisplay={MAX_DISPLAY} />
        </div>
      </section>
    </ScrollArea>
  );
}
