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

			<section class="section pt1 pb1">
				<div class="container">
					<h2 class="text-center h2">Loader (plain CSS)</h2>

					<div class="pt2 pb2">
						<div class="loader load"></div>
					</div>
				</div>
				<div class="container">
					<h2 class="text-center h2 mb2">Form elements (plain CSS)</h2>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label>Simple input <sup>*</sup></label>
								<input class="full" type="text" placeholder="Placeholder">
							</div>

							<div class="form-group">
								<label>Animated underline <sup>*</sup></label>
								<input class="full mtr" type="text" placeholder="Placeholder">
							</div>

							<div class="form-group has-error">
								<label>Simple input (error)<sup>*</sup></label>
								<input class="full" type="text" placeholder="Placeholder">
								<div class="help-block error-msg">Field is required</div>
							</div>

							<div class="form-group">
								<label>Simple input with icon</label>
								<div class="input-icon">
									<input class="full" type="text" placeholder="Placeholder">
									<i class="icon fa fa-calendar"></i>
								</div>
							</div>

							<div class="form-group">
								<label>Disabled input</label>
								<input class="full" type="text" placeholder="Disabled" disabled>
							</div>

							<div class="form-group">
								<label>Simple select</label>
								<select class="full">
									<option value="">First</option>
									<option value="">Second</option>
									<option value="">Third</option>
								</select>
							</div>

							<div class="form-group">
								<label>Textarea</label>
								<textarea class="full" rows="5" placeholder="Placeholder"></textarea>
							</div>

							<div class="form-group form-group-inline">
								<select class="">
									<option value="">First</option>
									<option value="">Second</option>
									<option value="">Third</option>
								</select>
								<a href="javascript:void(0)" class="btn btn-mt btn-success ripple"><i class="fa fa-plus"></i>Add new</a>
							</div>

						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>Simple input</label>
								<input class="default full" type="text" placeholder="Placeholder">
							</div>

							<div class="form-group">
								<label>Simple transparent input</label>
								<input class="transparent full" type="text" placeholder="Placeholder">
							</div>

							<div class="form-group">
								<label>Simple input with icon</label>
								<div class="input-icon default">
									<input class="default full" type="text" placeholder="Placeholder">
									<i class="icon fa fa-calendar"></i>
								</div>
							</div>

							<div class="form-group">
								<label>Disabled input</label>
								<input class="default full" type="text" placeholder="Disabled" disabled>
							</div>
							<div class="form-group">
								<label>Simple select</label>
								<select class="default full">
									<option value="">First</option>
									<option value="">Second</option>
									<option value="">Third</option>
								</select>
							</div>
							<div class="form-group">
								<label>Textarea</label>
								<textarea class="default full" rows="5" placeholder="Placeholder"></textarea>
							</div>

						</div>
					</div>

					<div class="mt2"></div>
					<div class="row">
						<div class="col-md-3">
							<div class="checkbox">
								<label>
									<input type="checkbox" value="1" checked>
									<span class="check"></span>
									Checked checkbox
								</label>
							</div>
							<div class="checkbox">
								<label>
									<input type="checkbox" value="1" checked disabled>
									<span class="check"></span>
									Disabled checked
								</label>
							</div>
							<div class="checkbox">
								<label>
									<input type="checkbox" value="1" disabled>
									<span class="check"></span>
									Disabled unchecked
								</label>
							</div>
						</div>
						<div class="col-md-3">
							<div class="switch">
								<label>
									<input type="checkbox" value="1" checked>
									<span class="toggle"></span>
									Checked switch
								</label>
							</div>
							<div class="switch">
								<label>
									<input type="checkbox" value="1" checked disabled>
									<span class="toggle"></span>
									Disabled checked
								</label>
							</div>
							<div class="switch">
								<label>
									<input type="checkbox" value="1" disabled>
									<span class="toggle"></span>
									Disabled unchecked
								</label>
							</div>
						</div>
						<div class="col-md-3">
							<div class="radio">
								<label>
									<input name="radio1" type="radio" checked>
									<span class="circle"></span>
									Checked radio
								</label>
							</div>
							<div class="radio">
								<label>
									<input name="radio1" type="radio">
									<span class="circle"></span>
									Unchecked radio
								</label>
							</div>
						</div>
						<div class="col-md-3">
							<div class="radio">
								<label>
									<input name="radio2" type="radio" checked disabled>
									<span class="circle"></span>
									Disabled checked radio
								</label>
							</div>
							<div class="radio">
								<label>
									<input name="radio2" type="radio" disabled>
									<span class="circle"></span>
									Disabled unchecked radio
								</label>
							</div>
						</div>
					</div>

				</div>
			</section>

			<section class="section pt1 pb1">

				<div class="container mt2">
					<h2 class="text-center up h2 mb1">Form elements (with JS)</h2>
				</div>


				<div class="container">
					<div class="mt2"></div>
					<div class="row">
						<?php
						  $countries = json_decode(file_get_contents('server/data/countries.json'),true);
						?>
						<div class="col-md-6">
							<div class="form-group floating-label">
								<label>Floating label</label>
								<input class="full mtr" type="text">
							</div>

							<div class="form-group">
								<label for="">Select autocomplete <a class="show-code" href="#select-autocomplete-code"><i class="fa fa-code"></i></a></label>
								<select class="multiselect full" data-search-placeholder="Search..." name="country" placeholder="Select country...">
									<?php foreach ($countries as $key => $country): ?>
									<option value="<?php echo $country['code']; ?>"><?php echo $country['name']; ?></option>
									<?php endforeach ?>
								</select>
							</div>

							<div class="form-group">
								<label for="">Select autocomplete with icons <a class="show-code" href="#select-autocomplete-icon-code"><i class="fa fa-code"></i></a></label>
								<select class="multiselect full" data-search-placeholder="Search..." name="country" placeholder="Select country...">
									<option value="">Empty</option>
									<?php foreach ($countries as $key => $country): ?>
									<option data-icon="design/img/pin.png" value="<?php echo $country['code']; ?>"><?php echo $country['name']; ?></option>
									<?php endforeach ?>
								</select>
							</div>

						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label>File input</label>
								<span class="fileinput full">
									<input type="file" name="upload" />
									<input type="text" name="filename" placeholder="Выберите файл">
								</span>
							</div>

							<div class="form-group">
								<label for="">Select autocomplete (multiple) <a class="show-code" href="#select-multiple-code"><i class="fa fa-code"></i></a></label>
								<select class="multiselect full" data-search-placeholder="Search..." name="countries" placeholder="Select countries..." multiple>
									<?php foreach ($countries as $key => $country): ?>
									<option <?php if($country['name'] == 'Morocco') echo 'selected' ?> value="<?php echo $country['code']; ?>"><?php echo $country['name']; ?></option>
									<?php endforeach ?>
								</select>
							</div>

							<div class="form-group">
								<label for="">Select autocomplete (multiple) with icons <a class="show-code" href="#select-multiple-icon-code"><i class="fa fa-code"></i></a></label>
								<select class="multiselect full" data-search-placeholder="Search..." name="countries" placeholder="Select countries..." multiple>
									<?php foreach ($countries as $key => $country): ?>
									<option data-icon="design/img/pin.png" <?php if($country['name'] == 'Morocco') echo 'selected' ?> value="<?php echo $country['code']; ?>"><?php echo $country['name']; ?></option>
									<?php endforeach ?>
								</select>
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
		<!-- Google Icons -->
		<!-- https://design.google.com/icons/ -->
	</body>
</html>