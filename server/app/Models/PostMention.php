<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PostMention extends Model
{
    protected $table = 'post_mentions';

    protected $fillable = [
        'user_id',
        'mentioned_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function mentioned()
    {
        return $this->belongsTo(User::class, 'mentioned_id');
    }
}
