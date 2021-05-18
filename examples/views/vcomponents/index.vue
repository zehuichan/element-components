<template>
  <div class="v-components">
    <h1>业务组件</h1>
    <!--v-search-->
    <demo-card title="v-search">
      <v-search v-model="searchForm" :options="search.options" label-width="80px">
        <template #tools>
          自定义额外插槽 #tools
        </template>
      </v-search>
      <demo-block title="template">
        <highlightjs language="html" :code="vsearch.template"/>
      </demo-block>
      <demo-block title="javascript">
        <highlightjs language="javascript" :code="vsearch.javascript"/>
      </demo-block>
    </demo-card>

    <!--v-table-->
    <demo-card title="v-table">
      <v-table
        :loading="loading"
        :data="table.data"
        :columns="table.columns"
        :total="total"
        :page.sync="query.page"
        :limit.sync="query.limit"
      >
        <template #toolbar-title>
          插槽#toolbar-title
        </template>
        <template #toolbar-space>
          插槽#toolbar-space
        </template>
        <template #selection>
          <el-table-column type="selection" width="55"/>
        </template>
        <template #tags="{scope}">
          <el-tag v-for="tag in scope.row.tags" :key="tag" :type="tag.length > 5 ? 'warning' : 'success'">
            {{ tag }}
          </el-tag>
        </template>
        <template #action="{scope}">
          <el-button type="text">Invite</el-button>
          <el-button type="text">Delete</el-button>
        </template>
      </v-table>
      <demo-block title="template">
        <highlightjs language="html" :code="vtable.template"/>
      </demo-block>
      <demo-block title="javascript">
        <highlightjs language="javascript" :code="vtable.javascript"/>
      </demo-block>
    </demo-card>

    <!--v-form-->
    <demo-section>
      <demo-card title="v-form">
        <v-form v-model="dataForm" :options="form" label-position="right" label-width="100px">
          <template #custom="{scope}">
            <el-image lazy fit="contain" style="width: 100px; height: 100px">
              <div slot="placeholder" class="image-slot">
                <i class="el-icon-loading"></i>
              </div>
            </el-image>
          </template>
          <template #actions>
            <el-button type="primary">立即创建</el-button>
            <el-button>取消</el-button>
          </template>
        </v-form>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vform.template"/>
        </demo-block>
        <demo-block title="javascript">
          <highlightjs language="javascript" :code="vform.javascript"/>
        </demo-block>
        <demo-block title="javascript">
          <code>{{ dataForm }}</code>
        </demo-block>
      </demo-card>
    </demo-section>

    <!--v-dialog-->
    <demo-section>
      <demo-card title="v-dialog">
        <el-button type="primary" @click="showDialog = true">打开dialog</el-button>
        <demo-block>
          <p>el-dialog的二次封装，支持双向数据绑定展示隐藏。</p>
          <p>公共基础组件，可再次封装。</p>
        </demo-block>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vdialog.template"/>
        </demo-block>
        <demo-block title="javascript">
          <highlightjs language="javascript" :code="vdialog.javascript"/>
        </demo-block>
      </demo-card>
    </demo-section>

    <!--v-drawer-->
    <demo-section>
      <demo-card title="v-drawer">
        <el-button type="primary" @click="showDrawer = true">打开drawer</el-button>
        <demo-block>
          <p>el-drawer的二次封装，支持双向数据绑定展示隐藏。</p>
          <p>公共基础组件，可再次封装。</p>
        </demo-block>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vdialog.template"/>
        </demo-block>
        <demo-block title="javascript">
          <highlightjs language="javascript" :code="vdialog.javascript"/>
        </demo-block>
      </demo-card>
    </demo-section>

    <!--v-image-viewer-->
    <demo-section>
      <demo-card title="v-image-viewer">
        <el-button type="primary" @click="showViewer = true">大图展示</el-button>
        <demo-block>
          <p>el-image预览大图的功能抽离出来，可单独使用。</p>
          <p>相同api，方便使用。</p>
        </demo-block>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vimageviewer.template"/>
        </demo-block>
        <demo-block title="javascript">
          <highlightjs language="javascript" :code="vimageviewer.javascript"/>
        </demo-block>
      </demo-card>
    </demo-section>

    <!--上传下载Excel-->
    <demo-section>
      <demo-card title="上传下载Excel">
        <demo-block title="v-excel-export前端导出excel">
          <v-excel-export type="warning" icon="el-icon-upload2">前端导出excel</v-excel-export>
        </demo-block>
        <demo-block title="v-excel-upload前端上传excel数据转json">
          <v-excel-upload type="success" icon="el-icon-download" @success="onSuccess">上传Excel</v-excel-upload>
        </demo-block>
        <demo-block title="v-uploader前端原生上传">
          <v-uploader type="info" icon="el-icon-upload">原生上传</v-uploader>
        </demo-block>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vexcel.template"/>
        </demo-block>
        <demo-block title="javascript">
          <highlightjs language="javascript" :code="vexcel.javascript"/>
        </demo-block>
      </demo-card>
    </demo-section>

    <!--v-confirm-->
    <demo-section>
      <demo-card title="v-confirm">
        <v-confirm
          title="删除吗？"
        >
          <el-button type="danger">删除</el-button>
        </v-confirm>
        <v-confirm
          title="停用吗？"
        >
          <el-button type="warning">停用</el-button>
        </v-confirm>
      </demo-card>
    </demo-section>

    <h1>展示组件</h1>
    <!--v-badge-->
    <demo-section>
      <demo-card title="v-badge">
        <v-badge/>
        <v-badge status="error"/>
        <v-badge status="default"/>
        <v-badge status="processing"/>
        <v-badge status="warning"/>
        <br/>
        <v-badge>Success</v-badge>
        <br/>
        <v-badge status="error">Error</v-badge>
        <br/>
        <v-badge status="default">Default</v-badge>
        <br/>
        <v-badge status="processing">Processing</v-badge>
        <br/>
        <v-badge status="warning">Warning</v-badge>
        <br/>
        <v-badge color="#f50">Custom #f50</v-badge>
        <br/>
        <v-badge color="#2db7f5">Custom #2db7f5</v-badge>
        <br/>
        <v-badge color="#87d068">Custom #87d068</v-badge>
        <br/>
        <v-badge color="#108ee9">Custom #108ee9</v-badge>
        <demo-block title="状态点">
          <p>用于表示状态的小圆点。</p>
          <p>支持自定义具体的色值。</p>
        </demo-block>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vbadge.template"/>
        </demo-block>
      </demo-card>
    </demo-section>

    <!--v-ellipsis-->
    <demo-section>
      <demo-card title="v-ellipsis">
        <v-ellipsis>
          浔阳江头夜送客，枫叶荻花秋瑟瑟。主人下马客在船，举酒欲饮无管弦。醉不成欢惨将别，别时茫茫江浸月。忽闻水上琵琶声，主人忘归客不发。寻声暗问弹者谁，琵琶声停欲语迟。移船相近邀相见，添酒回灯重开宴。千呼万唤始出来，犹抱琵琶半遮面。转轴拨弦三两声，未成曲调先有情。弦弦掩抑声声思，似诉平生不得志。低眉信手续续弹，说尽心中无限事。轻拢慢捻抹复挑，初为《霓裳》后《六幺》。大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。间关莺语花底滑，幽咽泉流冰下难。冰泉冷涩弦凝绝，凝绝不通声暂歇。别有幽愁暗恨生，此时无声胜有声。银瓶乍破水浆迸，铁骑突出刀枪鸣。曲终收拨当心画，四弦一声如裂帛。东船西舫悄无言，唯见江心秋月白。
        </v-ellipsis>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vellipsis.template"/>
        </demo-block>
      </demo-card>
    </demo-section>

    <!--v-count-down-->
    <demo-section>
      <demo-card title="v-count-down">
        <demo-block title="毫秒级渲染">
          <v-count-down millisecond :time="time" format="HH:mm:ss:SS"/>
        </demo-block>
        <demo-block title="自定义样式">
          <v-count-down :time="time">
            <template #default="{timeData}">
              <span class="block">{{ timeData.hours | padStart }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.minutes | padStart }}</span>
              <span class="colon">:</span>
              <span class="block">{{ timeData.seconds | padStart }}</span>
            </template>
          </v-count-down>
        </demo-block>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vcountdown.template"/>
        </demo-block>
      </demo-card>
    </demo-section>

    <!--v-descriptions-->
    <demo-card title="v-descriptions">
      <v-descriptions :data="descriptions.data" :columns="descriptions.columns">
        <template #custom>
          自定义插槽
        </template>
      </v-descriptions>
      <demo-block title="template">
        <highlightjs language="html" :code="vdescriptions.template"/>
      </demo-block>
    </demo-card>

    <!--v-qrcode-->
    <demo-section>
      <demo-card title="v-qrcode">
        <demo-block title="默认">
          <v-qrcode v-model="str" @load="onAction('load1', $event)"/>
          <el-button type="primary" @click="onAction('download1')">下载二维码</el-button>
        </demo-block>
        <demo-block title="带logo">
          <v-qrcode v-model="str" :logo="logo" @load="onAction('load2', $event)"/>
          <el-button type="primary" @click="onAction('download2')">下载二维码</el-button>
        </demo-block>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="template">
          <highlightjs language="html" :code="vqrcode.template"/>
        </demo-block>
        <demo-block title="javascript">
          <highlightjs language="javascript" :code="vqrcode.javascript"/>
        </demo-block>
      </demo-card>
    </demo-section>

    <!--v-wang-editor-->
    <demo-section>
      <demo-card title="v-wang-editor">
        <v-wang-editor v-model="editor1"/>
        <v-wang-editor v-model="editor2"/>
      </demo-card>
      <demo-card style="width: 60%;">
        <demo-block title="code">
          <div v-html="editor1"></div>
          <div v-html="editor2"></div>
        </demo-block>
      </demo-card>
    </demo-section>
    <h1>未完待续...</h1>

    <v-dialog v-model="showDialog" title="v-dialog">
      <demo-block title="template">
        <highlightjs language="html" :code="vdialog.template"/>
      </demo-block>
      <demo-block title="javascript">
        <highlightjs language="javascript" :code="vdialog.javascript"/>
      </demo-block>
    </v-dialog>

    <v-drawer v-model="showDrawer" title="v-drawer" size="600px">
      <demo-block title="template">
        <highlightjs language="html" :code="vdrawer.template"/>
      </demo-block>
      <demo-block title="javascript">
        <highlightjs language="javascript" :code="vdrawer.javascript"/>
      </demo-block>
    </v-drawer>

    <v-image-viewer v-model="showViewer" :urlList="urlList"/>
  </div>
