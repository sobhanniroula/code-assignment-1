<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewsletterController extends Controller
{
    public function subscribe(Request $request) {
        $email = $request->input('email');
        $isEmailValid = $this->isValidEmail($email);
        if ($isEmailValid) {
            return response()->json(["status" => "success"]);
        }
        return response()->json(["status" => "failed"]);
    }

    private function isValidEmail($email){ 
        return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
    }
}
 