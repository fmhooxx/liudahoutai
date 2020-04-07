<template>
  <!-- 首页页面 -->
  <div>
    <!-- 头部区域 -->
    <DashboardHead>
      <div class="left-down" slot="Dashboard-left-down">
        <!-- 今日新增人数区域 -->
        <div class="down-people down-common" @click="Today">
          <img src="@/assets/img/new-people.png" alt />
          <div>
            今日新增人数
            <span>{{ newPeople }}</span>
            <i>人</i>
          </div>
        </div>
        <!-- 今日收益区域 -->
        <div class="down-money down-common" @click="TodayProfit">
          <img src="@/assets/img/new-money.png" alt />
          <div>
            今日收益
            <span>{{ newMoney }}</span>
            <i>元</i>
          </div>
        </div>
      </div>
    </DashboardHead>
    <!-- 中间区域 -->
    <div class="content">
      <el-row :gutter="20">
        <!-- 中间区域的左边 -->
        <el-col :span="12">
          <el-card shadow="hover" class="content-left">
            <div class="content-common-title">订单数据统计</div>
            <!-- 进度条 -->
            <div class="progress-bar progress-bar-common">
              <div :style="{ width: progressBar }" class="progress-bar-new progress-bar-common">
                昨日新增订单
                <span>{{ yesterdayOrderNum }}</span>
              </div>
            </div>
            <!-- 累计订单总数 -->
            <div class="content-common-text">
              累计订单总数
              <span>{{ cumulativeOrderNum }}</span>
            </div>
            <!-- 每日订单区域 -->
            <div class="content-common-text new-order">每日订单</div>
            <div class="new-order-box">
              <div class="order-box-item" v-for="(item, index) in 5" :key="index">
                <div class="order-box-date">2日</div>
                <div style="width: 90%">
                  <el-progress color="#66B98D" :percentage="50" :stroke-width="12"></el-progress>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
        <!-- 中间区域的右边 -->
        <el-col :span="12">
          <el-card shadow="hover" class="content-right">
            <div class="right-box">
              <!-- 右边头部区域 -->
              <div class="right-top">
                <div class="content-common-title real-time">实时战报</div>
                <div class="top-box">
                  <img src="@/assets/img/place-an-order-num.png" alt />
                  <div>今日下单数</div>
                  <span>{{ newOrderNum }}</span>
                </div>
              </div>
              <div style="width: 50%; margin-top: 20px; position: relative;">
                <el-progress
                  type="circle"
                  color="#66B98D"
                  :percentage="orderConversion"
                  :stroke-width="18"
                  :show-text="false"
                ></el-progress>
                <!-- 下单转化率 -->
                <div class="order-conversion">
                  <div>下单转化率</div>
                  <div>{{ orderConversion }}</div>
                </div>
              </div>
            </div>
            <!-- 详情区域 -->
            <div class="content-details">
              <el-table :data="tableData" style="width: 100%">
                <el-table-column align="center" prop="uname" label="用户名" width="60"></el-table-column>
                <el-table-column align="center" prop="orderTime" label="下单时间" width="80"></el-table-column>
                <el-table-column align="center" prop="num" label="数量" width="80"></el-table-column>
                <el-table-column align="center" prop="price" label="金额" width="80"></el-table-column>
                <el-table-column align="center" prop="classification" label="分类" width="80"></el-table-column>
                <el-table-column align="center" prop="productName" label="产品名称" width="275"></el-table-column>
              </el-table>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 底部区域 -->
    <el-card shadow="hover">
      <div class="content-common-title">新品入库</div>
      <div class="new-products">
        <div class="new-products-list" v-for="(item, index) in 6" :key="index">
          <div class="products-list-img-box">
            <img src="@/assets/img/introduce.jpg" alt />
            <div class="products-list-address">
              <span></span>
              <div>象山</div>
            </div>
            <div class="products-list-price">
              <span class="products-list-common">¥</span>
              <span class="products-list-num">299</span>
              <span class="products-list-common">起</span>
            </div>
          </div>
          <div class="products-list-text">宁波象山一日游 东方花园丨享受大自然的馈赠丨海鲜直击味蕾</div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import DashboardHead from '../common/DashboardHead';
