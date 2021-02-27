<template>
    <v-progress-circular
        indeterminate
        size="64"
    ></v-progress-circular>
</template>

<style scoped>
     /* Google chrome */
      @-webkit-keyframes svg-text-anim {
       40% {
          stroke-dashoffset: 0;
          fill: transparent;
        }
        60% {
          stroke-dashoffset: 0;
          fill: #000000;
        }
        100% {
          stroke-dashoffset: 0;
          fill: #000000;
        }
        
    }
    /* Most browsers */
    @keyframes svg-text-anim {
       40% {
          stroke-dashoffset: 0;
          fill: transparent;
        }
        60% {
          stroke-dashoffset: 0;
          fill: #000000;
        }
        100% {
          stroke-dashoffset: 0;
          fill: #000000;
        }
        
    }
</style>

<script>
export default {
}
</script>