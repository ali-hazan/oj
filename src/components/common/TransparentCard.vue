<template>
  <div class="transparent-card">
    <slot />
  </div>
</template>

<style >
.transparent-card {
  background-color: rgba(0, 0, 0, 0.6);
  min-height: 100px;
  border-radius: 12px;
  padding: 28px 32px;;
  margin: 8px;
  min-width: 280px;
}
.transparent-card label{
    color: #fff;
}
</style>
