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

        Contest::create($request->all());

        return redirect()->route('contests.index')->with('success', 'Contest created.');
    }

    public function index()
    {
        $contests = Contest::all();
        return Inertia::render('Contests', ['contests' => $contests]);
        
        //something about /contests page
    }
}
