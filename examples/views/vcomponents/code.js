export const vsearch = {
  template: `
  <!-- 支持双向数据绑定，支持配置方式生成筛选项，默认@search、@reset事件 -->
  <v-search v-model="searchForm" :options="options" @search="onSearch" @reset="onReset">
    <template #tools>
      自定义额外插槽 #tools
    </template>
  </v-search>
  `,
  javascript: `
  export default {
    data() {
      return {
        searchForm: {}
      }
    },
    methods: {
      onSearch(form) {
        // todo fetch data
      },
      onReset(form) {
        // todo fetch data
      },
    }
  }
  `
}

export const vtable = {
  template: `
  <v-table :loading="loading" :data="data" :columns="columns" :total="total" :page.sync="query.page" :limit.sync="query.limit" @pagination="fetchData">
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
        {{tag}}
      </el-tag>
    </template>
    <template #action="{scope}">
      <el-button type="text">Invite</el-button>
      <el-button type="text">Delete</el-button>
    </template>
  </v-table>
  `,
  javascript: `
  export default {
    data() {
      return {
        loading: false,
        tableData: [],
        columns: [],
        total: 0,
        query: {
          page: 1,
          limit: 15,
        }
      }
    },
    created() {
      // init data
      this.fetchData()
    },
    methods: {
      fetchData() {
        // fetch data...
      }
    }
  }
  `
}

export const vform = {
  template: `
  <v-form ref="form" v-model="dataForm" :options="form" label-position="right" label-width="80px">
    <template #custom="{scope}">
      <el-image lazy fit="contain" style="width: 100px; height: 100px">
        <div slot="placeholder" class="image-slot">
          <i class="el-icon-loading"></i>
        </div>
      </el-image>
    </template>
    <template #actions>
      <el-button type="primary" @click="submit">立即创建</el-button>
      <el-button @click="reset">取消</el-button>
    </template>
  </v-form>
  `,
  javascript: `
  export default {
    data() {
      return {
        dataForm: {}
      }
    },
    methods: {
      submit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      reset() {
        this.$refs.form.resetFields()
      },
    }
  }
  `
}

export const vdialog = {
  template: `
  <el-button type="primary" @click="showDialog = true">打开dialog</el-button>
  
  <v-dialog v-model="showDialog" title="v-dialog">
    #默认插槽
  </v-dialog>
  `,
  javascript: `
  export default {
    data() {
      return {
        showDialog: false
      }
    },
  }
  `
}

export const vdrawer = {
  template: `
  <el-button type="primary" @click="showDrawer = true">打开drawer</el-button>
  
  <v-drawer v-model="showDrawer" title="v-drwaer" size="600px">
    #默认插槽
  </v-drawer>
  `,
  javascript: `
  export default {
    data() {
      return {
        showDrawer: false
      }
    },
  }
  `
}

export const vimageviewer = {
  template: `
  <el-button type="primary" @click="showViewer = true">打开drawer</el-button>
  
  <v-image-viewer v-model="showViewer" :urlList="urlList"/>
  `,
  javascript: `
  export default {
    data() {
      return {
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
      }
    },
  }
  `
}

export const vexcel = {
  template: `
  <div>
    <v-excel-export type="warning" icon="el-icon-upload2">前端导出excel</v-excel-export>
    <v-excel-upload type="success" icon="el-icon-download" @success="onSuccess">上传Excel</v-excel-upload>
    <v-uploader type="info" icon="el-icon-upload">原生上传</v-uploader>
  </div>
  `,
  javascript: `
  export default {
    data() {
      return {
        showDrawer: false
      }
    },
  }
  `
}

export const vbadge = {
  template: `
  <div>
    <v-badge/>
    <v-badge status="error"/>
    <v-badge status="default"/>
    <v-badge status="processing"/>
    <v-badge status="warning"/>
    
    <v-badge>Success</v-badge>
    <v-badge status="error">Error</v-badge>
    <v-badge status="default">Default</v-badge>
    <v-badge status="processing">Processing</v-badge>
    <v-badge status="warning">Warning</v-badge>
    <v-badge color="#f50">Custom #f50</v-badge>
    <v-badge color="#2db7f5">Custom #2db7f5</v-badge>
    <v-badge color="#87d068">Custom #87d068</v-badge>
    <v-badge color="#108ee9">Custom #108ee9</v-badge>
  </div>
  `,
  javascript: `
  export default {
    data() {
      return {
      
      }
    },
  }
  `
}

