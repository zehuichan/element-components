<template>
  <span class="v-badge v-badge-status" :class="color">
    <span class="v-badge-status-dot" :class="`v-badge-status-${status}`" :style="{'background-color': color}"></span>
    <span class="v-badge-status-text"><slot/></span>
  </span>
</template>

<script>
  export default {
    name: 'VBadge',
    props: {
      color: String,
      status: {
        type: String,
        default: 'success'
      },
    }
  }
</script>

<style lang="scss" scoped>
  .v-badge {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    -webkit-font-feature-settings: "tnum";
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    line-height: 1;
  }

  .v-badge-status {
    line-height: inherit;
    vertical-align: baseline;
  }

  .v-badge-status-dot {
    position: relative;
    top: -1px;
    display: inline-block;
    width: 6px;
    height: 6px;
    vertical-align: middle;
    border-radius: 50%;
  }

  .v-badge-status-text {
    margin-left: 8px;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
  }

  .v-badge-status-success {
    background-color: #52c41a;
  }

  .v-badge-status-error {
    background-color: #ff4d4f;
  }

  .v-badge-status-default {
    background-color: #d9d9d9;
  }

  .v-badge-status-processing {
    position: relative;
    background-color: #1890ff;

    &:after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid #1890ff;
      border-radius: 50%;
      animation: antStatusProcessing 1.2s ease-in-out infinite;
      content: "";
    }
  }

  .v-badge-status-warning {
    background-color: #faad14;
  }

  @keyframes antStatusProcessing {
    0% {
      -webkit-transform: scale(.8);
      transform: scale(.8);
      opacity: .5
    }
    to {
      -webkit-transform: scale(2.4);
      transform: scale(2.4);
      opacity: 0
    }
  }
</style>