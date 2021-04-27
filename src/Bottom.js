import React from 'react'

const Bottom = () => {
    return (
        <div class=''>
            <footer class='page-footer pt-4 bgfooter'>
                <div class='container-fluid text-center text-md-left'>
                    <div class='row'>
                        <div class='col-md-6 mt-md-0 mt-3'>
                            <div class="col-md-6 mb-4">
                                <form class="input-group">
                                    <input type="text" class="form-control form-control-sm" placeholder="Your email" />
                                    <div class="input-group-append">
                                        <button class="btn btn-sm btn-info" >Sign Up</button>
                                    </div>
                                </form>
                            </div>
                            <h5 class='text-uppercase'>Footer content</h5>
                            <p>Here you can use rows and columns to organize your footer content.</p>
                        </div>
                        <hr class='clearfix w-100 d-md-none pb-3' />
                        <div class='col-md-3 md-mb-0 mb-3'>
                            <h5 class="text-uppercase">Links</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-3 mb-md-0 mb-3">
                            <h5 class="text-uppercase">Links</h5>
                            <ul class="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 py-5">
                    <div class="mb-5 flex-center text-center">
                        <h3 class='text-center'>Follow us on</h3>
                        <a class="fb-ic " href='http://localhost:3000/'>
                            <i class="fa fa-facebook-f fa-sm text-info mr-md-5 mr-3 "> </i>
                        </a>
                        <a class="tw-ic" href='http://localhost:3000/'>
                            <i class="fa fa-twitter fa-sm text-info mr-md-5 mr-3 "> </i>
                        </a>
                        <a class="gplus-ic" href='http://localhost:3000/'>
                            <i class="fa fa-google-plus fa-sm text-info mr-md-5 mr-3 "> </i>
                        </a>
                        <a class="li-ic" href='http://localhost:3000/'>
                            <i class="fa fa-linkedin fa-sm text-info mr-md-5 mr-3 "> </i>
                        </a>
                        <a class="ins-ic" href='http://localhost:3000/'>
                            <i class="fa fa-instagram fa-sm  text-info mr-md-5 mr-3 "> </i>
                        </a>
                        <a class="pin-ic" href='http://localhost:3000/'>
                            <i class="fa fa-pinterest fa-sm text-info"> </i>
                        </a>
                    </div>
                </div>
            </footer>
            <div class="copyright text-center text-white py-3">© 2021 Copyright:
    <a href="https://mdbootstrap.com/" class='text-white'> Abc.com</a>
            </div>

        </div>

    )
}

export default Bottom
