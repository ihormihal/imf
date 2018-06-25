<!DOCTYPE html>
<html lang="en">
    <head>
    <?php include 'components/head.php'; ?>
    </head>
    <body class="has-menu-drawer menu-drawer-static menu-drawer-opened">

        <header>
           <div class="navbar navbar-lg-lg lighten-bg">
                <div class="container fit">
                    <div id="menu-drawer-toggle" class="btn-nav-mobile"><i class="mti">menu</i></div>
                </div>
            </div>
        </header>

        <div id="menu-drawer" class="menu-drawer dark-bg">
            <nav class="nav-side">
                <ul class="nav nav-col"><li class="first"><a class="ripple" href="imf/grid"><i class="mdi mdi-align-left"></i> Grid</a></li><li><a class="ripple" href="imf/helpers"><i class="mdi mdi-book"></i> Helpers</a></li><li><a class="ripple" href="imf/colors"><i class="mdi mdi-paint-brush"></i> Colors</a></li><li><a class="ripple" href="imf/typography"><i class="mdi mdi-text-height"></i> Typography</a></li><li><a class="ripple" href="imf/buttons"><i class="mdi mdi-hand-pointer-o"></i> Buttons</a></li><li><a class="ripple" href="imf/form"><i class="mdi mdi-sliders"></i> Form elements</a></li><li class="last active"><a class="ripple" href="imf/table"><i class="mdi mdi-table"></i> Table</a></li></ul>
            </nav>
        </div>

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
                                        <i class="mdi mdi-home"></i>
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
                                        <i class="mdi mdi-home"></i>
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
                                        <i class="mdi mdi-home"></i>
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
                                            <span class="btn-circle btn-sm btn-primary mr"><i class="mdi mdi-home"></i></span>
                                            <span class="h4">
                                                Lorem ipsum dolor 
                                                <sup class="orange ml">
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
                                                    <i class="mdi mdi-star"></i>
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

        </main>
    
        <footer>
            <?php include 'components/footer.php'; ?>
        </footer>
        <?php include 'components/scripts.php'; ?>


    </body>
</html>