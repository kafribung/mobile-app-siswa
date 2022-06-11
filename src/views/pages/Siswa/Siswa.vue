<template>
  <main-layout page-title="Siswa">

    <!-- Slot yang ada di header main.vue -->
    <template v-slot:buttonAdd>
      <ion-buttons slot="end">
        <ion-button router-link="/siswa/create">
          <ion-icon slot="icon-only" name="add"></ion-icon>
        </ion-button>
      </ion-buttons>
    </template>

    <ion-list v-for="siswa in siswas" :key="siswa.id" :router-link="`/siswa/${siswa.id}`">
      <ion-card mode="md">
        <ion-card-header>
          <ion-card-subtitle>{{ siswa.nis }}</ion-card-subtitle>
          <ion-card-title>{{ siswa.name }}</ion-card-title>
        </ion-card-header>
        <ion-item lines="none">
          <ion-thumbnail slot="start">
            <ion-img :src="siswa.img" :alt="siswa.name"></ion-img>
          </ion-thumbnail>
        </ion-item>

        <ion-item lines="inset">
          <ion-label class="ion-text-wrap">
            <ion-text>
              <h2>Kelas:</h2>
              <p>{{ siswa.kelas }}</p>
            </ion-text>
          </ion-label>
        </ion-item>

        <ion-item lines="inset">
          <ion-label class="ion-text-wrap">
            <ion-text>
              <h2>Alamat:</h2>
              <p>{{ siswa.alamat }}</p>
            </ion-text>
          </ion-label>
        </ion-item>
      </ion-card>
    </ion-list>
  </main-layout>
</template>

<script>
import { defineComponent } from "vue";

import {
  IonList,
  IonItem,
  IonCard,
  IonCardHeader,
  IonThumbnail,
  IonImg,
  IonLabel,
  IonButton
} from "@ionic/vue";

export default defineComponent({
  name: "SiswaIndex",
  data() {},
  computed: {
    siswas() {
      return this.$store.getters.siswas;
    }
  },
  components: {
    IonList,
    IonItem,
    IonCard,
    IonCardHeader,
    IonThumbnail,
    IonImg,
    IonLabel,
    IonButton
  }
});
</script>

<style scoped>
</style>
