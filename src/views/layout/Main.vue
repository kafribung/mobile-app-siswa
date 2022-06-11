<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-back-button :default-href="BackButton"></ion-back-button>
        </ion-buttons>
        <slot name="buttonAdd"></slot>
        <ion-title>{{ pageTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <slot></slot>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
  props: ["pageTitle", "BackButton"],
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton
  }
});
</script>

<style scoped>
</style>
