<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/articles', [Article::class, 'create'])->name('articles');
Route::post('/articles', [Article::class, 'store'])->name('store');
