import Link from "next/link";
export function SiteHeader() {
    return (
        <header className="sticky top-0 z-50 w-full pt-4">
            <div className="container px-6 mx-auto">
                <div className="mx-auto rounded-full border border-white/10 bg-black/80 backdrop-blur-sm">
                   <div className="flex h-12 items-center justify-between px-2">
                        {/* Left: Logo + Brand + Nav */}
                        <div className="flex items-center gap-3">
                            <Link href="/" className="flex items-center gap-2">
                                <span className="font-bold text-lg text-white px-4">
                                    neonity.cc
                                </span>
                            </Link>
                            <p className="text-gray-300 px-4"></p>
                                
                        </div>
                   </div>
                </div>
            </div>
        </header>
    )
}