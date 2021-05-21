<template>
  <ion-grid>
    <ion-row>
      <ion-col cols="4" v-for="(n,idx) in buttons.length" :key="n">
        <ion-button
            expand="block"
            :color="buttons[idx] ? 'dark' : 'light'"
            @click="buttons[idx] = !buttons[idx]"
        >
          {{ numberToLetter( idx ) }}
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonGrid, IonRow, IonCol, IonButton } from '@ionic/vue'
import store from '@/store'

export default defineComponent({
  name: 'ButtonGrid',

  components: {
    IonGrid, IonRow, IonCol, IonButton
  },

  props: {
    index: Number,
  },

  data:() => ({
    globals: store.data,
  }),

  computed: {
    buttons: function() {
      return this.globals.questions[this.index]
    }
  },

  methods: {
    numberToLetter( idx ) {
      // 65 => A
      // 97 => a
      return String.fromCharCode( idx + 65 )
    }
  },
})
</script>