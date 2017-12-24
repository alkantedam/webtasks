<!DOCTYPE html>
<html>
<head>
	<title></title>
	  <meta charset="utf-8">
	<link rel="stylesheet" type="text/css" href="style.css">
	<link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400" rel="stylesheet">
	<script type="text/javascript" src = "script_index.js" defer></script>
</head>
<body>

	<header>
	<div class="begin">

		<a href="index.php"><div class="main">	
		</div></a>

		<div class = "header">
			<a href="list.html"> Каталог </a>
			<a href=""> Мои покупки </a>
			<a href="admin.html"> Регистрация </a>
		</div>
		<div class = "layout">
			<img src="images/main.png">
		</div>

	</div>
</header>
<br>
<hr>
<br>

	<div class = 'discounts'>
		
		<h2>Наши акции и предложения!</h2>

		<?php
			function get_data(){
				$connect = mysqli_connect('localhost', 'root', 'root', 'Project');
				$query = "SELECT * FROM Discounts INNER JOIN Services ON Services.id = Discounts.id";
				#$query = "SELECT * FROM Discounts";
				$result = mysqli_query($connect, $query);
				$data = array();
				while($row = mysqli_fetch_array($result)){
					$data[] = array(
					'name' => $row['Name'],
					'description' => $row['Description'],
					'price' => $row['Price'],
					'image' => $row['Image']

					);
				}

				return json_encode($data, JSON_UNESCAPED_UNICODE);
			}

			function show(){
				$json_data = file_get_contents('data.json');
				$json = json_decode($json_data, true);
				foreach ($json as $item) {
					echo "
						<div class = 'special'>
							<img src = images/".$item['image'].">
							<div class = 'add'>
								
								<p>". $item['description'] . " </p> 	
								
							</div>
						
						</div>";
						

				}
			}
			show();

			$file = 'data.json';
			file_put_contents($file, get_data());

			


		?>


	</div>

<br>
<br>

	<div class = "slideshow-container">

		<div class = "mySlides fade">

			<img src = "images/1.jpeg" style ="width: 100%;">
			
		</div>

		<div class = "mySlides fade">

			<img src = "images/2.jpeg" style ="width: 100%;">
			
		</div>

		<div class = "mySlides fade">

			<img src = "images/3.jpg" style ="width: 100%;">
			
		</div>

		<a class = "prev" onclick="plusSlides(-1)">&#10094</a>
		<a class = "next" onclick="plusSlides(1)">&#10095</a>

		<div style = "text-align: center;">
			
			<span class = "dot" onclick = "currentSlide(1)"></span>
			<span class = "dot" onclick = "currentSlide(2)"></span>
			<span class = "dot" onclick = "currentSlide(3)"></span>
		</div>

	<!-- 	<p>Organic Shop - магазин, в котором вы сможете украсить ваш уголок, дом, квартиру любым видом растений, заказать семена для своего сада и просто насладиться примерами дизайна и связаться с нашим дизайнером интерьеров, флористами и просто консультантами, которые смогут привнести в ваш дом капельку утонченности, эстетики и уюта, а это все, что нужно для хорошей атмосферы в вашем гнездышке </p>

		<img src="1.jpeg"> -->
		
	</div>

	<h1>Каталог товаров</h1>

	<div class = "control">
		<button id = "alpha">По названию</button>
		<button id = "desc">По цене</button>
	</div>



	<section>

		<div class="categories">
			<a href="">Растения</a>
			<a href="">Семена</a>
			<a href="">Портфолио дизайнеров</a>
			<a href="">Портфолио флористов</a>
		</div>

		<div class="elements" id = 'container-elements'>
			
		</div>

		<div class="pages">
			<a></a>
		</div>

	</section>

	<footer>
		<div class="info">
			<a href="">Контакты</a>
			<a href="">@organic.shop</a>
			<a href="">fb.com/organic_shop</a>
			<a href="">г. Алматы, ул. Аль-Фараби 55</a>
		</div>
	</footer>



</body>
</html>