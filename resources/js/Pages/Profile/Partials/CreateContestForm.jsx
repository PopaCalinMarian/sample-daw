import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import DatePicker from "react-datepicker";

export default function CreateContestForm() 
{   
    const { errors } = usePage().props;
    //setting up data for the form

    const { data, setData, post } = useForm({
        sport: '',
        startDate: new Date(),
        endDate: new Date(),
        location: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('contests.store'));
    };

    return(
        <form onSubmit={submit}>
        <h1 className="text-indigo-600">Selecteaza sportul pentru care vrei sa creezi concursul.</h1>
        <div className="mt-4">
            <InputLabel htmlFor="sport" value="Select Sport" />
            <select
                id="sport"
                value={data.sport}
                onChange={(e) => setData('sport', e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
            >
                <option value="">Select Sport</option>
                <option value="Tennis">Tennis</option>
                <option value="Football">Fotbal</option>
                <option value="BasketBall">BasketBall</option>
            </select>
            {errors.sport && <div className="mt-2 text-red-600">{errors.sport}</div>}
        </div>

        <h1 className="text-indigo-600">Selecteaza data de incepere a concursului.</h1>
        <div className="mt-4">
            <InputLabel htmlFor="start_date" value="Start Date" />
            <DatePicker
                selected={data.startDate}
                onChange={(date) => setData('start_date', date)}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
            />
            {errors.start_date && <div className="mt-2 text-red-600">{errors.start_date}</div>}
        </div>

        <h1 className="text-indigo-600">Selecteaza data de incheire a concursului.</h1>
        <div className="mt-4">
            <InputLabel htmlFor="end_date" value="End Date" />
            <DatePicker
                selected={data.endDate}
                onChange={(date) => setData('end_date', date)}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
            />
            {errors.end_date && <div className="mt-2 text-red-600">{errors.end_date}</div>}
        </div>

        <h1 className="text-indigo-600">Alege o locatie a concursul.</h1>
        <div className="mt-4">
            <InputLabel htmlFor="location" value="Select Location" />
            <select
                id="location"
                value={data.location}
                onChange={(e) => setData('location', e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-indigo-600 dark:focus:ring-indigo-600 mt-1 block w-full"
            >
                <option value="">Select Location</option>
                <option value="Berceni Grand Arena">Berceni Grand Arena</option>
                <option value="Parc Tineretului">Parc Tineretului</option>
                <option value="Parc Herastrau">Parc Herastrau</option>
                <option value="Baza Sportiva Dinamo">Baza Sportiva Dinamo</option>
                <option value="Arena Nationala">Arena Nationala</option>
            </select>
            {errors.location && <div className="mt-2 text-red-600">{errors.location}</div>}
        </div>

        <div className="mt-4">
            <PrimaryButton type="submit">Create Contest</PrimaryButton>
        </div>
    </form>
    );
};