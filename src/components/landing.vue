<template>
  <div class="row g-0">
    <nav class="navbar  navbar-expand-lg nnn">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">JournalFolw</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
          aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <router-link to='/'>Features</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to='/home'>Blog</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to='/dynamic'>Pricing</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to='/about'>Support</router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to='/contact'>Login</router-link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>


  <div class="row g-0">

    <div class="col-12">
      <router-view></router-view>
    </div>

  </div>
  <div>
    <footer></footer>
  </div>
  <section class="footer">
    <h4 style="color: white;">JournalFlow</h4>
    <div class="icons">
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-linkedin-in"></i>
    </div>
    <p style="color: white;">Made with by Eng<b class="Mo">.Ahmed Hery</b></p>
  </section>
</template>
<style>
.nnn {
  background-color: #0b182b;
}

.navbar-brand,
a {
  color: white;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
  color: white;
}

.footer {
  background-color: #0b182b;
  width: 100%;
  text-align: center;
  padding: 30px 0;
}

.footer h4 {
  margin-bottom: 25px;
  margin-top: 20px;
  font-weight: 600;
}

.icons .fa-brands {
  color: white;
  margin: 0 13px;
  cursor: pointer;
  padding: 18px 0;
}

.fa-heart {
  color: white;
}

.Mo {
  color: white;
}
</style>

<script>


export default {

  data() {
    return {
    }
  },

}

</script>