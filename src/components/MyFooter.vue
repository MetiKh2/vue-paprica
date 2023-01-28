<template>
    <footer class="pa-2" style="margin-top: 20rem;position: fixed; z-index: 10; bottom: 0;left: 0;width: 100%; background-color: white;">
        <v-container>
        <div class="d-flex justify-space-between">
                <v-btn elevation="0">
                  <router-link to="/">
                    <v-icon size="30" color="red">mdi-home</v-icon>
                  </router-link>
                </v-btn>
                <v-btn elevation="0">
                    <router-link to="/profile">
                    <v-icon size="30">mdi-account-circle</v-icon>
                </router-link>
                </v-btn>
                <v-btn elevation="0">
                    <router-link to="/categories">
                    <v-icon size="30">mdi-vector-square</v-icon>
                </router-link>
                </v-btn>
                 
            </div>
        </v-container>
    </footer>
</template>