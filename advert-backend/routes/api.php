<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;

Route::post('/contact/send', [ContactController::class, 'send']);

// Route::get('/contact', [ContactsController::class, 'showContactForm']);
// Route::post('/contact/send', [ContactsController::class, 'sendContactMessage']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
