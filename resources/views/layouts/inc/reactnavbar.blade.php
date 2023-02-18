<div class="reactnavbar">
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a class="navbar-brand" href="/"><img class="mb-2" src="/img/apple_nav_brand.png" alt="brand"/><span class="ms-2 brand">Almáskosár</span></a>
                @auth
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active {{ Request::is('/') ? 'active' : '' }}" aria-current="page" href="{{ url('home') }}">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled {{ Request::is('iPhone') ? 'active' : '' }}" href="/">iPhone</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled {{ Request::is('iPad') ? 'active' : '' }}" href='/'>iPad</a>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto mb-2 pe-5 mb-lg-0 float-e">
                    <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="/img/user.png" alt="hugenerd" width="20" height="20" class="rounded-circle">
                        <span class="d-none d-sm-inline mx-1 ms-3">{{ Auth::user()->name }}</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li>
                            <a class="dropdown-item" href="{{ route('logout') }}"
                                onclick="event.preventDefault();
                                    document.getElementById('logout-form').submit();">
                                Kijelentkezés
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST"
                                class="d-none">
                                @csrf
                            </form>
                        </li>
                    </ul>
                </div>
                </ul>
                @else
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 float-e">
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('login') }}">Belépés</a>
                    </li>
                    @if (Route::has('register'))
                    <li class="nav-item">
                        <a class="nav-link" href="{{ route('register') }}">Regisztráció</a>
                    </li>
                    @endif
                </ul>
                @endauth
            </div>
        </div>
    </nav>
</div>



{{-- @if (Route::has('login'))
<div class="hidden fixed top-0 right-0 px-6 py-4 sm:block">
    @auth
        <a href="{{ url('/home') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Home</a>
    @else
        <a href="{{ route('login') }}" class="text-sm text-gray-700 dark:text-gray-500 underline">Log in</a>

        @if (Route::has('register'))
            <a href="{{ route('register') }}" class="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">Register</a>
        @endif
    @endauth
</div>
@endif
 --}}
