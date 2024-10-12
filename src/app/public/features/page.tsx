import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignedOut, SignInButton } from "@clerk/nextjs";
import {
  CheckCircle,
  CloudUpload,
  FileText,
  BarChart,
  Clock,
  Shield,
} from "lucide-react";
import Link from "next/link";

export default function FeaturesPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Features of BackflowTested
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
              Discover how BackflowTested can revolutionize your backflow
              testing process with our comprehensive feature set.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100 p-12 py-12 dark:bg-gray-800">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CheckCircle
                className="mb-2 h-8 w-8 text-green-500"
                aria-hidden="true"
              />
              <CardTitle>Easy Data Entry</CardTitle>
              <CardDescription>
                Streamline your data input process
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Support for both manual and digital tool input, ensuring quick
                and accurate data entry for all your backflow tests.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CloudUpload
                className="mb-2 h-8 w-8 text-blue-500"
                aria-hidden="true"
              />
              <CardTitle>Seamless Submission</CardTitle>
              <CardDescription>
                Effortless report generation and submission
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Automatically generate and submit reports to water authorities,
                saving time and reducing administrative overhead.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <FileText
                className="mb-2 h-8 w-8 text-purple-500"
                aria-hidden="true"
              />
              <CardTitle>Comprehensive Records</CardTitle>
              <CardDescription>Centralized data management</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Keep all your testing data organized and easily accessible in
                one place, facilitating better record-keeping and retrieval.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <BarChart
                className="mb-2 h-8 w-8 text-yellow-500"
                aria-hidden="true"
              />
              <CardTitle>Analytics Dashboard</CardTitle>
              <CardDescription>Gain valuable insights</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Visualize your testing data with our powerful analytics
                dashboard, helping you identify trends and make informed
                decisions.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Clock className="mb-2 h-8 w-8 text-red-500" aria-hidden="true" />
              <CardTitle>Scheduling System</CardTitle>
              <CardDescription>Efficient time management</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Built-in scheduling system to help you manage appointments and
                ensure timely completion of backflow tests.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Shield
                className="mb-2 h-8 w-8 text-indigo-500"
                aria-hidden="true"
              />
              <CardTitle>Secure Data Storage</CardTitle>
              <CardDescription>Your data, protected</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                State-of-the-art encryption and secure storage solutions to keep
                your sensitive backflow testing data safe and compliant.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to streamline your backflow testing?
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl">
            Join thousands of satisfied professionals who have transformed their
            workflow with BackflowTested.
          </p>
          <div className="space-x-4">
            <SignedOut>
              <SignInButton mode="modal">
                <Button>Get Started</Button>
              </SignInButton>
            </SignedOut>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
