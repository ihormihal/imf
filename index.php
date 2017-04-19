<!DOCTYPE html>
<html lang="en">
	<head>
	<?php include 'components/head.php'; ?>
	</head>
	<body>
		<header>
			<?php include 'components/elements/topbar.php'; ?>
			<?php include 'components/elements/navbar.php'; ?>
		</header>
		<main>

			<div class="slider slider-home owl-carousel" data-nav="true" data-pag="true">
				<!-- repeat -->
				<div class="item cover" style="background-image: url(design/images/banner.jpg)">
					<div class="container text-center white">
						<div class="row">
							<div class="col-md-10 col-md-offset-1">
								<div class="animated text-shadow" data-animated="fadeInUp">
									<div class="mb2">
										<span class="both-lines h3 italic">Welcome!</span>
									</div>
									
									<div class="huge mb1">Lorem ipsum dolor</div>
									<p class="h3 white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="item cover" style="background-image: url(design/images/banner.jpg)">
					<div class="container text-center white">
						<div class="row">
							<div class="col-md-10 col-md-offset-1">
								<div class="animated text-shadow" data-animated="fadeInUp">
									<div class="mb2">
										<span class="both-lines h3 italic">Welcome!</span>
									</div>
									
									<div class="huge mb1">Lorem ipsum dolor</div>
									<p class="h3 white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- /repeat -->
			</div>

			<section class="primary-dark-bg pt4 pb4" style="background-image: url(design/images/bg-tr-img.png)">
				<div class="container">
					<div class="text-center mb4">
						<h2 class="white up">Lorem ipsum dolor</h2>
						<hr class="divider divider-lg center primary-bg" />
					</div>
					<div class="row tile">
						<div class="col-lg-4 col-md-6">
							<div class="row tile">
								<div class="col-sm-4">
									<div class="btn-circle full btn-primary">
										<i class="fa fa-home"></i>
									</div>
								</div>
								<div class="col-sm-8">
									<div class="h3 primary mb1">Lorem ipsum dolor sit</div>
									<p class="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="row tile">
								<div class="col-sm-4">
									<div class="btn-circle full btn-primary">
										<i class="fa fa-home"></i>
									</div>
								</div>
								<div class="col-sm-8">
									<div class="h3 primary mb1">Lorem ipsum dolor sit</div>
									<p class="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
						</div>
						<div class="col-lg-4 col-md-6">
							<div class="row tile">
								<div class="col-sm-4">
									<div class="btn-circle full btn-primary">
										<i class="fa fa-home"></i>
									</div>
								</div>
								<div class="col-sm-8">
									<div class="h3 primary mb1">Lorem ipsum dolor sit</div>
									<p class="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section class="lighten-bg pt4 pb4">
				<div class="container">
					<div class="text-center mb4">
						<h2 class="up">Lorem ipsum dolor</h2>
						<hr class="divider divider-lg center primary-bg" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>
					<div class="row tile">
						<?php for ($i = 1; $i <= 6; $i++): ?>
						<div class="col-lg-4 col-sm-6">
							<div class="card-box hover-show-actions">
								<div class="header image">
									<img src="design/images/hotel.jpg" alt="title">
								</div>
								<div class="content">
									<div class="box">
										<h3 class="title primary">The title</h3>
										<div class="mb1">
											<span class="btn-circle btn-sm btn-primary mr"><i class="fa fa-home"></i></span>
											<span class="h4">
												Lorem ipsum dolor 
												<sup class="orange ml">
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
												</sup>
											</span>
										</div>
										<p class="grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
									</div>
									<div class="actions">
										<a href="javascript:void(0)" class="btn btn-mt btn-primary ripple">Some action</a>
									</div>
								</div>
							</div>
						</div>
						<?php endfor ?>
					</div>
				</div>
			</section>

			<section class="pt4 pb4 primary-dark-bg" style="background-image: url(design/images/bg-tr-img.png)">
				<div class="container">
					<div class="row">
						<div class="col-md-8 col-md-offset-2">
							<div class="text-center mb4">
								<div class="h1 white up">Lorem ipsum dolor consectetur adipiscing elit</div>
							</div>
						</div>
					</div>
					<div class="text-center">
						<a data-fancybox href="#popup-contact" class="btn btn-lg btn-mt btn-primary">More</a>
					</div>
			</section>

			<section class="lighten-bg pt4 pb4">
				<div class="container">
					<div class="text-center mb4">
						<h2 class="up">Lorem ipsum dolor</h2>
						<hr class="divider divider-lg center primary-bg" />
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					</div>
				</div>
				<!-- row 1 -->
				<div class="row condensed">
					<div class="col-md-6">
						<div class="row condensed">
							<div class="col-md-6 wc">
								<div class="col-content image">
									<img src="design/images/venice.jpg" alt="title">
									<div class="triangle triangle-left"></div>
								</div>
							</div>
							<div class="col-md-6 wc">
								<div class="col-content box text-center white-bg">
									<div class="h2 mt1">OAE</div>
									<div class="red">от <sup>$</sup>499.00</div>
									<div class="mt1"></div>
									<a href="#" class="btn btn-mt btn-warning up">Show more</a>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="row condensed">
							<div class="col-md-6 wc">
								<div class="col-content image">
									<img src="design/images/venice.jpg" alt="title">
									<div class="triangle triangle-left"></div>
								</div>
							</div>
							<div class="col-md-6 wc">
								<div class="col-content box text-center white-bg">
									<div class="h2 mt1">OAE</div>
									<div class="red">от <sup>$</sup>499.00</div>
									<div class="mt1"></div>
									<a href="#" class="btn btn-mt btn-warning up">Show more</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- row 2 -->
				<div class="row condensed">
					<div class="col-md-6">
						<div class="row condensed reverse">
							<div class="col-md-6 wc">
								<div class="col-content image">
									<img src="design/images/venice.jpg" alt="title">
									<div class="triangle triangle-right"></div>
								</div>
							</div>
							<div class="col-md-6 wc">
								<div class="col-content box text-center white-bg">
									<div class="h2 mt1">OAE</div>
									<div class="red">от <sup>$</sup>499.00</div>
									<div class="mt1"></div>
									<a href="#" class="btn btn-mt btn-warning up">Show more</a>
								</div>
							</div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="row condensed reverse">
							<div class="col-md-6 wc">
								<div class="col-content image">
									<img src="design/images/venice.jpg" alt="title">
									<div class="triangle triangle-right"></div>
								</div>
							</div>
							<div class="col-md-6 wc">
								<div class="col-content box text-center white-bg">
									<div class="h2 mt1">OAE</div>
									<div class="red">от <sup>$</sup>499.00</div>
									<div class="mt1"></div>
									<a href="#" class="btn btn-mt btn-warning up">Show more</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="container">
					<div class="text-center mt2">
						<a href="#" class="btn btn-lg btn-mt btn-primary up">Show all</a>
					</div>
				</div>

			</section>

			<section>
				<div class="row condensed">
					<div class="col-md-5 dark-bg" style="background-image: url(design/images/bg-tr-img.png)">
						<div class="pt4 pb4 pl2 pr2">
							<div class="h1 white">About</div>
							<hr class="divider primary-bg" />
							<p class="mt2 white">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
							</p>
						</div>
					</div>
					<div class="col-md-7">
						<div class="pt4 pb4 pl2 pr2">
							<div class="h1">Testimonials</div>
							<hr class="divider primary-bg mb2" />

							<div class="carousel owl-carousel nav-dark bottom-nav" 
								data-pag="true" data-nav="false" data-margin="32" data-xl="2" data-md="2" data-sm="1">
								<?php for ($i = 1; $i <= 6; $i++): ?>
								<div class="owl-item">
									<div class="h4 primary">Name</div>
									<div class="grey">28 years</div>

									<p class="mt2">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
									</p>
								</div>
								<?php endfor ?>
							</div>
						</div>
					</div>
				</div>
			</section>

		</main>
	
		<footer>
			<?php include 'components/footer.php'; ?>
		</footer>
		<?php include 'components/scripts.php'; ?>


		<div class="hidden" id="popup-contact">
			<form action="#">
				<h3 class="mb1">Form title</h3>
				<div class="form-group">
					<label>Name <sup class="red">*</sup></label>
					<input class="default full" type="text" reguired>
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<label>Phone <sup class="red">*</sup></label>
							<input class="default full" type="text" reguired>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label>E-mail</label>
							<input class="default full" type="email">
						</div>
					</div>
				</div>
				<div class="form-group">
					<label>E-mail</label>
					<textarea rows="5" class="default full"></textarea>
				</div>
				
				<div>
					<button type="submit" class="btn btn-mt btn-primary">Submit</button>
				</div>
			</form>
		</div>
		<!-- Google Icons -->
		<!-- https://design.google.com/icons/ -->
	</body>
</html>