</template>

<script>
// utils
import download from 'lib/utils/download'
// components
import DemoSection from './components/DemoSection'
import DemoCard from './components/DemoCard'
import DemoBlock from './components/DemoBlock'
// mapping
import { search, table, form, descriptions } from './mapping'
// code
import {
  vsearch,
  vtable,
  vform,
  vdialog,
  vdrawer,
  vimageviewer,
  vexcel,
  vbadge,
  vellipsis,
  vcountdown,
  vdescriptions,
  vqrcode,
  vaction,
} from './code'

export default {
  name: 'vcomponents',
  data() {
    return {
      time: 30 * 60 * 60 * 1000,
      search,
      table,
      form,
      descriptions,

      // code
      vsearch,
      vtable,
      vform,
      vdialog,
      vdrawer,
      vimageviewer,
      vexcel,
      vbadge,
      vellipsis,
      vcountdown,
      vdescriptions,
      vqrcode,
      vaction,

      searchForm: {},
      dataForm: {},
      loading: false,
      total: 1,
      query: {
        page: 1,
        limit: 10
      },
      upload_data: [],
      showDialog: false,
      showDrawer: false,
      showViewer: false,
      urlList: [
        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
      ],

      str: 'https://translate.google.cn/?sl=auto&tl=en&text=%E4%BA%8C%E7%BB%B4%E7%A0%81&op=translate',
      logo: require('./logo.jpg'),
      editor1: '',
      editor2: ''
    }
  },
  filters: {
    padStart(str = '') {
      return String(str).padStart(2, '0')
    }
  },
  created() {
    setTimeout(() => {
      this.editor1 = '123123'
      this.editor2 = '123123'
    }, 3000)
  },
  methods: {
    onSuccess({ results, header }) {
      for (let i = 0; i < results.length; i++) {
        let each = results[i]
        each = this.transExcelRow(each)
        this.upload_data.push({
          deliveryNumber: each['快递单号'],
          expressCompanyId: 1,
          orderId: each['订单号']
        })
      }
    },
    transExcelRow(row) {
      const ret = {}
      for (const i in row) {
        ret[i.trim()] = row[i]
      }
      return ret
    },
    onAction(type, event) {
      switch (type) {
        case 'load1':
          this.url1 = event
          break
        case 'load2':
          this.url2 = event
          break
        case 'download1':
          download(this.url1, 'qrcode.png')
          break
        case 'download2':
          download(this.url2, 'qrcode_logo.png')
          break
      }
    }
  },
  components: {
    DemoSection,
    DemoCard,
    DemoBlock,
  }
}
</script>

<style lang="scss">
@import "./index.scss";
</style>