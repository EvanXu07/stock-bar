<script setup lang="ts">
import type { FullQuote } from 'stock-sdk'
import { getStockQuotes } from '@/api'

const stockQuotes = ref<FullQuote[]>([])
onMounted(async () => {
  stockQuotes.value = await getStockQuotes(['sh000001', 'sz399001', 'sz399006', 'sh000300', 'sh000905'])
})
</script>

<template>
  <div class="stock">
    <Empty style="margin-top: 100px" />
  </div>
</template>

<style lang="scss" scoped>

</style>
