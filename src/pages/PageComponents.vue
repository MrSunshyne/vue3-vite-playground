
<template>
    <div>
        <h1>Components</h1>

        <div class="components-wrapper">
            <RedButton />
            <BlueButton />
            <YellowButton />
            <GreenButton />
            <PurpleButton />
        </div>
    </div>
</template>

<script setup lang="ts">
import BlueButton from '../components/BlueButton.vue';
import RedButton from '../components/RedButton.vue';
import YellowButton from '../components/YellowButton.vue';
import GreenButton from '../components/GreenButton.vue';
import PurpleButton from '../components/PurpleButton.vue';
</script>

<style scoped>
.components-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}
</style>