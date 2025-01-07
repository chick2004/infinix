<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use PragmaRX\Google2FA\Google2FA;
use App\Mail\VerificationEmail;
use App\Models\VerificationCode;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if (!Auth::attempt($request->only('email', 'password')) || User::where('email', $request->email)->doesntExist()) {
            return response()->json([
                'message' => 'Invalid login details'
            ], 401);
        }

        $user = User::where('email', $request->email)->firstOrFail();
        return response()->json([
            'token' => $user->createToken('token')->plainTextToken
        ], 200);

    }

    public function register(Request $request)
    {
        $request->validate([
            'display_name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required',
        ]);

        $user = User::create([
            'email' => $request->email,
            'password' => Password::make($request->password),
        ]);

        $user->profile()->create([
            'display_name' => $request->display_name,
        ]);

        return response()->json([
            'token' => $user->createToken('token')->plainTextToken
        ], 201);
    }

    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();
        return response()->json([
            'message' => 'Logged out'
        ], 200);
    }

    public function send_verification_code(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        if (User::where('email', $request->email)->exists()) {
            return response()->json([
                'message' => 'Email already exists'
            ], 400);
        }

        $google2fa = new Google2FA();
        $otp = $google2fa->generateSecretKey();

        VerificationCode::create([
            'email' => $request->email,
            'code' => $otp,
        ]);

        Mail::to($request->email)->send(new VerificationEmail($otp));

        return response()->json([
            'message' => 'Verification code sent'
        ], 200);
    }

    public function verify_code(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'code' => 'required',
        ]);

        $verification_code = VerificationCode::where('email', $request->email)->where('code', $request->code);
        
        if (!$verification_code->exists()) {
            return response()->json([
                'message' => 'Invalid code'
            ], 400);
        }

        $verification_code->delete();

        return response()->json([
            'message' => 'Code verified'
        ], 200);
    }

    public function reset_password(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $request->email)->firstOrFail();
        $user->password = Password::make($request->password);
        $user->save();

        return response()->json([
            'message' => 'Password reset'
        ], 200);
    }

    public function change_password(Request $request)
    {
        $request->validate([
            'current_password' => 'required',
            'new_password' => 'required',
        ]);

        if (!Password::check($request->current_password, $request->user()->password)) {
            return response()->json([
                'message' => 'Invalid current password'
            ], 400);
        }

        $user = $request->user();
        $user->password = Password::make($request->new_password);
        $user->save();

        return response()->json([
            'message' => 'Password changed'
        ], 200);
    }

}
