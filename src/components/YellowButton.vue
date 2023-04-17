<template>
    <div class="wrapper">
        <button>
            CSS Component
        </button>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="postcss" scoped>
.wrapper {
    > button {
        background:yellow;
    }
}
</style>