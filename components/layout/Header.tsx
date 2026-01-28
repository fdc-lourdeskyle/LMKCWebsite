import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return(
    <header className="items-center justify-items-center dark:dark-background">
        <div className="w-fit h-18 flex flex-row items-center justify-center mt-4 p-8 space-x-12 bg-custom-creamy-beige rounded-3xl border border-custom-brown">
                <Link href="/contact" className="text-custom-brown font-sans text-[16px] lg:text-xl hover:text-2xl">Contact</Link>
                <h1 className="font-cormorant text-6xl -tracking-[0.07em] text-custom-brown italic font-medium">LMKC</h1>
                <Link href="/projects" className="text-custom-brown font-sans text-[16px] lg:text-xl hover:text-2xl">Projects</Link>
        </div>
    </header>  
    );
}
        