<template>
    <div>
        <div class="container">
            <div class="user-profile">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="profile-pic"></div>
                            </div>
                            <div class="col-md-8">
                                <form>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label for="exampleInputEmail1" class="form-label">Name</label>
                                                        <input type="email" v-model="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                        <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label for="exampleInputPassword1" class="form-label">Email</label>
                                                        <input type="email" v-model="email" class="form-control" id="exampleInputPassword1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label for="exampleInputEmail1" class="form-label">Contact</label>
                                                        <input type="email" v-model="contact" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                        <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label for="exampleInputPassword1" class="form-label">Address</label>
                                                        <input type="password" v-model="address" class="form-control" id="exampleInputPassword1">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="mb-3">
                                                        <label for="exampleInputEmail1" class="form-label">Age</label>
                                                        <input type="email" v-model="age" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                                        <!-- <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> -->
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" class="btn bg-color bordered-round mt-4">Update Profile</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>