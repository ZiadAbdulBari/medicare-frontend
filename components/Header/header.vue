<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container">
                <nuxt-link class="navbar-brand" to="/">Medicare.</nuxt-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul class="navbar-nav text-center">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Service</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Doctor</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div class="d-flex d-none">
                        <div class="dropdown">
                            <a class="btn btn bg-color bordered-round dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Registration
                            </a>

                            <ul class="dropdown-menu">
                                <li><nuxt-link to="/registration/doctor" class="dropdown-item" href="#">Registration As A Doctor</nuxt-link></li>
                                <li><nuxt-link to="/registration/patient" class="dropdown-item" href="#">Registration As A Patient</nuxt-link></li>
                            </ul>
                        </div>
                        <nuxt-link to="/login" class="btn bordered bordered-round ms-3">Login</nuxt-link>
                    </div>
                    <ul class="navbar-nav">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle after-login" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <div class="header-pic me-2">
                                    <h5 class="mb-0">U</h5>
                                </div>
                                <h6 class="me-1 mb-0">Your Name</h6>
                            </a>
                            <ul class="dropdown-menu">
                                <li><nuxt-link class="dropdown-item" to="/profile">Profile</nuxt-link></li>
                                <li><nuxt-link class="dropdown-item" to="/history">History</nuxt-link></li>
                                <li><a class="dropdown-item" href="#">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                   
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>

</style>