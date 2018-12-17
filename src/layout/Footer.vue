<template>
  <nav class="layout-footer footer" :class="getLayoutFooterBg()">
    <div class="container-fluid d-flex flex-wrap container-p-x pb-3">
      <div class="pt-3">
        <span class="footer-text">Copyright &copy; 2018 Hyunto. All Rights Reserved.</span>
      </div>
      <div class="pt-3 ml-md-auto">
        <a href="#" class="footer-link">About Us</a>
        <a href="#" class="footer-link ml-4">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'app-layout-footer',

  methods: {
    getLayoutFooterBg () {
      return `bg-${this.layoutFooterBg}`
    }
  }
}
</script>
