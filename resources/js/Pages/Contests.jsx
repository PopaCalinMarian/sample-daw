import React from "react";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";
import { useForm } from "@inertiajs/react";

export default function Contests({contests}) {

    //pt functia delete
    const { delete: destroy } = useForm();

    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this contest?")) {
            destroy(route('contests.destroy', id));
        }
    };

    return (
        <GuestLayout>

            <Head title="Contests" />

            <h1 className="relative">Lista de concursuri</h1>
            <ul>
                {contests.map((contest) => (
                    <li className="text-gray-500" key={contest.id}>
                        {contest.sport} - {contest.location} - {new Date(contest.start_date).toLocaleDateString()} to {new Date(contest.end_date).toLocaleDateString()}

                        <button
                            onClick={() => handleDelete(contest.id)}
                            className="ml-4 text-red-600"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </GuestLayout>
    );
}