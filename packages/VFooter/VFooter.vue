<template>
  <div class="v-footer">
    <div class="v-footer-links">
      <a
        v-for="link in links"
        :key="link.key"
        :title="link.title"
        :target="link.target ? '_blank' : '_self'"
        :href="link.href"
      >
        {{link.title}}
      </a>
    </div>
    <div class="v-footer-copyright">
      Copyright
      <svg-icon icon-class="copyright"/>
      {{copyright}}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'VFooter',
    props: {
      links: {
        type: Array,
        default: () => []
      },
      copyright: String
    }
  }
</script>

<style lang="scss" scoped>
  .v-footer {
    margin: 48px 0 24px;
    padding: 0 16px;
    text-align: center;
    line-height: 1.5715;
  }

  .v-footer-links {
    margin-bottom: 8px;

    a {
      color: rgba(0, 0, 0, .45);
      transition: all .3s;

      &:hover {
        color: rgba(0, 0, 0, .85);
      }
    }

    a:not(:last-child) {
      margin-right: 40px;
    }
  }

  .v-footer-copyright {
    color: rgba(0, 0, 0, .45);
    font-size: 14px;
  }
</style>