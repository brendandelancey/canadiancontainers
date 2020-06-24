<template>
  <div class="Company Landing Page">
    <b-jumbotron text-variant="white" id="HomeJumbotron">
      <template v-slot:header>Canadian Containers</template>

      <template v-slot:lead>
        The Very Best In Fast Courteous Service
      </template>

      <hr class="my-4" />
      <p>
        Dumpster Rentals, Waste Disposal, 10-15-20 Cubic Yard Bins, Driveway
        Protection, Fast Service, Always At Competitive Rates
      </p>

      <!-- <b-button variant="primary" href="#">Do Something</b-button>
      <b-button variant="success" href="#">Do Something Else</b-button> -->
    </b-jumbotron>
    <div>
      <b-jumbotron
        header-level="4"
        bg-variant="light"
        header="Waste Disposal"
        lead="Our bins are custom-designed for convenience.  We provide a hook lift system that allows for precise container placement.  Some of our unique features include:

              -Double barn doors for easy near grade level entry

                to the rear of the bin. 

              -Custom sized bins that will not occupy a space

                wider than a single lane of your driveway.

              -Full length bin rails to distribute the weight of our

                bins.

              -Carefully designed to be the perfect height, no too

                high and not too low."
      >
      </b-jumbotron>
    </div>
    <div>
      <b-jumbotron
        header-level="4"
        header="Waste Containers"
        lead="We are proud to provide our high quality, custom designed, asthetically pleasing bins to all of our customers.  We provide service to Home Owners, Businesses, and Commercial Contrators.  We offer daily rentals (including up to 7 days) or long term rentals for building/construction sites.

We are proud to serve London, St. Thomas, Port Stanley, Dutton, West Lorne, Glencoe, Komoka, Delaware, Strathroy, Kilworth, Mt. Brydges, Ailsa Craig, Parkhill, Thedford, Ipperwash, Port Franks, Grand Bend, Exeter, Lucan, Dorchester, Ingersol, surrounding areas.

 

We are in business to serve your waste removal needs.

If you have any questions, feel free to call us.

We pride ourselves on excellent customer service, what can we do to accommodate you?"
      >
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

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
