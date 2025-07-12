<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <div class="container">
        <h2>Ajouter un article</h2>
        <form action="{{ route('store') }}" method="POST">
            @csrf
            <div class="form-group">
                <label for="marque">Marque:</label>
                <input type="text" class="form-control" id="marque" name="marque" required>
            </div>
            <div class="form-group">
                <label for="nom">Nom:</label>
                <input type="text" class="form-control" id="nom" name="nom" required>
            </div>
            <div class="form-group">
                <label for="couleur">Couleur:</label>
                <input type="text" class="form-control" id="couleur" name="couleur" required>
            </div>
            <div class="form-group">
                <label for="numCat">Catégorie:</label>
                <select class="form-control" id="numCat" name="numCat" required>
                    @foreach($categories as $category)
                        <option value="{{ $category->numCat }}">{{ $category->nom }}</option>
                    @endforeach
                </select>
            </div>
            <div class="form-group">
                <label for="description">Description:</label>
                <textarea class="form-control" id="description" name="description"></textarea>
            </div>
            <div class="form-group">
                <label for="prix_HTVA">Prix HTVA:</label>
                <input type="number" step="0.01" class="form-control" id="prix_HTVA" name="prix_HTVA" required>
            </div>
            <div class="form-group">
                <label for="prix_TVAC">Prix TVAC:</label>
                <input type="number" step="0.01" class="form-control" id="prix_TVAC" name="prix_TVAC" required>
            </div>
            <div class="form-group">
                <label for="TVA">TVA (%):</label>
                <input type="number" step="0.01" class="form-control" id="TVA" name="TVA" required>
            </div>
            <div class="form-group">
                <label for="image">Image (URL):</label>
                <input type="text" class="form-control" id="image" name="image">
            </div>
            <div class="form-group">
                <label for="code_Barre">Code Barre:</label>
                <input type="text" class="form-control" id="code_Barre" name="code_Barre" required>
            </div>
            <button type="submit" class="btn btn-primary">Ajouter</button>
        </form>
    </div>
    
</body>
</html>