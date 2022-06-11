<template>
  <main-layout page-title="Tambah Siswa" BackButton="/siswa">
    <form action @submit.prevent="addSiswa">
      <p>{{ message }}</p>
      <ion-item>
        <ion-label position="floating">NIS</ion-label>
        <ion-input type="number" inputmode="numeric" v-model.number="siswa.nis" required="true"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Nama</ion-label>
        <ion-input v-model="siswa.name" required="true"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Kelas</ion-label>
        <ion-input v-model="siswa.kelas" required="true"></ion-input>
      </ion-item>

      <!-- Textarea in an item with a floating label -->
      <ion-item>
        <ion-label position="floating">Alamat</ion-label>
        <ion-textarea v-model="siswa.alamat" clear-input required="true"></ion-textarea>
      </ion-item>

      <ion-item>
        <ion-label position="floating">Foto</ion-label>
        <ion-input v-model="siswa.foto" inputmode="url" type="url" required></ion-input>
      </ion-item>

      <ion-button expand="block" type="submit" shape="round">Simpan</ion-button>
    </form>
  </main-layout>
</template>

<script>
import { defineComponent } from "vue";

import { IonButton, IonItem, IonLabel, IonInput } from "@ionic/vue";
export default defineComponent({
  name: "SiswaCreate",
  data() {
    return {
      siswa: {},
      message: null,
    };
  },
  methods: {
    addSiswa() {
      // Validasi jik null
      let result = Object.values(this.siswa).every(o => o === null);
      if (result) {
        this.message = 'Form tidak bisa kosong'
      }
      // Jalankan Action store/index.js
      this.$store.dispatch("addSiswa", this.siswa);

      // Reset data:
      this.resetFields();

      return this.$router.replace('/siswa');
    },

    resetFields() {
      this.siswa = {};
      this.message = null;
    },
   
  },
  components: {
    IonButton,
    IonItem,
    IonLabel,
    IonInput
  }
});

</script>

<style scoped>
</style>
