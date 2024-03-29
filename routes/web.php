<?php

use App\Http\Controllers\Admin\FrontendController;
use App\Http\Controllers\ReactController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


Route::middleware(['auth','isAdmin'])->group( function () {
    //Route::get('/dashboard', 'Admin/FrontendController@index');
    /* Route::get('/dashboard', function () {
       return view('admin.index');
    }); */

    Route::get('/dashboard', [FrontendController::class, 'index']);

    Route::resource('kategoriak', KategoriaController::class);

    Route::resource('iphones', IphoneController::class);

    Route::resource('felhasznalok', AdminFelhasznaloController::class);

});


