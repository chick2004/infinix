<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostTagController;

Route::middleware('guest')->group(function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/register', [AuthController::class, 'register']);

    Route::post('/verify-email', [AuthController::class, 'send_verification_code']);
    Route::post('/verify-code', [AuthController::class, 'verify_code']);

    Route::post('/reset-password', [AuthController::class, 'reset_password']);
});

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/change-password', [AuthController::class, 'change_password']);

    Route::get('/posts', [PostController::class, 'index']);
    Route::get('/posts/{id}', [PostController::class, 'show']);
    Route::post('/posts', [PostController::class, 'store']);
    Route::put('/posts/{id}', [PostController::class, 'update']);
    Route::delete('/posts/{id}', [PostController::class, 'destroy']);
    Route::delete('/posts/{id}/force', [PostController::class, 'force_destroy']);
    Route::post('/posts/{id}/restore', [PostController::class, 'restore']);
    
    Route::get('/tags', [PostTagController::class, 'index']);
    Route::get('/tags/{tag}/posts', [PostController::class, 'by_tag']);

    Route::post('/users/{id}/posts', [PostController::class, 'by_user']);

});
