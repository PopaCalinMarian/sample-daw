import React from "react";
import { Head, Link } from "@inertiajs/react";
import GuestLayout from "@/Layouts/GuestLayout";

export default function SportsList() {
    return (
        <GuestLayout>

            <Head title="Raportele concursurilor" />

            <h1 className="relative">Lista de rapoarte</h1>
        </GuestLayout>
    );
}