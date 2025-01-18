<?php

namespace App\Http\Controllers;

use App\Models\Contest;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContestController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'sport' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'required|date',
            'location' => 'required|string',
        ]);
        
        //formatez datele pentru a fi ok pt mysql
        $formattedStartDate = date('Y-m-d H:i:s', strtotime($request->start_date));
        $formattedEndDate = date('Y-m-d H:i:s', strtotime($request->end_date));

        //acum putem aplica functia de creere

        Contest::create([
            'sport' => $request->sport,
            'start_date' => $formattedStartDate,
            'end_date' => $formattedEndDate,
            'location' => $request->location,
        ]); 
        return redirect()->route('contests.index')->with('success', 'Contest created.');
    }

    public function index()
    {
        $contests = Contest::all();
        return Inertia::render('Contests', ['contests' => $contests]);
        
        //something about /contests page
    }

    public function destroy(Contest $contest)
    {
        $contest->delete();

        return redirect()->route('contests.index')->with('success', 'Contest deleted.');
    }
}
