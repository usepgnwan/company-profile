<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VUE LARAVEL</title>
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <!-- <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>  -->
    <script src="{{ asset('/vendor/tinymce/tinymce.min.js')}}"></script> 
    <script src="{{ asset('/js/glightbox.min.js')}}"></script> 
    <script src="{{ asset('/js/swiper/swiper-bundle.min.js')}}"></script> 
    <main id="app-ug">
        <router-view></router-view> 
    </main>
    <script>
        let baseurl = "{{ asset('/')}}";
    </script>
    <script src="{{ asset('/js/app.js')}}"></script>
    <script src="{{ asset('/js/custom.js')}}"></script>
    <script src="{{ asset('/js/purecounter/purecounter_vanilla.js')}}"></script> 
</body>
</html>