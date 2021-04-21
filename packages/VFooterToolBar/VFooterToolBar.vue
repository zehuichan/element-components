<template>
  <div class="footer-tool-bar-placeholder">
    <div class="footer-tool-bar">
      <div class="fl">
        <slot name="extra"/>
      </div>
      <div class="fr">
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VFooterToolBar',
    props: {
      isMobile: {
        type: Boolean,
        default: false
      },
      sideBarWidth: {
        type: Number,
        default: undefined
      }
    }
  }
</script>

<style lang="scss" scoped>
  .footer-tool-bar-placeholder {
    height: 56px;
  }

  .el-popup-parent--hidden {
    .footer-tool-bar {
      padding-right: 41px;
    }
  }

  .footer-tool-bar {
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