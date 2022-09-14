<template>
    <div class="col-md-8">
        <form>
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Contact</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">NID</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Work At</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Specialist On</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Degree</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="row">
                                <div class="col-md-12">3
                                    <div class="row">
                                        <div class="col-md-3">1</div>
                                        <div class="col-md-3">2</div>
                                        <div class="col-md-4">3</div>
                                        <div class="col-md-2">4</div>
                                    </div>
                                </div>
                                <!-- <div class="col-md-12">3</div>
                                <div class="col-md-12">3</div>
                                <div class="col-md-12">3</div>
                                <div class="col-md-12">3</div>
                                <div class="col-md-12">3</div>
                                <div class="col-md-12">3</div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" class="btn bg-color bordered-round mt-4" @click.prevent="updateProfile()">Update Profile</button>
        </form>
    </div>
</template>

<script>

    export default {
        // name:'doctorProfile',
        data(){

        }
    }
</script>

<style>

</style>