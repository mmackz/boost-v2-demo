'use client';

import { WordMarkLogo } from '@/icons/WordMarkLogo';
import Link from 'next/link';
import { type ReactNode } from 'react';
import { Button } from '@boostxyz/boost-ui/components/Button';
import { AccountButton } from '@/app/components/AccountButton';

export const NAV_HEIGHT = 80;

export default function Header({ children }: { children?: ReactNode }) {
  return (
    <header
      className="flex items-center justify-center w-full sticky top-0 bg-background"
      style={{ height: NAV_HEIGHT }}
    >
      <div className="flex w-full items-center justify-between px-4 sm:px-5 font-semibold text-sm text-bds-muted">
        <div className="flex items-center justify-start gap-4 w-fit">
          <Link href="/" className="px-3">
            <WordMarkLogo />
          </Link>
        </div>
        {children}
        <div className="flex items-center justify-start gap-4 w-fit">
          <a href="https://docs.boost.xyz/v2" target="_blank" rel="noopener noreferrer" className="sm:inline hidden px-3">
            <Button className="text-sm">
              Docs
            </Button>
          </a>
          <AccountButton />
        </div>
      </div>
    </header>
  );
}
