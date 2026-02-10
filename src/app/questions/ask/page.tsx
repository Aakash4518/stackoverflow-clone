import QuestionForm from "@/components/QuestionForm";
import React from "react";

const Page = () => {
    return (
        <div className="container mx-auto max-w-4xl px-4 py-20">
            <div className="mb-8">
                <h1 className="text-4xl font-bold">Ask a Public Question</h1>
                <p className="mt-2 text-gray-400">
                    Get help from the community by sharing your question.
                </p>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/5 p-8">
                <QuestionForm />
            </div>
        </div>
    );
};

export default Page;
