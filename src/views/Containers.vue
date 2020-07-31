<template>
  <div class="containers">
    <div>
      <b-jumbotron
        header="Container Rental"
        lead="Our services include dumpster/bin rentals, waste disposal, and waste containers for residential use, commercial use, and for businesses.  We are proud to serve London, St. Thomas, Port Stanley, Dutton, West Lorne, Glencoe, Komoka, Delaware, Strathroy, Kilworth, Mt. Brydges, Ailsa Craig, Parkhill, Thedford, Ipperwash, Port Franks, Grand Bend, Exeter, Lucan, Dorchester, Ingersol, surrounding areas."
      >
      </b-jumbotron>
    </div>
    <b-container fluid="sm" class="Grid for Content">
      <b-container class="Dumster Size">
        <b-row class="justify-content-md-center">
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
              <b-card-text>
                <h5>
                  Single Room
                </h5>
                <h5>
                  Roofing (up to 120 bundles)
                </h5>
                <h5>
                  Up to 5 cubic yards
                </h5>
              </b-card-text>

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
              <b-card-text>
                <h5>
                  Two Rooms
                </h5>
                <h5>
                  Garage Clean up
                </h5>
                <h5>
                  Large Roof Landscaping
                </h5>
              </b-card-text>

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
              <b-card-text>
                <h5>
                  House Remodel
                </h5>
                <h5>
                  Construction
                </h5>
                <h5>
                  Large Estate Clean Up
                </h5>
              </b-card-text>

              <!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
            </b-card>
          </div>
          <!-- </b-col> -->
        </b-row>
      </b-container>
    </b-container>
    <h4>
      *Our containers are available
    </h4>
    <h4>
      to you for up to 7 Calendar Days
    </h4>
    <h4>
      included in our rental rates.*
    </h4>
  </div>
</template>

<style scoped></style>
