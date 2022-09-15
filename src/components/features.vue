<template>
  <div class="cont">
    <div class="container d-flex">
      <div class="col-8 m-5">
        <h1 class="keep text-light">Keep a Journal</h1>
        <h1 class="inyour">in your favorite messaging app.</h1>
        <hr>
        <p class="inyour">Try JournalFlow Free with</p>
        <div>
          <span class="text-bg-info"><i class="fa-brands fa-telegram"></i> Telegram</span>
          <span class="text-bg-primary"><i class="fa-brands fa-facebook-messenger"></i> Facebook</span>
          <span class="text-bg-danger"><i class="fa-regular fa-envelope"></i> Email</span>
        </div>
        <p class="inyour" style="margin-top:20px ;">Whatsapp, and Line and more app support is coming soon. <a href="#"
            style="color: blue;">Get notified.</a></p>
      </div>
      <div class="col-4">
        <div class="animation">
          <div class="any">Any amazing moment happen?</div>
          <div class="which">Which friend do you miss most?</div>
          <div class="what">What're you grateful for today?</div>
          <div class="type">typing...</div>
        </div>
      </div>
    </div>
  </div>


  <div id="features" class="features container">
    <div class="feature effortless">
      <div class="feature-symbol">✍️</div>
      <h3 class="feature-title">Write from Anywhere</h3>
      <h3 class="feature-subtitle">Just like chatting with a friend</h3>
      <div class="page-container">
        <div class="detail">
          <div class="block">
            <h4>From Messaging Apps</h4>
            <p>No new app needed. JournalFlow currently supports Telegram, Facebook Messenger, Email. Learn <a
                href="/how-journalflow-works/">how JournalFlow works</a>.</p>
          </div>
          <div class="block">
            <h4>On Any Platform</h4>
            <p>Wanna journal on your iPhone / Android / Mac / PC? No problem. If your messaging app has an app on that
              platform, you can write a journal on that.</p>
          </div>
          <div class="block">
            <h4>Unleash the Power</h4>
            <p>Don't limit by text. You can add photos, locations, moods in your journal. Audio and video support are
              coming soon.</p>
          </div>
        </div>
        <div class="mockup">
          <img src="https://www.journalflow.com/web/screenshot-messenger.png" alt="Facebook Messenger"
            class="screenshot">
          <img src="https://www.journalflow.com/web/screenshot-telegram.png" alt="Telegram" class="screenshot"
            style="display:none">
          <img src="https://www.journalflow.com/web/screenshot-email.png" alt="Email" class="screenshot"
            style="display:none">
        </div>
      </div>
    </div>
    <div class="feature mood-tracking">
      <div class="feature-symbol">😆</div>
      <h3 class="feature-title">Track Your Mood</h3>
      <h3 class="feature-subtitle">Express with an emoji</h3>
      <div class="page-container">
        <div class="detail">
          <div class="block">
            <h4>Remember the mood of the day</h4>
            <p>It’s simple. Just send an emoji in chat or choose one on the web app. It also can be used to track
              weather, food, exercise, etc. </p>
          </div>
          <div class="block">
            <h4>Mood calendar</h4>
            <p>All your moods will be organized into a calendar. It's easy to glance the trends of your life.</p>
          </div>
        </div>
        <div class="mockup">
          <img alt="" src="https://www.journalflow.com/web/screenshot-mood.png" class="screenshot">
        </div>
      </div>
    </div>
    <div class="feature time-machine">
      <div class="feature-symbol">⏳</div>
      <h3 class="feature-title">Time Machine</h3>
      <h3 class="feature-subtitle">Bring back your best memories</h3>
      <div class="page-container">
        <div class="detail">
          <div class="block">
            <h4>Look back</h4>
            <p>You can use our web app to view all your journals. It’s a fun way to remind yourself what happened in the
              past, and how far you’ve come.</p>
          </div>
          <div class="block">
            <h4>Smart reminder</h4>
            <p>JournalFlow will remind you these memories in a smart way, like an anniversary.</p>
          </div>
        </div>
        <div class="mockup">
          <img alt="" src="https://www.journalflow.com/web/screenshot-moments.png" class="screenshot">
        </div>
      </div>
    </div>
    <div class="feature anywhere">
      <div class="feature-symbol">📱</div>
      <h3 class="feature-title">Manage in One Place</h3>
      <h3 class="feature-subtitle">on journalflow.com</h3>
      <div class="page-container">
        <div class="detail">
          <div class="block">
            <h4>Manage journals</h4>
            <p>You can list / view / edit / delete journals on journalflow.com.</p>
          </div>
          <div class="block">
            <h4>Write different day entry</h4>
            <p>If someday's journal is forgotten, don't worry. You can fix it on journalflow.com</p>
          </div>
          <div class="block">
            <h4>Analytics</h4>
            <p>The statistic about your journal will help you know yourself better, even build new habits.</p>
          </div>
        </div>
        <div class="mockup managein">
          <img alt="" src="https://www.journalflow.com/web/screenshot-account.png" class="screenshot">
        </div>
      </div>
    </div>
  </div>
  <div id="subscribe" class="subscribe">
    <div class="app-logos">
      <i class="fa-brands fa-whatsapp fa-3x whatsapp m-3 text-success"></i>
      <i class="fa-brands fa-line line fa-3x m-3 text-success"></i>
      <i class="fa-solid fa-message android-messages fa-3x m-3 text-primary"></i>
      <i class="fa-solid fa-comment ios-messages fa-3x m-3 text-success"></i>
    </div>
    <h4>More messaging app support is coming soon.</h4>
    <a href="https://landing.mailerlite.com/webforms/landing/i4d4q0" target="_blank" rel="noopener"
      class="subscribe-button">Subscribe</a>
  </div>
