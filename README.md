

## Passport Installation

get library passport in terminal:
```
composer require laravel/passport
```
migration passport will be created, and migrate to add to table on database:
```
php artisan migrate
```
Next, you should run install all package passport :
```
php artisan passport:install
```
### Passport Configuration
add the Laravel\Passport\HasApiTokens trait to model App\Models\User:
```
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
}
```
Next, add Passport::routes to method within the boot method of AuthServiceProvider. This method will register the routes necessary to issue access tokens and revoke access tokens, clients, and personal access tokens:
```
<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::routes();
    }
}
```

in config/auth.php configuration file, set the driver option of the api authentication guard to passport. This will instruct your application to use Passport's TokenGuard when authenticating incoming API requests:

```
'guards' => [
    'web' => [
        'driver' => 'session',
        'provider' => 'users',
    ],

    'api' => [
        'driver' => 'passport',
        'provider' => 'users',
    ],
],
```


## VUE UI INSTALATION

1. install vue ui :
```
composer require laravel/ui
```
2. after install vue ui, then  run : 
```
npm i
```
3. authentication :
```
php artisan ui vue --auth
```
3.1. Vue scaffolding vue : 
```
php artisan ui vue
```
## instal vue router
instal vue router 
```
npm install vue-router@"^3"
```

## install slug 

```
composer require cviebrock/eloquent-sluggable
php artisan vendor:publish --provider="Cviebrock\EloquentSluggable\ServiceProvider"
```
set on model 
```
use Cviebrock\EloquentSluggable\Sluggable;
public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title'
            ]
        ];
    }
```