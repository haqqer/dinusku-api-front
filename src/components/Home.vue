<template>
    <v-container>
        <div>
      <v-container
        grid-list-lg
      >
        <v-layout row wrap>
          <v-flex xs12>
            <v-card color="blue-grey darken-2" class="white--text">
              <v-card-title primary-title>
                <div>
                  <div class="headline">DinusKu</div>
                  <span>Cari Info Tentang UDINUS disini</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat dark to="/form">Cari Jadwal</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs12>
            <v-card color="cyan darken-2" class="white--text">
              <v-layout>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Pengumuman</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
            </v-card>
          </v-flex>

          <v-flex xs12>
            <v-card color="purple" class="white--text">
              <v-layout row>
                <v-flex xs7>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline">Cek KRS</div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout> 
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
        </div>
    </v-container>
</template>

