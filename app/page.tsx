import { Button } from '@/components/ui/button';
import { ShowcaseMasonry } from "@/components/showcase-masonry"
import Link from 'next/link';

export default function IndexPage() {
  return (
    <main className="min-h-sreen flex flex-col items-center justify-center p-4">
      <div className="bg-stone-50 dark:bg-stone-950 flex flex-1 flex-col">
        <div className="relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0"
              style={{
              background:
                "radial-gradient(circle at center, transparent 0%, transparent 25%, hsl(var(--background) / 0.5) 50%, hsl(var(--background) / 0.8) 70%, hsl(var(--background) / 0.95) 85%, hsl(var(--background)) 95%)",
            }}
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold mt-24">Welcome to Neonity's Rabbit hole!</h1>
      <p className="font-poppins text-xl text-center mt-4">
        <span className='text-red-400'>Red pill</span> or <span className='text-blue-400'>blue pill</span>? <br />你选择真实的荒漠，还是虚幻的繁荣？</p>
      <div className="mt-6">
      <Button variant="outline">
        <Link href="/web3-01">Get Started</Link>
      </Button>

      <Button size="sm">
        <Link href="/web3-02">View Projects</Link>
      </Button>
      </div>

      <ShowcaseMasonry />
    </main>
  );
}