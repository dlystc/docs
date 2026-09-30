<script setup lang="ts">
import { onMounted, ref } from 'vue';

const stc = ref('')

onMounted(async () => {
  const resp = await fetch("https://dlystc.unknownmp.top/api/v2/sentence/text?format=full")

  if (resp.status == 200) {
    stc.value = await resp.text()
  }
}) 
</script>

<template>
  <ClientOnly>
    <div class="dlystc">{{ stc }}</div>
  </ClientOnly>
</template>

<style lang="scss" scoped>
.dlystc {
  margin-top: 16px;
  color: var(--vp-c-text-3);
  font-size: 14px;
  min-height: 32px;
}
</style>