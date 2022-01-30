

const Navbar = () =>{
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                <a class="nav-item nav-link" href="/dashboard">Home</a>
                <a class="nav-item nav-link" href="/users">Korisnici</a>
                <a class="nav-item nav-link" href="/news">Novosti</a>
                <a class="nav-item nav-link" href="/comments">Komentari</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;