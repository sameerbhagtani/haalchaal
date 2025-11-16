"use client";

import { useSearchParams } from "next/navigation";

export default function ErrorDesc() {
    const searchParams = useSearchParams();
    const errorMessage = searchParams.get("msg");

    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-primary text-center text-4xl">Error:</h1>
            <p className="text-xl text-red-500">{errorMessage}</p>
        </div>
    );
}
