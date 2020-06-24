<template>
  <div class="about">
    <div>
      <b-jumbotron header="Our Service Area" lead="">
        <p>
          We are proud to provide our high quality, custom designed,
          asthetically pleasing bins to all of our customers. We provide service
          to Home Owners, Businesses, and Commercial Contrators. We offer
          temporary rentals (including up to 7 calendar days) or long term
          rentals for construction/building sites. We are proud to serve London,
          St. Thomas, Port Stanley, Dutton, West Lorne, Glencoe, Komoka,
          Delaware, Strathroy, Kilworth, Mt. Brydges, Ailsa Craig, Parkhill,
          Thedford, Ipperwash, Port Franks, Grand Bend, Exeter, Lucan,
          Dorchester, Ingersol, surrounding areas.
        </p>
      </b-jumbotron>
    </div>
    <div>
      <b-img
        :src="require('../assets/serviceareamap.jpg')"
        fluid
        alt="Responsive image"
        id="serviceareamap"
      ></b-img>
    </div>
  </div>
</template>
<style scoped>
#serviceareamap {
  padding: 25px;
}
</style>