export const vellipsis = {
  template: `
  <v-ellipsis>
    浔阳江头夜送客，枫叶荻花秋瑟瑟。主人下马客在船，举酒欲饮无管弦。醉不成欢惨将别，别时茫茫江浸月。忽闻水上琵琶声，主人忘归客不发。寻声暗问弹者谁，琵琶声停欲语迟。移船相近邀相见，添酒回灯重开宴。千呼万唤始出来，犹抱琵琶半遮面。转轴拨弦三两声，未成曲调先有情。弦弦掩抑声声思，似诉平生不得志。低眉信手续续弹，说尽心中无限事。轻拢慢捻抹复挑，初为《霓裳》后《六幺》。大弦嘈嘈如急雨，小弦切切如私语。嘈嘈切切错杂弹，大珠小珠落玉盘。间关莺语花底滑，幽咽泉流冰下难。冰泉冷涩弦凝绝，凝绝不通声暂歇。别有幽愁暗恨生，此时无声胜有声。银瓶乍破水浆迸，铁骑突出刀枪鸣。曲终收拨当心画，四弦一声如裂帛。东船西舫悄无言，唯见江心秋月白。
  </v-ellipsis>
  `,
  javascript: `
  export default {
    data() {
      return {
      
      }
    },
  }
  `
}

export const vcountdown = {
  template: `
  <div>
    <!--毫秒级渲染-->
    <v-count-down millisecond :time="time" format="HH:mm:ss:SS"/>
    <!--自定义样式-->
    <v-count-down :time="time">
      <template #default="{timeData}">
        <span class="block">{{ timeData.hours | padStart }}</span>
        <span class="colon">:</span>
        <span class="block">{{ timeData.minutes | padStart }}</span>
        <span class="colon">:</span>
        <span class="block">{{ timeData.seconds | padStart }}</span>
      </template>
    </v-count-down>
  </div>
  `,
  javascript: `
  export default {
    data() {
      return {
      
      }
    },
  }
  `
}

export const vdescriptions = {
  template: `
  <v-descriptions :data="data" :columns="columns">
    <template #custom>
      自定义插槽
    </template>
  </v-descriptions>
  `,
  javascript: `
  export default {
    data() {
      return {
      
      }
    },
  }
  `
}

export const vqrcode = {
  template: `
  <div>
    <!--默认-->
    <v-qrcode v-model="str" @load="onAction('load1', $event)"/>
    <el-button type="primary" @click="onAction('download1')">下载二维码</el-button>
    <!--带logo-->
    <v-qrcode v-model="str" :logo="logo" @load="onAction('load2', $event)"/>
    <el-button type="primary" @click="onAction('download2')">下载二维码</el-button>
  </div>
  `,
  javascript: `
  export default {
    data() {
      return {
        str: 'https://translate.google.cn/?sl=auto&tl=en&text=%E4%BA%8C%E7%BB%B4%E7%A0%81&op=translate',
        // 可以是网络图片，可以是本地图片
        logo: require('./logo.jpg')
      }
    },
  }
  `
}

export const vaction = {
  template: `
  <div>
    <el-button type="default" v-action:add>新增 v-action:add</el-button>
    <el-button type="primary" v-action:delete>删除 v-action:delete</el-button>
    <el-button type="success" v-action:edit>修改 v-action:edit</el-button>
    <el-button type="info" v-action:query>查询 v-action:query</el-button>
    <el-button type="warning" v-action:import>导入 v-action:import</el-button>
    <el-button type="danger" v-action:export>导出 v-action:export</el-button>
  </div>
  `,
  javascript: `
  export default {
    data() {
      return {
      }
    },
  }
  `
}