</template>
<style>
  @media (max-width: 767px) {
  }
  @media (min-width: 768px) and (max-width: 991) {
  }
  @media (max-width: 992px) {
  }
  @media (max-width: 1200px) {
  }
.cont {
  background-color: #0b182b;
  height: 100vh;
}

.keep {
  margin-top: 120px;
}

.inyour {
  color: rgb(212, 216, 218);
}

span {
  color: white;
  /* border: 2px solid; */
  margin: 20px;
  padding: 10px;
  border-radius: 20px;
}

hr {
  color: aqua;
}

.animation {
  margin-top: 220px;
}

.any {
  margin: 0 50px 20px;
  color: white;
  background-color: #a38eee;
  width: 60%;
  padding: 10px;
  border-radius: 15px 15px 0px 15px;
  animation: slide-in-fwd-center .4s cubic-bezier(.25, .46, .45, .94) both;
  animation-delay: 1s;
}




.which {
  margin: 20px 0;
  color: white;
  background-color: #11adb0;
  width: 60%;
  padding: 10px;
  border-radius: 15px 15px 15px 0;
  animation: slide-in-fwd-center .4s cubic-bezier(.25, .46, .45, .94) both;
  animation-delay: 2s;
}

.what {
  margin: 0 50px 20px;
  color: white;
  background-color: #1d2055;
  width: 60%;
  padding: 10px;
  border-radius: 15px 15px 0 15px;
  animation: slide-in-fwd-center .4s cubic-bezier(.25, .46, .45, .94) both;
  animation-delay: 3s;
}

.type {
  margin: 20px 70px;
  color: white;
  background-color: #152f7d;
  width: 25%;
  padding: 10px;
  border-radius: 15px 15px 15px 0;
  animation: slide-in-fwd-center .4s cubic-bezier(.25, .46, .45, .94) both;
  animation-delay: 4s;
}

.features,
.features .feature {
  width: 100%;
  overflow: hidden
}

.features .feature {
  min-height: 800px;
  background-color: #f3f5f7
}

.features .feature .feature-symbol {
  font-size: 64px;
  text-align: center;
  margin: 60px 0 20px
}

.features .feature .feature-title {
  font-size: 40px;
  color: #303336;
  text-align: center;
  margin: 0;
  line-height: 50px
}

.features .feature .feature-subtitle {
  font-size: 22px;
  color: #9ea0a6;
  text-align: center;
  line-height: 30px;
  margin: 20px 0
}

.features .feature .page-container {
  margin: 40px auto;
  padding: 10px
}

.features .feature .detail {
  float: left;
  width: calc(100% - 320px);
  line-height: 24px;
  box-sizing: border-box;
  padding: 0 120px
}

