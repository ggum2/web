<template>
  <sidenav :orientation="orientation" :class="curClasses">

    <div class="sidenav-block my-2">
        <div class="media align-items-center">
            <img src="https://avatars3.githubusercontent.com/u/12694841?s=460&v=4" alt class="d-block ui-w-50 rounded-circle">
            <div class="media-body pl-3">
                <h5 class="mb-1">jhyunto</h5>
                <div class="small text-lightest">
                    Administrator
                </div>
            </div>
        </div>
    </div>

     <sidenav-divider class="mb-1 mt-0"></sidenav-divider>

    <!-- Inner -->
    <div class="sidenav-inner" :class="{ 'py-1': orientation !== 'horizontal' }">

      <sidenav-router-link icon="ion ion-md-home" to="/" :exact="true">Home</sidenav-router-link>
      <sidenav-router-link icon="ion ion-md-images" to="/album" :exact="true">Album</sidenav-router-link>
      <sidenav-router-link icon="ion ion-md-bookmarks" to="/diary" :exact="true">Diary</sidenav-router-link>
      <sidenav-router-link icon="ion ion-md-calendar" to="/calendar" :exact="true">Calendar</sidenav-router-link>
      <sidenav-router-link icon="ion ion-md-today" to="/todo" :exact="true">To-Do List</sidenav-router-link>

      <sidenav-divider class="mb-1"></sidenav-divider>

      <sidenav-header>Administrator</sidenav-header>
      <sidenav-router-link icon="ion ion-md-notifications" to="/notice" :exact="true">Notice</sidenav-router-link>
      <sidenav-router-link icon="ion ion-md-people" to="/user" :exact="true">Users</sidenav-router-link>
      <sidenav-menu icon="ion ion-md-link">
        <template slot="link-text">External Links</template>
        <sidenav-router-link to="/my-github" :exact="true">GitHub</sidenav-router-link>
        <sidenav-router-link to="/my-zenhub" :exact="true">ZenHub</sidenav-router-link>
        <sidenav-router-link to="/my-jenkins" :exact="true">Jenkins</sidenav-router-link>
        <sidenav-router-link to="/my-dockerhub" :exact="true">Docker Hub</sidenav-router-link>
        <sidenav-router-link to="/my-portainer" :exact="true">Portainer</sidenav-router-link>
      </sidenav-menu>

    </div>
  </sidenav>
</template>

<script>
import { Sidenav, SidenavLink, SidenavRouterLink, SidenavMenu, SidenavHeader, SidenavBlock, SidenavDivider } from '@/vendor/libs/sidenav'

export default {
  name: 'app-layout-sidenav',
  components: {
    /* eslint-disable vue/no-unused-components */
    Sidenav,
    SidenavLink,
    SidenavRouterLink,
    SidenavMenu,
    SidenavHeader,
    SidenavBlock,
    SidenavDivider
    /* eslint-enable vue/no-unused-components */
  },

  props: {
    orientation: {
      type: String,
      default: 'vertical'
    }
  },

  computed: {
    curClasses () {
      let bg = this.layoutSidenavBg

      if (this.orientation === 'horizontal' && (bg.indexOf(' sidenav-dark') !== -1 || bg.indexOf(' sidenav-light') !== -1)) {
        bg = bg
          .replace(' sidenav-dark', '')
          .replace(' sidenav-light', '')
          .replace('-darker', '')
          .replace('-dark', '')
      }

      return `bg-${bg} ` + (
        this.orientation !== 'horizontal'
          ? 'layout-sidenav'
          : 'layout-sidenav-horizontal container-p-x flex-grow-0'
      )
    }
  },

  methods: {
    isMenuActive (url) {
      return this.$route.path.indexOf(url) === 0
    },

    isMenuOpen (url) {
      return this.$route.path.indexOf(url) === 0 && this.orientation !== 'horizontal'
    },

    toggleSidenav () {
      this.layoutHelpers.toggleCollapsed()
    }
  }
}
</script>
