@extends('layouts.admin')

@section('content')
    <div>
        <a href="{{ url('iphones/create') }}"><button class="btn btn-outline-secondary mb-2" id="btn_uj_kategoria">Új mobil hozzáadása</button></a>
    </div>
    <div class="card">
        <div class="card-header">
            <h4>iPhone mobilok</h4>
            <hr>
        </div>
        <div class="card-body">
            <table class="table table-bordered">
                <thead>
                    <tr class="text-center">
                        <th>#</th>
                        <th>Modell</th>
                        <th>Szín</th>
                        <th>Tárhely</th>
                        <th>Ár</th>
                        <th>Készlet</th>
                        <th>Kép</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($iphones as $item)
                        <tr>
                            <td>{{ $item->id }}</td>
                            <td>{{ $item->modell }}</td>
                            <td>{{ $item->szin }}</td>
                            <td>{{ $item->tarhely }}</td>
                            <td>{{ $item->ar }}</td>
                            <td>{{ $item->keszlet }}</td>
                            <td class="kepek"><img src="{{ asset('img/feltoltesek/mobilok/'.$item->kepfajl)}}" class="kategoriakep" alt="mobilkép"></td>
                            <td class="align-middle text-center">
                                <a href="{{ url('iphones/'.$item->id.'/edit')}} "><button class="btn btn-prim btn-sm">Szerkesztés</button></a>
                                <form action="{{ url('iphones/'.$item->id)}}" method="post">
                                    @csrf
                                    @method('DELETE')
                                    <a href=""><button class="btn btn-dangerer btn-sm mt-1">Törlés</button></a>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </div>
@endsection