.features .feature .detail .block {
  margin: 40px 0;
  overflow: hidden
}

.features .feature .detail h4 {
  font-size: 20px;
  margin: 20px 0 10px
}

.features .feature .detail p {
  font-size: 16px;
  margin: 10px 0
}

.features .feature .mockup {
  margin-bottom: 50px;
  float: right;
  width: 300px;
  height: 600px;
  border: 6px solid #0b182b;
  border-radius: 32px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .4);
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: 50%
}

.features .feature .mockup.white {
  border: 6px solid #fff
}

.features .feature .mockup .screenshot {
  width: 100%;
  max-height: 100%;
  position: absolute;
  top: 0;
  left: 0
}

.features .feature.effortless,
.features .feature.time-machine {
  background-color: #fff
}

.subscribe {
  text-align: center;
  overflow: hidden
}

.subscribe .app-logos {
  width: 100%;
  height: 64px;
  margin: 60px 0;
  display: flex;
  justify-content: center;
  align-items: center
}

.subscribe .app-logos img {
  width: 56px;
  height: 56px;
  margin: 0 20px
}

.subscribe .app-logos img.line {
  width: 64px;
  height: 64px
}

.subscribe h4,
.subscribe h5 {
  font-family: Merriweather, serif;
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  line-height: 40px
}

.subscribe h5 {
  color: #9ea0a6;
  font-size: 20px
}

.subscribe .subscribe-button {
  display: inline-block;
  margin: 30px auto 50px;
  padding: 0 50px;
  line-height: 50px;
  border-radius: 30px;
  background-color: #f3f5f7;
  border: none;
  color: #255cff;
  font-size: 16px;
  outline: 0
}

.subscribe .subscribe-button:hover {
  background-color: #eee
}

.popup.popup-subscribe .popup-inner {
  width: 50%;
  box-sizing: border-box;
  padding: 20px 60px;
  overflow-y: auto
}

@media (max-width:600px) {
  .hero {
    height: auto
  }

  .hero .page-container {
    box-sizing: border-box;
    padding: 0 12px
  }

  .hero .page-container .tagline {
    font-size: 32px;
    margin: 40px 0 0;
    line-height: 48px
  }

  .hero .page-container .tagline strong {
    font-size: 22px;
    line-height: 48px
  }

  .hero .page-container .bubbles {
    display: none
  }

  .hero .page-container .get-started {
    margin-top: 80px;
    margin-bottom: 20px
  }

  .hero .page-container .get-started h3 {
    font-size: 16px
  }

  .hero .page-container .coming-soon {
    display: none
  }

  .features .feature {
    min-height: 0
  }

  .features .feature .feature-symbol {
    margin: 30px 0 10px;
    font-size: 48px
  }

  .features .feature .feature-title {
    font-size: 24px;
    line-height: 40px
  }

  .features .feature .feature-subtitle {
    font-size: 16px;
    margin: 0;
    font-weight: 400
  }

  .features .feature .page-container {
    margin: 0 auto 20px
  }

  .features .feature .detail {
    width: 100%;
    padding: 0 12px
  }

  .features .feature .detail .block {
    margin: 0 0 20px
  }

  .features .feature .mockup {
    float: none;
    margin: 0 auto
  }

  .subscribe {
    padding: 0 12px
  }

  .subscribe .app-logos {
    margin: 30px 0
  }

  .subscribe .app-logos img {
    width: 36px;
    height: 36px;
    margin: 0 10px
  }

  .subscribe .app-logos img.line {
    width: 42px;
    height: 42px
  }

  .subscribe h4 {
    font-size: 18px;
    line-height: 32px
  }

  .subscribe h5 {
    font-size: 16px;
    line-height: 32px
  }
}

@-webkit-keyframes slide-in-fwd-center {
  0% {
    -webkit-transform: translateZ(-1400px);
    transform: translateZ(-1400px);
    opacity: 0;
    margin-top: 20px
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
    margin-top: 0
  }
}

@keyframes slide-in-fwd-center {
  0% {
    -webkit-transform: translateZ(-1400px);
    transform: translateZ(-1400px);
    opacity: 0;
    margin-top: 20px
  }

  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
    margin-top: 0
  }
}

