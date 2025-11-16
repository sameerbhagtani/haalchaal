import Link from "next/link";
import { Button } from "@/components/ui/button";
import ErrorDesc from "@/components/error/ErrorDesc";
import { Suspense } from "react";

export default function Error() {
    return (
        <div className="border-primary relative flex h-[85%] min-h-100 w-[85%] flex-col items-center justify-center gap-10 rounded-lg border-2 bg-white dark:bg-black">
            <Suspense fallback={<div />}>
                <ErrorDesc />
            </Suspense>

            <Button asChild type="button" className="text-2xl">
                <Link href="/" replace>
                    Go to Home
                </Link>
            </Button>
        </div>
    );
}
