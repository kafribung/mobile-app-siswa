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
        <ion-label>Foto URL Unplash</ion-label>
        <ion-checkbox slot="end" value="griff" v-on:click="changeAllowCamera"></ion-checkbox>
      </ion-item>

      <ion-item v-if="allowCamera">
        <ion-label position="floating">Foto</ion-label>
        <ion-input v-model="siswa.foto" inputmode="url" type="url" required></ion-input>
      </ion-item>

      <ion-list v-else>
        <ion-button size="small" fill="clear" @click="uploadCamera">
          <ion-icon slot="start" name="camera"></ion-icon>Upload foto
        </ion-button>
      </ion-list>

      <ion-list v-if="!allowCamera">
        <ion-thumbnail v-if="siswa.foto != null" slot="start">
          <ion-img :src="siswa.foto"></ion-img>
        </ion-thumbnail>
      </ion-list>

      <ion-button expand="block" type="submit" shape="round">Simpan</ion-button>
    </form>
  </main-layout>
</template>

<script>
import { defineComponent } from "vue";

import {
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonCheckbox,
  IonImg,
} from "@ionic/vue";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

export default defineComponent({
  name: "SiswaCreate",
  data() {
    return {
      siswa: {},
      message: null,
      allowCamera: false
    };
  },
  methods: {
    addSiswa() {
      // Validasi jik null
      let result = Object.values(this.siswa).every(o => o === null);
      if (result) {
        this.message = "Form tidak bisa kosong";
      }
      // Jalankan Action store/index.js
      this.$store.dispatch("addSiswa", this.siswa);

      // Reset data:
      this.resetFields();

      return this.$router.replace("/siswa");
    },

    resetFields() {
      this.siswa = {};
      this.message = null;
    },

    // Allow upload foto via url
    changeAllowCamera() {
      this.allowCamera = !this.allowCamera;
    },

    // Upload image/foto via local storage
    async  uploadCamera() {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        source: CameraSource.Camera,
        resultType: CameraResultType.Uri
      });
      // Can be set to the src of an image now
      this.siswa.foto = image.webPath;
    }
  },
  components: {
    IonButton,
    IonItem,
    IonLabel,
    IonInput,
    IonCheckbox,
    IonImg,
  }
});
</script>

<style scoped>
</style>
