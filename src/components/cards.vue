<template>
<md-app-content>
         <md-card class="md-card-example">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/b1596660310817.5a4691f7e0479.jpg" alt="Coffee House">
        </md-card-media>

        <md-card-header>
          <h2 class="md-title">MUSIC CLUB</h2>

        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </md-card-content>
      </md-card-area>

      <md-card-content>
        <h3 class="md-subheading">Upcoming Events</h3>
        <div class="card-reservation">
          <md-icon>
          </md-icon>
        </div>
      </md-card-content>
      <md-card-actions>
        <md-button class="md-primary">Visit Full Website</md-button>
      </md-card-actions>
         </md-card>

     <md-card class="md-card-example">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
          <img src="https://avatars3.githubusercontent.com/u/2324352?s=200&v=4" alt="Coffee House">
        </md-card-media>

        <md-card-header>
          <h2 class="md-title">OSDG CLUB</h2>

        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </md-card-content>
      </md-card-area>

      <md-card-content>
        <h3 class="md-subheading">Upcoming Events</h3>
        <div class="card-reservation">
          <md-icon>
          </md-icon>
        </div>
      </md-card-content>
      <md-card-actions>
        <md-button class="md-primary">Visit Full Website</md-button>
      </md-card-actions>
         </md-card>



          <md-card class="md-card-example">
      <md-card-area md-inset>
        <md-card-media md-ratio="16:9">
          <img src="data:image/png;base64,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" alt="Coffee House">
        </md-card-media>

        <md-card-header>
          <h2 class="md-title">E-CELL</h2>

        </md-card-header>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </md-card-content>
      </md-card-area>

      <md-card-content>
        <h3 class="md-subheading">Upcoming Events</h3>
        <div class="card-reservation">
          <md-icon>
          </md-icon>
        </div>
      </md-card-content>
      <md-card-actions>
        <md-button class="md-primary">Visit Full Website</md-button>
      </md-card-actions>
         </md-card>

         
</md-app-content>
    
</template>

<style lang="scss" scoped>
// @import '../assets/css/foot.css';
  .md-app {
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
  .md-card {
    width: 320px;
    margin: 40px;
    display: inline-block;
    vertical-align: top;
  }
  .md-card:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .md-card-example {
    .md-subhead {
      .md-icon {
        $size: 16px;

        width: $size;
        min-width: $size;
        height: $size;
        font-size: $size !important;
      }

      span {
        vertical-align: middle;
      }
    }

    .card-reservation {
      margin-top: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .md-icon {
        margin: 8px;
      }
    }

    .md-button-group {
      display: flex;

      .md-button {
        min-width: 60px;
        border-radius: 2px;
      }
    }
  }
</style>

<script>
export default {
  name: 'cards',
  data: () => ({
    menuVisible: false
  })
}
</script>