export default {
  components: {
    DashboardHead
  },
  data() {
    return {
      // 今日新增人数
      newPeople: 287,
      // 今日收益
      newMoney: 23287,
      // 新增订单的百分比
      progressBar: null,
      // 昨日新增订单数
      yesterdayOrderNum: 1340,
      // 累计订单总数
      cumulativeOrderNum: 3346,
      // 今日下单数
      newOrderNum: 56,
      // 下单转化率
      orderConversion: 70,
      tableData: [
        {
          uname: '张三',
          orderTime: '20200403',
          num: '2',
          price: '299',
          classification: '境内游',
          productName: '宁波象山一日游 东方岛屿 | 体验大自然的馈赠'
        },
        {
          uname: '张三',
          orderTime: '20200403',
          num: '2',
          price: '299',
          classification: '境内游',
          productName: '宁波象山一日游 东方岛屿 | 体验大自然的馈赠'
        },
        {
          uname: '张三',
          orderTime: '20200403',
          num: '2',
          price: '299',
          classification: '境内游',
          productName: '宁波象山一日游 东方岛屿 | 体验大自然的馈赠'
        },
        {
          uname: '张三',
          orderTime: '20200403',
          num: '2',
          price: '299',
          classification: '境内游',
          productName: '宁波象山一日游 东方岛屿 | 体验大自然的馈赠'
        },
        {
          uname: '张三',
          orderTime: '20200403',
          num: '2',
          price: '299',
          classification: '境内游',
          productName: '宁波象山一日游 东方岛屿 | 体验大自然的馈赠'
        }
      ]
    };
  },
  methods: {
    Today() {
      this.$router.push('/Today');
    },
    TodayNumber() {
      this.$router.push('/TodayNumber');
    },
    TodayProfit() {
      this.$router.push('/TodayProfit');
    },
    // 获取当前时间
    setNowTimes() {
      let myDate = new Date();
      // console.log(myDate);
      let wk = myDate.getDay();
      let yy = String(myDate.getFullYear());
      let mm = myDate.getMonth() + 1;
      let dd = String(myDate.getDate() < 10 ? '0' + myDate.getDate() : myDate.getDate());
      let hou = String(myDate.getHours() < 10 ? '0' + myDate.getHours() : myDate.getHours());
      let min = String(myDate.getMinutes() < 10 ? '0' + myDate.getMinutes() : myDate.getMinutes());
      let sec = String(myDate.getSeconds() < 10 ? '0' + myDate.getSeconds() : myDate.getSeconds());
      let weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      let week = weeks[wk];
      this.nowDate = yy + '-' + mm + '-' + dd;
      // 时间
      // this.nowTime = hou + ':' + min + ':' + sec;
      this.nowWeek = week;
    }
  },
  created() {
    // 获取当前时间
    this.setNowTimes();
    // this.progressBar = (this.yesterdayOrderNum / this.cumulativeOrderNum) * 100 + '%';
    this.progressBar = (this.yesterdayOrderNum / this.cumulativeOrderNum) * 100 + '%';
  }
};
</script>
<style lang="less" scoped>
/deep/.el-card__body {
  padding: 0 !important;
}
// 卡片的内边距
.el-card {
  padding: 0 50px;
}
// 头部区域
.left-down {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px dashed #e5e5e5;
  .down-common {
    display: flex;
    align-items: center;
    > img {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }
    > div {
      font-size: 18px;
      color: #7a7a7a;
      font-weight: 500;
      > span {
        font-size: 26px;
        color: #343a49;
        font-weight: 500;
        margin: 0 10px;
      }
      > i {
        font-size: 11px;
        font-style: normal;
      }
    }
  }
  // 今日新增人数区域
  .down-people {
  }
  // 今日收益区域
  .down-money {
  }
}
// 中间区域
.content {
  margin-top: 10px;
  margin-left: -10px;
  // 相同的标题
  .content-common-title {
    font-size: 14px;
    color: #343a49;
    border-left: 4px solid #66b98d;
    padding-left: 6px;
    margin-top: 20px;
    border-radius: 2px;
  }
  // 中间区域的左边
  .content-left {
    // 相同的文字
    .content-common-text {
      font-size: 12px;
      color: #343a49;
      font-weight: 500;
    }
    .progress-bar {
      position: relative;
      width: 440px;
      margin: 45px 0 8px 0;
      background: rgba(233, 239, 247, 1);
      .progress-bar-new {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        font-size: 11px;
        color: #fff;
        line-height: 22px;
        text-align: center;
        background-color: #66b98d;
        box-shadow: 0px 0px 1px 0px rgba(80, 143, 118, 0.5);
        > span {
          margin-left: 10px;
        }
      }
    }
    .progress-bar-common {
      height: 22px;
      border-radius: 11px;
      box-shadow: 0px 1px 3px 0px rgba(108, 131, 130, 0.38);
    }
    // 每日订单区域
    .new-order {
      margin: 48px 0 30px 0;
    }
    .order-box-item {
      display: flex;
      align-items: center;
      /deep/.el-progress {
        margin: 10px 0;
      }
      .order-box-date {
        font-size: 12px;
        color: #343a49;
        margin-right: 20px;
      }
    }
  }
  // 中间区域的右边
  .content-right {
    .right-box {
      display: flex;
      justify-content: space-between;
      // 右边头部区域
      .right-top {
        .real-time {
          margin-bottom: 37px;
        }
        .top-box {
          display: flex;
          align-items: center;
          > img {
            width: 30px;
            height: 30px;
          }
          > div {
            margin: 0 18px 0 9px;
            font-size: 18px;
            color: #7a7a7a;
            font-weight: 500;
          }
          > span {
            margin-top: 4px;
            font-size: 26px;
            color: #343a49;
          }
        }
      }
      // 下单转化率
      .order-conversion {
        text-align: center;
        position: absolute;
        top: 50%;
        left: 33px;
        transform: translateY(-50%);
        font-size: 12px;
        color: #343a49;
        > div {
          margin: 10px 0;
        }
      }
    }
    // 详情区域
    .content-details {
      /deep/.el-table th.is-leaf {
        border-bottom: 3px solid #22b573 !important;
      }
      /deep/.el-table th {
        background-color: #fff !important;
      }
    }
  }
}
// 底部区域
.new-products {
  margin: 22px 0;
  display: flex;
  flex-wrap: wrap;
  .new-products-list {
    height: 162px;
    width: 158px;
    margin-right: 36px;
    .products-list-img-box {
      position: relative;
      width: 156px;
      height: 118px;
      > img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        margin-left: 2px;
      }
      .products-list-address {
        position: absolute;
        top: 17px;
        left: 10px;
        display: flex;
        align-items: center;
        height: 18px;
        line-height: 18px;
        > span {
          height: 100%;
          width: 3px;
          background-color: #d49248;
          margin-right: 3px;
        }
        > div {
          width: 43px;
          height: 18px;
          line-height: 18px;
          text-align: center;
          font-size: 12px;
          color: #fff;
          background-color: #d49248;
        }
      }
      .products-list-price {
        position: absolute;
        bottom: 0;
        left: 3px;
        width: 155px;
        height: 27px;
        line-height: 27px;
        text-align: center;
        background: rgba(62, 62, 62, 0.77);
        border-radius: 10px;
        > span {
          color: #fff;
        }
        .products-list-common {
          font-size: 12px;
        }
        .products-list-num {
          font-size: 16px;
          margin: 0 2px;
        }
      }
    }
    .products-list-text {
      font-size: 12px;
      color: #343a49;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
