<template>
    <div class="d-flex"> 
        <div class="pagetitle">
            <h1>{{ this.breadcumbs.title }}</h1>
            <nav>
            <ol class="breadcrumb">
                <li class="breadcrumb-item "  v-for=" v  in breadcumbs.data" :key="v.name"  :class="{ 'active': v.status }">
                    <router-link :to="v.link" v-if="!v.status">{{ v.name }}</router-link>
                    <span v-else>{{ v.name }}</span>
                </li>
            </ol>
            </nav>
        </div>
    </div> 
</template>

<script>
export default {
    name: "BreadCumbs",
    props :["breadcumbs"]
}
</script>

<style>

</style>