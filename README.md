# express-locallibrary-tutorial.
<html>
<head>
<link rel="stylesheets" href="style.css">
</head>
<body>
<header>
  <h2>Welcome to Local Library</h2>
</header>
<section>
  <nav>
<ul>
  <li>Home</li>
  <li>All Books</li>
  <li>All Authors</li>
  <li>All genres</li>
  <li>All Book-instances</li>
</ul>
</nav>

<article>
<h1>LocalLibrary to show patrons available books. </h1>
<img src="https://comps.canstockphoto.com/composition-with-vintage-old-hardback-stock-images_csp34114456.jpg" alt="book image">

</article>
</section>


<ul>
  <li>Create new Author</li>
  <li>Create new Genre</li>
  <li>Create new Book</li>
  <li>Create new Book-instances copy</li>
</ul>
<br>


<ul>
      <li> #[strong Books:] !{data.book_count}</li>
      <li> #[strong Copies:] !{data.book_instance_count}</li>
      <li> #[strong Copies available:] !{data.book_instance_available_count} </li>
      <li> #[strong Authors:] !{data.author_count}</li>
      <li> #[strong Genres:] !{data.genre_count}</li>
  

<footer>
Reference:

<a href="https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm">Tutorials point</a>

</footer>
</body>
</html>