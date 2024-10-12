import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, CloudUpload, FileText } from "lucide-react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-36">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Streamline Your Backflow Testing
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Simplify your workflow, increase accuracy, and submit reports
              effortlessly with BackflowTested.
            </p>
          </div>
          <div className="space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button>
                  Get Started{" "}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            </SignedIn>
            <Button variant="outline" asChild>
              <Link href="#learn-more">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
      <section
        id="learn-more"
        className="w-full bg-gray-100 py-12 dark:bg-gray-800 md:py-24 lg:py-32"
      >
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Why Choose BackflowTested?
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
            <CheckCircle
              className="h-8 w-8 text-green-500"
              aria-hidden="true"
            />
            <h3 className="text-xl font-bold">Easy Data Entry</h3>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Manual and digital tool support for quick and accurate data input.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
            <CloudUpload className="h-8 w-8 text-blue-500" aria-hidden="true" />
            <h3 className="text-xl font-bold">Seamless Submission</h3>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Automatically generate and submit reports to water authorities.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
            <FileText className="h-8 w-8 text-purple-500" aria-hidden="true" />
            <h3 className="text-xl font-bold">Comprehensive Records</h3>
            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
              Keep all your testing data organized and easily accessible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
