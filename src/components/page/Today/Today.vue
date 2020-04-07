<template>
  <!-- 今日 -->
  <div>
    <!-- 头部区域 -->
    <DashboardHead>
      <div slot="Today" class="today">
        <div class="today-return" @click="goReturn">返回</div>
        <div class="today-box">
          <div v-for="(item, index) in labelList" :key="index">
            <div
              :class="item.id == activeNum ? 'today-active' : ''"
              class="today-box-item"
              @click="switchActive(item.id)"
            >{{item.text}}</div>
          </div>
        </div>
      </div>
    </DashboardHead>
    <TodayNumber v-if="isActive"></TodayNumber>
    <TodayProfit v-else></TodayProfit>
  </div>
</template>

<script>
// 头部区域
import DashboardHead from '../../common/DashboardHead';
// 今日人数页面
import TodayNumber from '../../page/Today/TodayNumber';
// 今日收益页面
import TodayProfit from '../../page/Today/TodayProfit';
export default {
  components: {
    DashboardHead,
    TodayNumber,
    TodayProfit
  },
  data() {
    return {
      flag: true,
      activeNum: '',
      labelList: [
        {
          id: 0,
          text: '今日人数'
        },
        {
          id: 1,
          text: '今日收益'
        }
      ]
    };
  },
  methods: {
    // 点击切换
    switchActive(id) {
      this.activeNum = id;
    },
    // 返回系统首页
    goReturn() {
      this.$router.push('/dashboard');
    }
  },
  created() {
    this.activeNum = this.$route.params.activeNum;
  },
  computed: {
    isActive() {
      if (this.activeNum == 0) {
        return true;
      }
      return false;
    }
  }
};
</script>

<style lang="less" scoped>
// 头部区域
.today {
  display: flex;
  height: 60px;
  align-items: center;
  border-top: 1px dashed #e5e5e5;
  .today-return {
    width: 48px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    background-color: #66b98d;
    border-radius: 12px;
    margin-right: 75px;
    cursor: pointer;
  }
  .today-box {
    display: flex;
    align-items: center;
    .today-box-item {
      width: 70px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      border-radius: 12px;
      color: #343a49;
      font-size: 14px;
      background-color: #c9cdd3;
      margin: 0 5px;
      cursor: pointer;
    }
    .today-active {
      background-color: #66b98d;
      color: #fff;
    }
  }
}
</style>