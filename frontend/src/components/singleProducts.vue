<template>
<div class="">
    <li>
        <router-link to="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="bi bi-arrows-angle-expand"></i>
        </router-link>
    </li>
</div>


<div class="modal fade text-start" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Article 1</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-6">
                                <img class="img-fluid" src="https://picsum.photos/600?random=1" />
                            </div>
                            <div class="col-md-6">
                                <h4>Article 1</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Eveniet facere officiis, impedit esse fugit reprehenderit
                                    sit, nostrum possimus veritatis quisquam harum quas quo
                                    rerum beatae obcaecati qui, ex ipsam doloribus asperiores
                                    nemo dolorem. Sunt labore repudiandae praesentium eveniet
                                    adipisci corporis ipsa. Iure natus molestias laudantium
                                    optio recusandae, similique facere omnis!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                        Close
                    </button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>

</style>