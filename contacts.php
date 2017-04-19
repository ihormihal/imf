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
					<div class="huge text-shadow">Contacts</div>
					<div class="center mt2">
						<ul class="breadcrumbs">
							<li><a href="index.php">Home</a></li>
							<li><span>Contacts</span></li>
						</ul>
					</div>
				</div>
			</div>
		</header>
		<main>

			<section class="pt4 pb4">
				<div class="container">
					<div class="row">
						<div class="col-md-8">
							<h1>Contacts</h1>
							<hr class="divider divider-lg primary-bg">

							<p>You can contact us any way that is convenient for you. We are available 24/7 via fax or email. You can also use a quick contact form below or visit our office personally. We would be happy to answer your questions.</p>

							<form action="">
								<div class="form-group">
									<label>Name</label>
									<input type="text" class="default full input-lg">
								</div>
								<div class="row">
									<div class="col-md-6">
										<div class="form-group">
											<label>E-mail</label>
											<input type="email" class="default full input-lg">
										</div>
									</div>
									<div class="col-md-6">
										<div class="form-group">
											<label>Phone</label>
											<input type="text" class="default full input-lg">
										</div>
									</div>
								</div>
								<div class="form-group">
									<label>Name</label>
									<textarea class="default full" rows="10"></textarea>
								</div>
								<div class="text-left">
									<button class="btn btn-lg btn-mt btn-primary">Submit</button>
								</div>
							</form>
						</div>
						<div class="col-md-4">
							<h3>Social networks</h3>
							<div class="text-subline"></div>
							<ul class="social-buttons mb2 text-sm-center">
								<li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
								<li><a href="#" class="google"><i class="fa fa-google-plus"></i></a></li>
								<li><a href="#" class="instagram"><i class="fa fa-instagram"></i></a></li>
								<li><a href="#" class="vkontakte"><i class="fa fa-vk"></i></a></li>
							</ul>

							<div class="mt4"></div>

							<h3>Phones</h3>
							<div class="text-subline"></div>
							<div class="mb1 nowrap">
								<span class="btn-circle btn-primary mr"><i class="fa fa-phone"></i></span>
								<a class="black" href="tel:380734058015">(073)4058015</a>
							</div>

							<div class="mt4"></div>

							<h3>Address</h3>
							<div class="text-subline"></div>
							<div class="mb1 nowrap">
								<span class="btn-circle btn-primary mr"><i class="fa fa-map-marker"></i></span>
								<a class="black" href="#">Kiev, Zlatoustovskaya str. 2/4</a>
							</div>

							<div class="mt4"></div>

							<h3>E-mail</h3>
							<div class="text-subline"></div>
							<div class="mb1 nowrap">
								<span class="btn-circle btn-primary mr"><i class="fa fa-envelope"></i></span>
								<a class="primary" href="mailto:ihor.mihal@gmail.com">ihor.mihal@gmail.com</a>
							</div>

						</div>
					</div>
				</div>
			</section>

			<section class="mt2">
				<div class="gmap single" data-point="52.3525, 24.0345" data-zoom="8"></div>
			</section>

		</main>
	
		<footer>
			<?php include 'components/footer.php'; ?>
		</footer>
		 <script src="http://maps.google.com/maps/api/js?sensor=false&key=AIzaSyDt9wze3MCKr_lkQCXd-xETQBJJj1fI7ko" type="text/javascript"></script>
		<?php include 'components/scripts.php'; ?>
		<!-- Google Icons -->
		<!-- https://design.google.com/icons/ -->
	</body>
</html>