import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Verifier from '@/app/components/verifier';
import { lusitana } from './ui/fonts';
import Image  from "next/image"
export default function Page() {
  
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="{styles.shape}">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
        <Image src="/hero-desktop.png" alt="hero" width={1000} height={760} property='true' className="hidden md:block" />
        <Image src="/hero-mobile.png" alt="hero" width={560} height={620} className="block md:hidden" />
          
          <p className={lusitana.className}> je suis alain et je suis un developpeur</p>
           <Verifier/>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}
