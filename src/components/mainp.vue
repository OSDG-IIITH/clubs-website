<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="fixed-last">
      <md-app-toolbar class="md-large md-dense md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>

            <span class="md-title">IIIT HYDERABAD CLUBS </span>
          </div>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button">
              <md-icon>more_vert</md-icon>
            </md-button>
          </div>
        </div>

        <div class="md-toolbar-row">
          <md-tabs class="md-primary">
            <md-tab id="tab-home" md-label="Home"></md-tab>
            <md-tab id="tab-pages" md-label="Clubs-Coordinators"></md-tab>
            <md-tab id="tab-posts" md-label="Gallery"></md-tab>
            <md-tab id="tab-favorites" md-label="Events"></md-tab>
          </md-tabs>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Link_1</span>
          </md-list-item>

        <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Link_2</span>
          </md-list-item>
        <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Link_3</span>
          </md-list-item>

            <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Link_4</span>
          </md-list-item>

            <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Link_5</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <im></im>
        <cards></cards>
        <cards></cards>
        <cards></cards>
       <foot></foot>
      </md-app-content>
    </md-app>
    
  </div>
</template>

 <style lang="scss" scoped>
  @import '../assets/css/mainp.css';
 </style>

<script>
import cards from './cards.vue'
import im from './imcar.vue'
import foot from './foot.vue'
export default {
  name: 'navbar',
  components: {
    cards,im,foot
  },
  data: () => ({
    menuVisible: false
  })
}
</script>
