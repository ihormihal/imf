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
					<div class="huge text-shadow">Страны</div>
					<div class="center mt2">
						<ul class="breadcrumbs">
							<li><a href="index.php">Home</a></li>
							<li><span>Страны</span></li>
						</ul>
					</div>
				</div>
			</div>
		</header>
		<main>

			<section class="pt4 pb4">
				<div class="container">
					
					<div class="row tile">
						<?php for ($i = 1; $i <= 6; $i++): ?>
						<div class="col-lg-4 col-sm-6">
							<a href="#" class="card-box">
								<div class="header image">
									<img src="design/images/hotel.jpg" alt="title">
								</div>
								<div class="content">
									<div class="box">
										<p class="italic">От $ 329.00</p>
										<div class="h3 primary">Страна</div>
									</div>
								</div>
							</a>
						</div>
						<?php endfor ?>
					</div>

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