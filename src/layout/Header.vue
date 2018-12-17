<template>
    <b-navbar toggleable="lg" :variant="getLayoutNavbarBg()" class="layout-navbar align-items-lg-center container-p-x">

        <!-- Sidenav toggle -->
        <b-navbar-nav class="align-items-lg-center mr-auto mr-lg-4" v-if="sidenavToggle">
            <a class="nav-item nav-link px-0 ml-2 ml-lg-0" href="javascript:void(0)" @click="toggleSidenav">
                <i class="ion ion-md-menu text-large align-middle" />
            </a>
        </b-navbar-nav>

        <!-- Navbar toggle -->
        <b-navbar-toggle target="app-layout-navbar"></b-navbar-toggle>

        <b-collapse is-nav id="app-layout-navbar">

            <b-navbar-nav class="align-items-lg-center">
                <!-- Search -->
                <label class="nav-item navbar-text navbar-search-box p-0 active">
                    <i class="ion ion-ios-search navbar-icon align-middle"></i>
                    <span class="navbar-search-input pl-2">
                        <input type="text" class="form-control navbar-text mx-2" placeholder="Search..." style="width:200px">
                    </span>
                </label>
            </b-navbar-nav>

            <b-navbar-nav class="align-items-lg-center ml-auto">
                <!-- Divider -->
                <div class="nav-item d-none d-lg-block text-big font-weight-light line-height-1 opacity-25 mr-3 ml-1">|</div>

                <b-nav-item-dropdown right>
                    <template slot="button-content">
                        <span class="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                            <img src="https://avatars3.githubusercontent.com/u/12694841?s=460&v=4" alt class="d-block ui-w-30 rounded-circle">
                            <span class="px-1 mr-lg-2 ml-2 ml-lg-0">jhyunto</span>
                        </span>
                    </template>

                    <b-dd-item>
                        <i class="ion ion-ios-person text-lightest"></i> &nbsp; Profile
                    </b-dd-item>
                    <b-dd-item>
                        <i class="ion ion-ios-mail text-lightest"></i> &nbsp; Messages
                    </b-dd-item>
                    <b-dd-item>
                        <i class="ion ion-md-settings text-lightest"></i> &nbsp; Account settings
                    </b-dd-item>
                    <b-dd-divider />
                    <b-dd-item>
                        <i class="ion ion-ios-log-out text-danger"></i> &nbsp; Log Out
                    </b-dd-item>
                </b-nav-item-dropdown>

            </b-navbar-nav>

        </b-collapse>


    </b-navbar>
</template>

<script>
    export default {
        name: 'app-layout-navbar',

        props: {
            sidenavToggle: {
                type: Boolean,
                default: true
            }
        },

        methods: {
            toggleSidenav () {
                this.layoutHelpers.toggleCollapsed()
            },

            getLayoutNavbarBg () {
                return this.layoutNavbarBg
            }
        }
    }
</script>
