use Plack::Builder;
use Plack::App::File;

builder {
    enable 'Plack::Middleware::Static', path => qr{^/}, root => 'root/';
};


