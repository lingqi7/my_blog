<template>
  <div class="about">
    <main>
      <div class="main-inner">
        <div class="content">
          <div class="post-extend">
            <div class="post-body">
              <blockquote class="blockquote-center">
<!--                <div class="avatars">-->
<!--                  <img src="../assets/img/xiaomai.jpg" alt="">-->
<!--                </div>-->
                <h2 class="title">xxx</h2>
                <h4></h4>
                <p class="subtitle"></p>
                <p class="subtitle"></p>
                <div class="links">
                  <div class="links-title">联系方式</div>
                  <div class="link">
                    <a href="#" class="tel-icon" >
                      <img class="t-icon" src="../assets/img/GitHub.png">
                    </a>
                    <a href="#" class="tel-icon">
                      <img class="t-icon" src="../assets/img/icon_QQ.png" >
                    </a>
                    <a  href="#" class="tel-icon">
                      <img class="t-icon" src="../assets/img/icon_wechat.png">
                    </a>
                    <a  href="#" class="tel-icon">
                      <img class="t-icon" src="../assets/img/icon_email.png">
                    </a>
                  </div>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'about',
    mounted () {
      document.title = '关于'
    }
  }
</script>

<style lang="scss" scoped>
  .post-body{
    padding:40px 0;
    position: relative;
  }
  blockquote {
    position: relative;
    margin: 40px auto;
    text-align: center;
    &::before {
      position: absolute;
      content: ' ';
      display: block;
      width: 100%;
      height: 24px;
      opacity: 0.2;
      background: url(../assets/img/quote-l.svg) 0 -2px no-repeat;
      background-size: 22px 22px;
      top: -20px;
      border-top: 1px solid #ccc;
    }
    &::after {
      position: absolute;
      content: ' ';
      display: block;
      width: 100%;
      height: 24px;
      opacity: 0.2;
      background: url(../assets/img/quote-r.svg) 100% 4px no-repeat;
      background-size: 22px 22px;
      bottom: -20px;
      border-bottom: 1px solid #ccc;
    }
    .subtitle {
      margin: 5px;
      color: #666;
    }
    a {
      text-decoration: none;
      color: #555;
      .avatars {
        img {
          border: 3px solid #ccc;
        }
      }
    }
    .tel-icon {
      width: 32px;
      height: 32px;
      margin:0 10px;
      img{
        width: 32px;
        height: 32px;
      }
    }
    .links-title {
      margin-top: 30px;
      margin-bottom: 10px;
      font-weight: bold;
      font-size: 18px;
    }

  }
  .showqq{
    background: #FFF;
    z-index:3;
    position:absolute;
    left:36%;
    width:130px;
    height:24px;
    border:1px solid #ccc;
    box-shadow: 1px 2px 2px #ccc;
    padding-top:5px;
    margin-top:3px;
  }
</style>
