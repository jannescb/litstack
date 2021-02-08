@auth(config('lit.guard'))
    <nav id="lit-sidebar" class="h-full bg-white border-r border-r-gray-mid">

        @include('litstack::partials.nav_loader')

        
        <lit-main-navigation :items="{{collect(lit()->config('navigation')->main)}}"></lit-navigation>
    </nav>
@endauth
