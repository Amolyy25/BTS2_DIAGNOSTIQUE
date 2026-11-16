<?php


use App\Http\Controllers\ApiSalleController;
use Illuminate\Support\Facades\Route;


Route::get("salles", [ApiSalleController::class, 'index']);
