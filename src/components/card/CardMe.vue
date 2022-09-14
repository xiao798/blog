<template>
  <el-card>
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title">
          怪兽编程のblog<i class="header-icon el-icon-info"></i>
        </template>
        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
      </el-collapse-item>
    </el-collapse>
<!--    怪兽编程のblog-->
    <div class="me-author-description">
      <span><i class="el-icon-location-outline"></i> &nbsp;湖南长沙</span>
      <span><i class="me-icon-job"></i> &nbsp;java实习生</span>
    </div>
    <div class="me-author-tool">
      <i @click="showTool(qq)" :title="qq.title" class="iconfont icon-qq"></i>
      <i @click="showTool(github)" :title="github.title" class="iconfont icon-github"></i>
    </div>
  </el-card>

</template>

<script>
export default {
  name: 'CardMe',
  data() {
    return {
      qq: {title: '1024601447', message: '762188827'},
      github: {title: 'github', message: 'icatw'},
    }
  },
  methods: {
    showTool(way) {
      if (way.title == '1024601447') {
        window.open("http://wpa.qq.com/msgrd?v=3&uin=" + way.message + "&site=qq&menu=yes/");
      } else if (way.title == 'github') {
        window.open("https://github.com/" + way.message);
      }
    },

  }
}
</script>

<style scoped>
.me-author-name {
  text-align: center;
  font-size: 30px;
  border-bottom: 1px solid #5FB878;
}

.me-author-description {
  padding: 8px 0;
}

.me-icon-job {
  padding-left: 16px;
}

.me-author-tool {
  text-align: center;
  padding-top: 10px;
}

.me-author-tool i {
  cursor: pointer;
  padding: 4px 10px;
  font-size: 30px;
}
/deep/ .el-collapse-item__header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 48px;
  line-height: 48px;
  background-color: #FFF;
  color: #303133;
  cursor: pointer;
  border-bottom: 1px solid #EBEEF5;
  font-size: 24px;
  font-weight: 500;
  -webkit-transition: border-bottom-color .3s;
  transition: border-bottom-color .3s;
  outline: 0;
  margin-right: 34px;
}

</style>
