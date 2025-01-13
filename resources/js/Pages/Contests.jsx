import React from "react";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function Contests() {
    return (
        <GuestLayout>

            <Head title="Contests" />

            <h1 className="relative">Lista de concursuri</h1>
        </GuestLayout>
    );
}