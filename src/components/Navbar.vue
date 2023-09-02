<script>
export default {
  name: 'Navbar',
  data() {
    return {
      activeLink : 'home'
    }
  }
}
</script>

<template>
  <div class="navBar">
    <div class="container">
      <div class="content">
        <a href="/" class="logo">
          <img src="../assets/images/logo.png" alt="logo" loading="lazy">
        </a>
        <ul class="desktop-view">
          <li @click = "activeLink = 'home'" :class="activeLink === 'home' ? 'active' : ''"><a href="/">Shop</a></li>
          <li @click = "activeLink = 'men'" :class="activeLink === 'men' ? 'active' : ''"><a href="#">Men</a></li>
          <li @click = "activeLink = 'women'" :class="activeLink === 'women' ? 'active' : ''"><a href="#">Women</a></li>
          <li @click = "activeLink = 'combos'" :class="activeLink === 'combos' ? 'active' : ''"><a href="#">Combos</a></li>
          <li @click = "activeLink = 'joggers'" :class="activeLink === 'joggers' ? 'active' : ''"><a href="#">Joggers</a></li>
        </ul>
        <div class="tabs desktop-view">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
        <div class="menu-phone">
          <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </button>
          <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
            <div class="offcanvas-header">
              <div class="logo">
                <img src="../assets/images/logo.png" alt="logo" loading="lazy">
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul>
                <li @click = "activeLink = 'home'" :class="activeLink === 'home' ? 'active' : ''"><a href="/">Shop</a ></li>
                <li @click = "activeLink = 'men'" :class="activeLink === 'men' ? 'active' : ''"><a href="#">Men</a></li>
                <li @click = "activeLink = 'women'" :class="activeLink === 'women' ? 'active' : ''"><a href="#">Women</a></li>
                <li @click = "activeLink = 'combos'" :class="activeLink === 'combos' ? 'active' : ''"><a href="#">Combos</a></li>
                <li @click = "activeLink = 'joggers'" :class="activeLink === 'joggers' ? 'active' : ''"><a href="#">Joggers</a></li>
              </ul>
              <div class="tabs">
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                  </svg>
                </button>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                  </svg>
                </button>
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .navBar{
    padding: 31px 0;
    border-bottom: 1px solid #BEBCBD;
    .offcanvas{
      max-width: 320px !important;
    }
    .content{
      display: flex;
      flex-direction: row;
      gap: 80px;
      align-items: center;
      justify-content: space-between;
      .logo{
        max-width: 150px;
      }
      ul{
        display: flex;
        flex-direction: row;
        gap: 25px;
        align-items: center;
        li{
          font-size: 22px;
          color: #807D7E;
          font-weight: 500;
          &.active{
            color: #3C4242;
            font-weight: 700;
            border-bottom: 2px solid #807D7E;
          }
          &:hover{
            color: #3C4242;
            border-bottom: 2px solid #807D7E;
          }
        }
        @media (max-width : 991px){
          flex-direction: column;
          gap: 20px;
          align-items: flex-start;
        }
      }
      .tabs{
        display: flex;
        flex-direction: row;
        gap: 20px;
        align-items: center;
        button{
          background: #F6F6F6;
          border: 1px solid #807D7E;
          padding: 5px 10px;
          border-radius: 8px;
          &:hover{
            background: #3C4242;
            svg{
              fill: #fff;
            }
          }
        }
        @media (max-width : 991px){
          margin: 20px 0 0;
          flex-wrap: wrap;
        }
      }
    }
    .menu-phone{
      display: none;
      @media (max-width : 991px){
        display: initial;
        &>.btn-primary{
          background: #3C4242;
          border: none;
          box-shadow: none;
          outline: none;
        }
      }
    }
    @media (max-width : 991px){
      .desktop-view{
        display: none !important;
      }
    }
  }
</style>