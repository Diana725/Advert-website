<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string',
        ]);

        // Send email
        $contactData = $request->all();
        Mail::to('adlitecabvertise@gmail.com')->send(new ContactMail($contactData));

        // Return success response
        return response()->json(['message' => 'Email sent successfully!'], 200);
    }
}
