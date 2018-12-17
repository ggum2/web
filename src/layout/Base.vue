<template>
    <div class="layout-wrapper layout-2">
        <div class="layout-inner">
            <app-layout-sidebar />

            <div class="layout-container">
                <app-layout-header />

                <div class="layout-content">
                    <div class="router-transitions container-fluid flex-grow-1 container-p-y">
                        <router-view />
                    </div>

                    <app-layout-footer />
                </div>
            </div>
        </div>
        <div class="layout-overlay" @click="closeSidenav"></div>
    </div>
</template>

<script>
    import Header from './Header';
    import SideBar from './SideBar';
    import Footer from './Footer';

    export default {
        name: 'app-layout-2',

        components: {
            'app-layout-header': Header,
            'app-layout-sidebar': SideBar,
            'app-layout-footer': Footer
        },

        mounted () {
            this.layoutHelpers.init();
            this.layoutHelpers.update();
            this.layoutHelpers.setAutoUpdate(true);
        },

        beforeDestroy () {
            this.layoutHelpers.destroy()
        },

        methods: {
            closeSidenav () {
                this.layoutHelpers.setCollapsed(true)
            }
        }
    }
</script>
