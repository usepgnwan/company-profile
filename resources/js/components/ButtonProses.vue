<template>
  <!-- <main> -->
    <button class="btn btn-primary" :class="smbtn ? 'btn-sm':''" type="button" disabled="">
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Loading...
    </button>
  <!-- </main> -->
</template>

<script>
export default {
    name:"ButtonProses",
    props:{
      smbtn: Boolean
    }
}
</script>

<style>

</style>