<template>
  <page-wrap title="Answers">
    <h3>#{{ index }}</h3>
    <button-grid :index="index"></button-grid>
    <!-- nav buttons -->
    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-button :disabled="index <= 1" expand="block" @click="$router.push(`/answers/${index-1}`)">
            «
          </ion-button>
        </ion-col>    
        <ion-col size="6">
            <!-- SPACER -->
        </ion-col>
        <ion-col>
          <ion-button expand="block" @click="$router.push(`/answers/${index+1}`)">
            »
          </ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>
  </page-wrap>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonGrid, IonCol, IonRow, IonButton } from '@ionic/vue'
import PageWrap from '@/components/PageWrap'
import ButtonGrid from '@/components/ButtonGrid'

export default defineComponent({
  name: 'Answers',
  components: {
     IonGrid, IonCol, IonRow, IonButton, PageWrap, ButtonGrid
  },
  computed: {
    index: function() {
      const idx = this.$route.params.index as string
      return parseInt( idx, 10 )
    }
  }
})
</script>