<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        "mot_cle",
        "phrase",
        "reponse"
    ];


    public function reponse():BelongsTo{
        return $this->BelongsTo(Response::class);
    }

}
