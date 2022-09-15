<template>
    <div class="main">
        <div class="onediv">
            <h1 class="h1">Welcome Back</h1>
            <p>It’s nice to see you again!</p>
        </div>
        <div class="twodiv">
            <h5 class="one"><i class="fa-brands fa-telegram"></i> Log in Telegram</h5>
            <h5 class="two"><i class="fa-brands fa-facebook-messenger"></i> Log in Facebook</h5>
            <h5 class="three"><i class="fa-regular fa-envelope"></i> Log in Email</h5>
            <p>By logging in, you agree to our <a class="a" href="#">Terms of Service</a> and <a class="a"
                    href="#">Privacy Policy.</a></p>
        </div>
    </div>
</template>
<style>
.main {
    background-color: #0b182b;
    text-align: center;
    height: 90vh;
}

.onediv {
    padding-top: 20px;
}

hr {
    width: 50%;
    align-items: center;
}

.h1 {
    color: white;
}

p {
    color: rgb(167, 166, 166);
}

h5 {
    width: 20%;
    margin: 30px auto;
    color: white;
    /* border: 2px solid; */
    border-radius: 15px;
    padding: 10px;
}

h5:hover {
    border: 2px solid;
}

.one {
    background-color: rgb(125, 125, 223);
}

.two {
    background-color: blue;
}

.three {
    background-color: red;
}

.a {
    color: blue;
}
</style>
<script>

export default {
}

</script> 