.web-header[data-v-725c0276] {
  height: 80px;
  line-height: 80px;
  box-sizing: border-box;
  padding: 0 12px
}

.web-header .logo[data-v-725c0276] {
  float: left;
  overflow: hidden
}

.web-header .logo img[data-v-725c0276] {
  width: 32px;
  height: 32px;
  float: left;
  margin: 24px 6px 24px 0
}

.web-header .logo h1[data-v-725c0276] {
  color: #fff;
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  float: left
}

.web-header input[data-v-725c0276] {
  display: none
}

.web-header a[data-v-725c0276] {
  color: #9ea0a6
}

.web-header a[data-v-725c0276]:hover {
  color: #fff
}

.web-header .web-navigation[data-v-725c0276] {
  float: right
}

.web-header .web-navigation .web-nav-item[data-v-725c0276] {
  float: left;
  margin: 0 0 0 30px
}

.web-header .web-navigation .web-nav-item .close[data-v-725c0276],
.web-header .web-navigation .web-nav-item.homepage[data-v-725c0276] {
  display: none
}

@media (max-width:600px) {
  .web-header[data-v-725c0276] {
    overflow: visible;
    overflow: initial
  }

  .web-header .web-navigation[data-v-725c0276] {
    display: none;
    float: none;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #0b182b;
    opacity: .95;
    z-index: 9;
    padding-top: 80px;
    box-sizing: border-box
  }

  .web-header .web-navigation .close[data-v-725c0276] {
    display: block;
    width: 50px;
    height: 50px;
    background-size: 36px;
    position: absolute;
    top: 15px;
    right: 0
  }

  .web-header .web-navigation .web-nav-item[data-v-725c0276] {
    width: 100%;
    margin: 0;
    text-align: center;
    font-size: 24px;
    line-height: 60px;
    font-family: Merriweather, sans-serif;
    font-weight: 400;
    color: #eee
  }

  .web-header .web-navigation .web-nav-item.homepage[data-v-725c0276] {
    display: block
  }

  .web-header .web-navigation .web-nav-item.anchor[data-v-725c0276] {
    display: none
  }

  .web-header #toggle+label[data-v-725c0276] {
    display: block;
    width: 50px;
    height: 50px;
    background-size: 36px;
    position: absolute;
    right: 0;
    top: 15px;
    cursor: pointer;
    z-index: 1
  }

  .web-header input#toggle:checked~.web-navigation[data-v-725c0276] {
    display: block
  }
}

.web-footer[data-v-44f1ccec] {
  background-color: #0b182b;
  width: 100%;
  height: 200px;
  color: #888f99;
  padding: 30px 0
}

.web-footer .links[data-v-44f1ccec] {
  float: left
}

.web-footer .links .page-link[data-v-44f1ccec] {
  color: #888f99;
  line-height: 30px;
  margin: 3px 30px 0 0;
  font-size: 15px
}

.web-footer .social[data-v-44f1ccec] {
  float: right;
  margin: 3px 0
}

.web-footer .social .social-link[data-v-44f1ccec] {
  width: 24px;
  height: 24px;
  margin: 0 0 0 30px;
  background-repeat: no-repeat;
  background-size: 24px;
  text-indent: -200px;
  float: left;
  overflow: hidden
}



.web-footer .made-by[data-v-44f1ccec] {
  display: block;
  color: #fff;
  text-align: center;
  width: 120px;
  margin: 80px auto 20px;
  font-size: 20px
}

.web-footer .made-by img[data-v-44f1ccec] {
  width: 60px;
  height: 60px
}

.web-footer .copyright[data-v-44f1ccec] {
  text-align: center;
  font-size: 12px
}

@media only screen and (max-width:600px) {
  .web-footer[data-v-44f1ccec] {
    width: 100%;
    height: auto;
    color: #888f99;
    padding: 30px 0
  }

  .web-footer .links[data-v-44f1ccec] {
    width: 100%;
    text-align: center;
    float: none;
    overflow: hidden
  }

  .web-footer .links .page-link[data-v-44f1ccec] {
    margin: 0;
    clear: both;
    display: block
  }

  .web-footer .social[data-v-44f1ccec] {
    display: none
  }

  .web-footer .made-by[data-v-44f1ccec] {
    margin-top: 20px
  }
}
</style>