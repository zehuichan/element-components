<template>
  <div class="v-footer-tool-bar-placeholder">
    <div class="v-footer-tool-bar" :style="{ width: barWidth, transition: '0.3s all' }">
      <div style="float: left">
        <slot name="extra"/>
      </div>
      <div style="float: right">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VFooterToolBar',
  props: {
    collapsed: {
      type: Boolean,
      default: false
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    siderWidth: {
      type: Number,
      default: undefined
    },
    sideBarWidth: {
      type: Number,
      default: undefined
    }
  },
  computed: {
    barWidth() {
      return this.isMobile ? undefined : `calc(100% - ${this.collapsed ? 80 : this.siderWidth || 256}px)`
    }
  }
}
</script>

<style lang="scss">
.v-footer-tool-bar-placeholder {
  height: 56px;
}

.el-popup-parent--hidden {
  .v-footer-tool-bar {
    padding-right: 41px;
  }
}

.v-footer-tool-bar {
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  bottom: 0;
  right: 0;
  height: 56px;
  line-height: 56px;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, .03);
  background: #fff;
  border-top: 1px solid #e8e8e8;
  padding: 0 24px;
  z-index: 9;

  &:after {
    content: "";
    display: block;
    clear: both;
  }
}
</style>