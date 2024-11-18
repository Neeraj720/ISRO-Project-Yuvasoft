import React from 'react'

function Footer() {
    return (
        <>
            <footer class="bg-dark text-white text-center text-lg-start mt-5 fixed-bottom">
                <div class="container p-4">
                    <div class="row">
                        <div class="col-lg-4 col-md-12 mb-4">
                            <h5 class="text-uppercase">About Us</h5>
                            <p>
                                We are a company dedicated to providing the best services to our customers. Our mission is to deliver quality and excellence in everything we do.
                            </p>
                        </div>
                        <div class="col-lg-4 col-md-6 mb-4">
                            <h5 class="text-uppercase">Links</h5>
                            <ul class="list-unstyled">
                                <li><a href="#" class="text-white">Home</a></li>
                                <li><a href="#" class="text-white">About</a></li>
                                <li><a href="#" class="text-white">Services</a></li>
                                <li><a href="#" class="text-white">Contact</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-4 col-md-6 mb-4">
                            <h5 class="text-uppercase">Follow Us</h5>
                            <a href="#" class="text-white me-4">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" class="text-white me-4">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a href="#" class="text-white me-4">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href="#" class="text-white">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
                {/* <div class="text-center p-3" style={"background-color":"rgba(255, 255, 255, 0.1)"}}>
                    © 2023 Your Company Name
                </div> */}
            </footer>
        </>
    )
}

export default Footer