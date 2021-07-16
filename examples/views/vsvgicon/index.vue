<template>
  <demo-wrapper title="VSvgIcon svg图标">
    <demo-card>
      <el-row :gutter="20">
        <el-col :span="2" v-for="item in glyphs" :key="item.icon_id">
          <div class="grid-content">
            <v-svg-icon :name="'icon-'+item.font_class"/>
          </div>
        </el-col>
      </el-row>
    </demo-card>
    <README/>
  </demo-wrapper>
</template>

<script>
import README from './README.md'

export default {
  name: 'vsvgicon',
  data() {
    return {
      glyphs: [
        {
          'icon_id': '4765731',
          'name': 'copyright',
          'font_class': 'copyright',
          'unicode': 'e77e',
          'unicode_decimal': 59262
        },
        {
          'icon_id': '6598352',
          'name': 'swap-right',
          'font_class': 'swap-right',
          'unicode': 'e8f1',
          'unicode_decimal': 59633
        },
        {
          'icon_id': '11488211',
          'name': 'landtransportation',
          'font_class': 'landtransportation',
          'unicode': 'e774',
          'unicode_decimal': 59252
        },
        {
          'icon_id': '11488070',
          'name': 'listing-content',
          'font_class': 'listing-content',
          'unicode': 'e756',
          'unicode_decimal': 59222
        },
        {
          'icon_id': '11488072',
          'name': 'logistics-icon',
          'font_class': 'logistics-icon',
          'unicode': 'e757',
          'unicode_decimal': 59223
        },
        {
          'icon_id': '11488091',
          'name': 'packaging',
          'font_class': 'packaging',
          'unicode': 'e75b',
          'unicode_decimal': 59227
        },
        {
          'icon_id': '11488198',
          'name': 'aviation',
          'font_class': 'aviation',
          'unicode': 'e770',
          'unicode_decimal': 59248
        },
        {
          'icon_id': '11488074',
          'name': 'mobile-phone',
          'font_class': 'mobile-phone',
          'unicode': 'e75a',
          'unicode_decimal': 59226
        },
        {
          'icon_id': '11488162',
          'name': 'trust',
          'font_class': 'trust',
          'unicode': 'e76a',
          'unicode_decimal': 59242
        },
        {
          'icon_id': '11488209',
          'name': 'vip',
          'font_class': 'vip',
          'unicode': 'e773',
          'unicode_decimal': 59251
        },
        {
          'icon_id': '11674773',
          'name': 'feed-logo',
          'font_class': 'feed-logo',
          'unicode': 'e7ad',
          'unicode_decimal': 59309
        },
        {
          'icon_id': '13087833',
          'name': '上传备案单证',
          'font_class': 'shangchuanbeiandanzheng',
          'unicode': 'e7c4',
          'unicode_decimal': 59332
        },
        {
          'icon_id': '13087841',
          'name': '通关数据',
          'font_class': 'tongguanshuju',
          'unicode': 'e7c5',
          'unicode_decimal': 59333
        },
        {
          'icon_id': '13087846',
          'name': '新外综业务',
          'font_class': 'xinwaizongyewu',
          'unicode': 'e7c8',
          'unicode_decimal': 59336
        },
        {
          'icon_id': '13119212',
          'name': 'become a gold supplier',
          'font_class': 'becomeagoldsupplier',
          'unicode': 'e7d4',
          'unicode_decimal': 59348
        },
        {
          'icon_id': '11488161',
          'name': 'vehivles',
          'font_class': 'vehivles',
          'unicode': 'e76c',
          'unicode_decimal': 59244
        },
        {
          'icon_id': '11488000',
          'name': 'category',
          'font_class': 'category',
          'unicode': 'e747',
          'unicode_decimal': 59207
        },
        {
          'icon_id': '11488156',
          'name': 'upload',
          'font_class': 'upload',
          'unicode': 'e76b',
          'unicode_decimal': 59243
        },
        {
          'icon_id': '3041446',
          'name': '箭头',
          'font_class': 'tuxing',
          'unicode': 'e61f',
          'unicode_decimal': 58911
        },
        {
          'icon_id': '11487981',
          'name': 'all',
          'font_class': 'all',
          'unicode': 'e743',
          'unicode_decimal': 59203
        },
        {
          'icon_id': '11488120',
          'name': 'scanning',
          'font_class': 'scanning',
          'unicode': 'e762',
          'unicode_decimal': 59234
        },
        {
          'icon_id': '12011693',
          'name': 'comments',
          'font_class': 'comments',
          'unicode': 'e7b3',
          'unicode_decimal': 59315
        },
        {
          'icon_id': '11488081',
          'name': 'New user zone',
          'font_class': 'Newuserzone',
          'unicode': 'e759',
          'unicode_decimal': 59225
        },
        {
          'icon_id': '11488167',
          'name': 'viewlist',
          'font_class': 'viewlist',
          'unicode': 'e76d',
          'unicode_decimal': 59245
        },
        {
          'icon_id': '11488174',
          'name': 'toy',
          'font_class': 'toy',
          'unicode': 'e76e',
          'unicode_decimal': 59246
        },
        {
          'icon_id': '11674090',
          'name': 'home',
          'font_class': 'home',
          'unicode': 'e7a7',
          'unicode_decimal': 59303
        },
        {
          'icon_id': '12011692',
          'name': 'account',
          'font_class': 'account',
          'unicode': 'e7b2',
          'unicode_decimal': 59314
        },
        {
          'icon_id': '13087827',
          'name': '动态',
          'font_class': 'dongtai',
          'unicode': 'e7c2',
          'unicode_decimal': 59330
        }
      ]
    }
  },
  components: {
    README
  }
}
</script>

<style lang="scss">
.grid-content {
  height: 48px;
  line-height: 48px;
  text-align: center;
  font-size: 26px;
}
</style>