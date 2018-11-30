<template>
    <div>
        <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex xs12>
                    <v-form @submit.prevent="fetchJadwal">
                        <v-select :items="data_hari" label="Hari" v-model="reqJadwal.hari"></v-select>
                        <v-select :items="data_sesi" label="Sesi" v-model="reqJadwal.sesi"></v-select>                       
                        <v-btn type="submit">Search</v-btn>
                    </v-form>
                </v-flex>
                <v-flex xs12>
                    <v-form >
                        <v-text-field v-model="cari" label="Cari makul atau kelompok atau ruangan"></v-text-field>
                    </v-form>                    
                </v-flex>
            </v-layout>
            <v-layout row wrap mb-5 mt-5 v-if="data_jadwal.length > 1 && cari.length==0">
                <v-flex xs6 md4 lg3 v-for="jadwal in data_jadwal" v-bind:key="jadwal.id">
                    <v-card>
                        <v-card-title primary-title>
                            <div>
                                <h3 headline >{{ jadwal.kelompok }}</h3>
                                <div>{{ jadwal.makul }}</div>
                                <div>{{ jadwal.ruang[0] }}</div>
                            </div>
                        </v-card-title>
                        <v-card-actions> 
                            <v-btn :href=jadwal.link target="__blank">DETAIL</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
            <v-layout mb-5 mt-5 row wrap v-else-if="cari.length>0">
                <v-flex xs12 md4 lg4 v-for="jadwal in filterSchedules" v-bind:key="jadwal.id">
                    <v-card>
                        <v-card-title primary-title>
                            <div>
                                <h3 headline>{{ jadwal.kelompok }}</h3>
                                <div>{{ jadwal.makul }}</div>
                                <div>{{ jadwal.ruang[0] }}</div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn :href=jadwal.link target="__blank">DETAIL</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>                
            </v-layout>
            <v-layout align-center justify-center row v-else>
                <h1 v-text="msg"></h1>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
    export default {
        data: () => ({
            cari: '',
            msg: 'Please search your schedule',
            data_hari: ['senin','selasa','rabu','kamis','jumat'],
            data_sesi: [
                '07.00-07.50',
                '07.00-08.40',
                '07.00-09.30',
                '07.00-10.00',
                '07.00-12.00',
                '07.50-08.40',
                '07.50-09.30',
                '07.50-10.20',
                '08.40-09.30',
                '08.40-10.20',
                '08.40-11.10',
                '09.30-10.20',
                '09.30-11.10',
                '09.30-11.20',
                '09.30-12.00',
                '10.20-11.10',
                '10.20-12.00',
                '10.20-12.50',
                '11.10-12.00',
                '12.30-13.20',
                '12.30-14.10',
                '12.30-15.00',
                '12.30-15.30',
                '13.00-14.40',
                '13.20-14.10',
                '13.20-15.00',
                '13.20-15.50',
                '13.20-16.20',
                '14.10-15.00',
                '14.10-15.50',
                '14.10-16.20',
                '14.40-16.20',
                '15.00-15.50',
                '15.00-16.20',
                '15.30-17.10',
                '15.30-18.00',
                '15.50-17.30',
                '16.20-17.10',
                '16.20-18.00',
                '16.20-18.50',
                '17.10-18.00',
                '17.10-19.20',
                '18.30-20.10',
                '18.30-21.00',
                '19.00-21.30',
                '19.20-20.10',
                '19.20-21.00',
                '20.10-21.50'
            ],
            data_jadwal: [],
            jadwal: {
                id: '',
                ruang: '',
                makul: '',
                kelompok: '',
            },
            reqJadwal: {
                hari: '',
                sesi: ''
            }
        }),
        computed: {
            filterSchedules() {
                return this.data_jadwal.filter(data_temp => {
                    if (this.cari.indexOf('.') == 1) {
                        return data_temp.ruang[0].toLowerCase().indexOf(this.cari.toLowerCase())> -1
                    } else if(this.cari.indexOf('.') !== -1) {
                        return data_temp.kelompok.toLowerCase().indexOf(this.cari.toLowerCase())> -1
                    } else {
                        return data_temp.makul.toLowerCase().indexOf(this.cari.toLowerCase())> -1
                    }
                    // return data_temp.makul.toLowerCase().indexOf(this.cari.toLowerCase())> -1
                })
            }
        },
        methods: {
            fetchJadwal() {
                let hari = this.reqJadwal.hari
                let sesi = this.reqJadwal.sesi
                let page_url = `https://dinus-api.herokuapp.com/jadwal/${hari}/${sesi}` 
                fetch(page_url)
                    .then(res => res.json())
                    .then(res => {
                        this.data_jadwal = res
                    })
                    .catch(error => {
                        this.message = error
                    })
            }
        }

    }
</script>

