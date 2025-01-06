<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CommentMention extends Model
{
    protected $table = 'comment_mentions';

    protected $fillable = [
        'comment_id',
        'mentioned_id',
    ];

    public function comment()
    {
        return $this->belongsTo(Comment::class);
    }

    public function mentioned()
    {
        return $this->belongsTo(User::class, 'mentioned_id');
    }
}
