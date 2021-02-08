<nav class="flex justify-between items-center bg-blue-dark px-4">
    <div>
        <a href="{{lit()->url('/')}}" class="-mb-3 inline-block">
            @include('litstack::partials.logo')
        </a>
    </div>
    @auth(config('lit.guard'))
        @include('litstack::partials.topbar.navigation')
    @endauth
</nav>
