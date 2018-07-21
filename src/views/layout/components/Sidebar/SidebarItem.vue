<template>
  <div class="menu-wrapper">
   <div class="logo">
     <svg-icon v-if="opened" :icon-class="'logo'" class="icon"></svg-icon>
     <svg-icon  v-if="!opened" :icon-class="'lg'" class="logo-img"></svg-icon>
   </div>
    <template v-for="item in routes" v-if="!item.hidden&&item.children">
      <router-link v-if="item.children.length===1 && !item.children[0].children && !item.alwaysShow" :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
          <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon"></svg-icon>
          <span v-if="item.children[0].meta&&item.children[0].meta.title">{{item.children[0].meta.title}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
          <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
          <span v-if="item.meta&&item.meta.title">{{item.meta.title}}</span>
        </template>

        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>

          <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path">
              <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
              <span v-if="child.meta&&child.meta.title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    routes: {
      type: Array
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    opened() {
      return !this.$store.state.app.sidebar.opened
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .logo{
    color: #dbf2ef;
    margin-left: 9px !important;
    margin-top: 16px !important;
  }
  .logo-img{
    color: #dbf2ef;
    font-size: 142px;
    margin-bottom: -51px !important;
    margin-top: -56px !important;
    margin-left: 2px !important;
  }
  .icon{
    width: 1em;
    height: 1em;
    overflow: hidden;
    margin-right: 1px !important;
    margin-bottom: 15px !important;
  }
</style>
