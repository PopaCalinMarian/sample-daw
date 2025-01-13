import React from "react";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import CreateContestForm from "./Profile/Partials/CreateContestForm";

export default function CreateContest() {
    return (
        <AuthenticatedLayout>

            <Head title="Creeaza Concurs" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <CreateContestForm className="p-6 text-gray-900 dark:text-gray-100">
                        </CreateContestForm>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}