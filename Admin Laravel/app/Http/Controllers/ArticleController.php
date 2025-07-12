<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;

class Article extends Controller
{
    public function index()
    {
        $article=Article::all();
        return view('articles',['article' => $article]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        // $art = new Article() ;
        // $art->nom = strip_tags($request->input('nom')) ;

    }

    public function show(string $id)
    {
        //
    }

    public function edit(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }
}
