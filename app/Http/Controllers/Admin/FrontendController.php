<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Customer;
use App\Models\Iphone;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function index()
    {
        $iphones = Iphone::all();
        $customers = Customer::all();
        $adatok = Customer::select('last_name')->where('city', 'LIKE', '%Budapest%')->get();
        return view('admin.index', compact(['customers', 'iphones', 'adatok']));
    }
}
