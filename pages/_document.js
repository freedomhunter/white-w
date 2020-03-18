import Document, { Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html lang="en">
                <Head>
                    <link rel="stylesheet" type="text/css" href="styles/bootstrap-4.1.3/bootstrap.css" />
                    <link href="plugins/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
                    <link rel="stylesheet" type="text/css" href="/plugins/OwlCarousel2-2.2.1/owl.carousel.css" />
                    <link rel="stylesheet" type="text/css" href="/plugins/OwlCarousel2-2.2.1/owl.theme.default.css" />
                    <link rel="stylesheet" type="text/css" href="/plugins/OwlCarousel2-2.2.1/animate.css" />
                    <link rel="stylesheet" type="text/css" href="/styles/main_styles.css" />
                    <link rel="stylesheet" type="text/css" href="/styles/responsive.css"></link>
                    <title>White-W</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="js/jquery-3.2.1.min.js"></script>
                    <script src="styles/bootstrap-4.1.3/popper.js"></script>
                    <script src="styles/bootstrap-4.1.3/bootstrap.min.js"></script>
                    <script src="plugins/greensock/TweenMax.min.js"></script>
                    <script src="plugins/greensock/TimelineMax.min.js"></script>
                    <script src="plugins/scrollmagic/ScrollMagic.min.js"></script>
                    <script src="plugins/greensock/animation.gsap.min.js"></script>
                    <script src="plugins/greensock/ScrollToPlugin.min.js"></script>
                    <script src="plugins/OwlCarousel2-2.2.1/owl.carousel.js"></script>
                    <script src="plugins/easing/easing.js"></script>
                    <script src="plugins/parallax-js-master/parallax.min.js"></script>
                    <script src="plugins/Isotope/isotope.pkgd.min.js"></script>
                    <script src="plugins/Isotope/fitcolumns.js"></script>
                    <script src="js/custom.js"></script>
                </body>
            </html>
        )
    }
}

export default MyDocument