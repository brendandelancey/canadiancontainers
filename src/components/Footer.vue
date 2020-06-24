<template>
  <div id="bottom nav">
    <b-navbar type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/containers">Containers</b-nav-item>
          <b-nav-item href="/serviceareas">Service Areas</b-nav-item>
          <b-nav-item href="/faqs">FaQs</b-nav-item>
          <b-nav-item href="/contactus">Contacts</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
    <div id="TextAndLegal">
      <b-container>
        © Canadian Containers: Container rentals, waste disposal, waste
        containers for residential, businesses, and commercial applications.
        Canadian Containers is proud to serve the London Area. London and Area's
        Waste Management solution.
      </b-container>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#TextAndLegal {
  background-color: darkgray;
}
</style>
