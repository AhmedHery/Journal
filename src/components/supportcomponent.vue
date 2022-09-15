<template>
    <div class="contact">
        <h1>contact</h1>
        <h3>FQAS</h3>
        <p>Check <a class="acontact" @click="index" href="blogcomponent.vue">Frequently asked questions</a>.</p>
        <h3>Email</h3>
        <a class="acontact" href="">support@journalflow.com</a>
    </div>
</template>
<style>
.acontact {
    color: blue;
}

.acontact:hover {
    color: blue;
    text-decoration: underline;
}

.contact {
    width: 100%;
    padding: 100px 400px 100px;
}

h1 {
    font-size: 3rem;
    margin-bottom: 53px;
}

h3 {
    font-size: 2rem;
    margin-bottom: 10px;
}
</style>
<script>
export default {
    methods: {

        index() {
            document.write(``)
        }
    }
}

</script>