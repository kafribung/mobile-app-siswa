<template>
  <main-layout page-title="Detail Siswa" BackButton="/siswa">
    <ion-list>
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

export default defineComponent({
  name: "SiswaDetail",
  computed: {
    siswa() {
      return this.$store.getters.siswa(this.$route.params.id);
    },
  },
});
</script>

<style scoped>
</style>
