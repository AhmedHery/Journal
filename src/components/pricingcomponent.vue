<template>
  <div class="body">
    <div class="container">
      <div class="div1">
        <h2 class="text-center h2">🤑</h2>
        <h2 class="text-center h21">Pricing & Plans</h2>
        <p class="text-center fontp">No credit card required.</p>
      </div>
    </div>
    <div class="price-container">
      <div class="plan plan-basic default">
        <h4 class="plan-name">Basic</h4>
        <h3 class="price">$2.49 <span>/mo</span></h3>
        <p class="description interval">USD when billed annually (2.99 USD when billed monthly).</p>
        <p class="description interval"></p>
        <p class="description">Great for starting a journal.</p>
        <a href="https://app.journalflow.com/signup?plan=basic" class="choose highlight">Try FREE for 30 days</a>
      </div>
      <div class="plan plan-premium">
        <h4 class="plan-name">Premium</h4>
        <h3 class="price">$?.??<span>/mo</span></h3>
        <p class="description">More features and less limitations</p>
        <p class="description">Best for professional journal writer.</p>
        <button disabled class="choose">Coming Soon</button>
      </div>
    </div>
  </div>

  <h2>Plan details</h2>
  <table>
    <thead>
      <tr>
        <td class="none"></td>
        <td>Basic</td>
        <td>Premium</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          Chanel supported
          <sub>1</sub>
        </td>
        <td>
          <div class="logo">
            <img src="https://cdn.vectorstock.com/i/1000x1000/04/32/telegram-logo-icon-vector-27990432.webp" alt="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Facebook_Messenger_logo_2013.svg/1200px-Facebook_Messenger_logo_2013.svg.png"
              alt="">
            <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png?w=360" alt="">
          </div>
        </td>
        <td>
          <div class="logo">
            <img src="https://cdn.vectorstock.com/i/1000x1000/04/32/telegram-logo-icon-vector-27990432.webp" alt="">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Facebook_Messenger_logo_2013.svg/1200px-Facebook_Messenger_logo_2013.svg.png"
              alt="">
            <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png?w=360" alt="">
          </div>
        </td>
      </tr>
      <tr>
        <td>
          Storage
          <sub>2</sub>
        </td>
        <td>1 GB</td>
        <td>?</td>
      </tr>
      <tr>
        <td>Text moments</td>
        <td>unlimited</td>
        <td>unlimited</td>
      </tr>
      <tr>
        <td>Mood moments</td>
        <td>unlimited</td>
        <td>unlimited</td>
      </tr>
      <tr>
        <td>
          place moments
          <sub>3</sub>
        </td>
        <td>unlimited</td>
        <td>unlimited</td>
      </tr>
      <tr>
        <td>image moments</td>
        <td>unlimited</td>
        <td>unlimited</td>
      </tr>
      <tr>
        <td>Audio moments</td>
        <td>--</td>
        <td>unlimited</td>
      </tr>
      <tr>
        <td>Video moments</td>
        <td>--</td>
        <td>unlimited</td>
      </tr>
      <tr>
        <td>Wep app access</td>
        <td>Yes</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Custom reminder sending time</td>
        <td>--</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Multiple reminders</td>
        <td>--</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>Advanced analysis</td>
        <td>--</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>
          <input id="x0" type="radio" name="jobs" value="Billed yearly" checked>
          <label for="x0">Billed yearly</label> <br>
          <input id="x0" type="radio" name="jobs" value="Billed monthly">
          <label for="x0">Billed monthly</label>
        </td>
        <td>
          $2.94 / month <br>
          <input type="submit" value="Try for free">
        </td>
        <td>Comming soon</td>
      </tr>
    </tbody>
  </table>
  <p class="undertable">1. A channel is a connection between JournalFlow and messaging apps. More channels will be
    supported in the future, you can subscribe our newsletter for updates. <br>

    2. Extra storage price: $ 1.00 / month or $ 10 / year per GB. <br>

    3. The email channel doesn't support place moments right now. <br></p>


  <div class="">

    <div class="col-12">
      <component :is="target" />
    </div>

  </div>
</template>
<style>
.body {
  background-color: #0b182b;
}

.div1 {
  padding-top: 30vh;
}

.h2 {
  font-size: 64px;
}

.h21 {
  font-size: 40px;
  color: white;
  margin: 20px 0;
}

.fontp {
  font-size: 18px;
  color: #5e7089;
}

.price-container {
  margin-top: 40px;
  display: flex;
  padding-bottom: 10vh;
  /* justify-content: space-evenly; */
}

.plan {
  margin: 0 20px;
  border-radius: 15px;
  padding: 20px;
}

.plan-basic {
  width: 30%;
  margin-left: 300px;
  background-color: white;
}

.plan-premium {
  width: 30%;
  background-color: white;
}

.price {
  font-size: 50px;
  color: #0faeb1;
  margin: 20px 0 30px;
}

.choose {
  width: 100%;
  background-color: #5e7089;
  display: block;
  padding: 10px 0;
  color: white;
}

.highlight {
  text-align: center;
  text-decoration: none;
  /* color: white; */
  background-color: blue;
}

.highlight:hover {
  color: white;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}

h2 {
  font-size: 40px;
  font-weight: bold;
  margin: 50px 0 20px;
  text-align: center;
  color: rgb(66 65 65 / 92%);
}

table {
  overflow: auto;
  width: 70%;
  margin: 0 auto;
  border-collapse: collapse;
}

table td {
  border: 1px gray solid;
  opacity: 95%;
  padding: 15px;
}

table thead td {
  text-align: center;
  font-weight: bold;
}

.none {
  border: none;
}

.logo img {
  width: 30px;
  height: 30px;
}

sub {
  vertical-align: super;
  font-size: smaller;
}

input {
  background-color: rgb(58, 58, 255);
  color: #fff;
  border: none;
  padding: 10px;
  text-align: center;
  border-radius: 2px;
}

.undertable {
  margin: 30px auto;
  width: 70%;
  font-size: small;
}
</style>

<script>

import blog from './blogcomponent.vue'
import support from './supportcomponent.vue'
import login from './logincomponent.vue'
import features from './features.vue'
export default {

  data() {
    return {
      target: ""
    }
  },
  components: {
    blog,
    support,
    login,
    features,
  }

}
</script>