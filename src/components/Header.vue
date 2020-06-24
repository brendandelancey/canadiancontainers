<template>
  <div id="nav">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">
        <img
          :src="require('../assets/canadian-containers-logo2small.png')"
          alt="Canadian Containers"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav ml-auto>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/containers">Containers</b-nav-item>
          <b-nav-item href="/serviceareas">Service Areas</b-nav-item>
          <b-nav-item href="/faqs">FaQs</b-nav-item>
          <b-nav-item href="/contactus">Contacts</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
