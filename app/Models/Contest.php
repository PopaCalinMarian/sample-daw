<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contest extends Model
{
    /** @use HasFactory<\Database\Factories\ContestFactory> */

    use HasFactory;

    protected $fillable = [
        'sport',
        'start_date',
        'end_date',
        'location',
    ];

    use HasFactory;
}
