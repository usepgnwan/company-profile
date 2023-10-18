<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->id();  
            $table->text('title')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();
            $table->text('about')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();  
            $table->text('service')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();  
            $table->text('benefit')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();  
            $table->text('description')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();  
            $table->text('price_list')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();  
            $table->text('project')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable(); 
            $table->text('blog')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable(); 
            $table->text('faq')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();
            // harga 1
            $table->text('title_harga_1')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();
            $table->text('harga_1')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();
            $table->text('body_harga_1')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();
            $table->text('link_1')->nullable();
            // harga 2
            $table->text('title_harga_2')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();
            $table->text('harga_2')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();
            $table->text('body_harga_2')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();
            $table->text('link_2')->nullable();
            // harga 3
            $table->text('title_harga_3')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();
            $table->text('harga_3')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();
            $table->text('body_harga_3')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();
            $table->text('link_3')->nullable();
            // harga 4
            $table->text('title_harga_4')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();
            $table->text('harga_4')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();
            $table->text('body_harga_4')->charset('utf8mb4')->collation('utf8mb4_unicode_ci')->nullable();
            $table->text('link_4')->nullable();

            $table->integer('count_client')->nullable();
            $table->integer('count_client1')->nullable();
            $table->integer('count_client2')->nullable();
            $table->text('banner')->nullable();
            $table->text('cta_banner')->nullable();
            $table->text('blog_baner')->nullable();
            $table->text('portofolio_banner')->nullable();
            $table->text('faq_banner')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
}
