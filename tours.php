<!DOCTYPE html>
<html lang="en">
	<head>
	<?php include 'components/head.php'; ?>
	</head>
	<body>
		<header>
			<?php include 'components/elements/topbar.php'; ?>
			<?php include 'components/elements/navbar.php'; ?>
			<div class="pt2 pb2 cover" style="background-image: url(design/images/header.jpg);">
				<div class="container text-center white">
					<span class="both-lines italic">Welcome!</span>
					<div class="huge text-shadow">Туры</div>
					<div class="center mt2">
						<ul class="breadcrumbs">
							<li><a href="index.php">Home</a></li>
							<li><span>Туры</span></li>
						</ul>
					</div>
				</div>
			</div>
		</header>
		<main>

			<section class="pt4 pb4">
				<div class="container">
					<?php include 'components/elements/filter.php'; ?>
				</div>
			</section>

		</main>
	
		<footer>
			<?php include 'components/footer.php'; ?>
		</footer>
		<?php include 'components/scripts.php'; ?>
		<!-- Google Icons -->
		<!-- https://design.google.com/icons/ -->
	</body>
</html>