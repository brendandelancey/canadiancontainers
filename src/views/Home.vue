<template>
  <div class="Company Landing Page">
    <b-jumbotron text-variant="white" id="HomeJumbotron">
      <!-- header-level="3" -->
      <template v-slot:header>Canadian Containers</template>

      <template v-slot:lead>
        The Very Best In Fast Courteous Service
      </template>

      <hr class="my-4" />
      <p>
        Dumpster Rentals, Waste Disposal, 10-15-20 Cubic Yard Bins, Driveway
        Protection, Fast Service, Always At Competitive Rates
      </p>
      <p>
        Telephone: 519-472-3456
      </p>

      <!-- <b-button variant="primary" href="#">Do Something</b-button>
      <b-button variant="success" href="#">Do Something Else</b-button> -->
    </b-jumbotron>

    <div>
      <b-container fluid="sm" class="Grid for Content">
        <b-container class="Dumster Size">
          <b-row>
            <!-- <b-col> -->
            <div id="10 Cubic Yard Container">
              <b-card
                :img-src="require('../assets/acanadiancontainers.jpg')"
                title="10 Cubic Yard"
                img-alt="Container 10 Yard"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
              </b-card>
            </div>
            <!-- </b-col> -->
            <!-- <b-col> -->
            <div id="15 Cubic Yard Container">
              <b-card
                :img-src="require('../assets/acanadiancontainers.jpg')"
                title="15 Cubic Yard"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
              </b-card>
            </div>
            <!-- </b-col> -->
            <!-- <b-col> -->
            <div id="20 Cubic Yard Container">
              <b-card
                :img-src="require('../assets/acanadiancontainers.jpg')"
                title="20 Cubic Yard"
                img-alt="Container 20 Yard"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
              >
                <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
              </b-card>
            </div>
            <!-- </b-col> -->
          </b-row>
        </b-container>
      </b-container>
      <b-jumbotron
        header-level="4"
        bg-variant="light"
        header="Waste Disposal"
        lead="Our bins are custom-designed for convenience.  We provide a hook lift system that allows for precise container placement.  
        Some of our unique features include:"
      >
        <hr class="my-4" />
        <p>
          -Double barn doors for easy near grade level entry to the rear of the
          bin.
        </p>
        <p>
          -Custom sized bins that will not occupy a space wider than a single
          lane of your driveway.
        </p>
        <p>-Full length bin rails to distribute the weight of our bins.</p>
      </b-jumbotron>
    </div>

    <div>
      <b-jumbotron
        header-level="4"
        header="Waste Containers"
        lead="We are proud to provide our high quality, custom designed bins to all of our customers.  We provide service to Home Owners, Businesses, and Commercial Contrators.  We offer daily rentals (including up to 7 days) or long term rentals for building/construction sites.

        We are in business to serve your waste removal needs.

        If you have any questions, feel free to call us."
      >
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>

<style>
#HomeJumbotron {
  background: url("../assets/canadiancontainers-truck1-grey.jpg") fixed center
    no-repeat;
  background-size: cover;
  background-repeat: no-repeat;
  height: 150hv;
}
</style>
