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
					<div class="row">
						<div class="col-md-6">
							<table class="full">
								<caption>Ограничение скорости по ТС</caption>
								<thead>
									<tr>
										<th>ТС</th>
										<th>Скорость</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Велосипед</td>
										<td>-</td>
									</tr>
									<tr>
										<td>Легковой автомобиль</td>
										<td>-</td>
									</tr>
									<tr>
										<td>Микроавтобус</td>
										<td>-</td>
									</tr>
									<tr>
										<td>Буксировка</td>
										<td><span class="prohibition-sign">50</span></td>
									</tr>
									<tr>
										<td>Мопед</td>
										<td><span class="prohibition-sign">60</span></td>
									</tr>
									<tr>
										<td>Грузовики с людьми в кузове</td>
										<td><span class="prohibition-sign">60</span></td>
									</tr>
									<tr>
										<td>Аодители со стажем до 2 лет</td>
										<td><span class="prohibition-sign">70</span></td>
									</tr>
									<tr>
										<td>Мотоцыкл</td>
										<td><span class="prohibition-sign">80</span></td>
									</tr>
									
									<tr>
										<td>Легковой автомобиль с прицепом</td>
										<td><span class="prohibition-sign">80</span></td>
									</tr>

									<tr>
										<td>Автобус с детьми</td>
										<td><span class="prohibition-sign">80</span></td>
									</tr>
									<tr>
										<td>Автобус</td>
										<td><span class="prohibition-sign">90</span></td>
									</tr>
								</tbody>
							</table>
						</div>
						<div class="col-md-6">
							<table class="full">
								<caption>Ограничение скорости по дороге</caption>
								<thead>
									<tr>
										<th>Дорога</th>
										<th>Скорость</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>Жилая или пешеходная</td>
										<td><span class="prohibition-sign">20</span></td>
									</tr>
									<tr>
										<td>НП на белом фоне</td>
										<td><span class="prohibition-sign">60</span></td>
									</tr>
									<tr>
										<td>НП на синем фоне, вне НП</td>
										<td><span class="prohibition-sign">90</span></td>
									</tr>
									<tr>
										<td>Для автомобилей</td>
										<td><span class="prohibition-sign">90</span></td>
									</tr>
									<tr>
										<td>Для автомобилей с разделителем</td>
										<td><span class="prohibition-sign">110</span></td>
									</tr>
									<tr>
										<td>Автомагистраль</td>
										<td><span class="prohibition-sign">130</span><span class="prescriptive-sign">40</span></td>
									</tr>
								</tbody>
							</table>
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